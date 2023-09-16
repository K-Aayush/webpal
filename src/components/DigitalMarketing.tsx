/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'

const DigitalMarketing = () => {
  return (
    <section className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img
                    src="/assets/Digitalmarketing.png"
                    alt="DigitalMarketing"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    Digital Marketing
                </h2>
                <p className={`${styles.paragraph} max-w-[480px]`}>
                Elevate your online presence with WebPal’s digital marketing services. From SEO to social media management, we tailor strategies that boost your brand’s visibility and engagement for success.
                </p>
                <Link href={'/DigitalMarketing'}>
                    <Button styles="mt-10" text="Learn More" />
                </Link>
            </div>
        </section>
  )
}

export default DigitalMarketing