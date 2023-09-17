/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useRef, useEffect } from 'react'
import styles from '@/app/style'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { navVariants } from '../utils/motion'
import { motion } from 'framer-motion'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`bg-gray-50 ${styles.paddingX} ${styles.flexCenter}  fixed top-0 left-0 w-full z-[50]`}>
      <div className={`${styles.boxWidth}`}>

        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className='w-full flex py-6 justify-between items-center'
        >
          <Link href="#home">
            <img
              src="/assets/webpallogo.png"
              alt="webpal"
              className="w-[120px] h-[40px]"
            />
          </Link>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] text-gray-800 hover:border-b hover:border-gray-600 hover:text-gray-600 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              >
                <Link href={`#${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className={`sm:hidden flex flex-1 justify-end items-center`} ref={menuRef}>
            <img
              src={toggle ? '/assets/close.png' : '/assets/menu.png'}
              alt={toggle ? 'Close Menu' : 'Open Menu'}
              className="text-black w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-tr from-slate-200 to-slate-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] text-gray-800 hover:border-b hover:border-gray-600 hover:text-gray-600  ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                  >
                    <Link href={`#${nav.id}`}>
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </motion.nav>

      </div>
    </div>
  )
}

export default Navbar