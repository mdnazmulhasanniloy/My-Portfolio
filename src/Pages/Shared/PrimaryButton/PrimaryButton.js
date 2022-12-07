import React from 'react';
import './PrimaryButton.css'


const PrimaryButton = ({ children, link, Outline }) => {
    return (
        <div>
            <div className={`primary_btn ${Outline}`}> <a href={link}><span>{children}</span></a> </div>
        </div>
    );
};

export default PrimaryButton;