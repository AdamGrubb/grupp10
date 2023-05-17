import fetch from 'node-fetch';

export const handler  = async function (event, context) {
    const baseUrl = "https://api.opencagedata.com/geocode/v1/json?";
  try {
    //Saves the querys sent from front-end call.
    const querys = new URLSearchParams(event.queryStringParameters);

    //Get the API-key from .env file.
    querys.append("key", process.env.OPENCAGE_APIKEY);
    const response = await fetch(`${baseUrl}${querys}`);

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
    return{
      statusCode: 500
    }
  }
  
  };
  