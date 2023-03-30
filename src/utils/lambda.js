const lambdaResponse = async (response) => {
    const result = {
        statusCode: response.statusCode,
        body: typeof response.body === 'object' ? JSON.stringify(response.body) : response.body,
    };
    return result;
};

module.exports = {
    lambdaResponse
}