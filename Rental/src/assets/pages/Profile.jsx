import { BlogCard } from "../Components/Blogcard"
import { useState, useEffect } from "react"
import {getPosts} from "../../api"
import * as jwt_decode from 'jwt-decode';


export function Profile(){
    const [posts, setPosts]= useState([])
    const [user, setUser]= useState({}) //empty object

    useEffect(()=>{
        async function loadUserData() {
            const token =sessionStorage.getItem("User")
            const decodeUser = jwt_decode.jwtDecode(token)
            const allPosts = await getPosts()
            const filteredPosts = allPosts.filter((post)=> post.author == decodeUser._id)
            setPosts(filteredPosts)
            setUser(decodeUser)
        }
        loadUserData()
    },[])

 
    return<>
    <label>Name:</label>
    <h2>{user.name}</h2>
    <label>Email:</label>
    <h2>{user.email}</h2>
    <label>Join Date:</label>
    <h2>{user.joinDate}</h2>
    {posts.map((post)=>{
        return(
          <BlogCard post={post}/>
        )

    })}

    </>   
}