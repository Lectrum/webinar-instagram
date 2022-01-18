// Core
import React from 'react';
import { Photos } from '../Photos';

// Components
import { Profile } from '../Profile';

export const Content = () => {
    return (
        <div className = 'content'>
            <Profile />
            <Photos />
        </div>
    );
};
