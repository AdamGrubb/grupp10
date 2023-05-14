exports.handler = async function (event, context) {

    const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
    const searchParams = new URLSearchParams();
    searchParams.
    searchParams.append("apiKey", process.env.SPOONACULAR_APIKEY_ADAM);
    const response = await fetch(`${baseUrl}?${searchParams}`);
    
    return {
    statusCode: 200,
    body: JSON.stringify(process.env.GREETING_BASE_URL)
    } 
    };