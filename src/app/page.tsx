import styles from './style'
import { Hero, Stats, About, Partners, Services, Testimonials, Contact, Navbar, Footer } from '@/components/index';

export default function Home() {
  return (
    <main className="bg-gray-50 w-full overflow-hidden">
      <div className={`bg-gray-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className={`bg-gray-50 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <About />
          <Partners />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  )
}
