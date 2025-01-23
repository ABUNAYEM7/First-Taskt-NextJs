"use client";

import Link from "next/link";

export default function BlogCard({blog}) {
    const {title,body,id} = blog
  return (
    <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{body?.slice(0,60)}..</p>
    <div className="card-actions justify-end">
      <Link 
      href={`/BlogDetails/${id}`}
      className="btn bg-blue-400 text-black"
      >View Details</Link>
    </div>
  </div>
</div>
  )
}
