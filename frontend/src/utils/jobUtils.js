import { csrfFetch } from "./authUtils";

export const fetchAllJobs = () => (
    fetch('/api/jobs')
    .then(res => {
        if(res.ok) {
            const jobs = res.json()
            return jobs
        } else {
            throw res
        }
    })
)
