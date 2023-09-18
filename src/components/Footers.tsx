"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '@/app/style'
import { motion } from 'framer-motion'
import { delayVariantsy } from '../utils/motion'

const Footers = () => {
    return (
        <motion.div
            variants={delayVariantsy(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={`bg-gray-50 ${styles.flexStart} ${styles.paddingX} py-4`}>
            <div className={`${styles.boxWidth}`}>
                <section>
                    <div className="w-full justify-center items-center pt-6 border-t-[1px] border-gray-700">
                        <p className="font-normal text-[18px] Leading-[27px] text-center text-slate-800">
                            © 2023 Webpal Business Ltd, All right reserved
                        </p>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default Footers