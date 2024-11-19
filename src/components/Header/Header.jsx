import React from 'react';
import './header.css';
import DropdownDisplay from '../Dropdown/DropdownDisplay'; 
const Header = ({ group, setGroup, order, setOrder }) => {
  <header>
    <DropdownDisplay
      group={group}
      setgroup={setGroup}
      order={order}
      setorder={setOrder}
    />
  </header>;
};

export default Header;
