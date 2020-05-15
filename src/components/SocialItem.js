import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faMobileAlt, faBirthdayCake, faAtom } from '@fortawesome/free-solid-svg-icons';

export default function SocialItem({icon, text}) {
    let faIcon;
    switch(icon) {
        case "mail":
            faIcon=faEnvelope;
        break;

        case "linkedin":
            faIcon=faLinkedinIn;
        break;

        case "address":
            faIcon=faMapMarkerAlt;
        break;

        case "phone":
            faIcon=faMobileAlt;
        break;

        case "birthday":
            faIcon=faBirthdayCake;
        break;

        case "skype":
            faIcon=faSkype;
        break;
        
        default:
            faIcon=faAtom;
    }
    return (
        <div className="SocialItem">
            <FontAwesomeIcon icon={faIcon} className="SocialItem-icon" />
            <span className="SocialItem-text">{text}</span>
        </div>
    );
}