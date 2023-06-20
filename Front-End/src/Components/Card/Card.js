import React, { useContext, useState } from 'react'
import { BiLike, BiComment } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../Pages/Context/AuthProvider';

function timeStamp(time) {
    const timeDifference = Date.now() - time;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(timeDifference / 1000 / 60);
    const hours = Math.floor(timeDifference / 1000 / 60 / 60);
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else {
        return `${days} days ago`;
    }
}
function Card({ post, refetch }) {
    const { user } = useContext(ContextProvider)
    const [newComment, setNewComment] = useState('')
    const [newLike, setNewLike] = useState(0)
    const [showComment, setShowComment] = useState(false)
    const { _id, text, image, time, name, userImage,  comment, like } = post
    let newText;
    if(text.length > 80 ){
        newText =  text.slice(0, 80)
    }
    
    const postTime = timeStamp(time)


    const handleCommentInput = (e) => {
        const value = e.target.value;
        setNewComment(value)
    }
    const handleAddComment = () => {
        const commentInfo = {
            comment: newComment,
            name: user.displayName
        }
        fetch(`http://localhost:5000/comment?id=${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentInfo)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }
    const handleAddLike = () => {
        setNewLike(currentLike => currentLike + 1)
        const likeInfo = {
            like: newLike,
            name: user.displayName,
            email: user.email,
            postId: _id
        }
        fetch(`http://localhost:5000/like?id=${_id}&&email=${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }
    const handleShowComment = () => {
        setShowComment(!showComment)
    }
    return (
        <div className="flex flex-col  mx-auto max-w-md h-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
            <div className="flex space-x-4">
                <img alt="" src={userImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold">{name}</p>
                    <span className="text-xs ">{postTime}</span>
                </div>
            </div>
            <div>
                <img src={image} alt="" className="object-contain w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <p className="text-sm ">{newText}... <Link to={`/postDetailes/${_id}`} className='text-blue-600 font-lg'>Read More</Link></p>

            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                    <button aria-label="Share this post" type="button" className="p-2 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                            <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                        </svg>
                    </button>
                    <button aria-label="Bookmark this post" type="button" className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex space-x-2 text-sm">

                    <div type="button" className="flex items-center p-1 space-x-1.5">
                        <button onClick={handleShowComment}><BiComment /></button>
                        <span>{comment && comment.length}</span>
                    </div>
                    <div type="button" className="flex items-center p-1 space-x-1.5">
                        <button onClick={handleAddLike}><BiLike /></button>
                        <span>{<span>{like && like.length}</span>}</span>
                    </div>
                </div>
            </div>
            <div className={`${showComment ? 'block' : 'hidden'}`}>{comment && comment.map((e, id )=> <div key={id}>
                <h4 className='text-lg font-semibold'>{e.name}</h4>
                <span>{e.comment}</span>
            </div>)}</div>
            <div className='flex items-center left-3 bottom-5 mt-5 w-full'>
                <input onChange={handleCommentInput} type="text" placeholder='Commemt' className='border text-sm px-2 rounded-tl-full rounded-bl-full border-black w-[75%] h-6' />
                <button onClick={handleAddComment} className='btn bg-red-700 w-32 text-sm text-white h-6 rounded-tr-full rounded-br-full border-t-black border-b-black border-r-black border'>Commemt</button>
            </div>
        </div>

    )
}

export default Card