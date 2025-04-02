import React from 'react'
import { Routes, Route, Navigate, useMatch } from 'react-router-dom'
import PostSection from './PostSection'
import Purchases from './Purchases'

const ContentSection = ({ userData, getUserData }) => {
    const { path,url } = useMatch()
    return (
        <Routes>
            <Route path={path + '/posts'}><PostSection posts={userData?.posts} user_data={userData?.user} getUserData={getUserData} /></Route>
            <Route path={path + '/purchases'}><Purchases purchases={userData?.purchaseDetails}/></Route>
            <Route path={path}> <Navigate to={url + '/posts'} /></Route>
        </Routes>
    )
}

export default ContentSection
