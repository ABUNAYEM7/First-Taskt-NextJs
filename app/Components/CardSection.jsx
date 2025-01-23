"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

export default function CardSection() {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        axios.get(' https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            setBlogs(res?.data)
        })
        .catch(err=>{
            console.error(err)
        })
    },[])

  return (
    <div>
      <div className="max-w-[80%] mx-auto p-4 space-y-3 mb-6">
      <h3 className="text-3xl md:text-5xl font-bold text-center">The Thoughtful Journal</h3>
        <p className="text-base font-medium text-center">
        Exploring the depth of ideas, experiences, and stories that shape our world.
        </p>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {
            blogs?.map(blog=>(
                <BlogCard key={blog?.id} blog={blog}/>
            ))
        }
      </div>
    </div>
  )
}
