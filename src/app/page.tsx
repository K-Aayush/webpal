import Hero from '@/components/Hero'
import styles from './style'

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
          Others
        </div>
      </div>
    </main>
  )
}
