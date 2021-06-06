/*exports.handler = function (event, context) {
	context.succeed('hello world');
};*/
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('welcome Lambda!'),
    };
    return response;
};
