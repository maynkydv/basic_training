
import { writeFileSync , readFileSync } from 'fs';
import { join } from 'path';

//!
const jobs = JSON.parse(readFileSync('./jobs.json', 'utf-8'));
const technologies = JSON.parse(readFileSync('./technologies.json', 'utf-8'));

// const fs = require('fs');
// const path = require('path');

// Import JSON files with assert { type: "json" }
// import jobs from './jobs.json' assert { type: 'json' };
// import technologies from './technologies.json' assert { type: 'json' };

// const jobs = require('./jobs.json');
// const technologies = require('./technologies.json');


const timestamp = Date.now();

// function --> jobs , tech == (job + tech )s
function tagJobs(jobs, technologies) {
  return jobs.map(job => {
    const jobDescription = job.description.toLowerCase();
    const tags = [];

    // Match job descriptions with technologies
    for (let tech of technologies) {
      const techName = tech.toLowerCase();
      if (jobDescription.includes(techName)) {
        tags.push(tech);
      }
    }

    const newTags = tags.reduce((accString , ele , index )=>{
        if(index === 0 ) return accString = accString + ele.toString()
        else return accString = accString + ", " + ele.toString() ;
    } , "" );



    return {
      ...job,
      tags: newTags ,
      processing_timestamp: Date.now() ,
    };
  });
}

// Process jobs and create tagged output
const taggedJobs = tagJobs(jobs, technologies);

// Define output filename with the timestamp
const outputFilename = `${timestamp}_response.json`;

writeFileSync(join(process.cwd(), outputFilename), JSON.stringify(taggedJobs, null, 2), 'utf-8');

console.log(`Output written to ${outputFilename}`);
