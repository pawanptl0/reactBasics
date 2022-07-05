import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className="card m-2 p-2">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="card-title">{title}</h3>
        </div>
        <div>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      </div>
      { showInfo && <p className="card-text">{info}</p>}
    </div>
  )
}

export default Question
