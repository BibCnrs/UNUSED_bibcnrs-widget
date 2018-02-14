import React from 'react';
import PropTypes from 'prop-types';
import propsFromSessionStorage from '../higherOrderComponents/propsFromSessionStorage';

export const Hello = ({ name }) => {
    return (
        <h1>Hello {name}</h1>
    );
};

Hello.propTypes = {
    name: PropTypes.string
};

Hello.defaultProps = {
    name: 'world'
};

export default propsFromSessionStorage(Hello, ['name']);
