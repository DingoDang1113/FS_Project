import { fetchAllJobs } from "../utils/jobUtils";


export const RECEIVE_JOBS = 'RECEIVE_JOBS'

export const receiveJobs = jobs => ({
    type: RECEIVE_JOBS,
    jobs
})

const jobsReducer = (state = initialState, action) => {
    const nextState = {...state}

    switch(action.type) {
        case RECEIVE_JOBS:
            return action.receiveJobs


        default: 
            return state
    }

}

export default jobsReducer;