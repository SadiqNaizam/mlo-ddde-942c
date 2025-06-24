import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, ShoppingBag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header: React.FC = () => {
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-6 p-6">
          <Link to="/" className="mb-4">
            <span className="font-heading text-2xl font-semibold tracking-wider text-foreground">
              Atelier
            </span>
          </Link>
          <NavLink to="/collectionspage" className={navLinkClasses}>Collections</NavLink>
          <NavLink to="/customizationatelierpage" className={navLinkClasses}>The Atelier</NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="hidden md:block">
            <span className="font-heading text-2xl font-semibold tracking-wider text-foreground">
              Atelier
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/collectionspage" className={navLinkClasses}>
              Collections
            </NavLink>
            <NavLink to="/customizationatelierpage" className={navLinkClasses}>
              The Atelier
            </NavLink>
          </nav>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/useraccountdashboard">
              <User className="h-5 w-5" />
              <span className="sr-only">User Account</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping Bag</span>
          </Button>
        </div>

         <div className="md:hidden">
           <Link to="/" className="absolute left-1/2 -translate-x-1/2">
             <span className="font-heading text-2xl font-semibold tracking-wider text-foreground">
                Atelier
              </span>
           </Link>
         </div>

      </div>
    </header>
  );
};

export default Header;