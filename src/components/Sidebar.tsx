'use client';

import { useStoreMenuName } from '@/util/zustandStorage';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaFileAlt, FaUserFriends } from 'react-icons/fa';
import { GrSchedules } from 'react-icons/gr';
import { HiBriefcase } from 'react-icons/hi2';
import { MdTask } from 'react-icons/md';
import { RiCalendarScheduleFill } from 'react-icons/ri';

export const menuLink = [
    {
        id: 1,
        name: 'Home',
        icon: <AiFillHome />,
        slug: '/'
    },
    {
        id: 2,
        name: 'Candidate',
        icon: <HiBriefcase />,
        slug: '/candidate/candidate-list'
    },
    {
        id: 3,
        name: 'Job',
        icon: <MdTask />,
        slug: '/jobs'
    },
    {
        id: 4,
        name: 'Interview',
        icon: <RiCalendarScheduleFill />,
        slug: '/interviews'
    },
    {
        id: 5,
        name: 'Offer',
        icon: <FaFileAlt />,
        slug: '/offers',
    },
    {
        id: 5,
        name: 'User',
        icon: <FaUserFriends />,
        slug: '/suers'
    },
]


const Sidebar = () => {
    const [isLinkActive, setLinkActive] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) {
            console.log('Mouse over the tracked div!');
            // You can perform any actions you want here
        }
    }, [isHovered]);

    const setMenuName = useStoreMenuName(
        (state: any) => state.setMenuName
    );
    const handleRedirect = (item: any) => {
        console.log("item", item)
        setLinkActive(item.slug)
        setMenuName(item.name)
    }

    return (
        <div
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className="min-h-[50rem]  bg-[#f5f5f7]">
            <div className={`h-full  transition-width ${isHovered ? 'w-64 transition-all' : 'w-20 transition-all'} `}>
                <div className="flex h-full flex-grow flex-col overflow-y-auto   bg-white pt-5 shadow-md">
                    <Link onClick={() => handleRedirect({ name: "Home", slug: "/" })} href={"/"} className={`flex gap-3  items-center px-4  ${isHovered && 'ml-10 transition-all'}`}>
                        <img className="h-12 w-auto max-w-full align-middle" src="https://cdn-icons-png.freepik.com/256/13065/13065925.png?ga=GA1.1.1725227974.1708702988&semt=ais_hybrid" alt="" />
                        {isHovered && <span className='font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-indigo-500
                        text-transparent bg-clip-text text-3xl transition-all
                        '>IMS</span>}
                    </Link>

                    <div className="flex mt-3 ml-2 flex-1 flex-col">
                        <nav className="flex-1 mt-8 flex gap-5 flex-col">
                            {menuLink.map((item, index) => (
                                <Link key={index} onClick={() => handleRedirect(item)}
                                    href={item.slug} title="" className={`flex cursor-pointer py-3 items-center transition-all
                                     px-4 text-xl font-medium text-blue-500 outline-none  h-16
                                      duration-100 ease-in-out focus:border-l-4 ${isLinkActive === item.slug ? 'border-l-4 border-blue-500 bg-slate-50' : ''}`}>
                                    <span className='mr-2 text-2xl transition-all'>
                                        {item.icon}
                                    </span>
                                    <span className='transition-all'>
                                        {isHovered && item.name}
                                    </span>

                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
