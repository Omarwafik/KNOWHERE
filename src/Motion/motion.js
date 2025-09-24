// =============== Group Animation (Stagger) ===============
export const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // كل كارد يتأخر 0.2 ثانية
    },
  },
};

export const containerSequential = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // يخلي كل كارد يستنى اللي قبله يخلص
      delayChildren: 0, // ممكن تزود delay بسيط لو عايز
    },
  },
};

// =============== Single Item Animations ===============
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
};

// ================= singleLong ========================
export const fadeInLeftLong = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 1, ease: "easeOut" },
  },
};

export const fadeInRightLong = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 1, ease: "easeOut" },
  },
};

export const fadeInUpLong = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 1, ease: "easeOut" },
  },
};

export const fadeInDownLong = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 1, ease: "easeOut" },
  },
};
