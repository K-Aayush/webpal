"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '../style'
import Navbars from '@/components/Navbars'
import { motion } from "framer-motion"
import { containerVariants, delayVariantsy } from "../../utils/motion"
import Footers from '@/components/Footers'


const Message = () => {
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
                  Elevate Your Communication with Webpal’s Bulk Messaging Service
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                  In an age of instant communication, reaching your audience effectively and efficiently is paramount. At Webpal, we offer a powerful bulk messaging service that allows businesses to connect with their customers, clients, and stakeholders in a seamless and personalized way. Choose us as your bulk messaging partner to supercharge your communication strategies.
                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.4)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} my-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Why Choose Us for Bulk Messaging?
                </h2>
                <ul className='flex flex-col gap-5'>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Reliable Delivery:</span> Our bulk messaging platform ensures the reliable and timely delivery of your messages, whether you’re sending SMS, MMS, or email. Reach your audience when it matters most.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Personalization:</span> Tailor your messages to each recipient with ease. Our bulk messaging service allows for personalized content, enhancing engagement and customer relationships.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Multi-Channel Support:</span> Plan and automate your messaging campaigns in advance. Schedule messages to go out at the perfect time, ensuring maximum impact.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Scheduling and Automation:</span> As your business grows, our ERP software grows with you. Easily add new users, modules, or features to accommodate your expanding needs.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Tracking and Analytics:</span> Gain valuable insights into the performance of your messaging campaigns. Track open rates, click-through rates, and conversion metrics to refine your strategies.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Compliance and Security:</span>  We prioritize data security and compliance with industry regulations. Rest assured that your messaging campaigns are conducted securely and in accordance with legal requirements.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Easy Integration:</span> Seamlessly integrate our bulk messaging service with your existing systems and software through APIs, ensuring a smooth workflow and data synchronization.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Dedicated Support:</span> Our customer support team is available to assist you with any questions or issues related to your bulk messaging campaigns. We’re here to help you succeed.
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
                  Enhance Your Communication with Webpal’s Bulk Messaging
                </h2>
                <p className={`${styles.paragraph}`}>
                  Effective communication is the key to building strong relationships and driving business growth. With Webpal’s bulk messaging service, you have the tools and support to connect with your audience in a meaningful way, whether for marketing, notifications, or customer support.
                </p>
                <p className={`${styles.paragraph}`}>
                  Ready to elevate your communication strategies? Contact us today and let’s embark on a journey of improved engagement and success together.                </p>
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
                  src="/assets/message.jpg"
                  alt="Bulk Messaging Software"
                  className="w-[100%] h-[100%] object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.section>
          <Footers />
        </div>
      </div>
    </main>
  )
}

export default Message