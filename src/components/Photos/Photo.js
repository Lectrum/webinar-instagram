// Core
import React from 'react';

export const Photo = (props) => {
    return props.isSecured
        ? null
        : (
            <div className = 'photo'>
                <img src = { props.src } />
            </div>
        );
};
