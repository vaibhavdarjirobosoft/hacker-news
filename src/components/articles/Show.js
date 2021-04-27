import React from 'react';
import { getShows } from '../../api';
import Article from '../common/Article';

const Show = () => {
    return (
        <React.Fragment>
            <Article apiFunc={getShows} />
        </React.Fragment>
    );
};


export default Show;