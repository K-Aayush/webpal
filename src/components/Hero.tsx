/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react'
import styles from '@/app/style'
import { motion } from 'framer-motion'
import { imageVariants, delayVariants, textVariants } from "../utils/motion"

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

            <motion.div
             variants={delayVariants(0.5)}
             initial="hidden"
             whileInView="show"
             viewport={{once: false, amount: 0.25}}
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
                <div
                    className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-gradient-to-r from-gray-200 to-gray-100 mt-20 md:mt-10 sm:mt-0">
                    <p

                        className={`${styles.paragraph}`
                        }>
                        Revving Up Productivity, Unleashing Potential.
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1        
                        className="flex-1 font-semibold text-[52px] text-slate-900 leading-[100px]"

                    >
                        An Independent <br className="sm:block hidden" />{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300">
                            Modern Business
                        </span>
                    </h1>
                </div>

                <h1
                    className="font-semibold text-[52px] text-slate-900 leading-[100px]"

                >
                    Development Company.
                </h1>

                <p
                    className={`${styles.paragraph} max-w-[470px] mt-5`}

                >
                    At Webpal, we sculpt your digital dreams into reality with a blend of artistry and precision, ensuring your vision comes to life pixel by pixel.
                </p>
            </motion.div>

            <motion.div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
                initial="hidden"
                whileInView="show"
                variants={imageVariants}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img
                    src={'/assets/development.png'}
                    alt='development'
                    className='w-[100%] h-[100%] relative z-[5] object-contain'
                />
            </motion.div>
        </section>
    )
}

export default Hero