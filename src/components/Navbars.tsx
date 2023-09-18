/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import styles from '@/app/style'
import Link from 'next/link'
import { navVariants } from '../utils/motion'
import { motion } from 'framer-motion'


const Navbars = () => {

  return (
    <div className={`bg-gray-50 ${styles.paddingX} ${styles.flexCenter}  fixed top-0 left-0 w-full z-[50]`}>
      <div className={`${styles.boxWidth}`}>

        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className='w-full flex py-6 justify-between items-center'
        >
          <Link href="/">
            <img
              src="/assets/webpallogo.png"
              alt="webpal"
              className="w-[120px] h-[40px]"
            />
          </Link>

          <ul className="list-none flex justify-end items-center flex-1">
              <li
                className={`cursor-pointer text-[20px] text-gray-800 hover:border-b hover:border-gray-600 hover:text-gray-600`}
              >
                <Link href={`/`}>
                  Go back Home
                </Link>
              </li>
          </ul>
        </motion.nav>

      </div>
    </div>
  )
}

export default Navbars