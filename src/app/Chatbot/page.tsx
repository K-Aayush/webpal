"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '../style'
import Navbars from '@/components/Navbars'
import { motion } from "framer-motion"
import { containerVariants, delayVariantsy } from "../../utils/motion"


const Chatbot = () => {
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
                  Revolutionize Customer Engagement with Webpal’s Chatbot AI
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                  In an era where instant communication is the norm, chatbot AI technology is redefining customer engagement. At Webpal, we specialize in creating intelligent chatbots that not only enhance customer interactions but also streamline business operations. Choose us as your chatbot AI partner and experience the future of automated communication.                </p>
              </motion.div>
              <motion.div
                variants={delayVariantsy(0.4)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className={`${styles.heading2} my-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                  Why Choose Us for Chatbot AI?
                </h2>
                <ul className='flex flex-col gap-5'>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Customized Solutions:</span> We understand that every business is unique. Our chatbot AI solutions are tailored to your specific industry, needs, and goals. Whether you require a customer support bot, an e-commerce assistant, or an internal process automation bot, we’ve got you covered.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Natural Language Processing (NLP):</span> Our chatbots are powered by advanced Natural Language Processing technology, enabling them to understand and respond to user queries in a conversational and context-aware manner.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">24/7 Availability:</span> Never miss an opportunity to engage with your audience. Our chatbots are available 24/7, providing instant responses and assistance to users around the clock.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Seamless Integration:</span> We seamlessly integrate chatbots into your existing platforms and systems, including websites, mobile apps, and popular messaging platforms like WhatsApp, Facebook Messenger, and more.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Personalization:</span> Our chatbots can deliver personalized experiences by analyzing user data and preferences. Tailor content, recommendations, and responses to each individual user for a more engaging interaction.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Cost Efficiency:</span> Automating routine tasks and inquiries with chatbots can significantly reduce operational costs while freeing up human resources to focus on more complex tasks.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Analytics and Insights:</span> Gain valuable insights into user behavior and preferences through chatbot analytics. Use this data to refine your marketing strategies and improve customer satisfaction.
                  </li>
                  <li className={`${styles.paragraph}`}>
                    <span className="text-[20px] font-semibold">Continuous Learning:</span> Our chatbots are designed to evolve and improve over time. They learn from each interaction, becoming more intelligent and effective with every conversation.
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
                  Elevate Customer Engagement with Webpal’s Chatbot AI
                </h2>
                <p className={`${styles.paragraph}`}>
                  Enhance customer satisfaction, increase efficiency, and stay ahead of the competition with chatbot AI from Webpal. Our commitment to innovation and excellence ensures that your chatbot not only meets but exceeds your expectations.                </p>
                <p className={`${styles.paragraph}`}>
                  Ready to transform your customer engagement strategy? Contact us today and let’s embark on a journey of AI-powered conversations together.                </p>
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
                  src="/assets/chatbot.jpg"
                  alt="chatbot"
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

export default Chatbot