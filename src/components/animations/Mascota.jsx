import { motion } from 'framer-motion'

function Mascota(props) {
  return (
    <motion.div
        initial={{translateX:"200%", opacity:0, rotate:90}}
        animate={{translateX:"150%", opacity:1, rotate:0}}
        transition={{duration:2}}
        className='w-60 h-60 object-cover absolute top-0'
    >
        {props.children}
    </motion.div>
  )
}

export default Mascota