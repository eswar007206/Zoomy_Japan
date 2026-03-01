import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Index from "./pages/Index";

// Lazy-load non-critical routes for faster initial load
const CommunityList = lazy(() => import("./pages/CommunityList"));
const CommunityDetail = lazy(() => import("./pages/CommunityDetail"));
const CircleList = lazy(() => import("./pages/CircleList"));
const EventList = lazy(() => import("./pages/EventList"));
const MyPage = lazy(() => import("./pages/MyPage"));
const About = lazy(() => import("./pages/About"));
const ColumnList = lazy(() => import("./pages/ColumnList"));
const ColumnDetail = lazy(() => import("./pages/ColumnDetail"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/community" element={<CommunityList />} />
            <Route path="/community/:id" element={<CommunityDetail />} />
            <Route path="/circles" element={<CircleList />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/column" element={<ColumnList />} />
            <Route path="/column/:id" element={<ColumnDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
