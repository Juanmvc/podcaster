import React from 'react';
import classes from './colorLabel.module.scss';

const MODULE_PREFIX = 'color-label';

interface ColorLabelProps {
 text: string;
}

const ColorLabel: React.FC<ColorLabelProps> = ({ text }) => {
 return (
    <p className={classes[MODULE_PREFIX]}>{text}</p>
 );
};

export default ColorLabel;