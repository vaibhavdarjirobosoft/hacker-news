import React from 'react';
import {getTops} from '../../api';
import Article from '../common/Article';

const Top = () => {

    return (
        <React.Fragment>
            <Article apiFunc={getTops} />
        </React.Fragment>
    );
};


export default Top;