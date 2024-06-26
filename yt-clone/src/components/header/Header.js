import React from 'react'
import './_header.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications ,MdApps} from 'react-icons/md'

const Header = ({handleToggleSidebar}) => {
  return (
    <div className='border border-dark header'>
<FaBars
className='header__menu ' size={26}
onClick={()=>handleToggleSidebar()}
></FaBars>
<img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className='header__logo'></img>

<form>
  <input type='text' placeholder='Search'/>
  <button type='submit'>
    
    <AiOutlineSearch size={22}></AiOutlineSearch>
     </button>
</form>
<div className='header__icons'>
  <MdNotifications size={28}/>
  <MdApps size={28}/> 
  <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
alt="avatar"

></img>

</div>


    </div>
  )
}

export default Header



// import React from 'react'
// import './_header.scss'
// import { FaBars } from 'react-icons/fa'
// import { AiOutlineSearch } from 'react-icons/ai'
// import { MdNotifications, MdApps } from 'react-icons/md'

// const Header = () => {
//   return (
//     <div className='header'>
//       <FaBars className='header__menu' size={26} />
//       <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="YouTube Logo" className='header__logo' />

//       <form>
//         <input type='text' placeholder='Search' />
//         <button type='submit'>
//           <AiOutlineSearch size={22} />
//         </button>
//       </form>

//       <div className='header__icons'>
//         <MdNotifications size={28} />
//         <MdApps size={28} />
//         <img
//           src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
//           alt="User Avatar"
//         />
//       </div>
//     </div>
//   )
// }

// export default Header
