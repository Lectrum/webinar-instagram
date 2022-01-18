// Core
import React from 'react';

// Instruments
import avatar from '../../theme/assets/images/nasa.jpg';

// Components
import { Stories } from '../Stories';

export const Profile = () => {
    return (
        <div className = 'profile'>
            <img className = 'avatar' src = { avatar } />
            <div className = 'main'>
                <span className = 'nickname'>NASA</span>
                <div className = 'stats'>
                    <div>
                        <span>2398&nbsp;</span>
                        <span>posts</span>
                    </div>
                    <div>
                        <span>33.6 million&nbsp;</span>
                        <span>followers</span>
                    </div>
                    <div>
                        <span>69&nbsp;</span>
                        <span>following</span>
                    </div>
                </div>
                <div className = 'name'>NASA</div>
            </div>
            <Stories />
        </div>
    );
};
