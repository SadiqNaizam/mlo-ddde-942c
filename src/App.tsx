import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Authenticationpage from "./pages/Authenticationpage";
import Collectionspage from "./pages/Collectionspage";
import Customizationatelierpage from "./pages/Customizationatelierpage";
import Homepagelookbook from "./pages/Homepagelookbook";
import Useraccountdashboard from "./pages/Useraccountdashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepagelookbook />} />
          <Route path="/authenticationpage" element={<Authenticationpage />} />
          <Route path="/collectionspage" element={<Collectionspage />} />
          <Route path="/customizationatelierpage" element={<Customizationatelierpage />} />
          <Route path="/useraccountdashboard" element={<Useraccountdashboard />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
