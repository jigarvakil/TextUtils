import React from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
  };
  return (
    <>
      <div className="container">
        <h1 style={myStyle}>Hello I am jigar vakil.</h1>
      </div>
    </>
  );
}
