import React from 'react';
import './header.css';
import DropdownDisplay from '../Dropdown/DropdownDisplay';

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <header className='header'>
      <DropdownDisplay
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </header>
  );
};

export default Header;
