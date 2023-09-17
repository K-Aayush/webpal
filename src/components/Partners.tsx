'use client'

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/app/style';
import { partners } from '../constants';
import { motion } from 'framer-motion';
import { letterVariants, lettercontainerVariants, delayVariantsy, containerVariants } from '../utils/motion'

const Partners = () => {
    const text = "Our Partners";

    const letters = text.split(" ");

    return (
        <section
            className={`${styles.flexCenter} flex-col sm:mb-20 mb-6`}
        >
            <motion.h2
                className={`${styles.heading2} flex items-center justify-center mb-4`}
                variants={lettercontainerVariants}
                initial="hidden"
                whileInView="show"
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        className="mr-[5px]"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                className="flex flex-wrap justify-center">
                {partners.map((partner) => (
                    <motion.div
                        variants={delayVariantsy(0.5)}
                        initial="hidden"
                        whileInView="show"
                        key={partner.id}
                        className={`flex-1 flex justify-center items-center m-3`}
                    >
                        <img
                            src={partner.image}
                            alt="Partner Logo"
                            className="sm:w-[75%] sm:h-[75%] w-[100%] h-[100%]"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Partners;