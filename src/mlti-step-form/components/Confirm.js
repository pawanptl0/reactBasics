import React from 'react';
import Header from './Header';

const Confirm = ({values, nextStep, prevStep}) =>{

  return (
    <>
      <Header title='User Information'/>
      <div className="container">
      <ul className="list-group list-group-flush">
        {
          Object.entries(values).map(([key,value]) => (
            <li className="list-group-item">{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</li>
          ))
        }
      </ul>  
      <button type="button" className="btn btn-success btn-sm" onClick={ () => nextStep() }>Confirm</button>
      <button type="button" className="btn btn-secondary btn-sm ml-3" onClick={ () => prevStep() }>Back</button>
      </div>
    </>
  );
}

export default Confirm;