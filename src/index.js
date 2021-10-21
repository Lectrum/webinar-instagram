// Core
import React from 'react';
import { render } from 'react-dom';

// Styles
import './theme/init.css';

// Components

render(
    <div className = 'welcome'>
        <h1>Проект готов к началу вебинара!</h1>
    </div>,
    document.getElementById('root'),
    () => {
        // eslint-disable-next-line no-console
        console.log('%c Приложение успешно запущено ', 'background: #00ff00; color: #000000; padding: 2.5px;');
    },
);
