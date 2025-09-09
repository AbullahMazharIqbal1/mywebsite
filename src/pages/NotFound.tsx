import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import WaveGrid from '@/components/3d/WaveGrid';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative">
      {/* Neon background effect */}
      <div className="neon-bg" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <WaveGrid />
      </div>
      
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-8xl font-bold text-gradient">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/">
          <Button size="lg" className="group">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
