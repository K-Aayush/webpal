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
            delay: 0.5,
        },
    },
};

export const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.6,
        },
    },
};

export const titleVariants = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export const delayVariants = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay },
    },
  });

export const textVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.5 } },
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