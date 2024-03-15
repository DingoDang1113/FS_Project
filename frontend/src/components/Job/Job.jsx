import React from 'react';
import { fetchAllJobs } from '../../utils/jobUtils';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from '../Header/Header';


const Job = () => {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        fetchAllJobs()
        .then(jobs => {
            const allJobs = Object.values(jobs)
            setJobList(allJobs)
        })
        .catch((error) => {
            console.error("Failed to fectch jobs:", error);
        });
    },[])

    console.log(jobList)



  return (
    <>    
        <Header />
        <Box mt="5.25rem" >
            <h1>Job Infos</h1>
            {Object.values(jobList).map((job,index) =>(
                <li>
                    {job.job_code} - {job.job_code_description}
                </li>
                
            ))}


        </Box>
    
    </>
  )
}

export default Job;