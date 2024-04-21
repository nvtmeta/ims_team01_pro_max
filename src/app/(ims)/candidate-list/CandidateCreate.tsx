"use client"

import { BreadcrumbItem, Breadcrumbs, Button, Chip, Select, SelectItem } from '@nextui-org/react'
import React from 'react'
import CandidateList from './page'
import { MdOutlineUploadFile } from 'react-icons/md'

const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' }
]
const positions = [
    { label: 'Backend', value: 'backend' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Fullstack', value: 'fullstack' }
]
const skills = [
    { label: 'Nodejs', value: 'Nodejs' },
    { label: 'java', value: 'java' },
    { label: '.net', value: '.net' },
    { label: 'C++', value: 'C++' },
    { label: 'git', value: 'git' }
]
const statusList = [
    { label: 'Open', value: 'open' },
    { label: 'Banned', value: 'banned' },
]
const highestLevel = [
    { label: 'High school,', value: 'high-school,' },
    { label: 'Bachelor’s Degree,', value: 'Bachelor,' },
    { label: 'Master Degree,,', value: 'PhD,' },
]

const recruiters = [
    { label: 'Nguyễn Công Thắng', value: 'Thắng cool boy' },
]

const CandidateCreate = ({ setDisplayPage }: any) => {
    return (
        <div className='mt-10 '>
            <Breadcrumbs className='mx-6 mb-4' variant='solid' radius='full'>
                <BreadcrumbItem onClick={() => setDisplayPage("list")} size='lg' className='font-bold'>Candidate List</BreadcrumbItem>
                <BreadcrumbItem size='lg' className='font-bold'>Create candidate</BreadcrumbItem>
            </Breadcrumbs>
            {/* personal info */}
            <form className='mx-10 p-6 rounded-xl bg-white'>
                <p className='text-blue-500 font-medium mb-4 text-xl'>I. Personal Information</p>
                <div className='flex justify-between'>
                    {/* left */}
                    <div>
                        <div className='flex items-center'>
                            <label className='w-32 font-medium' htmlFor='fullName'>Full Name {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <input
                                required
                                name='fullName'
                                placeholder="Type a name..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                            />
                        </div>
                        <div className='flex items-center '>
                            <label className='w-32 font-medium' htmlFor='dob'>D.O.B {" "}
                            </label>
                            <input
                                type='date'
                                max={`${new Date().toISOString().split('T')[0]}`}
                                name='dob'
                                placeholder="Type a name..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                            />
                        </div>
                        <div className='flex items-center '>
                            <label className='w-32 font-medium' htmlFor='phone'>Phone number{" "}
                            </label>
                            <input
                                type='number'
                                name='phone'
                                placeholder="Type a number..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                            />
                        </div>

                    </div>
                    {/* right */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center'>
                            <label className='w-20 font-medium' htmlFor='email'>Email {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <input
                                type='email'
                                name='email'
                                placeholder="Type a email..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                            />
                        </div>
                        <div className='flex items-center '>
                            <label className='w-20 font-medium' htmlFor='address'>Address {" "}
                            </label>
                            <input
                                name='address'
                                placeholder="Type a name..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                            />
                        </div>
                        <div className='flex items-center'>
                            <label className='w-24 font-medium' htmlFor='gender'>Gender{" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"
                                className="max-w-xs"
                                label="Select a gender"
                            >
                                {genders.map((gender) => (
                                    <SelectItem key={gender.value} value={gender.value}>
                                        {gender.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>

                    </div>
                </div>
                {/* II. professional information */}

                <p className='text-blue-500 mt-8 text-xl font-medium mb-4'>
                    II. Professional information</p>
                <div className='flex justify-between'>
                    {/* left */}
                    <div>
                        <div className='flex items-center'>
                            <label className='w-32 font-medium' htmlFor='fullName'>CV Attachment {" "}
                            </label>
                            <div className="flex items-center justify-between w-96 bg-gray-100 p-4 rounded-md">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <label htmlFor="cvAttachment" className="flex items-center cursor-pointer">
                                    <MdOutlineUploadFile />
                                    <input id="cvAttachment" type="file" className="hidden" />
                                </label>
                            </div>

                        </div>
                        <div className='flex items-center mt-4'>
                            <label className='w-32 font-medium' htmlFor='position'>Position {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"
                                label="Select a position"
                                className="max-w-xs"
                            >
                                {positions.map((position) => (
                                    <SelectItem key={position.value} value={position.value}>
                                        {position.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>

                        <div className='flex items-center mt-4'>
                            <label className='w-32 font-medium' htmlFor='phone'>Skills{" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                items={skills}
                                variant="bordered"
                                isMultiline={true}
                                selectionMode="multiple"
                                placeholder="Select a skill"
                                labelPlacement="outside"
                                classNames={{
                                    base: "max-w-xs",
                                    trigger: "min-h-12 py-2",
                                }}
                                renderValue={(items) => {
                                    return (
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((item: any) => (
                                                <Chip color='primary' key={item.value}>{item.data.label}</Chip>
                                            ))}
                                        </div>
                                    );
                                }}
                            >
                                {(user: any) => (
                                    <SelectItem key={user.value} >
                                        <div className="flex gap-2 items-center">
                                            <div className="flex flex-col">
                                                <span className="text-small">{user.label}</span>
                                            </div>
                                        </div>
                                    </SelectItem>
                                )}
                            </Select>
                        </div>
                        <div className='flex items-center mt-6'>
                            <label className='w-32 font-medium' htmlFor='recruiter'>Recruiter {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"
                                label="Select a status"
                                className="max-w-xs"
                            >
                                {recruiters.map((recruiter) => (
                                    <SelectItem key={recruiter.value} value={recruiter.value}>
                                        {recruiter.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <Button className='block mt-4 ml-32'>
                            Assign me
                        </Button>
                    </div>
                    {/* right */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center'>
                            <label className='w-28 font-medium' htmlFor='note'>Note: {" "}
                            </label>
                            <input
                                maxLength={500}
                                type='text'
                                name='note'
                                placeholder="Type a note..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                            />
                        </div>
                        <div className='flex items-center mt-4'>
                            <label className='w-32 font-medium' htmlFor='position'>Status {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"
                                label="Select a status"
                                className="max-w-xs"
                            >
                                {statusList.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <div className='flex items-center'>
                            <label className='w-32 font-medium' htmlFor='gender'>Year of Experience {" "}
                            </label>
                            <input
                                type='number'
                                name='note'
                                placeholder="Type a number..."
                                className="border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                            />
                        </div>
                        <div className='flex items-center mt-4'>
                            <label className='w-32 font-medium' htmlFor='position'>Highest level {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"

                                label="Select highest level"
                                className="max-w-xs"
                            >
                                {highestLevel.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>


                {/* submit */}
                <div className="flex justify-center mt-10 space-x-2">
                    <Button type='submit' size='lg' className="grid  cursor-pointer select-none rounded-md border 
                                    bg-gradient-to-r from-sky-400 to-blue-500 bg-indigo-500 py-2 px-5 
                                    text-center align-middle text-sm text-white shadow font-bold
                                    hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600
                                 focus:bg-indigo-600 focus:text-white focus:shadow-none">
                        Submit
                    </Button>
                    <Button onPress={() => setDisplayPage("list")} size='lg' className="grid  cursor-pointer select-none rounded-md 
                                         py-2 px-5 
                                    text-center align-middle text-sm text-black hover:bg-slate-100   font-bold
                                      focus:shadow-none">Cancel</Button>
                </div>

            </form>
        </div>
    )
}

export default CandidateCreate

