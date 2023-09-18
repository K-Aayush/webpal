"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '../style'
import Navbars from '@/components/Navbars'
import { motion } from "framer-motion"
import { containerVariants, delayVariantsy } from "../../utils/motion"


const DigitalMarketing = () => {
  return (
    <main className="bg-gray-50 w-full overflow-hidden mt-10">
      <div className={`bg-gray-50 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbars />
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={`flex flex-col ${styles.paddingY}`}>
            <div className={`${layout.sectionInfo}`}>
              <motion.div
                variants={delayVariantsy(0.2)}
                initial="hidden"
                whileInView="show"
              >
                <h2
                  className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Digital Marketing Services
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                  In today’s digital age, a strong online presence is non-negotiable. At Webpal, we specialize in digital marketing strategies that not only boost your online visibility but also drive real results for your business. When you partner with us, you gain access to a team of digital marketing experts who are committed to taking your brand to new heights.
                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.4)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Why Choose Us for Digital Marketing?
                </h2>
                <ul className='flex flex-col gap-5'>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Proven Track Record:</span>  We have a history of delivering measurable results for businesses of all sizes and industries. Our success stories speak for themselves, showcasing our ability to increase brand awareness, drive traffic, and generate leads.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Customized Strategies:</span> One size doesn’t fit all in digital marketing. We tailor our strategies to your unique goals and target audience. Whether you need SEO, social media marketing, PPC, content marketing, or a combination, we’ve got you covered.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Data-Driven Approach:</span> We make decisions based on data, not guesswork. Our team constantly analyzes and optimizes campaigns to ensure you’re getting the best ROI. We provide transparent reports, so you always know where your marketing dollars are going.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Creative Content:</span> Content is king in the digital world. Our skilled content creators and designers craft compelling, engaging content that resonates with your audience and drives conversions.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Social Media Mastery:</span> We understand the power of social media. Our social media experts will help you create a strong presence on platforms that matter most to your business, engaging with your audience and building brand loyalty.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">SEO Expertise:</span> Want to rank higher on search engines? Our SEO specialists employ cutting-edge techniques to improve your website’s visibility, ensuring that your target audience finds you when they search for relevant keywords.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Affordable Packages:</span> We offer flexible and affordable digital marketing packages, making our services accessible to businesses of all sizes. You get top-notch expertise without breaking the bank.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Continuous Learning:</span> The digital landscape is constantly evolving. Our team is dedicated to staying up-to-date with the latest trends and technologies, ensuring that your digital marketing strategies remain effective in a rapidly changing environment.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.6)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                Achieve Digital Success with Webpal
                </h2>
                <p className={`${styles.paragraph}`}>
                At [Your Company Name], we don’t just execute digital marketing campaigns; we drive growth and deliver results. Your success is our priority, and we are committed to helping you achieve your digital marketing goals.
                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.6)}
                initial="hidden"
                whileInView="show"
                className="mt-4"
              >
                <img
                  src="/assets/digital.jpg"
                  alt="AppDevelopment"
                  className="w-[100%] h-[100%] object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}

export default DigitalMarketing