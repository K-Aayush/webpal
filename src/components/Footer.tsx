"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '@/app/style'
import { footerLinks } from '@/constants'
import { motion } from 'framer-motion'
import { delayVariantsy } from '../utils/motion'
import Link from 'next/link'

const Footer = () => {
    return (
        <motion.div
            variants={delayVariantsy(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={`bg-gray-50 ${styles.flexStart} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>

                <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
                    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                        <div className="flex-1 flex-col justify-start mr-10">
                            <img
                                src="/assets/webpallogo.png"
                                alt="webpallogo"
                                className='w-[266px] h-[72px] object-contain'
                            />
                            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                                A digital product powerhouse with a knack for strategy.
                            </p>
                        </div>

                        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap sm:mt-0 mt-10">
                            {footerLinks.map((footerlink) => (
                                <div key={footerlink.title} className="flex flex-col sm:my-0 my-4 m-w-[150px]">
                                    <h4 className="font-medium text-[18px] Leading-[27px] text-slate-800">
                                        {footerlink.title}
                                    </h4>
                                    <ul className="list-none mt-4">
                                        {footerlink.links.map((link, index) => (
                                            <li
                                                key={link.name}
                                                className={`font-normal text-[16px] leading-[24px] text-gray-800 hover:border-b hover:border-gray-600 hover:text-gray-600 cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}
                                            >
                                                <Link href={`#home`}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

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

export default Footer