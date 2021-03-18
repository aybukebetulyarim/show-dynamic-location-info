import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      <div>
        <div className="ui teal two item menu">
          <Link  className= "active item" to='/'> Hello  </Link>
          <Link className="active item" to='/Map'> Map </Link>
        </div>
      </div>
    )
}
export default Menu;
