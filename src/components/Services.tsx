/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Website, App, DigitalMarketing, Domain, Chatbot, Erp, CloudComputing, Message } from './index'
import styles from '@/app/style'

const Services = () => {
    return (
        <div id="service">
            <h2 className={`${styles.heading2} flex items-center justify-start`}>What Services Do We Provide?</h2>
            <Website />
            <App />
            <DigitalMarketing />
            <Domain />
            <CloudComputing />
            <Chatbot />
            <Erp />
            <Message />
        </div>
    )
}

export default Services