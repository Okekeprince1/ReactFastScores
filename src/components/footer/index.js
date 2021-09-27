import React from 'react';
import "./index.css";
import { OPTIONS } from '../navbar';
import { FooterItem } from './footerItem';
export const Footer = () => {
    return(
        <div className="footer">
            {
                OPTIONS.map((option, i) => (
                    <FooterItem key={i} text={option.title}/>
                ))
            }
        </div>
    )
}