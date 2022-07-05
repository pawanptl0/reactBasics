import React from 'react';
import Header from './Header';

const GeneralDetail = ({ values, nextStep, handleChange }) => {
  const nextStep1 = e =>{
    e.preventDefault()
    nextStep()
  }

  return (
  <>
      <Header title='User General Information' />
      
    <div className="container">
    <form onSubmit={ nextStep1 }>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" placeholder="Enter First Name" 
        name="firstName" value={ values.firstName } onChange={ handleChange('firstName') }/>
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" placeholder="Enter Last Name" 
        name="lastName" value={ values.lastName } onChange={ handleChange('lastName') }/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" placeholder="Enter Email" 
        name="email" value={ values.email } onChange={ handleChange('email') }/>
      </div>

      <button type="submit" className="btn btn-success btn-sm">Next</button>
    </form>
    </div>
  </>
  );
}

export default GeneralDetail;