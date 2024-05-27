import { useState } from 'react'
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Login from './component/Login'
import SideBar from './component/SideBar'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Routes>

      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/auth'  element={<Home></Home>}></Route>
    </Routes>
   </Router>
  )
}

export default App
