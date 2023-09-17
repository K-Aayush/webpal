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
            staggerChildren: 0.5,
        },
    },
};

export const titleVariants = (delay) => ({
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
});

export const delayVariantsy = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay },
    },
  });

  export const delayVariantsx = (delay, direction) => ({
    hidden: { opacity: 0,
        x: direction === "left" ? -20 : direction === "right" ? 20 : 0 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay, direction },
    },
  });

export const textVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const imageVariants = (delay, direction) =>  ({
    hidden: { opacity: 0,
         x: direction === "left" ? -50 : direction === "right" ? 50 : 0 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay, direction} },
});

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

export const lettercontainerVariants = {
    show: {
        transition: {
            staggerChildren: 0.1, 
        },
    },
};

export const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
