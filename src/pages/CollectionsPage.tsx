import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CinematicPageTransition from '@/components/CinematicPageTransition';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Placeholder data for the collections
const collections = [
  {
    id: 'trench-01',
    name: 'The Classic Trench',
    description: 'An icon of timeless design, reimagined for the modern silhouette. The perfect starting point for a versatile, all-weather statement coat.',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d916b67ea74f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 'suit-01',
    name: 'The Sovereign Suit',
    description: 'Sharp tailoring and exquisite fabric options define this powerful statement piece. Command any room with a suit built to your exact specifications.',
    imageUrl: 'https://images.unsplash.com/photo-1529324343193-a2b277e5d07e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 'blouse-01',
    name: 'The Silk Blouse',
    description: 'Lustrous silk drapes elegantly, offering versatile and effortless sophistication. Choose from a curated palette of rich, vibrant hues.',
    imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa63a37aa9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 'dress-01',
    name: 'The Evening Gown',
    description: "A canvas for breathtaking moments. Select from flowing chiffons or structured satins to create your dream formalwear.",
    imageUrl: 'https://images.unsplash.com/photo-1590696322946-9a756b158867?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
   {
    id: 'jacket-01',
    name: 'The Aviator Jacket',
    description: 'A timeless piece of outerwear, crafted from the finest leathers and shearling. Customize the lining, hardware, and fit for your own legend.',
    imageUrl: 'https://images.unsplash.com/photo-1566453941408-59c4a4571439?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 'trousers-01',
    name: 'The Linen Trousers',
    description: 'The epitome of relaxed elegance. Perfect for warm climates and sophisticated leisure, tailored for a flawless, comfortable fit.',
    imageUrl: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

const CollectionsPage = () => {
  console.log('CollectionsPage loaded');

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <CinematicPageTransition>
        <main className="flex-grow">
          <section className="container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
                Our Collections
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-body">
                Discover the foundation of your next bespoke piece. Each style is a canvas for your personal expression.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
              {collections.map((item) => (
                <Card key={item.id} className="overflow-hidden group flex flex-col border-border/60 hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden aspect-w-3 aspect-h-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0">
                      <CardTitle className="font-heading text-2xl mb-2">{item.name}</CardTitle>
                      <CardDescription className="font-body text-muted-foreground leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-0 mt-auto pt-6">
                      <Button asChild className="w-full font-body text-base" size="lg">
                        <Link to="/customizationatelierpage">
                          Begin Customization
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </CinematicPageTransition>
      <Footer />
    </div>
  );
};

export default CollectionsPage;