"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '../style'
import Navbars from '@/components/Navbars'
import { motion } from "framer-motion"
import { containerVariants, delayVariantsy } from "../../utils/motion"


const CloudComputing = () => {
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
                  Unlock the Power of Cloud Computing with Webpal
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                  In today’s digital landscape, cloud computing is the backbone of business agility and innovation. At Webpal, we offer cutting-edge cloud solutions that empower organizations to scale, optimize operations, and drive growth. When you choose us, you’re choosing a trusted partner on your cloud journey.
                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.4)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} my-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Why Choose Us for Cloud Computing?
                </h2>
                <ul className='flex flex-col gap-5'>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Comprehensive Cloud Services:</span> We provide a wide range of cloud services, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Whether you need cloud hosting, data storage, or custom cloud applications, we’ve got you covered.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Scalability and Flexibility:</span> With our cloud solutions, you have the flexibility to scale resources up or down as your business needs change. Say goodbye to the constraints of traditional infrastructure and hello to agile scalability.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Cost Efficiency:</span> Our cloud services are cost-effective, allowing you to pay only for the resources you use. Eliminate the capital expenses associated with on-premises infrastructure and enjoy predictable, pay-as-you-go pricing.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Security and Compliance:</span> We prioritize the security of your data and applications. Our cloud solutions are designed with robust security features, including encryption, identity management, and regular compliance audits.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">High Availability:</span> Downtime is costly. Our cloud infrastructure is built for high availability and redundancy, ensuring that your applications and data are accessible when you need them.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Managed Services:</span> Focus on your core business while we take care of the technicalities. Our managed cloud services include 24/7 monitoring, maintenance, and support to keep your cloud environment running smoothly.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Expert Cloud Architects:</span> Our team of experienced cloud architects and engineers is here to guide you through your cloud journey. We’ll assess your needs, design the right cloud solution, and assist with migration and optimization.
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
                  Experience the Future of Business with Webpal Cloud Solutions
                </h2>
                <p className={`${styles.paragraph}`}>
                  Cloud computing isn’t just a technology; it’s a strategy for success. Partner with Webpal to harness the full potential of the cloud, streamline your operations, and drive innovation in your industry.
                </p>
                <p className={`${styles.paragraph}`}>
                  Ready to elevate your business with cloud computing? Contact us today and let’s embark on a journey to the cloud together.
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
                  src="/assets/cloud.jpg"
                  alt="Cloud Computing"
                  className="w-[100%] h-[100%] object-contain rounded-lg"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}

export default CloudComputing