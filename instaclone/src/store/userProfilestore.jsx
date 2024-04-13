import React from 'react'
import { create } from 'zustand'

const userProfilestore = create((set) => ({
    userProfile :null,
    setUserProfile:(userProfile)=>set({userProfile}),

    addPost:(post)=>
    set((state)=>({
userProfile:{...state.userProfile,posts:[post.id,...state.userProfile.posts]}

    })),
    deletePost:(postId)=>set((state)=>({
     

        userProfile:{

            ...state.userProfile,
            posts:state.userProfile.posts.filter((id)=>id !==postId),
           } 
    }))


}))

export default userProfilestore