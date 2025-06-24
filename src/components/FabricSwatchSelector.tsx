import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

// Define the structure for a fabric object
interface Fabric {
  id: string;
  name: string;
  imageUrl: string;
}

// Define the props for the component
interface FabricSwatchSelectorProps {
  fabrics: Fabric[];
  selectedFabricId: string | null;
  onSelectFabric: (id: string) => void;
}

const FabricSwatchSelector: React.FC<FabricSwatchSelectorProps> = ({
  fabrics,
  selectedFabricId,
  onSelectFabric,
}) => {
  console.log('FabricSwatchSelector loaded');

  return (
    <div className="flex flex-wrap gap-4 p-2">
      {fabrics.map((fabric) => (
        <Tooltip key={fabric.id} delayDuration={150}>
          <TooltipTrigger asChild>
            <motion.button
              onClick={() => onSelectFabric(fabric.id)}
              className={cn(
                'relative w-16 h-16 rounded-full overflow-hidden cursor-pointer focus:outline-none transition-all duration-300',
                'border-2',
                selectedFabricId === fabric.id
                  ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'border-transparent hover:border-muted-foreground/50',
              )}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              whileTap={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              aria-label={`Select ${fabric.name} fabric`}
            >
              <img
                src={fabric.imageUrl}
                alt={fabric.name}
                className="w-full h-full object-cover"
              />
              {/* Subtle inner shadow to simulate light and depth on hover */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{
                  boxShadow: 'inset 0px 0px 0px 0px rgba(0,0,0,0.1)',
                }}
                whileHover={{
                  boxShadow: 'inset 0px 0px 10px 2px rgba(0,0,0,0.2)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-body text-sm">{fabric.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default FabricSwatchSelector;