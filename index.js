const axios = require('axios').default;

module.exports = function getMockData(){
    return console.log('working mock data');
}

module.exports = function tiny(string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
};