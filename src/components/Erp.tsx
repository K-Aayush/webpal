/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'

const Erp = () => {
    return (
        <section className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img
                    src="/assets/erp logo.png"
                    alt="Erp"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    ERP Software
                </h2>
                <p className={`${styles.paragraph} max-w-[480px]`}>
                WebPal’s ERP software streamlines your business operations. With integrated tools for finance, HR, and more, we empower your organization to achieve efficiency, transparency, and growth. Elevate your business with WebPal ERP.
                </p>
                <Link href={'/Erp'}>
                    <Button styles="mt-10" text="Learn More" />
                </Link>
            </div>
        </section>
    )
}

export default Erp