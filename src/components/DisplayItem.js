import React from "react";

const DisplayItem = (props) => {
  const {name, data_type, app_keys} = props.item;
  return (
    <div className="panel-block flex-column aside-panels">
      
      <div className="inline-flex">
      <span className="label">Ever True Field Name: </span> <p>{name}</p>
      </div>
      <div className="inline-flex">
          <span className="label">Type: </span> <p>{data_type !== 'object' ? data_type : undefined}</p>
        </div>
         <div className="inline-flex">
          <span className="label">Usage: </span> 
          <div>

      {
        app_keys.length
          ? app_keys.map((key, uid) => <p key={uid}>{key}</p>)
          : undefined
      }
      </div>
      </div>
    </div>
  );
};

export default DisplayItem;
