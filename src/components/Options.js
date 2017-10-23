import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
      <div className="widget-header">
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all options</button>
        <h1>Options</h1>
        {props.options.map((option) => (
           <Option
             key={option}
             optionText={option}
             handleDeleteOption={props.handleDeleteOption}

           />
        ))}
      </div>
    );

};

export default Options;
