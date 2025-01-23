"use client"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogDetailsPage() {
  const [blogDetails,setBlogDetails] = useState({})
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
    const {id} = useParams()

    useEffect(()=>{
      const fetchData =async()=>{
        try{
          setLoading(true)
           const res =await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          if(res?.data){
            setBlogDetails(res?.data)
          }
        }
        catch(err){
          setError(err?.message || err?.code)
        }
        finally{
          setLoading(false)
        }
      }
      fetchData()
    },[id])


    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-lg font-medium">Loading Blog Details...</div>
        </div>
      );
    }
  
    if (!blogDetails?.title) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-lg font-medium text-red-500">
            Blog details not found.
          </div>
        </div>
      );
    }

    if (error) return <p>{error}</p>;
  return (
        <div className="min-h-screen bg-base-300 py-10">
      <div className="container mx-auto max-w-3xl  shadow-lg rounded-lg overflow-hidden">
        {/* Blog Title */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-white">
            {blogDetails.title}
          </h1>
          <p className="text-sm text-white mt-2">
            Blog ID: {blogDetails.id} | Author ID: {blogDetails.userId}
          </p>
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <p className="text-lg text-white leading-relaxed whitespace-pre-line">
            {blogDetails.body}
          </p>
        </div>

        {/* Footer Section */}
        <div className="p-6 bg-black-50 border-t border-gray-200 flex justify-between items-center text-white">
          <button className="btn btn-primary">
            <a href="/">Back to Home</a>
          </button>
          <p className="text-sm">
            Powered by <span className="font-bold">JSONPlaceholder</span>
          </p>
        </div>
      </div>
    </div>
  )
}
