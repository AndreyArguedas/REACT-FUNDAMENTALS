import React from 'react';

function Continue({show, onContinue}) {
    return (
      <div className="row continue">
         {show ? <div className="col-11">
             <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
         </div>: null}
      </div>
    );
  }

export default Continue;