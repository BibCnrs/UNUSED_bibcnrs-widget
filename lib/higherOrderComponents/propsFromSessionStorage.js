import React, { Component } from 'react';

function getItem(key) {
    const value = window.sessionStorage.getItem(key);

    try {
        return JSON.parse(value);
    } catch (_) {
        return value;
    }
}

export default function (Child, propsKey) {
    class PropsFromSessionStorageComponent extends Component {
        constructor(props) {
            super(props);
            this.state = propsKey.reduce((state, key) => {
                const value = getItem(key);
                if (!value) {
                    return state;
                }
                return {
                    ...state,
                    [key]: value
                };
            }, {});
        }

        componentDidMount() {
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
            };

            checkStorage();
        }

        render() {
            const props = {
                ...this.props,
                ...this.state
            };

            return <Child {...props}/>;
        }
    }

    return PropsFromSessionStorageComponent;
}
