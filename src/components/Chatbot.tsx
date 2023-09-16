/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'

const Chatbot = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    Chat Bot (AI)
                </h2>
                <p className={`${styles.paragraph} max-w-[480px]`}>
                WebPal’s Chatbot AI enhances customer engagement. Our AI-powered chatbots provide personalized interactions, answering queries and streamlining support. Elevate user experiences and boost efficiency with WebPal Chatbot AI.
                </p>
                <Link href={'/Chatbot'}>
                    <Button styles="mt-10" text="Learn More" />
                </Link>
            </div>

            <div className={layout.sectionImg}>
                <img
                    src="/assets/chatbotai.png"
                    alt="Chatbot"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </div>
        </section>
    )
}

export default Chatbot