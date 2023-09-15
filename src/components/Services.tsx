/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'

const Services = () => {
    return (
        <div id="service">

            <h2 className={`${styles.heading2} flex items-center justify-start`}>Services</h2>
            <section className={layout.sectionReverse}>
                <div className={layout.sectionImgReverse}>
                    <img
                        src="/assets/websitedesign.png"
                        alt="websitedesign"
                        className="w-[100%] h-[100%] relative z-[5]"
                    />
                </div>

                <div className={layout.sectionInfo}>
                    <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                        Website Develpoment
                    </h2>
                    <p className={`${styles.paragraph} max-w-[480px]`}>
                        Discover Webpal for tailored websites, e-commerce, web apps, SEO, and more. We elevate your online presence with expertise and innovation. Elevate your brand with us today.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Services