import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="dark">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<div className="min-h-screen bg-background relative flex items-center justify-center"><div className="neon-bg" /><div className="text-center"><h1 className="text-3xl font-bold text-foreground mb-4">Login Functionality</h1><p className="text-muted-foreground">Login requires backend integration with Supabase.</p><p className="text-muted-foreground mt-2">Click the Supabase button in the top-right to connect.</p></div></div>} />
            <Route path="/register" element={<div className="min-h-screen bg-background relative flex items-center justify-center"><div className="neon-bg" /><div className="text-center"><h1 className="text-3xl font-bold text-foreground mb-4">Register Functionality</h1><p className="text-muted-foreground">Registration requires backend integration with Supabase.</p><p className="text-muted-foreground mt-2">Click the Supabase button in the top-right to connect.</p></div></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
