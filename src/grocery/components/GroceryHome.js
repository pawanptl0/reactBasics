import React from 'react'
import Header from './header';
import Grocery from './grocery';

const GroceryHome = () => {
  return (
     <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col col-sm-12 col-md-8 col-lg-8 col-xl-4 border border-primary shadow shadow-lg">
          <Header />
          <Grocery />
        </div>
      </div>
    </div>
  )
}

export default GroceryHome