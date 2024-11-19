import React, { useMemo } from 'react';
import './usericon.css';

const UserIcon = ({ name, available }) => {
  const text = useMemo(() => {
    return name
      .split(' ')
      .map((item) => item[0])
      .join('');
  }, [name]);

  return (
    <div className='usericon-wrapper'>
      <div className='usericon-initials'>{text}</div>
      <div
        className={`usericon-status ${available ? 'usericon-available' : ''}`}
      ></div>
    </div>
  );
};

export default UserIcon;
