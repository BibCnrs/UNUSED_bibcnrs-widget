import React, { PropTypes } from 'react';
import propsFromSessionStorage from '../higherOrderComponents/propsFromSessionStorage';

export const Hello = ({ name = 'world' }) => {
    return (
        <h1>Hello {name}</h1>
    );
};

Hello.propTypes = {
    name: PropTypes.string
};

Hello.defaultProps = {
};


export default propsFromSessionStorage(Hello, ['name']);
