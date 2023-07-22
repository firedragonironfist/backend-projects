#!/usr/bin/env node
// above code is mandatory for the below script to work in the terminal

const axios = require('axios');

const API_URL = 'https://api.github.com/search/repositories';
const API_KEY = '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';

async function getMostStarredProjects(startDate, endDate){
    try{
        const query = `stars:>0 ${startDate}..${endDate} sort:stars`; 
        // in the below response code the "q" is used in getting the query according to github API docs that is the standard of writing it
        const response = await axios.get(API_URL,{
            params: {q: query},
            headers: {Authorization : `token ${API_KEY}`}
        })
        return response.data.items;
    }catch(error){
        throw new Error('Failed to fetch data from Github API');
    }
}

async function main(){
    // in the below 2 lines of code 2 and 3rd index of the users command given in the terminal is used 
    const startDate = process.argv[2] || '';
    const endDate = process.argv[3] || '';
    
    const projects = await getMostStarredProjects(startDate,endDate);

    if(projects.length === 0){
        console.log("No projects were found in the given date range");
    }else{
        console.log("Most Starred Projects:");
        projects.forEach((project,index)=>{
            console.log(`${index+1}. ${project.name} - ${project.stargazers_count} stars`);
        });
    }
}

main();