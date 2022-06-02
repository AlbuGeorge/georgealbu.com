import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { BiCalendarAlt } from 'react-icons/bi'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg dark:bg-slate-900 lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-80 w-full rounded-t-lg object-cover object-center shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            width="40px"
            height="40px"
            className="rounded-full align-middle"
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700 dark:text-white">
            {post.author.name}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center font-medium text-gray-700 dark:text-white lg:mt-0">
          <BiCalendarAlt size={24} color="#f06fc9" />
          <span className="ml-1">
            {moment(post.createdAt).format('DD MMMM YYYY')}
          </span>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-lg font-normal text-gray-700 dark:text-white lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transfrom inline-block cursor-pointer rounded-full bg-pink-500 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
