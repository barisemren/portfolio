import {motion} from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
    key={router.route}
    initial={{ opacity: 0.8 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.5 }}
    >
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp
