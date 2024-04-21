"use client"


import { Avatar, BreadcrumbItem, Breadcrumbs, Chip, Tooltip } from '@nextui-org/react'
import React, { useState } from 'react'
import CandidateList from './CandidateList'
import CandidateCreate from './CandidateCreate'

const CandidatePage = () => {

    const [displayPage, setDisplayPage] = useState('list')
    return (
        <div>
            {displayPage == "list" && <CandidateList setDisplayPage={setDisplayPage} />}
            {displayPage == "ADD" && <CandidateCreate setDisplayPage={setDisplayPage} />}
        </div>
    )
}

export default CandidatePage