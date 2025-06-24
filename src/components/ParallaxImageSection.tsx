import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assumed to exist in a shadcn/ui setup

interface ParallaxImageSectionProps {
  imageUrl: string;
  children?: React.ReactNode;
  height?: string;
  className?: string;
}

/**
 * A reusable layout component that displays a background image with a parallax effect
 * as the user scrolls. Foreground content can be passed as children.
 */
const ParallaxImageSection: React.FC<ParallaxImageSectionProps> = ({
  imageUrl,
  children,
  height = 'h-screen', // Default to full screen height
  className,
}) => {
  console.log('ParallaxImageSection loaded');
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the container section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], // Track from when the top enters the viewport bottom to when the bottom leaves the viewport top
  });

  // Transform the scroll progress (0 to 1) into a vertical movement for the background (-25% to +25%)
  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative w-full overflow-hidden',
        height,
        className
      )}
      aria-label="Image section with parallax effect"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          y, // Apply the transformed y-value
        }}
        // The background is made taller to prevent empty space during parallax movement
        initial={{ height: '150%' }}
      />
      
      {/* Optional Dark Overlay for Readability */}
      <div className="absolute inset-0 z-[5] bg-black/40" aria-hidden="true" />

      {/* Foreground Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center text-primary-foreground">
        {children}
      </div>
    </section>
  );
};

export default ParallaxImageSection;