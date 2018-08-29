import React from 'react';

const Props = props =>{
    return (
        <div>
          <h1 className="title"
              style={{border:'3px solid red',float: props.position}}>
              {props.title}
          </h1>
        </div>
    )
}

export default Props;