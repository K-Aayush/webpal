"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '../style'
import Navbars from '@/components/Navbars'
import { motion } from "framer-motion"
import { containerVariants, delayVariantsy } from "../../utils/motion"
import Footers from '@/components/Footers'


const Erp = () => {
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
                  Streamline Your Business Operations with Webpal’s ERP Software
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                  Efficiently managing your enterprise’s resources and processes is paramount for success. At Webpal, we offer state-of-the-art ERP software solutions that empower businesses to optimize operations, boost productivity, and drive growth. Choose us as your ERP software partner and unlock the full potential of your organization.                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.4)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} my-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Why Choose Us for ERP Software?
                </h2>
                <ul className='flex flex-col gap-5'>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Comprehensive ERP Solutions:</span> Our ERP software covers all aspects of your business, including finance, HR, manufacturing, supply chain, sales, and more. Get a unified platform to manage all your operations seamlessly.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Tailored to Your Needs:</span> We understand that one size doesn’t fit all. Our ERP solutions are highly customizable to meet the unique requirements of your industry and organization.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Real-Time Insights:</span> Make data-driven decisions with ease. Our ERP software provides real-time insights and analytics, giving you a clear view of your business performance and trends.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Scalability:</span> As your business grows, our ERP software grows with you. Easily add new users, modules, or features to accommodate your expanding needs.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Integration Capabilities:</span> We ensure smooth integration with your existing software and systems, such as CRM, e-commerce, and third-party applications. No more data silos.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Automation and Efficiency:</span> Reduce manual tasks and streamline processes with automation. Our ERP software automates repetitive tasks, increasing efficiency and accuracy.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Enhanced Collaboration:</span> Improve communication and collaboration across departments and teams. Our ERP fosters collaboration by providing a single source of truth for all your data.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Support and Training:</span> Our dedicated support team is available to assist you every step of the way, from implementation to ongoing training and troubleshooting.
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
                  Empower Your Business with Webpal’s ERP Software
                </h2>
                <p className={`${styles.paragraph}`}>
                  Running a successful enterprise requires seamless coordination and insight. With Webpal’s ERP software, you gain the tools and resources to optimize your operations, stay competitive, and drive innovation.                </p>
                <p className={`${styles.paragraph}`}>
                  Ready to transform your business operations? Contact us today and let’s embark on a journey of improved efficiency and growth together.
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
                  src="/assets/Erp.jpg"
                  alt="Erp Software"
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

export default Erp