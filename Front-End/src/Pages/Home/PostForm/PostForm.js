import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../Context/AuthProvider';

function PostForm() {
  const { user } = useContext(ContextProvider)
  console.log(user)
  const [newImage, setImage] = useState('')
  const navigate = useNavigate()

  const handleImageChange = (e) => {
    const image = e.target.files[0]
    const formData = new FormData();
    formData.append('image', image)
    fetch('https://api.imgbb.com/1/upload?key=6f54997c6d2fa4998c950d62aaf1c8a1', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setImage(data.data.url)
      })
  }


  const handlePostSubmit = (e) => {
    e.preventDefault()
    const text = e.target.text.value;
    const time = Date.now()
    const post = {
      text: text,
      image: newImage,
      time: time,
      name: user.displayName,
      userImage: user.photoURL
    }

    fetch('https://mygram-server.vercel.app/post', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          navigate('/media')
        }
      })

  }




  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12  sm:px-6 lg:px-8  bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}>
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-4 md:p-10 bg-white sm:rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Post
          </h2>
        </div>
        <form className="mt-8 space-y-3" onSubmit={handlePostSubmit}>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-black tracking-wide">Text</label>
            <textarea name='text' className="text-base min-h-[130px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700" type="" />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-black tracking-wide">Image</label>
            <div className="flex items-center justify-center w-full h-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                {newImage ? <img className="has-mask h-36 object-contain" src={newImage} alt="" /> :
                  <div className='flex justify-center items-center h-full w-full'>
                    <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="pointer-none text-gray-500 ">select a file from your computer</p>
                    </div>
                    <input type="file" name='image' accept="image/*" className="hidden" multiple onChange={handleImageChange} />
                  </div>
                }
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: doc,pdf,types of images</span>
          </p>
          <div>
            {
              user ? <button type="submit" className="my-5 w-full flex justify-center bg-red-700 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                Upload
              </button> :
                <Link to='/login' className="my-5 w-full flex justify-center bg-red-700 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                  Please Login First
                </Link>
            }

          </div>
        </form>
      </div>
    </div>
  )
}

export default PostForm