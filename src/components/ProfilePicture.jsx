import React from 'react'
import styles from '../styles'
import { profilePicture } from '../assets' 

const ProfilePicture = () => (

    <div className='overflow-hidden rounded-full'>
        <img src={profilePicture} alt='Profile Picture' className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]' />
    </div>

)

export default ProfilePicture