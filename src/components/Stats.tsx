import React from 'react'
import { stats } from '../constants'
import styles from '@/app/style'

const Stats = () => {
    return (
        <section
            className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
        >
            {stats.map((stat) => (
                <div
                    key={stat.id}
                    className={`flex-1 flex justify-start items-center flex-row m-3`}
                >
                    <h4 className="font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-gray-800">
                        {stat.value}
                    </h4>
                    <p className="font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] ml-3 uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-400">
                        {stat.title}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default Stats