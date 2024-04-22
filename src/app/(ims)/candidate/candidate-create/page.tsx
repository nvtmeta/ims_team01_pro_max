"use client"

import { BreadcrumbItem, Breadcrumbs, Button, Chip, Select, SelectItem } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { MdOutlineUploadFile } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { fetchUserList } from '@/api/UserApi'
import { CandidateInterfaceCreate, RecruiterInterface } from '@/interface/CandidateInterface'
import { useForm } from 'react-hook-form'
import messages from '@/messages/messages'
import { fetchCandidatePost } from '@/api/CandidateApi'
import toast from 'react-hot-toast'

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



const CandidateCreate = () => {
    const router = useRouter();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()


    useEffect(() => {
        handleFetchRecruiters()
    }, [])

    const [recruiters, setRecruiter] = useState<RecruiterInterface[]>([])
    const handleFetchRecruiters = async () => {
        const data = await fetchUserList()
        console.log("data", data)
        setRecruiter(data)
    }

    const handlePostCandidate = async (dataForm: CandidateInterfaceCreate) => {
        console.log("dataForm", dataForm)
        // const result = await fetchCandidatePost(dataForm)
        toast.success(messages.ME012)
        router.push('/candidate/candidate-list')
    }

    return (
        <div className='mt-10 '>
            <Breadcrumbs className='mx-6 mb-4' variant='solid' radius='full'>
                <BreadcrumbItem onClick={() => router.push("/candidate/candidate-list")} size='lg' className='font-bold'>Candidate List</BreadcrumbItem>
                <BreadcrumbItem size='lg' className='font-bold'>Create candidate</BreadcrumbItem>
            </Breadcrumbs>
            {/* personal info */}
            <form onSubmit={handleSubmit((data) => handlePostCandidate(data as CandidateInterfaceCreate))} className='mx-10 p-6 rounded-xl bg-white'>
                <p className='text-blue-500 font-medium mb-4 text-xl'>I. Personal Information</p>
                <div className='flex justify-between'>
                    {/* left */}
                    <div>
                        <div className='flex items-center'>
                            <label className='w-32 font-medium' htmlFor='fullName'>Full Name {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <input
                                placeholder="Type a name..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                                {...register("fullName", { required: "FullName is required" })}
                                aria-invalid={errors.fullName ? "true" : "false"}
                            />
                        </div>
                        {errors.fullName && <p role="alert" className='text-red-500 ml-36 mt-3'>{messages.ME002}</p>}
                        <div className='flex items-center '>
                            <label className='w-32 font-medium' htmlFor='dob'>D.O.B {" "}
                            </label>
                            <input
                                type='date'
                                max={`${new Date().toISOString().split('T')[0]}`}
                                placeholder="Type a name..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                                aria-invalid={errors.dob ? "true" : "false"}
                                {...register("dob", { required: "DOB is required" })}
                            />
                        </div>
                        {errors.dob && <p role="alert" className=' text-red-500 ml-36 mt-3'>{messages.ME002}</p>}
                        <div className='flex items-center '>
                            <label className='w-32 font-medium' htmlFor='phone'>Phone number{" "}
                            </label>
                            <input
                                type='number'
                                placeholder="Type a number..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                                aria-invalid={errors.phone ? "true" : "false"}
                                {...register("phone", { required: "Phone is required" })}
                            />
                        </div>
                        {errors.phone && <p role="alert" className=' text-red-500 mt-3 ml-36'>{messages.ME002}</p>}

                    </div>
                    {/* right */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center'>
                            <label className='w-28 font-medium' htmlFor='email'>Email {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <input
                                type='email'
                                placeholder="Type a email..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                                aria-invalid={errors.email ? "true" : "false"}
                                {...register("email", { required: "Email is required" })}
                            />
                        </div>
                        {errors.email && <p role="alert" className=' text-red-500 ml-32'>{messages.ME002}</p>}
                        <div className='flex items-center '>
                            <label className='w-28 font-medium' htmlFor='address'>Address {" "}
                            </label>
                            <input
                                placeholder="Type a name..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                                aria-invalid={errors.address ? "true" : "false"}
                                {...register("address", { required: "Address is required" })}
                            />
                        </div>
                        {errors.address && <p role="alert" className='text-red-500 ml-32'>{messages.ME002}</p>}
                        <div className='flex items-center'>
                            <label className='w-32 font-medium' htmlFor='gender'>Gender{" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"
                                className="max-w-xs"
                                label="Select a gender"
                                {...register("gender", { required: "Gender is required" })}
                                aria-invalid={errors.gender ? "true" : "false"}
                            >
                                {genders.map((gender) => (
                                    <SelectItem key={gender.value} value={gender.value}>
                                        {gender.label}
                                    </SelectItem>
                                ))}

                            </Select>
                        </div>
                        {errors.gender && <p role="alert" className=' text-red-500 ml-32'>{messages.ME002}</p>}

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
                                    <input id="cvAttachment" type="file" className="hidden"
                                        {...register("cvAttachment", { required: "CV Attachment is required" })}
                                        aria-invalid={errors.cvAttachment ? "true" : "false"}
                                    />
                                </label>
                            </div>
                        </div>
                        {errors.cvAttachment && <p role="alert" className=' text-red-500 ml-32 mt-2'>{messages.ME002}</p>}
                        <div className='flex items-center mt-4'>
                            <label className='w-32 font-medium' htmlFor='position'>Position {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"
                                label="Select a position"
                                className="max-w-xs"
                                {...register("position", { required: "Position is required" })}
                                aria-invalid={errors.position ? "true" : "false"}
                            >
                                {positions.map((position) => (
                                    <SelectItem key={position.value} value={position.value}>
                                        {position.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        {errors.position && <p role="alert" className=' text-red-500 ml-32 mt-2'>{messages.ME002}</p>}

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
                                {...register("skills", { required: "Skills is required" })}
                                aria-invalid={errors.skills ? "true" : "false"}
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
                        {errors.skills && <p role="alert" className=' text-red-500 ml-32 mt-2'>{messages.ME002}</p>}
                        <div className='flex items-center mt-6'>
                            <label className='w-32 font-medium' htmlFor='recruiter'>Recruiter {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"
                                label="Select a status"
                                className="max-w-xs"
                            >
                                {recruiters?.map((recruiter) => (
                                    <SelectItem key={recruiter.id} value={recruiter.id}>
                                        {recruiter.fullName}
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
                                placeholder="Type a note..."
                                className="ml-4 border-1 p-3 mt-3
                                   sm:mr-4 sm:mb-0 mb-2 w-96 rounded-md  
                                 outline-none ring-blue-600 focus:ring-1 "
                                {...register("note", { required: "Note is required", maxLength: 500 })}
                                aria-invalid={errors.note ? "true" : "false"}
                            />
                        </div>
                        {errors.note && <p role="alert" className=' text-red-500 ml-32 mt-2'>{messages.ME002}</p>}
                        <div className='flex items-center mt-4'>
                            <label className='w-32 font-medium' htmlFor='position'>Status {" "}
                                <span className='text-red-500 '>*</span>
                            </label>
                            <Select
                                variant="bordered"
                                label="Select a status"
                                className="max-w-xs"
                                {...register("status", { required: "Status is required" })}
                                aria-invalid={errors.status ? "true" : "false"}
                            >
                                {statusList.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        {errors.status && <p role="alert" className=' text-red-500 ml-32 mt-2'>{messages.ME002}</p>}
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
                                {...register("highestLevel", { required: "Highest level is required" })}
                            >
                                {highestLevel.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        {errors.highestLevel && <p role="alert" className=' text-red-500 ml-32 mt-2'>{messages.ME002}</p>}
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
                    <Button onPress={() => router.push("/candidate/candidate-list")} size='lg' className="grid  cursor-pointer select-none rounded-md 
                                         py-2 px-5 
                                    text-center align-middle text-sm text-black hover:bg-slate-100   font-bold
                                      focus:shadow-none">Cancel</Button>
                </div>

            </form>
        </div>
    )
}

export default CandidateCreate

