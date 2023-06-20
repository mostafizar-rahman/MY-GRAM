import React from 'react'
import useTitle from '../../../useTitle/useTitle'
import PostForm from '../PostForm/PostForm'
import TopLikePost from '../TopLikePost/TopLikePost'

function Home() {
  useTitle('Home')
  return (
    <div>
        <PostForm/>
        <TopLikePost/>
    </div>
  )
}

export default Home