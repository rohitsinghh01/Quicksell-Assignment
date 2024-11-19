import React, { useCallback, useEffect, useRef, useState } from 'react';
import './dropdown.css';
import { ReactComponent as DisplayIcon } from '../../assests/Icons/Display.svg';
import { ReactComponent as DownIcon } from '../../assests/Icons/down.svg';

function DisplayDropdown({ grouping, setGrouping, ordering, setOrdering }) {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setVisible((prevState) => !prevState);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  const onGroupingChange = useCallback((e) => setGrouping(e.target.value), []);
  const onOrderingChange = useCallback((e) => setOrdering(e.target.value), []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='display-dropdown' ref={componentRef}>
      <div className='dropdown-label-container' onClick={toggleDropdown}>
        <DisplayIcon />
        <div className='dropdown-label'>Display</div>
        <DownIcon />
      </div>
      <div className={`dropdown-content-container ${visible ? 'visible' : ''}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select
            name='grouping'
            id='grouping'
            value={grouping}
            onChange={onGroupingChange}
          >
            <option value='status'>Status</option>
            <option value='user'>User</option>
            <option value='priority'>Priority</option>
          </select>
        </div>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select
            name='ordering'
            id='ordering'
            value={ordering}
            onChange={onOrderingChange}
          >
            <option value='priority'>Priority</option>
            <option value='title'>Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DisplayDropdown;
