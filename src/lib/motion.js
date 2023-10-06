export const cardsMotions = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.9,
    },
  },
};
export const eventMotions = {
  hidden: {
    opacity: 0,
    x: -20,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.9,
    },
  },
};
