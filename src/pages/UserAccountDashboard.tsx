import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Pencil, PlusCircle, Trash2 } from 'lucide-react';

// --- Placeholder Data ---

const orderHistory = [
  { id: 'ATLR-2023-015', date: '2023-11-20', total: '$1,250.00', status: 'Delivered' },
  { id: 'ATLR-2023-009', date: '2023-08-15', total: '$850.00', status: 'Delivered' },
  { id: 'ATLR-2023-002', date: '2023-03-05', total: '$2,100.00', status: 'Delivered' },
];

const activeOrders = [
  { 
    id: 'ATLR-2024-021', 
    name: 'The Midnight Velvet Blazer', 
    status: 'In Production', 
    estimatedDate: '2024-08-15',
    imageUrl: 'https://images.unsplash.com/photo-1593030206231-dea9a8c0d3a9?q=80&w=800&auto=format&fit=crop',
  },
  { 
    id: 'ATLR-2024-018', 
    name: 'Custom Silk Lined Trench', 
    status: 'Awaiting Final Fittings',
    estimatedDate: '2024-07-30',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d916b67ea74f?q=80&w=800&auto=format&fit=crop',
  },
];

const measurementProfiles = [
  {
    name: 'Standard Fit - John Doe',
    isDefault: true,
    measurements: {
      neck: '16.5"', chest: '42"', waist: '34"', inseam: '32"', sleeve: '25.5"'
    }
  }
];

const savedDesigns = [
  {
    id: 'design-001',
    name: 'Emerald Green Evening Gown',
    dateSaved: '2024-05-10',
    imageUrl: 'https://images.unsplash.com/photo-1590130635398-3c22428543b2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'design-002',
    name: 'Autumn Wool Overcoat',
    dateSaved: '2024-02-28',
    imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d5032e0?q=80&w=800&auto=format&fit=crop'
  },
];

const UserAccountDashboard = () => {
  console.log('UserAccountDashboard loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-heading text-foreground tracking-tight">My Account</h1>
          <p className="text-muted-foreground mt-2">Manage your orders, profiles, and designs.</p>
        </div>

        <Tabs defaultValue="order-history" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="order-history">Order History</TabsTrigger>
            <TabsTrigger value="active-orders">Active Orders</TabsTrigger>
            <TabsTrigger value="measurements">Measurements</TabsTrigger>
            <TabsTrigger value="saved-designs">Saved Designs</TabsTrigger>
          </TabsList>

          {/* Order History Tab */}
          <TabsContent value="order-history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Completed Orders</CardTitle>
                <CardDescription>A record of your past bespoke creations.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderHistory.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{order.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">{order.total}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Active Orders Tab */}
          <TabsContent value="active-orders" className="mt-6">
             <div className="grid gap-6 md:grid-cols-2">
                {activeOrders.map((order) => (
                  <Card key={order.id} className="overflow-hidden">
                    <div className="flex">
                        <div className="w-1/3 flex-shrink-0">
                             <img src={order.imageUrl} alt={order.name} className="object-cover h-full w-full" />
                        </div>
                        <div className="w-2/3">
                            <CardHeader>
                                <CardTitle className="font-heading text-xl">{order.name}</CardTitle>
                                <CardDescription>{order.id}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-medium mb-1">Status: <span className="text-primary">{order.status}</span></p>
                                <p className="text-sm text-muted-foreground">Est. Completion: {order.estimatedDate}</p>
                            </CardContent>
                             <CardFooter>
                                <Button variant="default" className="w-full">Track Progress</Button>
                            </CardFooter>
                        </div>
                    </div>
                  </Card>
                ))}
             </div>
          </TabsContent>

          {/* Measurement Profiles Tab */}
          <TabsContent value="measurements" className="mt-6">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                {measurementProfiles.map((profile) => (
                    <Card key={profile.name}>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="font-heading">{profile.name}</CardTitle>
                                {profile.isDefault && <Badge className="mt-1">Default</Badge>}
                            </div>
                            <div className="flex gap-2">
                               <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
                               <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                            </div>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                            {Object.entries(profile.measurements).map(([key, value]) => (
                                <div key={key}>
                                    <p className="capitalize text-muted-foreground">{key}</p>
                                    <p className="font-medium text-foreground">{value}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
                 <Button variant="outline" className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Profile
                </Button>
              </div>
              <div className="lg:col-span-1">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-heading">Edit Profile</CardTitle>
                        <CardDescription>Update your measurements here.</CardDescription>
                    </CardHeader>
                    <CardContent as="form" className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                                <Label htmlFor="chest">Chest</Label>
                                <Input id="chest" placeholder='e.g., 42"' defaultValue="42&quot;" />
                            </div>
                             <div>
                                <Label htmlFor="waist">Waist</Label>
                                <Input id="waist" placeholder='e.g., 34"' defaultValue="34&quot;" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="inseam">Inseam</Label>
                            <Input id="inseam" placeholder='e.g., 32"' defaultValue="32&quot;" />
                        </div>
                        <Button type="submit" className="w-full">Save Changes</Button>
                    </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Saved Designs Tab */}
          <TabsContent value="saved-designs" className="mt-6">
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {savedDesigns.map((design) => (
                  <Card key={design.id} className="overflow-hidden group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
                        <img src={design.imageUrl} alt={design.name} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardHeader>
                        <CardTitle className="font-heading text-lg">{design.name}</CardTitle>
                        <CardDescription>Saved on {design.dateSaved}</CardDescription>
                    </CardHeader>
                    <CardFooter className="gap-2">
                        <Button className="w-full">Continue Designing</Button>
                        <Button variant="outline">Delete</Button>
                    </CardFooter>
                  </Card>
                ))}
             </div>
          </TabsContent>

        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default UserAccountDashboard;