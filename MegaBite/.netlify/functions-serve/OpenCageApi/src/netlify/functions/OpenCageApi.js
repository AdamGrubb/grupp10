// netlify/functions/OpenCageApi.js
exports.handler = async function(event, context) {
  const baseUrl = "https://api.opencagedata.com/geocode/v1/json?";
  try {
    const querys = new URLSearchParams(event.queryStringParameters);
    querys.append("key", process.env.OPENCAGE_APIKEY);
    const response = await fetch(`${baseUrl}${querys}`);
    const responseStatus = response.status;
    if (response.ok) {
      const returnResult = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(returnResult)
      };
    }
    return {
      statusCode: responseStatus
    };
  } catch (error) {
    return {
      statusCode: 500
    };
  }
};
//# sourceMappingURL=OpenCageApi.js.map
