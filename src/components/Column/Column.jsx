import React, { useMemo } from 'react';
import Card from '../Card/Card';
import './column.css';
import { ReactComponent as Add } from '../../assests/Icons/add.svg';
import { ReactComponent as ThreeDotIcon } from '../../assests/Icons/3-dot-menu.svg';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';

function Column({ tickets, grouping, groupBy, userIdToData }) {
  const title = useMemo(() => {
    if (grouping === 'status') return groupBy;
    if (grouping === 'priority') return groupBy;
    if (grouping === 'user') return userIdToData[groupBy]?.name;
  }, [grouping, groupBy, userIdToData]);

  const icon = useMemo(() => {
    if (grouping === 'status') return getStatusIcon(groupBy);
    if (grouping === 'priority') return getPriorityIcon(groupBy);
    if (grouping === 'user') {
      const user = userIdToData[groupBy];
      return <UserIcon name={user?.name} available={user?.available} />;
    }
  }, [grouping, groupBy, userIdToData]);

  return (
    <div className='column'>
      <div className='column-header'>
        <div className='column-header-left-container'>
          {icon}
          <div className='column-title'>
            {title}
            <span className='count'>{tickets.length}</span>
          </div>
        </div>
        <div className='column-header-right-container'>
          <Add />
          <ThreeDotIcon />
        </div>
      </div>
      <div className='cards-container'>
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === 'status'}
            hideProfileIcon={grouping === 'user'}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
