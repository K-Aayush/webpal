/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Website, App, DigitalMarketing, Domain, Chatbot, Erp, CloudComputing, Message } from './index'
import styles from '@/app/style'

const Services = () => {
    return (
        <div id="service">
            <h2 className={`${styles.heading2} flex items-center justify-start`}>Services</h2>
            <Website />
            <App />
            <DigitalMarketing />
            <Domain />
            <Erp />
            <Chatbot />
            <CloudComputing />
            <Message />
        </div>
    )
}

export default Services