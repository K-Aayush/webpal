import React from 'react'
import styles, { layout } from '@/app/style'

const Contact = () => {
    return (
        <div>
            <h2 className={`${styles.heading2} flex items-center justify-start`}>Contact Us</h2>
            <section className={layout.section}>
                <div className={`${layout.sectionInfo} gap-5`}>
                    <div className="flex flex-col items-start justify-start gap-1">
                        <h2 className={`font-semibold text-[30px] leading-[32px] text-slate-800`}>
                            +44 745 814 8535
                        </h2>
                        <p className={`font-thin text-[20px] leading-[26px] text-slate-600 max-w-[480px]`}>Available 24/7 (WhatsApp or Direct Call)</p>
                    </div>
                    <div>
                        <p className={`${styles.paragraph} max-w-[480px]`}>
                            We appreciate your interest in getting in touch with us and we are here to assist you in any way we can.
                        </p>
                        <br />
                        <p className={`${styles.paragraph} max-w-[480px]`} >
                            Whether you have a question, suggestion, or just want to say hello, we would love to hear from you!
                        </p>
                    </div>
                </div>

                <div className={`${layout.sectionImg}`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.468092830448!2d85.34237507519319!3d27.671923927053403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197488ce2b25%3A0x9167f99c95cd8933!2sWebpal%20-%20Software%20%7C%20Website%20%7C%20Mobile%20App%20Development!5e0!3m2!1sen!2snp!4v1694853880063!5m2!1sen!2snp" width="100%" height="400" loading="lazy" ></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contact