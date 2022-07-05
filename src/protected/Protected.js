import { Navigate } from 'react-router-dom'

const Protected = ({user, children}) => {
   if (!user) {
    return <Navigate to="/pagination" replace />
  }
  return children
}

export default Protected