import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { HiOutlineX } from "react-icons/hi";
import { ContextProvider } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../useTitle/useTitle';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function About() {
    const { userLogout, user } = useContext(ContextProvider)
    const [modalIsOpen, setIsOpen] = useState(false);
    useTitle('About')

    const { isLoading: loading, data: userInfo = [], refetch } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch(`https://mygram-server.vercel.app/user?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    const { _id, name, email, gender, contactNo, currentAddress, permanantAddress, birthday } = userInfo

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handleAboutFromSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const gender = e.target.gender.value;
        const contactNo = e.target.contactNo.value;
        const birthday = e.target.birthday.value;
        const currentAddress = e.target.currentAddress.value;
        const permanantAddress = e.target.permanantAddress.value;

        const newInfo = {
            name,
            gender,
            contactNo,
            currentAddress,
            permanantAddress,
            birthday
        }
        fetch(`https://mygram-server.vercel.appuser?id=${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsOpen(false);
                refetch()
            })

    }

    const handleUserLogout = () => {
        userLogout()
    }
    return (
        <div className=" min-h-screen h-full max-w-screen-xl  mx-auto sm:px-6 lg:px-8">
            {
                loading ? <div className="flex justify-center items-center min-h-screen">
                    <div className="border-t-transparent border-solid animate-spin  rounded-full border-black border-2 h-24 w-24"></div>
                </div> :

                    <div className="container mx-auto my-5 p-5 bg-gray-100">
                        <div className="md:flex no-wrap md:-mx-2 ">
                            <div className="w-full">
                                <div className="bg-white p-3 shadow-sm rounded-sm">
                                    <div className="space-x-2 flex justify-between items-center font-semibold text-gray-900 leading-8">
                                        <button className='text-red-700 text-xl btn border rounded-full px-6 py-1 border-black font-semibold' onClick={handleUserLogout}>Logout</button>
                                        <button className='text-teal-600 text-xl font-semibold' onClick={handleOpenModal}>Edit</button>
                                    </div>
                                    <div className="text-gray-700 mt-8">
                                        <div className="grid md:grid-cols-2 text-sm">
                                            <div className="grid grid-cols-2">
                                                <div className="py-2 font-semibold">Name</div>
                                                <div className="py-2">{user.displayName}</div>
                                            </div>

                                            <div className="grid grid-cols-2">
                                                <div className="py-2 font-semibold">Gender</div>
                                                <div className="py-2">{gender}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="py-2 font-semibold">Contact No.</div>
                                                <div className="py-2">{contactNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="py-2 font-semibold">Current Address</div>
                                                <div className="py-2">{currentAddress}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="py-2 font-semibold">Permanant Address</div>
                                                <div className="py-2">{permanantAddress}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="py-2 font-semibold">Email.</div>
                                                <div className="py-2">
                                                    <a className="text-blue-800" href="mailto:jane@example.com">{user.email}</a>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="py-2 font-semibold">Birthday</div>
                                                <div className="py-2">{birthday}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={handleCloseModal}><HiOutlineX /></button>
                    <form onSubmit={handleAboutFromSubmit}>
                        <div className='flex flex-col space-y-5 md:min-w-[400px]'>
                            <input className='border border-gray-300 px-2 h-8' defaultValue={user.displayName} type="text" name='name' placeholder='First Name' />
                            <input className='border border-gray-300 px-2 h-8' defaultValue={gender} type="text" name='gender' placeholder='Gender' />
                            <input className='border border-gray-300 px-2 h-8' defaultValue={contactNo} type="text" name='contactNo' placeholder='Contact No' />
                            <input className='border border-gray-300 px-2 h-8' type="text" defaultValue={birthday} name='birthday' placeholder='Birthday' />
                            <textarea className='border border-gray-300 px-2 min-h-[100px]' defaultValue={currentAddress} name="currentAddress" placeholder='Current Address'></textarea>
                            <textarea className='border border-gray-300 px-2 min-h-[100px]' defaultValue={permanantAddress} name="permanantAddress" placeholder='Permanant Address'></textarea>
                            <button type='submit' className='bg-red-700 h-10 text-white w-28'>Saved</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    )
}

export default About