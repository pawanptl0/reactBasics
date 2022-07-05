import React, { useState } from 'react';

const ImageSearch = ({ onTextChange }) => {
  const [text, setText] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    onTextChange(text)
  }
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <div className="input-group">
          <input type="search" className="form-control" placeholder="Search..." onChange={(e) => setText(e.target.value) } />
          <div className="input-group-append">
            <button type="submit" className="btn btn-success">Go</button>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;

