"use client"

import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { GrView } from 'react-icons/gr'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdKeyboardArrowDown, MdOutlineDelete } from 'react-icons/md'
import { BreadcrumbItem, Breadcrumbs, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Pagination } from '@nextui-org/react'

const listForms = [
    {
        name: "Tim cook", email: "Timcook@gmail.com", phone: "03242304", current_position: "CEO",
        owner_hr: "Steve job", status: "Waiting for interview", action: ""
    }

]
const CandidateList = ({ setDisplayPage }: any) => {


    return (
        <>
            <Breadcrumbs className='mx-6 ' variant='solid' radius='full'>
                <BreadcrumbItem onClick={() => setDisplayPage("list")} size='lg' className='font-bold'>Candidate List</BreadcrumbItem>
            </Breadcrumbs>
            <div className='m-6 bg-white rounded-2xl p-3 flex items-center justify-between gap-2'>
                <div className='flex gap-2'>
                    <Input
                        size='lg'
                        isClearable
                        radius="lg"
                        className='w-96 bg-slate-100 rounded-xl'
                        placeholder="Type to search..."
                        startContent={
                            <SearchIcon className="text-black/50 mb-0.5   pointer-events-none flex-shrink-0" />
                        }
                    />
                    <Dropdown>
                        <DropdownTrigger>
                            <Button size='lg' className='bg-slate-100 p-3 w-64 justify-between rounded-xl flex gap-2 items-center'>
                                <p className='font-medium'>Status</p>
                                <MdKeyboardArrowDown className='text-4xl font-bold' />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">New file</DropdownItem>
                            <DropdownItem key="copy">Copy link</DropdownItem>
                            <DropdownItem key="edit">Edit file</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    {/* search */}
                    <Button size='lg' className=' font-medium p-4 bg-gray-500 text-white '>
                        Search
                    </Button>
                </div>

                {/* search */}
                <Button onPress={() => setDisplayPage("ADD")} size='lg' className='bg-gradient-to-r w-44 from-sky-400 to-blue-500 font-medium p-4 text-white '>
                    Add new
                </Button>
            </div>
            <div className='bg-white p-10 m-6 rounded-3xl'>
                <table className="w-full  ">
                    <thead>
                        <tr className="bg-gradient-to-r rounded-xl overflow-hidden from-sky-500 via-blue-500 to-indigo-500 text-left text-xs
                             font-semibold uppercase tracking-widest text-white">
                            <th className="px-5 py-3 rounded-tl-lg">Name</th>
                            <th className="px-5 py-3">Email</th>
                            <th className="px-5 py-3">Phone No.</th>
                            <th className="px-5 py-3">Current Position</th>
                            <th className="px-5 py-3">Owner HR</th>
                            <th className="px-5 py-3">Status</th>
                            <th className="px-5 py-3 rounded-tr-lg">Action</th>
                            {/* <th className="px-5 py-3">Created at</th>
            <th className="px-5 py-3">Status</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-gray-500 ">
                        {listForms?.map((item: any, index: any) => {

                            return (
                                <tr className={`hover:border-slate-400 border-2 cursor-pointer  `}>
                                    {/* name */}
                                    <td className="border-b border-gray-200   text-sm ">
                                        <p className="font-medium  px-2 py-4 text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400  text-transparent bg-clip-text">
                                            {item?.name}
                                        </p>
                                    </td>

                                    {/* phone */}
                                    <td className=" border-b border-gray-200   gap-3 justify-start  text-sm ">
                                        <p className="font-medium   px-2 py-4 text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                            {item?.phone}
                                        </p>
                                    </td>
                                    {/* email */}
                                    <td className="border-b border-gray-200  gap-3 justify-start   text-sm ">
                                        <p className="font-medium   px-2 py-4 text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                            {item?.email}
                                        </p>
                                    </td>


                                    {/* current_position */}
                                    <td className=" border-b border-gray-200   text-sm ">

                                        <p className="font-medium   px-2 py-4 text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                            {item?.current_position}
                                        </p>
                                    </td>
                                    {/* owner-Hr */}
                                    <td className=" border-b border-gray-200   text-sm ">
                                        <p className="font-medium   px-2 py-4 text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                            {item?.owner_hr}
                                        </p>
                                    </td>

                                    {/* status */}
                                    <td className=" border-b border-gray-200   text-sm ">
                                        <p className="font-medium  px-2 py-4  text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                            {item?.status}
                                        </p>
                                    </td>
                                    {/* updated date*/}
                                    <td className='flex  py-4 items-center justify-center gap-3'>
                                        <GrView className='text-2xl text-blue-500 hover:scale-90 transition-all' />
                                        <FaEdit className='text-2xl text-blue-500 hover:scale-90 transition-all' />
                                        <MdOutlineDelete className='text-2xl text-blue-500 hover:scale-90 transition-all' />
                                    </td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>

                {/* pagination */}
                <Pagination className='mt-10 flex justify-center' total={10} initialPage={1} />

            </div>
        </>
    )
}

export default CandidateList


export const SearchIcon = (props: any) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

