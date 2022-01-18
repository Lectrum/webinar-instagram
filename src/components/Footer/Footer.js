// Core
import React from 'react';

// Instruments
import links from '../../data/links.json';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const linksJSX = links.map(({ id, message }) => {
        return <li key = { id }><a href = '#'>{ message }</a></li>;
    });

    return (
        <div className = 'footer'>
            <ul>
                { linksJSX }
            </ul>
            <span>
            &copy; { currentYear } Instagram
            </span>
        </div>
    );
};
