import React, { useState } from 'react';
import './Styles.css';

interface menuType {
  name: string;
  link: string;
}

function Navbar(props: any) {
  const [menu, setMenu] = useState(props.menu);

  return (
    <div className='navbar'>
      <ul>
        {menu.map((elem: menuType) => {
          return (
            <li key={elem.name}>
              <a href={elem.link}>{elem.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
