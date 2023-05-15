exports.handler = async function (event, context) {
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
try {
  const querys = new URLSearchParams(event.queryStringParameters);
  querys.append("apiKey", process.env.SPOONACULAR_APIKEY_STRAND);
  const response = await fetch(`${baseUrl}?${querys}`);
  const responseStatus = response.status;
  if (response.ok)
  {
    const returnResult = await response.json();
    console.log(returnResult);
    return {
      statusCode: 200,
      body: JSON.stringify(returnResult),
    };
  }
return {
  statusCode: responseStatus, 
}
}
catch (error) {
  return{
    statusCode: 500
  }
}

};
