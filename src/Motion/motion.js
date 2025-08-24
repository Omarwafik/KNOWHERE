// =============== Group Animation (Stagger) ===============
export const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// =============== Single Item Animations ===============
export const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 1.5 },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 1.5 },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1.5 },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1.5 },
  },
};

// ================= singleLong
export const fadeInLeftLong = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 3.5 },
  },
};

export const fadeInRightLong = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 3.5 },
  },
};

export const fadeInUpLong = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 3.5 },
  },
};

export const fadeInDownLong = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 3.5 },
  },
};
