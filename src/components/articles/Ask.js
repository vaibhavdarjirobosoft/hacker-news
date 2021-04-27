import React from 'react';
import { getAsks } from '../../api';
import Article from '../common/Article';

const Ask = () => {
    return (
        <React.Fragment>
            <Article apiFunc={getAsks} />
        </React.Fragment>
    );
};


export default Ask;