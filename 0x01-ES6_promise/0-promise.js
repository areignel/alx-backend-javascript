// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform asynchronous API request or any other asynchronous operation
    // ...
    
    // Once the operation is complete, resolve the Promise with the result
    resolve('API response');
    
    // If there was an error, reject the Promise
    // reject(new Error('API request failed'));
  });
}

export default getResponseFromAPI;
