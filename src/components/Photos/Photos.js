// Core
import React, { useState, useEffect } from 'react';

// Instruments
import data from '../../data/images.json';

// Components
import { Photo } from './Photo';

export const Photos = () => {
    const [photos, setPhotos] = useState(data);

    useEffect(() => {
        setTimeout(() => {
            setPhotos((prevPhotos) => {
                return [
                    {
                        id:     Date.now(),
                        src:    'http://placebeard.it/g/640x640',
                        public: true,
                    },
                    ...prevPhotos,
                ];
            });
        }, 5000);
    }, [photos]);

    const photosJSX = photos.map((photo) => {
        return <Photo
            key = { photo.id } secured = { !photo.public }
            src = { photo.src } />;
    });

    return <div className = 'photos'>{ photosJSX }</div>;
};
