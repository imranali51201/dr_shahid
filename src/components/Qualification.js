import React from 'react'
import './Qualification.css'
import { Space, Divider } from 'antd'
import { CalendarTwoTone, EnvironmentTwoTone, BookTwoTone } from '@ant-design/icons'
import kaistLogo from '../images/kaistLogo.png'
import nedLogo from '../images/nedlogo.png'
import mehranLogo from '../images/mehranlogo.png'
function Qualification() {
    return (
        <div className="qualificationMain">
            <Divider className="qualificationHeadding">Qualification</Divider>
            <Space direction="vertical">
                <Divider className="qualificationTitle" ><h2>PhD</h2></Divider>
                <div>
                    <p>
                        <BookTwoTone />
                                Doctorate of Material Science and Engineering
                    </p>
                    <p>
                        <img src={kaistLogo} alt="kaist logo" style={{ height: 40 }} />
                        <a href="https://www.kaist.ac.kr/en/" target="_blank">
                            From Korea Advanced Institute of Science and Technology
                       </a>
                    </p>
                    <p>
                        <CalendarTwoTone />
                                From Sep 2011 to Feb 2016
                     </p>
                    <p>
                        <EnvironmentTwoTone />
                                In South Korea
                 </p>
                </div>
                <Divider className="qualificationTitle"><h2> Master of Engineering </h2></Divider>
                <div>

                    <p>
                        <BookTwoTone />
                    Masters in Material Engineering
                    </p>
                    <p>
                        <img src={nedLogo} alt="kaist logo" style={{ height: 40 }} />
                        <a href="https://www.neduet.edu.pk/" target="_blank">
                            From NED University of Engineering and Tecnology
                        </a>
                    </p>
                    <p>
                        <CalendarTwoTone />
                    From Jun 2007 to Jan 2010
                     </p>
                    <p>
                        <EnvironmentTwoTone />
                    In Pakistan
                 </p>
                </div>
                <Divider className="qualificationTitle"><h2> Bachlors of Engineering</h2></Divider>
                <div>
                    <p>
                        <BookTwoTone />
                    Bachelors of Engineering in <b> Metallurgy</b>
                    </p>
                    <p>
                        <img src={mehranLogo} alt="kaist logo" style={{ height: 40 }} />
                        <a href="https://www.muet.edu.pk/" target="_blank">
                            From Mehran University of Engineering & Tecnology
                    </a>
                    </p>
                    <p>
                        <CalendarTwoTone />
                    From Jan 1998 to Jan 2003
                     </p>
                    <p>
                        <EnvironmentTwoTone />
                    In Pakistan
                 </p>
                </div>
            </Space>
        </div >
    )
}

export default Qualification
