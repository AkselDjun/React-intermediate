import React from 'react';

export default () => (
    <div>
        <p>This is car component</p>
        <p>Number: <strong>{Math.round(Math.random() * 43)}</strong></p>
    </div>
    //то что обернуто в фигурные скобки относится к JS
);