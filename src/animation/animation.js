

export const carAnimation = {
    initialMobile: { x: 100, opacity: 0 }, 
    initial: { x: 800, opacity: 0 }, 
    animate: { x: 720, opacity: 1 }, 
    transition: { type: "tween", duration: 2, delay: 1 }, // Delay the animation for 1 second
  };
  

  export const successAnimation = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -30, 30, -20, 20, -15, 15, 0],
      opacity: 1,
    },
    transition: { type: "tween", duration: 1, delay: 0 },
  };

  