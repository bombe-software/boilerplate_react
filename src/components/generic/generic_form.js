import React from 'react';

export function renderTextField({ input, label, meta: { touched, error }, ...custom }) {
    return (
        <div>
            <input
                {...input}
                {...custom}
            />
            {touched && error}
        </div>
    );
}
