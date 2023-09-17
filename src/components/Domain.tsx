"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'
import { delayVariantsx, containerVariants, imageVariants } from '../utils/motion'
import { motion } from 'framer-motion'

const Domain = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2
          variants={delayVariantsx(0.2, "left")}
          className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
          Domain Registration
        </motion.h2>
        <motion.p
          variants={delayVariantsx(0.4, "left")}
          className={`${styles.paragraph} max-w-[480px]`}>
          Your gateway to the online world. We simplify domain registration, securing your unique web address effortlessly. Trust us to manage your digital identity with precision and reliability.
        </motion.p>
        <motion.div
          variants={delayVariantsx(0.6, "left")}
        >
          <Link href={'/Domain'}>
            <Button styles="mt-10" text="Learn More" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={imageVariants(0.3, "right")}
        className={layout.sectionImg}>
        <img
          src="/assets/Domain.png"
          alt="Domain Registration"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </motion.div>
    </motion.section>
  )
}

export default Domain