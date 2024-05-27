import React,{useState} from 'react'
import './_categories.scss'

const keywords=[
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Bengali Songs',
  'Codeing',
  'Cricket',
  "Football",
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh'

]

const CategoriesBar = () => {

  const [activeElement,setActiveElement]=useState('All')


  const handleClick=(value)=>{
    setActiveElement(value)
  }
  return  <div className="categoriesBar">

    


{


  keywords.map((value,i)=>{
    return(
      <span key={i}

      className={activeElement===value? 'active':''}
      onClick={()=>handleClick(value)}
      
      >{value}</span>
    )
  })
}


  </div>
   

}

export default CategoriesBar