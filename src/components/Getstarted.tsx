import styles from '@/app/style'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Getstarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-tl from-cyan-800 to-cyan-200 p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-gray-50 w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-medium text-[18px] leading-[23px] mr-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300">
                        Get
                    </span>
                </p>
                <FiArrowUpRight size={20} />
            </div>
            <p className="font-medium text-[18px] leading-[23px]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300">
                        Started
                    </span>
                </p>
        </div>
    </div>
  )
}

export default Getstarted