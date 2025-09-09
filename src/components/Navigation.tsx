import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-foreground">nocvacode</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      isActive('/') ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-sm font-medium ${
                    location.pathname.includes('/services') ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-80 bg-card border border-border rounded-lg">
                      <div className="grid gap-3">
                        <Link to="/services/web-development" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                          <div className="font-medium text-foreground">Web Development</div>
                          <div className="text-sm text-muted-foreground">Custom web applications and websites</div>
                        </Link>
                        <Link to="/services/mobile-development" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                          <div className="font-medium text-foreground">Mobile Development</div>
                          <div className="text-sm text-muted-foreground">iOS and Android applications</div>
                        </Link>
                        <Link to="/services/ai-solutions" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                          <div className="font-medium text-foreground">AI Solutions</div>
                          <div className="text-sm text-muted-foreground">Machine learning and AI integration</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/pricing" 
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      isActive('/pricing') ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/solution" 
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      isActive('/solution') ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    Solution
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language Selector, Contact & Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Globe className="w-4 h-4 mr-2" />
                English
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              
              <Link to="/contact">
                <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Contact
                </Button>
              </Link>
              
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Login
                  </Button>
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link to="/register">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link to="/solution" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Solution
              </Link>
              <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <div className="pt-4 border-t border-border">
                <Link to="/login" className="block">
                  <Button variant="outline" size="sm" className="w-full mb-2">
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="block">
                  <Button size="sm" className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;