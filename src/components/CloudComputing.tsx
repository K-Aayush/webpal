/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'

const CloudComputing = () => {
    return (
        <section className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img
                    src="/assets/cloudcomputing.png"
                    alt="cloudcomputing"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    Cloud Computing
                </h2>
                <p className={`${styles.paragraph} max-w-[480px]`}>
                Harness the power of the cloud. Our cloud computing solutions offer scalability, security, and flexibility, enabling your business to thrive in the digital age. Elevate your operations with WebPal Cloud.
                </p>
                <Link href={'/CloudComputing'}>
                    <Button styles="mt-10" text="Learn More" />
                </Link>
            </div>
        </section>
    )
}

export default CloudComputing