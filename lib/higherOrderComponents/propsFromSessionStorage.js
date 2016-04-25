import React from 'react';

function getItem(key) {
    const value = window.sessionStorage.getItem(key);

    try {
        return JSON.parse(value);
    } catch (_) {
        return value;
    }
}

export default function (Component, propsKey) {
    return React.createClass({
        getInitialState: function () {
            return propsKey.reduce((state, key) => {
                const value = getItem(key);
                if (!value) {
                    return state;
                }
                return {
                    ...state,
                    [key]: value
                };
             }, {});
        },
        componentDidMount: function () {
            const checkStorage = () => {
                propsKey.forEach((key) => {
                    const value = getItem(key);
                    if (value != this.state[key]) {
                        this.setState({
                            ...this.state,
                            [key]: value
                        });
                    }
                });

                setTimeout(checkStorage, 1000);
            }

            checkStorage();
        },
        render: function () {
            const props = {
                ...this.props,
                ...this.state
            };

            return <Component {...props}/>
        }
    });
}
