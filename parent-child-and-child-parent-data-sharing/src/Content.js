import React, { Component } from 'react';


const Content = (props) =>{
    const {value} = props 
    return(
        <div>
            <button onClick={props.Increment}>Increment</button>
            <button onClick={props.Decrement}>Decrement</button>
        </div>
    );
  }

export default Content;
