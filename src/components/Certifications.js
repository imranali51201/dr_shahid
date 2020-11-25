import React from 'react';
import { Table, Divider } from 'antd';
import './Certifications.css'

function Certifications() {
    const columns = [
        {
            title: 'Institute & Country',
            dataIndex: 'instituteCountry',
        },
        {
            title: 'Training Title',
            dataIndex: 'trainingTitle',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        }
    ];
    const data = [
        {
            key: '1',
            instituteCountry: 'Bernice McCarthy, Paul Mark(USA)',
            trainingTitle: 'Teaching around the 4MATCycle.',
            duration: '5 days, 45 credit hours',
            description: 'Mastering Learning Design.'
        },
        {
            key: '2',
            instituteCountry: 'Institute of Business Administration IBA AMAN CED university of Karachi Pakistan',
            trainingTitle: 'Entrepreneurship Workshop',
            duration: '2 Days',
            description: 'designing, launching, and running a new business'
        },
        {
            key: '3',
            instituteCountry: 'Metkon Engineering Bursa(Turkey). www.metkon.com',
            trainingTitle: 'Metallographic Techniques',
            duration: '07 Days',
            description: 'To investigate the Microstructures of Metals'
        },
        {
            key: '4',
            instituteCountry: 'Alser Teknik Ankara(Turkey) www.prothermfurnaces.com',
            trainingTitle: 'Heat Treatment Furnaces Calibration And Maintenance',
            duration: '07 Days',
            description: 'Heat treatment Furnaces'
        },
        {
            key: '5',
            instituteCountry: 'Pak-Swiss Training Center (PSTC) Karachi Pakistan. www.pstcpk.com',
            trainingTitle: 'Dies & Moulds Technology',
            duration: '02 Months',
            description: ' Manufacturing methods of Dies and Moulds'
        },
        {
            key: '6',
            instituteCountry: 'United Nations Development Programme (UNDP) & Energy Conservation Center Pakistan. www.undp.org',
            trainingTitle: 'Instrumented Tune Up Services Course',
            duration: '01 Month',
            description: ' Computerized Tune up of automotives'
        },
        {
            key: '7',
            instituteCountry: 'N.E.D University of Egg & Technology Karachi. www.neduet.edu.pk',
            trainingTitle: 'Corrosion Protection Management & ICCP Design Course',
            duration: '03 Days',
            description: ' Corrosion & its protection through ICCP.'
        },
    ];

    return (
        <div className="certificationsMain">
            <Divider className="certificatesHeadding">Certificates</Divider>
            <Table
                bordered
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default Certifications