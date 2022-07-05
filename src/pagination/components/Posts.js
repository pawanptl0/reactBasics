import React from 'react'
import Spinner from './Spinner'

const Posts = ({ posts, isLoading }) => {
  //console.log('Posts=',posts)
  if(isLoading){
    <Spinner />
  } else{
    return (
      <ul className="list-group list-group-flush">
        {
          posts.map(post =>(
            <li className="list-group-item" key={ post.id }>{ post.title }</li>
          ))
        }
      </ul>
    )
  }
}

export default Posts