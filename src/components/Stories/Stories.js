// Core
import React from 'react';

// Instruments
import stories from '../../data/stories.json';

// Components
import { Story } from './Story';

export const Stories = () => {
    const storiesJSX = stories.map((story) => {
        return (
            <Story
                key = { story.id }
                message = { story.message }
                src = { story.src } />
        );
    });

    return <div className = 'stories'>{ storiesJSX }</div>;
};
