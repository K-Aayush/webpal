import styles from './style'
import { Hero, Stats, About, Partners, Services } from '@/components/index';

export default function Home() {
  return (
    <main className="bg-gray-50 w-full overflow-hidden">
      <div className={`bg-gray-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-gray-50 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <About />
          <Partners />
          <Services />
        </div>
      </div>
    </main>
  )
}
