import React from 'react';

const Pagination = ({ postsPerPage, totalNumberOfPosts, paginate}) => {
  let pageNumbers = []
  let pages = Math.ceil(totalNumberOfPosts / postsPerPage)
  for(let i = 1; i <= pages; i++){
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className="pagination pagination-sm justify-content-center">
        {
          pageNumbers.map( num => (
            <li className="page-item" key={ num }>
              <button className="btn btn-sm btn-outline-primary" onClick={ () => paginate(num) }>{ num }</button>
         
        </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Pagination;