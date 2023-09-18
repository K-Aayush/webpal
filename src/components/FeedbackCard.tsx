"use client"

import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { motion } from 'framer-motion';
import { titleVariants } from '../utils/motion'

interface feedbackcard {
    title: string,
    content: string,
    name: string
}

const FeedbackCard = ({ content, name, title }: feedbackcard) => {

    return (
        <motion.div
            variants={titleVariants(0)}
            className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gradient-to-tr from-gray-200 to-gray-100 hover:bg-gradient-to-tr hover:from-gray-300 hover:to-gray-200">
            <div className='object-contain text-cyan-600'>
                <RiDoubleQuotesL size={42} />
            </div>
            <p className="font-normal text-[18px] leading-[32px] text-slate-800 my-10">{content}</p>

            <div className="flex flex-col items-center justify-center">
                <h4 className="font-semibold text-[20px] leading-[32px] text-slate-800">{name}</h4>
                <p className="font-normal text-[16px] leading-[24px] text-slate-600">{title}</p>
            </div>
        </motion.div>
    )
}

export default FeedbackCard