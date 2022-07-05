import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h4 className="p-4">React Basic Example</h4>
      <div>
        <div className="card">
          <div className="card-body">
            <Link to="/accordian">Accordian</Link> &nbsp; / &nbsp;
            <Link to="/grocery">Grocery - Buds</Link> &nbsp; / &nbsp;
            <Link to="/gallery">Image Gallery</Link> &nbsp; / &nbsp;
            <Link to="/multistepform">Multi step Form</Link> &nbsp; / &nbsp;
            <Link to="/pagination">Pagination</Link> &nbsp; / &nbsp;
            <Link to="/protected">Protected Route</Link> &nbsp; / &nbsp;
            <Link to="/speech">Speech Recognition</Link> &nbsp; / &nbsp;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home