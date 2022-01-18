// Core
import React from 'react';

export const Header = () => {
    return (
        <div className = 'header'>
            <div>
                <a />
            </div>
            <input placeholder = 'Search' type = 'text' />
            <nav>
                <a className = 'explore' />
                <a className = 'likes' />
                <a className = 'settings' />
            </nav>
        </div>
    );
};
