import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faSkype, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faMobileAlt, faBirthdayCake, faAtom } from '@fortawesome/free-solid-svg-icons';

const LINK_TYPES = ["github", "linkedin"];

export default function SocialItem({type, text}) {
    let faIcon;
    switch(type) {
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

        case "github":
            faIcon=faGithub;
        break;
        
        default:
            faIcon=faAtom;
    }
    return (
        <div className="SocialItem">
            <FontAwesomeIcon icon={faIcon} className="SocialItem-icon" />
            {
                LINK_TYPES.includes(type) ?
                    <a className="SocialItem-link" rel='noreferrer' href={`https://${text}`} target='_blank'>{text}</a> :
                    <span className="SocialItem-text">{text}</span>
            }
        </div>
    );
}