import React from 'react';

function AddAuthorForm({match}) {
    return (
      <div id="footer" className="row">
         <h1>Add Author</h1>
         <p>{JSON.stringify(match)}</p>
      </div>
    );
  }

export default AddAuthorForm;