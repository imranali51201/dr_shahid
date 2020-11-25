import React from 'react'
import './Home.css'
import {CheckOutlined}from '@ant-design/icons'
// import ProfilePic from '../images/pic.png'
import ProfilePic from '../images/picture.jpg'
function Home() {
    return (
        <div className="homeMain">
            <ul className="homeIntroduction" >
                <img className="profilePic" src={ProfilePic} alt="dgffg" align="left" />
                <li><CheckOutlined className="icon" />Hi! My name is <b> Dr. Shahid Hussain Abro. </b> </li>
                <li><CheckOutlined className="icon" />I am from Pakisan,</li>
                <li><CheckOutlined className="icon" />And i live in Karachi.</li>
                <li><CheckOutlined className="icon" />I am a Professor at NED University, Department of Materials and Metallurgy Engineering,</li>
                <li><CheckOutlined className="icon" />And my major is to teach my students with honour and sincerity.</li>
                <li><CheckOutlined className="icon" />I also like to innovate new engineering  and scientific research services.</li>
                <li><CheckOutlined className="icon" />I have also national and international research  collaboration with universities and institutes.</li>
            </ul>
        </div>
    )
}

export default Home
