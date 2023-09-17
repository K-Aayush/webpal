export const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1,
        },
    },
};

export const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export const textVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

export const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  export const ImageVariants = (direction) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
    },
    show: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5,
      },
    },
  });