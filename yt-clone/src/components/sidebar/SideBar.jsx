import React from 'react'
import "./_sidebar.scss"
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied
  

} from  "react-icons/md"

const SideBar = ({sidebar,handleToggleSidebar}) => {
  return(  < nav className={sidebar?"sidebar open":"sidebar"}
  onClick={()=>handleToggleSidebar()}
  >
    

    <li>
    
<MdHome size={23}></MdHome>
<span>Home</span>


    </li>  <li>
    
    <MdSubscriptions size={23}></MdSubscriptions>
    <span>Subscription</span>
        </li>

        <li>
    
    <MdThumbUp size={23}></MdThumbUp>
    <span>LikedVideo</span>
    
        </li>

        <li>
    
    <MdHistory size={23}></MdHistory>
    <span>History</span>
    
        </li>

      

        <li>
    
    <MdLibraryBooks size={23}></MdLibraryBooks>
    <span>Library</span>
    
        </li>
        <li>
    
    <MdSentimentDissatisfied size={23}></MdSentimentDissatisfied>
    <span>I don't know</span>
    
        </li>

        <li>
         <hr/>
    
    <MdExitToApp size={23}></MdExitToApp>
    <span>Logout</span>
    
        </li>

<hr/>
    
  </nav>
)
}

export default SideBar