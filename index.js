
import axios from 'axios';

const getMockData = () => {
    axios.get("https://tinycall.free.beeceptor.com").then(res => {
        console.log(res);
    }).catch(e => {
        console.error(e);
    })
};

var tiny = (string) => {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
};

export {
    getMockData, 
    tiny,    
}