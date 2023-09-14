/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import styles from '@/app/style'
import { navLinks } from '@/constants'
import menu from '../../public/assets/menu.png'
import close from '../../public/assets/close.png'
import Link from 'next/link'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`bg-gray-50 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <nav className='w-full flex py-6 justify-between items-center navbar'>

          <img
            src="/assets/webpallogo.png"
            alt="webpal"
            className="w-[120px] h-[40px]"
          />

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] text-gray-800 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              >
                <Link href={`${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
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
                className={`cursor-pointer text-[16px] text-gray-800 ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <Link href={`${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
            </div>
          </div>

        </nav>

      </div>
    </div>
  )
}

export default Navbar