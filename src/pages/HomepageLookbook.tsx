import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

// Layout and Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CinematicPageTransition from '@/components/CinematicPageTransition';
import ParallaxImageSection from '@/components/ParallaxImageSection';

// shadcn/ui Components
import { Button } from '@/components/ui/button';

const HomepageLookbook = () => {
  console.log('HomepageLookbook loaded');

  return (
    <CinematicPageTransition>
      <div className="bg-background text-foreground">
        <Header />
        <main>
          {/* Hero Section */}
          <ParallaxImageSection
            imageUrl="https://images.unsplash.com/photo-1542042161-d195f7560548?q=80&w=1920&auto=format&fit=crop"
            height="h-screen"
            className="flex items-center justify-center"
          >
            <div className="text-center text-primary-foreground max-w-4xl">
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-md">
                Your Wardrobe, Reimagined.
              </h1>
              <p className="font-body mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
                Experience the pinnacle of personal style. Crafted exclusively for you, with an unwavering commitment to quality and fit.
              </p>
              <Button asChild size="lg" className="mt-8 group">
                <Link to="/collectionspage">
                  Begin The Experience
                  <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ParallaxImageSection>

          {/* Second Section */}
          <ParallaxImageSection
            imageUrl="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1920&auto=format&fit=crop"
            height="h-[80vh]"
          >
             <h2 className="font-heading text-4xl md:text-6xl font-semibold drop-shadow-md">
              Uncompromising Quality
            </h2>
          </ParallaxImageSection>

          {/* Third Section */}
          <ParallaxImageSection
            imageUrl="https://images.unsplash.com/photo-1617137968427-4dd474f33979?q=80&w=1920&auto=format&fit=crop"
            height="h-[80vh]"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-semibold drop-shadow-md">
              A Legacy of Craft
            </h2>
          </ParallaxImageSection>

        </main>
        <Footer />
      </div>
    </CinematicPageTransition>
  );
};

export default HomepageLookbook;