"use client"
import  Image from 'next/image'
import { Button } from '../../components/ui/button'
import  {Search }from 'lucide-react'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'






function Header () {


  const { isLoaded, isSignedIn, user } = useUser();
 
console.log('isSined',isSignedIn)
 
  return (
    <div className='flex justify-between items-center p-6  shadow-sm '  >

      <Image src='/logo.png'
      width={200}
      height={200}
      
      ></Image>

      <div className='hidden md:flex border p-2 rounded-lg bg-gray-200 w-96'>

        <input type='text' className='bg-transparent w-full outline-none'></input>

        <Search/>
      </div>

{isSignedIn?<UserButton></UserButton>:(<div className='flex  gap-5'>  


<SignInButton mode='modal'>

<Button  variant="outline">Login In</Button>

</SignInButton>

<SignUpButton>

<Button mode='modal'>SignUp</Button>
</SignUpButton>
 


</div>)}
      

    </div>

  )
}

export default Header