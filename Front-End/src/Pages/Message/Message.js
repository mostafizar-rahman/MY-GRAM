import React from 'react'
import useTitle from '../../useTitle/useTitle'

function Message() {
  useTitle('Message')
  return (
    <div className='min-h-screen h-full flex justify-center items-center'>
        <h1 className='text-3xl text-red-700 font-bold'>Comming Soon</h1>
    </div>
  )
}

export default Message