import React, { Component } from 'react';
import PropType from 'prop-types';

const Header = (props) => {
    const { title, image, clickHandler } = props;
    console.log(props);
    return (
        <header className="App-header">
            <img src={image} className="App-logo" alt="logo" />
            <h1 className="App-title">{title}</h1>
            <button onClick={clickHandler}>click</button>
        </header>
    )
}

Header.propTypes = {
    image: PropType.string,
    title: PropType.string,
}
export default Header;