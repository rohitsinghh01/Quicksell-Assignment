import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { ReactComponent as ThreeDotIcon } from '../../assests/Icons/3-dot-menu.svg'; 
import { getStatusIcon } from '../../utils/helper';

const Card = ({ ticket, userData, hideStatusIcon, hideProfileIcon }) => {
  return (
    <div className='card'>
      <div className='card-top'>
        <div className='card-ticket-id'>{ticket.id}</div>
        {!hideProfileIcon && (
          <UserIcon name={userData.name} available={userData.available} />
        )}
      </div>
      <div className='card-middle'>
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='card-title'>{ticket.title}</div>
      </div>
      <div className='card-bottom'>
        <div className='card-more-icon'>
          <ThreeDotIcon />
        </div>
        {ticket.tag.map((t) => (
          <div key={t} className='card-tag'>
            <div className='card-tag-icon'></div>
            <div className='card-tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
