import React from 'react';
import "./index.css"

const Tooltip = ({children, tooltipMessage}) => (
    <div className="tooltip-container">
        {children}
        <div className="tooltip">{tooltipMessage}</div>
    </div>
);
export default Tooltip;