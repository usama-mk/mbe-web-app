import React from 'react'
import HomeCard from '../Components/HomeCard'

export default function Home(props) {
     
    return (
        <div>
             
            <HomeCard user={props} handleLogout={props}/>
        </div>
    )
}
