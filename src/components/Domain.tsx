/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'

const Domain = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
          Domain Registration
        </h2>
        <p className={`${styles.paragraph} max-w-[480px]`}>
        Your gateway to the online world. We simplify domain registration, securing your unique web address effortlessly. Trust us to manage your digital identity with precision and reliability.
        </p>
        <Link href={'/Domain'}>
          <Button styles="mt-10" text="Learn More" />
        </Link>
      </div>

      <div className={layout.sectionImg}>
        <img
          src="/assets/Domain.png"
          alt="Domain Registration"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  )
}

export default Domain