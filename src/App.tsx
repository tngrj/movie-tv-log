import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SidebarProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#1A1F2C] w-full flex flex-col">
            <nav className="bg-card p-4 relative z-50">
              <div className="container flex gap-4">
                <Link to="/movies" className="text-white hover:text-primary">
                  Movies
                </Link>
                <Link to="/tv-shows" className="text-white hover:text-primary">
                  TV Shows
                </Link>
              </div>
            </nav>
            <div className="flex-1 relative">
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/movies" element={<Movies />} />
                <Route path="/tv-shows" element={<TVShows />} />
                <Route path="/" element={<Movies />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;