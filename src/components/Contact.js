import React from 'react'
import './Contact.css'
import { Divider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FacebookFilled, WhatsAppOutlined, LinkedinOutlined } from '@ant-design/icons'
function Contact() {
    return (
        <div className="contactMain">
            <Divider className="contactHeadding">Contacts</Divider>
            <div className="contact">
                <p>
                    <FontAwesomeIcon className="qualificationIcon" icon={faPhone} />
                    <a href="tel:+92 21 99264261"> +92 21 99264261</a>
                </p>
                <p>
                    <FontAwesomeIcon className="qualificationIcon" icon={faEnvelope} />
                    <a href="mailto:engrabro@neduet.edu.pk">  engrabro@neduet.edu.pk</a>
                </p>
                <p>
                    <FacebookFilled style={{ fontSize: 25 }} />
                    <a style={{ marginLeft: 15 }} href="https://www.facebook.com/drhussain.abro" target="_blank">www.facebook.com/drhussain.abro</a>
                </p>
                <p>
                    <LinkedinOutlined style={{ fontSize: 25 }} />
                    <a style={{ marginLeft: 15 }} href="https://www.linkedin.com/in/dr-shahid-hussain-abro-19a9b5ab/" target="_blank">https://www.linkedin.com/in/dr-shahid-hussain-abro</a>
                </p>
                <p>
                    <WhatsAppOutlined style={{ fontSize: 25, marginRight: 15 }} />
                    <a href="https://wa.me/+92 317 2998687" target="_blank">+92 317 2998687</a>
                </p>
                <p>
                    <FontAwesomeIcon className="qualificationIcon" icon={faMapMarker} />
                    <a href="https://www.google.com/maps/place/Metallurgical+Department/@24.9331705,67.111806,18.01z/data=!4m8!1m2!2m1!1smetalergy+department+ned+univercity!3m4!1s0x3eb338bec882754b:0xbe63be8c5c3a5332!8m2!3d24.933896!4d67.1117661" target="_blank">Department of Metalurgy NED University Karachi</a>
                </p>
            </div>
        </div>
    )
}

export default Contact
