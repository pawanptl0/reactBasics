import React from 'react';
import Header from './Header';

const PersonalDetail = ({ values, nextStep, prevStep, handleChange}) => {

  const nextStep1 = e =>{
    e.preventDefault()
    nextStep()
  }

  const prevStep1 = () =>{
    prevStep()
  }

  return (
    <>
      <Header title='User Personal Information' />
      <div className="container">
      <form onSubmit={ nextStep1 }>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input type="text" className="form-control" placeholder="Enter Occupation" 
          name="occupation" value={ values.occupation } onChange={ handleChange("occupation") }/>
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" placeholder="Enter City" 
          name="city" value={ values.city } onChange={ handleChange("city") }/>
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea className="form-control" placeholder="Enter Last Name"  cols="5" rows="5"
          name="bio" value={ values.bio } onChange={ handleChange("bio") } />
        </div>

        <button type="submit" className="btn btn-success btn-sm">Next</button>
        <button type="button" className="btn btn-secondary btn-sm ml-3" onClick={ prevStep1 }>Back</button>
      </form>
      </div>
    </>
  );
}

export default PersonalDetail;