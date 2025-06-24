import React from 'react';
import { motion } from 'framer-motion';

interface CinematicPageTransitionProps {
  children: React.ReactNode;
}

/**
 * CinematicPageTransition provides a sophisticated fade and scale animation for page content.
 * It's designed to be used within a Framer Motion `AnimatePresence` component, which handles
 * the enter and exit animations as routes change in your application.
 *
 * @example
 * // In a layout component that wraps your router's <Outlet />:
 * import { AnimatePresence } from 'framer-motion';
 * import { useLocation, Outlet } from 'react-router-dom';
 * import CinematicPageTransition from '@/components/CinematicPageTransition';
 *
 * const AppLayout = () => {
 *   const location = useLocation();
 *   return (
 *     <AnimatePresence mode="wait">
 *       <motion.div key={location.pathname}>
 *         <CinematicPageTransition>
 *           <Outlet />
 *         </CinematicPageTransition>
 *       </motion.div>
 *     </AnimatePresence>
 *   );
 * }
 */
const CinematicPageTransition: React.FC<CinematicPageTransitionProps> = ({ children }) => {
  console.log('CinematicPageTransition loaded');

  const animationVariants = {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.02,
    },
  };

  const animationTransition = {
    duration: 0.8,
    ease: [0.6, 0.01, 0.05, 0.95], // A custom, gentle bezier curve for a cinematic feel
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants}
      transition={animationTransition}
    >
      {children}
    </motion.div>
  );
};

export default CinematicPageTransition;