import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    return (
        <div className='flex justify-center items-center min-h-screen h-full'>
            <div className='text-center'>
                <h1 className='text-2xl font-semibold'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i className='text-red-700'>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage