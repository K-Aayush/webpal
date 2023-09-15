/* eslint-disable @next/next/no-img-element */
import styles from '@/app/style'
import React from 'react'
import { partners } from '../constants'

const Partners = () => {
    return (
        <section
            className={`${styles.flexCenter} flex-col sm:mb-20 mb-6`}
        >
            <h2 className={`${styles.heading2} flex items-center justify-center mb-4`}>Our Partners</h2>
            <div className="flex flex-wrap justify-center">
                {partners.map((partner) => (
                    <div
                        key={partner.id}
                        className={`flex-1 flex justify-center items-center m-3`}
                    >
                        <img
                            src={partner.image}
                            alt="Partner Logo"
                            className="sm:w-[75%] sm:h-[75%] w-[100%] h-[100%]"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Partners