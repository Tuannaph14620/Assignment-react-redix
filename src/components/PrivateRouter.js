
import { Navigate } from 'react-router-dom'
const PrivateRouter = () => {
  const isAdmin = localStorage.getItem("user")
  if (!isAdmin) {  
    return <Navigate to='/signin'/>
  }
  return <Navigate to='/admin'/>
}

export default PrivateRouter