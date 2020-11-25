import React from 'react'
import './Research.css'
import pic1 from '../images/pic1.jpeg'
import pic2 from '../images/pic2.jpg'
import { Divider, Timeline, Image } from 'antd'



function Research() {
    return (
        <div className="researchMain">
            <Divider className="researchHeadding">My Research Work</Divider>
            <Timeline>
                <Timeline.Item>Google Scholar ID:<a href="https://scholar.google.com/citations?pli=1&authuser=1&user=rSYxsSgAAAAJ" target="_blank"> https://scholar.google.com/citations?pli=1&authuser=1&user=rSYxsSgAAAAJ</a></Timeline.Item>
                <Timeline.Item>Orcid ID: <a href=" https://orcid.org/0000-0001-6019-0350" target="_blank">https://orcid.org/0000-0001-6019-0350</a></Timeline.Item>
                <Timeline.Item>Scopus ID: Scopus Author ID: 57204808330</Timeline.Item>
                <Timeline.Item> Web of Science ID: AAB-3870-2020</Timeline.Item>
            </Timeline>
            <Divider className="researchHeadding">Research Collaboration</Divider>
            <Timeline mode="left">
                <Timeline.Item>Royal Commision for Jubail and Yanbu, Yanbu Industrial College, Kingdom of Saudi Arabia.</Timeline.Item>
                <Timeline.Item>Qassim University, Buraidah, Kingdom of Saudi Arabia.</Timeline.Item>
                <Timeline.Item>Pakistan Council of Scientific and Industrial Research, Ministry of Science and Technology, Karachi, Pakistan.</Timeline.Item>
                <Timeline.Item>National University of Science and Technology (NUST) Islamabad, Pakistan.</Timeline.Item>
                <Timeline.Item>University of Science and Technology Lahore, Pakistan.</Timeline.Item>
                <Timeline.Item>Hussein Engineering Foundry Pvt Ltd Karachi Pakistan.</Timeline.Item>
                <Timeline.Item>Korea Advanced Institute of Science and Technology, KAIST, South Korea.</Timeline.Item>
            </Timeline>
            <Divider className="researchHeadding">Conferences</Divider>
            <Timeline mode="left">
                <Timeline.Item>International symposium on advance materials (ISAM)<a href="http://www.isampk.com.pk/Default.aspx" target="_blank"> http://www.isampk.com.pk/Default.aspx </a></Timeline.Item>
                <Timeline.Item>International Conference on Smart Engineering Materials singapore (ICSEM) <a href="http://www.icsem.org/" target="_blank">http://www.icsem.org/</a></Timeline.Item>
                <Image
                    className="pic"
                    src={pic1}
                />
                <Timeline.Item>International Conference on Advance Materials And Process Engineering <a href="http://www.nedampe.com/" target="_blank">http://www.nedampe.com/</a></Timeline.Item>
                <Image
                    className="pic"
                    src={pic2}
                />
            </Timeline>
        </div>
    )
}

export default Research
