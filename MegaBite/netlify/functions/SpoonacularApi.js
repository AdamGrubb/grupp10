exports.handler = async function (event, context) {
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
  console.log(event.queryStringParameters);
  const querys = new URLSearchParams(event.queryStringParameters);
  querys.append("apiKey", process.env.SPOONACULAR_APIKEY_STRAND);
  const response = await fetch(`${baseUrl}?${querys}`);
  const returnResult = await response.json();
  console.log(returnResult);
  return {
    statusCode: 200,
    body: JSON.stringify(returnResult),
  };
};
