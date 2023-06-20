import React, { useContext, useState } from 'react'
import { HiOutlineHome, HiOutlineSearch, HiOutlineUser, HiOutlineFilm, HiOutlineX } from "react-icons/hi";
import { BiMessage } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { ContextProvider } from '../Context/AuthProvider';
import './Navbar.css'

function Navbar() {
    const [searchFild, setSearchFild] = useState(false)
    const { user } = useContext(ContextProvider)

    const handleSearchOpenBtn = () => {
        setSearchFild(true)
    }
    const handleSearchCloseBtn = () => {
        setSearchFild(false)
    }
    return (
        <header aria-label="Site Header" className="border-b max-w-screen-xl mx-auto border-gray-100">
            <div className="mx-auto  flex h-16 max-w-screen-2xl relative items-center justify-between px-3 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <NavLink to="/" className='font-bold text-3xl' style={{ fontFamily: 'Gwendolyn' }}>mygram</NavLink>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <nav aria-label="Site Nav" className="hidden md:flex items-center md:gap-7 md:text-xs md:font-bold md:uppercase md:tracking-wide md:text-black mr-12">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? 'text-red-700 flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700' : 'flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'} >
                            <HiOutlineHome className='text-2xl mr-1' />
                            Home
                        </NavLink>

                        <NavLink to="/media" className={({ isActive }) =>
                            isActive ? 'text-red-700 flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700' : 'flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'} >
                            <HiOutlineFilm className='text-2xl mr-1' />
                            Media
                        </NavLink>

                        <NavLink to="/message" className={({ isActive }) =>
                            isActive ? 'text-red-700 flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700' : 'flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'}>
                            <BiMessage className='text-2xl mr-1' />
                            Message
                        </NavLink>

                        {

                            user && user.uid ?

                                <NavLink to="/about" className={({ isActive }) =>
                                    isActive ? 'text-red-700 flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700' : 'flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'}>
                                    <HiOutlineUser className='text-2xl mr-1' />
                                    About
                                </NavLink>
                                :
                                <NavLink to='/login' className='btn bg-red-700 text-white px-6 py-2 block'>Login</NavLink>
                        }
                    </nav>

                    <div className=''>
                        <HiOutlineSearch className='text-2xl mr-2 cursor-pointer' onClick={handleSearchOpenBtn} />
                        <div className={`flex items-center absolute left-0 top-0 right-0 bg-black w-full h-16 ${searchFild ? 'flex' : 'hidden'}`}>
                            <div className='w-[100%]  h-16 relative'>
                                <input type="text" placeholder='Search' className={` w-full h-full  border border-black px-2`} />
                                <div className='absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 ' onClick={handleSearchCloseBtn}>
                                    <HiOutlineX className='text-2xl' />
                                </div>
                            </div>

                            <div className='h-full w-28 cursor-pointer text-white flex justify-center items-center bg-red-700'>
                                <HiOutlineSearch className=' text-3xl ' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <nav className='flex items-center px-3 md:hidden justify-between w-full bg-white fixed bottom-0 z-50 border-t border-t-black'>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'text-red-700 flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700' : 'flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'}>
                    <HiOutlineHome className='text-2xl mr-1' />
                </NavLink>

                <NavLink to="/media" className={({ isActive }) =>
                    isActive ? 'text-red-700 flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700' : 'flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'}>
                    <HiOutlineFilm className='text-2xl mr-1' />
                </NavLink>

                <NavLink to="/message" className={({ isActive }) =>
                    isActive ? 'text-red-700 flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700' : 'flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'}>
                    <BiMessage className='text-2xl mr-1' />
                </NavLink>

                {

                    user && user.uid ?

                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? 'text-red-700 flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700' : 'flex items-center h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700'}>
                            <HiOutlineUser className='text-2xl mr-1' />
                        </NavLink>
                        :
                        <NavLink to='/login' className='btn bg-red-700 text-white px-6 py-2 block'>Login</NavLink>
                }
            </nav>
        </header>

    )
}

export default Navbar