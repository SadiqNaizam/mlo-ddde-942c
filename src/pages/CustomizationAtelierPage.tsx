import React, { useState } from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GarmentVisualizer from '@/components/GarmentVisualizer';
import FabricSwatchSelector from '@/components/FabricSwatchSelector';
import StyleOptionCard from '@/components/StyleOptionCard';

// shadcn/ui Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from "sonner";

// Icons
import { Info, Scissors, Ruler, Hand } from 'lucide-react';

// --- Placeholder Data ---

const fabricOptions = [
    { id: 'wool', name: 'Merino Wool', imageUrl: 'https://images.unsplash.com/photo-1620755939844-9507567afc6d?q=80&w=400&auto=format&fit=crop' },
    { id: 'cashmere', name: 'Scottish Cashmere', imageUrl: 'https://images.unsplash.com/photo-1616957451375-c472cec57713?q=80&w=400&auto=format&fit=crop' },
    { id: 'linen', name: 'Irish Linen', imageUrl: 'https://images.unsplash.com/photo-1623228382098-37292a8af478?q=80&w=400&auto=format&fit=crop' },
];

const colorOptions = [
  { id: 'default', name: 'Beige', class: 'bg-stone-300' },
  { id: 'navy', name: 'Midnight Navy', class: 'bg-blue-950' },
  { id: 'charcoal', name: 'Charcoal Grey', class: 'bg-gray-700' },
];

const collarOptions = [
    { id: 'classic', label: 'Classic Notch', icon: <Scissors className="w-8 h-8" /> },
    { id: 'peak', label: 'Peak Lapel', icon: <Scissors className="w-8 h-8 transform rotate-45" /> },
];

const cuffsOptions = [
    { id: 'standard', label: 'Standard Cuff', icon: <Ruler className="w-8 h-8" /> },
    { id: 'buttoned', label: 'Surgeon\'s Cuffs', icon: <Ruler className="w-8 h-8" /> },
];

const pocketsOptions = [
    { id: 'patch', label: 'Patch Pockets', icon: <Hand className="w-8 h-8" /> },
    { id: 'flap', label: 'Flap Pockets', icon: <Hand className="w-8 h-8" /> },
];


const CustomizationAtelierPage: React.FC = () => {
    console.log('CustomizationAtelierPage loaded');

    // State for garment customization
    const [color, setColor] = useState('default');
    const [fabric, setFabric] = useState('wool');
    const [collar, setCollar] = useState('classic');
    const [cuffs, setCuffs] = useState('standard');
    const [pockets, setPockets] = useState('patch');
    
    const [measurements, setMeasurements] = useState({
        chest: '',
        waist: '',
        sleeve: '',
        length: '',
    });

    const handleMeasurementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMeasurements(prev => ({ ...prev, [name]: value }));
    };

    const handleAddToOrder = () => {
      toast.success("Your creation has been added to the order.", {
        description: "We'll proceed to the final steps from your account.",
        duration: 5000,
      });
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-8 h-full">
                    
                    {/* --- Garment Visualizer (Left/Main Column) --- */}
                    <div className="lg:col-span-2 xl:col-span-3 h-[60vh] lg:h-auto">
                        <GarmentVisualizer 
                          color={color} 
                          fabric={fabric} 
                          details={{ collar, cuffs, pockets }} 
                        />
                    </div>

                    {/* --- Customization Panel (Right Column) --- */}
                    <div className="lg:col-span-1 xl:col-span-2 flex flex-col">
                        <ScrollArea className="flex-grow w-full pr-4 -mr-4">
                            <div className="flex flex-col gap-4">
                                <div className="mb-4">
                                    <h1 className="font-heading text-4xl text-foreground">The Atelier</h1>
                                    <p className="font-body text-muted-foreground mt-2">Craft your masterpiece. Each selection is a reflection of you.</p>
                                </div>
                                <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="font-heading text-lg">Fabric & Color</AccordionTrigger>
                                        <AccordionContent className="pt-4">
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Fabric Selection</h3>
                                                    <FabricSwatchSelector 
                                                        fabrics={fabricOptions}
                                                        selectedFabricId={fabric}
                                                        onSelectFabric={setFabric}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Color Palette</h3>
                                                    <div className="flex flex-wrap gap-4 p-2">
                                                      {colorOptions.map((c) => (
                                                        <TooltipProvider key={c.id}>
                                                          <Tooltip delayDuration={150}>
                                                            <TooltipTrigger asChild>
                                                              <button onClick={() => setColor(c.id)} className={`w-12 h-12 rounded-full transition-all duration-300 border-2 ${c.class} ${color === c.id ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-background' : 'border-transparent hover:border-muted-foreground/50'}`} />
                                                            </TooltipTrigger>
                                                            <TooltipContent><p className="font-body text-sm">{c.name}</p></TooltipContent>
                                                          </Tooltip>
                                                        </TooltipProvider>
                                                      ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="font-heading text-lg">Style Details</AccordionTrigger>
                                        <AccordionContent className="pt-4 space-y-6">
                                            <div>
                                                <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Lapel Style</h3>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {collarOptions.map(opt => <StyleOptionCard key={opt.id} {...opt} isSelected={collar === opt.id} onClick={() => setCollar(opt.id)} />)}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Cuff Style</h3>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {cuffsOptions.map(opt => <StyleOptionCard key={opt.id} {...opt} isSelected={cuffs === opt.id} onClick={() => setCuffs(opt.id)} />)}
                                                </div>
                                            </div>
                                             <div>
                                                <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Pocket Style</h3>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {pocketsOptions.map(opt => <StyleOptionCard key={opt.id} {...opt} isSelected={pockets === opt.id} onClick={() => setPockets(opt.id)} />)}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className="font-heading text-lg flex items-center justify-between w-full">
                                            <span>Measurements</span>
                                            <TooltipProvider>
                                                <Tooltip delayDuration={150}>
                                                    <TooltipTrigger asChild onClick={(e) => e.stopPropagation()}>
                                                        <Info className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors mr-2"/>
                                                    </TooltipTrigger>
                                                    <TooltipContent><p className="font-body text-sm">Enter your measurements in centimeters.</p></TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4 space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div><Label htmlFor="chest" className="font-body">Chest (cm)</Label><Input type="number" name="chest" id="chest" value={measurements.chest} onChange={handleMeasurementChange} placeholder="98" /></div>
                                                <div><Label htmlFor="waist" className="font-body">Waist (cm)</Label><Input type="number" name="waist" id="waist" value={measurements.waist} onChange={handleMeasurementChange} placeholder="82" /></div>
                                                <div><Label htmlFor="sleeve" className="font-body">Sleeve (cm)</Label><Input type="number" name="sleeve" id="sleeve" value={measurements.sleeve} onChange={handleMeasurementChange} placeholder="64" /></div>
                                                <div><Label htmlFor="length" className="font-body">Length (cm)</Label><Input type="number" name="length" id="length" value={measurements.length} onChange={handleMeasurementChange} placeholder="110" /></div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </ScrollArea>
                        <div className="mt-8 pt-6 border-t border-border">
                            <Button size="lg" className="w-full font-body text-base" onClick={handleAddToOrder}>
                                Add to Bespoke Order
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CustomizationAtelierPage;