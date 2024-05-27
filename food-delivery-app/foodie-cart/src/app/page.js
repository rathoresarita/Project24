
"use client"
import { Button } from "../components/ui/button";
import { UserButton } from "@clerk/nextjs";
import CategoryList from "./_components/CategoryList";
import GlobalApi from './_components/_utils/GlobalApi'

import GetCategory from './_components/_utils/GlobalApi'
import { useEffect,useState} from 'react'
import Image from "next/image";



export default function Home() {
   const [categoryList,setCategoryList]=useState([])


useEffect(()=>{

GetCategoryList()
},[])

// Used to get  Category List

const GetCategoryList=()=>{
GetCategory().then(resp=>{
   console.log('res',resp.categories)

   setCategoryList(resp.categories)
})
}
  return (
   <div>
<div>
{/* <Button>Subscribe</Button>

<UserButton  afterSignOutUrl="/"></UserButton> */}

{categoryList && categoryList.map((categories,index)=>
<div key={index}  >
 

   {/* <Image src={categories.icon?.url}  alt={categories.name} width={40}
   height={40}></Image> */}

<Image src={categories.icon?.url} alt={categories.name} width={40} height={40} />



</div>
)}
</div>
   </div>
      
      );
}
