import { Button } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import { Routes,Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element ={<HomePage/>}></Route>
      {/* <Route path='/auth' element ={<AuthPage/>}></Route> */}

     </Routes>


    </>
  )
}

export default App
