import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface StyleOptionCardProps {
  /**
   * The icon or line drawing representing the style option.
   */
  icon: React.ReactNode;
  /**
   * The name of the style option (e.g., "Classic Collar").
   */
  label: string;
  /**
   * Whether this card is currently selected.
   */
  isSelected: boolean;
  /**
   * Function to call when the card is clicked.
   */
  onClick: () => void;
}

/**
 * A custom card for selecting a design element, with an animated selection state.
 */
const StyleOptionCard: React.FC<StyleOptionCardProps> = ({
  icon,
  label,
  isSelected,
  onClick,
}) => {
  console.log(`StyleOptionCard loaded for: ${label}`);

  const cardVariants = {
    default: {
      borderColor: 'hsl(var(--border))',
      backgroundColor: 'hsl(var(--card))',
    },
    selected: {
      borderColor: 'hsl(var(--primary))',
      backgroundColor: 'hsla(var(--primary) / 0.05)',
    },
  };

  const iconVariants = {
    default: {
      scale: 1,
      color: 'hsl(var(--muted-foreground))'
    },
    selected: {
      scale: 1.1,
      color: 'hsl(var(--primary))'
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isSelected ? 'selected' : 'default'}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <motion.div
        variants={cardVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden rounded-lg border-2"
      >
        <Card className="border-none bg-transparent shadow-none rounded-none">
          <CardContent className="flex flex-col items-center justify-center p-4 aspect-square">
            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mb-3"
            >
              {icon}
            </motion.div>
            <p className="font-heading text-center text-sm text-foreground">
              {label}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default StyleOptionCard;