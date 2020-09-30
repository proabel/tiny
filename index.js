
import axios from 'axios';

function getMockData(){
    axios.get("https://tinycall.free.beeceptor.com").then(res => {
        console.log(res);
    }).catch(e => {
        console.error(e);
    })
};

function tiny(string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
};

module.exports = {
    tiny: tiny,
    getMockData: getMockData
};