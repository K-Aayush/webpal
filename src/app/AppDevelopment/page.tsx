"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '../style'
import Navbars from '@/components/Navbars'
import { motion } from "framer-motion"
import { containerVariants, delayVariantsy } from "../../utils/motion"


const App = () => {
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
                  Mobile App Development Services
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                  At Webpal, we are not just a software development company; we are your trusted partner in turning your digital dreams into reality. With a relentless commitment to innovation, quality, and client satisfaction, we offer top-notch app development services that set us apart in the industry.
                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.4)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} my-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Why Choose Us?
                </h2>
                <ul className='flex flex-col gap-5'>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Expertise:</span>  Our team of highly skilled developers, designers, and project managers boasts years of experience in creating innovative, user-friendly apps across various platforms, including iOS, Android, and web applications.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Custom Solutions:</span> We understand that every business is unique. That’s why we tailor our app development services to meet your specific needs. From concept to execution, we work closely with you to ensure your vision is realized in the final product.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Cutting-Edge Technology:</span> We stay at the forefront of technology trends and tools, ensuring that your app benefits from the latest advancements in the industry. Our proficiency in a wide range of programming languages and frameworks allows us to deliver solutions that are not just functional but also future-proof.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Rigorous Testing:</span> Quality is our hallmark. Before any app reaches your users, it undergoes rigorous testing to ensure it functions flawlessly across different devices and scenarios. We don’t compromise on quality.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Timely Delivery:</span> We understand the importance of time in today’s fast-paced business environment. Our agile development methodology and efficient project management ensure that your app is delivered on time, every time.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Transparent Communication: </span> We believe in open and transparent communication with our clients. You’ll always be in the loop, from project kick-off to delivery, and beyond.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Post-Launch Support: </span> Our commitment doesn’t end with the app launch. We provide ongoing support and maintenance to ensure your app remains up-to-date and bug-free, giving you peace of mind.
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
                  Your Success is Our Success
                </h2>
                <p className={`${styles.paragraph}`}>
                  When you choose Webpal for your app development needs, you’re not just getting a development partner; you’re gaining a strategic ally dedicated to your success. Our passion for crafting exceptional apps drives us to go the extra mile, ensuring that your app stands out in the competitive digital landscape.
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
                className="mt-4"
              >
                <img
                  src="/assets/app.jpg"
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

export default App