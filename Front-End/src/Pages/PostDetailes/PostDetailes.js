import React from 'react'
import { useLoaderData } from 'react-router-dom'

import DetailesCard from '../../Components/Card/DetailesCard'

function PostDetailes() {
  const post = useLoaderData()

  return (
    <div>
      <DetailesCard post={post} />
    </div>
  )
}

export default PostDetailes