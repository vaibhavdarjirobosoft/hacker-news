import React from 'react';
import { getJobs } from '../../api';
import Article from '../common/Article';

const Jobs = () => {
    return (
        <React.Fragment>
            <Article apiFunc={getJobs} />
        </React.Fragment>
    );
};


export default Jobs;