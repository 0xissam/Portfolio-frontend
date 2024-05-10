import React from 'react'
import Welcome from '../components/Welcome'
import Sectiontoo from '../components/Sectiontoo'
import Aboutus from './Aboutus'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'

function Home() {
    return (
        <>
            <Welcome />
            <Sectiontoo />
            <Aboutus />
            <Features />
            <Testimonial />
        </>
    )
}

export default Home