import React from 'react'
import styles from '@/app/style'
import Getstarted from './Getstarted'

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-gradient-to-r from-gray-200 to-gray-100">
                    <p className={`${styles.paragraph}`}>
                        Revving Up Productivity, Unleashing Potential.
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-semibold text-[52px] text-gray-700 leading-[100px]">
                    An Independent <br className="sm:block hidden"/> {" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-200">Modern Business</span> {" "}
                      Development Company
                    </h1>
                    <div className="md:flex hidden md:mr-4 mr-0">
                        <Getstarted />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero