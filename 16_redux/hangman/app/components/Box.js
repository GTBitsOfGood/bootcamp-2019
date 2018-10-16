import React from 'react';
import PropTypes from 'prop-types';
const inlineStyle = (letter) => ({
    'border': 'solid',
    'width': '50px',
    'height': '50px',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'backgroundColor': letter.guessed ? 'red' : 'yellow'
});
const Box = ({ letter }) => {
    return (
        <div style={inlineStyle(letter)}>
            {letter.guessed ? letter.letter.toUpperCase() : '' }
        </div>
    );
};

Box.propTypes = {
    letter: PropTypes.object
};

export default Box;
