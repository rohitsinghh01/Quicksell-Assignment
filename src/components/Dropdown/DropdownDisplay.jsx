import React, { useCallback, useEffect, useRef, useState } from 'react';
import './dropdown.css';
import { LuSettings2 } from 'react-icons/lu';
import { BiChevronDown } from 'react-icons/bi';

const DropdownDisplay = ({ group, setGroup, order, setOrder }) => {
  const componentRef = useRef(null);

  const [visible, setVisible] = useState(false);

  const openDropdown = useCallback(() => {
    setVisible(true);
  }, []);

  const onGroupChange = useCallback((e) => setGroup(e.target.value), []);
  const onOrderChange = useCallback((e) => setOrder(e.target.value), []);

  const handleClickOutside = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='dropdown-wrapper' ref={componentRef}>
      <div className='dropdown-header' onClick={openDropdown}>
        <LuSettings2 color='#6b6f76' />
        <div className='dropdown-title'>Display</div>
        <BiChevronDown color='#6b6f76' />
      </div>
      <div
        className={`dropdown-menu ${visible ? 'dropdown-menu-visible' : ''}`}
      >
        <div className='dropdown-menu-row'>
          <div className='dropdown-menu-label'>Grouping</div>
          <select
            name='grouping'
            id='grouping'
            value={group}
            onChange={onGroupChange}
          >
            <option value='status'>Status</option>
            <option value='user'>User</option>
            <option value='priority'>Priority</option>
          </select>
        </div>
        <div className='dropdown-menu-row'>
          <div className='dropdown-menu-label'>Ordering</div>
          <select
            name='ordering'
            id='ordering'
            value={order}
            onChange={onOrderChange}
          >
            <option value='priority'>Priority</option>
            <option value='title'>Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownDisplay;
