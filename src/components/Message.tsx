/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'

const Message = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    Bulk Messaging Service
                </h2>
                <p className={`${styles.paragraph} max-w-[480px]`}>
                WebPal’s Bulk Messaging Service ensures effective communication. Reach your audience with ease, delivering important updates, promotions, or announcements. Elevate your messaging strategy with WebPal’s reliable and efficient service.
                </p>
                <Link href={'/Message'}>
                    <Button styles="mt-10" text="Learn More" />
                </Link>
            </div>

            <div className={layout.sectionImg}>
                <img
                    src="/assets/bulk messaging logo.png"
                    alt="mobileappdevelopment"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </div>
        </section>
    )
}

export default Message