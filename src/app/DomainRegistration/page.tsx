"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '../style'
import Navbars from '@/components/Navbars'
import { motion } from "framer-motion"
import { containerVariants, delayVariantsy } from "../../utils/motion"


const Domain = () => {
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
                  Secure Your Digital Identity with Webpal Domain Registration Services
                </h2>
                <p className={`${styles.paragraph} mt-5`}>Your online presence begins with a domain name, and at Webpal, we understand the critical role it plays in establishing your brand and identity on the web. Our domain registration services make it easy for businesses and individuals to secure the perfect domain name, backed by reliable support and competitive pricing.At Webpal, we are not just a software development company; we are your trusted partner in turning your digital dreams into reality. With a relentless commitment to innovation, quality, and client satisfaction, we offer top-notch app development services that set us apart in the industry.
                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.4)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} my-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Why Choose Us For Domain Registration?
                </h2>
                <ul className='flex flex-col gap-5'>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Vast Domain Selection:</span> We offer a wide selection of domain extensions, including popular choices like .com, .net, .org, as well as newer extensions like .app, .io, and many more. Find the domain that best represents your brand and purpose.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Competitive Pricing:</span> Our domain registration pricing is competitive and transparent. You can trust that you’re getting the best value for your investment, with no hidden fees or surprises.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">User-Friendly Domain Search:</span> Our user-friendly domain search tool helps you find available domain names quickly and easily. Check domain availability, see alternative suggestions, and make informed decisions.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Domain Management Tools:</span> We provide intuitive domain management tools that empower you to take full control of your domain. Easily update DNS records, set up domain forwarding, and manage your domain settings with ease.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Security Features:</span> Protect your domain with our robust security features, including domain locking, two-factor authentication (2FA), and privacy protection to shield your personal information from public databases.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Renewal Reminders:</span> Never miss a domain renewal deadline again. Our system sends automatic reminders, ensuring that your domain remains active and under your ownership.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Expert Support:</span> Our dedicated support team is available to assist you with any domain-related questions or issues. We’re here to make your domain registration process smooth and hassle-free.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Bulk Domain Registration:</span> For businesses with multiple domains or resellers, we offer bulk domain registration services. Simplify the management of your domain portfolio.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.6)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Protect Your Brand, Secure Your Domain with Webpal
                </h2>
                <div className="flex flex-col gap-2">
                  <p className={`${styles.paragraph}`}>
                    Your domain is your digital identity. Don’t leave it to chance. With Webpal, you can trust that your domain is in safe hands. We make domain registration simple, secure, and stress-free, so you can focus on building your online presence.
                  </p>
                  <p className={`${styles.paragraph}`}>
                    Ready to claim your digital identity? Contact us today and let us help you secure the perfect domain name for your brand.
                  </p>
                  <div>
                    <h2 className={`${styles.heading2}`}>
                      +44 745 814 8535
                    </h2>
                    <p className={`${styles.paragraph}`}>
                      Available 24/7 (WhatsApp or Direct Call)
                    </p>
                  </div>
                </div>

              </motion.div>
              <motion.div
                variants={delayVariantsy(0.6)}
                initial="hidden"
                whileInView="show"
                className="mt-4"
              >
                <img
                  src="/assets/domain.jpg"
                  alt="Domain Registration"
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

export default Domain