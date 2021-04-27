import React from 'react';
import { getNewest } from '../../api';
import Article from '../common/Article';

const Newest = () => {

    return (
        <React.Fragment>
            <Article apiFunc={getNewest} />
        </React.Fragment>
    );
};


export default Newest;