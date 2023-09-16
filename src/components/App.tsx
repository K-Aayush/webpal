/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'

const App = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    Mobile App Develpoment
                </h2>
                <p className={`${styles.paragraph} max-w-[480px]`}>
                    Transforming ideas into high-performance mobile apps. Our expert team offers end-to-end services, crafting iOS, Android, and cross-platform solutions that drive your business forward. Your vision, our expertise.
                </p>
                <Link href={'/App'}>
                    <Button styles="mt-10" text="Learn More" />
                </Link>
            </div>

            <div className={layout.sectionImg}>
                <img
                    src="/assets/mobile app logo.png"
                    alt="mobileappdevelopment"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </div>

        </section>
    )
}

export default App