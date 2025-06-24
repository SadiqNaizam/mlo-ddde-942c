import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// A mock mapping to simulate fetching different garment images based on selections.
// In a real application, this would be a more complex system or API call.
const garmentImageMap: Record<string, Record<string, string>> = {
  colors: {
    'default': 'https://images.unsplash.com/photo-1591047139829-d916b67ea74f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Neutral Beige Trench
    'navy': 'https://images.unsplash.com/photo-1616943144047-724892c9085a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Dark Trench
    'charcoal': 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Grey/Charcoal Coat
  },
  fabrics: {
    // In a real scenario, these could be detail/texture overlays or different base images.
    // For this simulation, we'll stick to changing the main image via color.
  },
};

interface GarmentDetails {
  collar: string;
  cuffs: string;
  pockets: string;
}

interface GarmentVisualizerProps {
  color: string;
  fabric: string;
  details: GarmentDetails;
}

const GarmentVisualizer: React.FC<GarmentVisualizerProps> = ({
  color = 'default',
  fabric = 'wool',
  details,
}) => {
  console.log('GarmentVisualizer loaded with props:', { color, fabric, details });

  const imageUrl = garmentImageMap.colors[color] || garmentImageMap.colors['default'];

  // The key for AnimatePresence is crucial. When it changes, framer-motion triggers the exit/enter animation.
  const animationKey = `${color}-${fabric}-${details.collar}-${details.cuffs}-${details.pockets}`;

  return (
    <div className="w-full h-full flex items-center justify-center bg-card p-4 lg:p-8 rounded-lg">
      <div className="relative w-full aspect-[3/4] max-w-lg overflow-hidden rounded-md shadow-2xl bg-secondary">
        <AnimatePresence initial={false}>
          <motion.img
            key={animationKey}
            src={imageUrl}
            alt={`Custom garment in ${color} ${fabric}`}
            className="absolute h-full w-full object-cover"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default GarmentVisualizer;