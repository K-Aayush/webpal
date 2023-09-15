/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles, { layout } from '@/app/style'
import { features } from '@/constants'

interface featurecards {
    title: string,
    content: string,
    index: number
}

const FeatureCard = ({ title, content, index }: featurecards) => {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-2" : "mb-0"} bg-gradient-to-tr from-gray-200 to-gray-100 hover:bg-gradient-to-tr hover:from-gray-300 hover:to-gray-200 `}>
            <div className="flex-1 flex flex-col">
                <h4 className="font-semibold text-slate-900 text-[18px] leading-[23px] mb-1">
                    {title}
                </h4>
                <p className="font-normal text-slate-800 text-[16px] leading-[24px] mb-1">
                    {content}
                </p>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <section
            id="about"
            className={layout.section}
        >
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    We are your IT partners, <br className="sm:block hidden" />
                    We handle projects efficiently.
                </h2>
                <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
                    Webpal, a global IT leader, excels in web, mobile, and online business solutions, known for trustworthiness, quality, and client-focused innovation. Our passion is your success; contact us for exclusive software development services.
                </p>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard
                        key={feature.id}
                        {...feature}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}

export default About