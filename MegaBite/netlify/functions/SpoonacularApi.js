exports.handler = async function (event, context) {
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch?";
try {
  //Saves the querys sent from front-end call.
  const querys = new URLSearchParams(event.queryStringParameters);

  //Get the API-key from .env file.
  querys.append("apiKey", process.env.SPOONACULAR_APIKEY);
   console.log(querys)
    console.log(`${baseUrl}${querys}`)
  const response = await fetch(`${baseUrl}${querys}`);
  console.log(response)

  console.log(response)

  //Saves the responsstatus to be sent with a return if the API-call fails.
  const responseStatus = response.status;
  if (response.ok)
  {
    const returnResult = await response.json();
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
  console.log(error)
  return{
    statusCode: 500
  }
}

};


