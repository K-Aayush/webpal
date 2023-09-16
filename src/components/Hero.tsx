/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '@/app/style'

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
                    <h1 className="flex-1 font-semibold text-[52px] text-slate-900 leading-[100px]">
                    An Independent <br className="sm:block hidden"/> {" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300">Modern Business</span>
                    </h1>
                </div>

                <h1
                className="font-semibold text-[52px] text-slate-900 leading-[100px]">
                    Development Company.
                </h1>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                At Webpal, we sculpt your digital dreams into reality with a blend of artistry and precision, ensuring your vision comes to life pixel by pixel.    
                </p>

            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img 
                    src={'/assets/development.png'}
                    alt='development'
                    className='w-[100%] h-[100%] relative z-[5] object-contain'
                />
            </div>

        </section>
    )
}

export default Hero