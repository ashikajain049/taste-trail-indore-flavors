import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import VendorProfilePage from "./pages/VendorProfilePage";
import NotFound from "./pages/NotFound";
import BottomNavbar from "./components/BottomNavbar";

const queryClient = new QueryClient();

// Layout component that includes the bottom navbar
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const showBottomNav = !location.pathname.includes("/vendor/");
  
  return (
    <div className="bg-tastetrail-lightgray min-h-screen">
      {children}
      {showBottomNav && <BottomNavbar />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout>
                <HomePage />
              </AppLayout>
            }
          />
          <Route
            path="/discover"
            element={
              <AppLayout>
                <DiscoverPage />
              </AppLayout>
            }
          />
          <Route
            path="/feed"
            element={
              <AppLayout>
                <FeedPage />
              </AppLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <AppLayout>
                <ProfilePage />
              </AppLayout>
            }
          />
          <Route
            path="/vendor/:id"
            element={
              <AppLayout>
                <VendorProfilePage />
              </AppLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
