import React from 'react'
import './About.css'
import { Divider, Timeline } from 'antd'

function About() {
    return (
        <div className="aboutMain">
            <Divider className="aboutHeadding">Experience</Divider>
            <Timeline mode="left">
                <Timeline.Item >Assistant and Associate Professor Materials and Metallurgy Engineering Department NED University of Eng. and Technology, Pakistan. (2007 to 2020) <br /> <a href="http://www.neduet.edu.pk/myd/Index.html" target="_blank">http://www.neduet.edu.pk/myd/Index.html</a></Timeline.Item>
                <Timeline.Item >Senior Instructor/Lecturer Institute of Industrial Electronics Engineering (IIEE).Pakistan Council of Scientific  & Industrial Research (PCSIR) Ministry of <br/> Science  & Technology Government of Pakistan. (2005 to 2007 )<br /><a href="http://www.iiee.edu.pk" target="_blank"> http://www.iiee.edu.pk</a></Timeline.Item>
                <Timeline.Item >Assistant Manager (Technical) Allied Precision Engineering Products Pvt Ltd.  Karachi, Pakistan. (Automotive parts manufacturing) (2003 to 2005) <br /> <a href="http://www.apep.com.pk" target="_blank">http://www.apep.com.pk</a></Timeline.Item>
            </Timeline>
        </div>
    )
}

export default About
