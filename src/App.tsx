import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./pages/Movies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#1A1F2C]">
          <nav className="bg-card p-4">
            <div className="container flex gap-4">
              <Link to="/movies" className="text-white hover:text-primary">
                Movies
              </Link>
              <Link to="/tv-shows" className="text-white hover:text-primary">
                TV Shows
              </Link>
            </div>
          </nav>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/" element={<Movies />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;