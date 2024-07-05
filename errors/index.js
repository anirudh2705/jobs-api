const CustomAPIError = require("./custom-api");
const UnauthenticatError = require('./unAuthenticatedError')
const BadRequestError = require('./bad-request')
const NotFoundError = require('./not-found')

module.exports = {
    CustomAPIError,
    UnauthenticatError,
    BadRequestError,
    NotFoundError
}