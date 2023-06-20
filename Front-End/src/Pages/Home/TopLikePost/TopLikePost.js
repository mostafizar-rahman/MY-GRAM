import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Card from '../../../Components/Card/Card'

function TopLikePost() {
  const { data: like = [] } = useQuery({
    queryKey: ['like'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/like`)
      const data = await res.json()
      return data
    }
  })
 
  const { isLoading: loding, data: posts = [], refetch } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/post`)
      const data = await res.json()
      return data
    }
  })
  const card = []
  for (const i of like) {
    console.log(i.id)
    const x = posts.filter(p => p._id === i.id)
    card.push(...x)
  }

  return (
    <div>
      <h3 className='font-bold text-2xl mt-9 mb-3 text-red-700  mx-auto max-w-md'>Top Like Post</h3>
      {card.map(post => <Card post={post} />)}
    </div>
  )
}

export default TopLikePost