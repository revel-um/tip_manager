const celebrate = require("celebrate");

const isCelebrateError = celebrate.isCelebrateError;

function handleErrorMiddleware(err, req, res, next) {
    let result;
    let error;
  
    if (isCelebrateError(err)) {  // Check if error is from celebrate validation
      const errorMessage = [];
  
      for (const [segment, joiError] of Object.entries(err.details)) {  // Use Object.entries for better compatibility
        errorMessage.push(joiError.message);
      }
      
      error = {
        statusCode: 422,
        success: false,
        message: "Validation error"
    }
      error.message = errorMessage[0] ?? 'Validation error';
    } else {
      // Handle other types of errors
      error = {
        message: err.message || 'Internal Server Error', // Provide default message
        statusCode: err.statusCode || 500,
        success: false
      };
    }
  
    res.status(500).json(error);  // Assuming errorResponse is a function that handles error responses
  }

  module.exports = handleErrorMiddleware