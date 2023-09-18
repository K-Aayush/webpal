"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '../style'
import Navbars from '@/components/Navbars'
import { motion } from "framer-motion"
import { containerVariants, delayVariantsy } from "../../utils/motion"


const Website = () => {
  return (
    <main className="bg-gray-50 w-full overflow-hidden mt-16 sm:mt-8">
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
                  Website Development Services
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                  At Webpal, we are passionate about crafting exceptional web experiences that elevate your online presence. Our website development services are designed to empower businesses, both large and small, with cutting-edge digital solutions that drive growth and success.
                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.4)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} my-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Why Choose Us for Your Website Development Needs?
                </h2>
                <ul className='flex flex-col gap-5'>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Expertise:</span> Our team of highly skilled and experienced web developers stays up-to-date with the latest industry trends and technologies. We bring a wealth of knowledge to every project, ensuring that your website is built using the most advanced and efficient methods.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Custom Solutions:</span> We understand that each business is unique. That’s why we don’t believe in one-size-fits-all solutions. Our website development approach is tailored to your specific goals, ensuring that your site is as unique as your brand.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">User-Centric Design:</span> User experience is at the core of everything we do. We create websites that not only look stunning but also provide a seamless and intuitive browsing experience for your visitors. A user-friendly website leads to higher engagement and conversions.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Mobile Optimization: </span> With the increasing use of mobile devices, having a responsive website is crucial. Our websites are designed to work flawlessly on all screen sizes, ensuring that you reach your audience wherever they are.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Performance and Speed: </span> Slow-loading websites can turn potential customers away. We optimize your website for speed and performance, which not only improves user satisfaction but also boosts your search engine rankings.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Security: </span> Online security is paramount. We implement robust security measures to protect your website and customer data from potential threats.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Cost-Effective: </span> We offer competitive pricing without compromising on quality. Our transparent pricing structure ensures that you get value for your investment.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.6)}
                initial="hidden"
                whileInView="show"
                className="flex flex-col gap-3"
              >
                <h2 className={`${styles.heading2} mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Ready to Elevate Your Online Presence?
                </h2>
                <p className={`${styles.paragraph}`}>
                  With Webpal, you’re not just getting a website; you’re getting a partner dedicated to your success. Contact us today to discuss your website development needs, and let’s bring your vision to life on the web.
                </p>
                <p className={`${styles.paragraph}`}>
                  Ready to turn your app idea into reality? Contact us today, and let’s embark on a journey of innovation, creativity, and success together.
                </p>
                <div>
                  <h2 className={`${styles.heading2}`}>
                    +44 745 814 8535
                  </h2>
                  <p className={`${styles.paragraph}`}>
                    Available 24/7 (WhatsApp or Direct Call)
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.6)}
                initial="hidden"
                whileInView="show"
              >
                <img
                  src="/assets/code.png"
                  alt="WebsiteDevelopment"
                  className="w-[100%] h-[100%] object-contain"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}

export default Website