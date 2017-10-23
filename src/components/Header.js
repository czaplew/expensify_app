import React from 'react';

const Header = (props)=> {
    return (
      <div className = "header">
        <div  className="container">
          <h1 className="header__title">{props.title}</h1>
          <h1 className="header__subtitle">{props.subtitle}</h1>
        </div>

      </div>
    );
};

Header.defaultProps = {
  title: "Indecision",
  subtitle :"Put your life in the hands of a computer"
};

export default Header;
