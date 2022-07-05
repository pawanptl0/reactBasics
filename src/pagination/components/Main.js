import { useState, useEffect } from 'react'
import axios from "axios"
import Posts from './Posts'
import Pagination from './Pagination'

const Main = () => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getPosts = async() => {
      try {
        setIsLoading(true)
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(data)
        if (data) {
          setPosts(data)
          setIsLoading(false)
        }
      } catch (error) {
        console.log('Error accured:',error.message)
      }
    }
    getPosts()
  },[])

  // Get current posts
  const indexOfLastPostPerPage = currentPage * postsPerPage
  const indexOfFirstPostPerPage = indexOfLastPostPerPage - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPostPerPage, indexOfLastPostPerPage)
  
  return (
    <>
    <h3 className="my-3">My Blog</h3>
    <div className="row">
    <div className="col">
      <Posts posts={ currentPosts } isLoading={ isLoading }/>
      <Pagination postsPerPage={postsPerPage} totalNumberOfPosts={ posts.length } paginate={ (num) => setCurrentPage(num) } />
    </div>
    </div>
    </>
  )
}

export default Main