import React, { ReactNode } from 'react';
import classes from './colorLabel.module.scss';

const MODULE_PREFIX = 'color-label';

interface ColorLabelProps {
   children: ReactNode;
}

const ColorLabel: React.FC<ColorLabelProps> = ({ children }) => {
 return (
    <p className={classes[MODULE_PREFIX]}>{children}</p>
 );
};

export default ColorLabel;