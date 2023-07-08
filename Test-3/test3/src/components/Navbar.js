import React from 'react';

function Navbar() {
  const handleClick = (option) => {
    console.log(option);
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleClick("Home")}>Home</li>
          <li onClick={() => handleClick("About")}>About</li>
          <li onClick={() => handleClick("Contact us")}>Contact us</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;