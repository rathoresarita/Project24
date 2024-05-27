

import Header from './components/header/Header'
import SideBar from './components/sidebar/SideBar'
import HomeScreen from './screen/homeScreen/HomeScreen'
import { Container} from 'react-bootstrap'
import './_app.scss'
import { useState } from 'react'
import LoginScreen from './screen/loginScreen/LoginScreen'
import { BrowserRouter as Router,Route,Navigate,Routes } from 'react-router-dom'



const Layout=({children})=>{
  const [sidebar,toggleSidebar]
  
  =useState(false)


  const handleToggleSidebar=()=>toggleSidebar(sidebar=>!sidebar)
  return (
 <div>
   <Header handleToggleSidebar={handleToggleSidebar}></Header>

   <div className='app_container border border-info'>
  <SideBar sidebar={sidebar}   handleToggleSidebar={handleToggleSidebar}>

  </SideBar>
  <Container fluid className='app_main border-warning'>

    {/* <HomeScreen></HomeScreen> */}

    {children}
  </Container>
  
   </div>
   </div>

  )
}

function App() {

 
  return (
  <Router>
    <Routes>
      <Route path='/' element={ <Layout><HomeScreen></HomeScreen></Layout>}>
       
      </Route>
    </Routes>
    <Routes>
      <Route  path='/auth' element={<LoginScreen></LoginScreen>}></Route>
    </Routes>


    <Routes>
      <Route  path='/search' element={<Layout>
        <h1>Search</h1>
      </Layout>}></Route>
    </Routes>

    <Routes>
      <Route path='*' element={<Navigate to ='/'></Navigate>}>

      </Route>
       
    </Routes>
  </Router>
  
  )
}

export default App;
