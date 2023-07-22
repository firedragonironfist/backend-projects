const axios = require('axios');
const cheerio = require('cheerio');

async function getElementText(url, selector){
    try{
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);
        const element = $(selector);
        const text = element.text();
        console.log(text);
    }catch(error){
        console.error('Error:', error);
    }
}

const [, , url, selector] = process.argv;

getElementText(url, selector);