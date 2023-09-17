"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'
import { delayVariantsx, containerVariants, imageVariants } from '../utils/motion'
import { motion } from 'framer-motion'

const Erp = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={layout.sectionReverse}>
            <motion.div
                variants={imageVariants(0.3, "left")}
                className={layout.sectionImgReverse}>
                <img
                    src="/assets/erp logo.png"
                    alt="Erp"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </motion.div>

            <div className={layout.sectionInfo}>
                <motion.h2
                    variants={delayVariantsx(0.2, "right")}
                    className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    ERP Software
                </motion.h2>
                <motion.p
                    variants={delayVariantsx(0.4, "right")}
                    className={`${styles.paragraph} max-w-[480px]`}>
                    WebPal’s ERP software streamlines your business operations. With integrated tools for finance, HR, and more, we empower your organization to achieve efficiency, transparency, and growth. Elevate your business with WebPal ERP.
                </motion.p>
                <motion.div
                    variants={delayVariantsx(0.6, "right")}
                >
                    <Link href={'/Erp'}>
                        <Button styles="mt-10" text="Learn More" />
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Erp