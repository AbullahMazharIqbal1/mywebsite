import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    // Here you would initialize analytics, tracking cookies, etc.
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    // Here you would disable analytics, tracking cookies, etc.
    console.log('Cookies declined');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md bg-card border border-border rounded-lg p-4 shadow-lg z-50 animate-fade-in">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-semibold text-foreground">Cookie Consent</h3>
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0 hover:bg-transparent"
              onClick={handleDecline}
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            This website uses cookies to enhance your browsing experience, analyze traffic, and improve our services.
          </p>
          <div className="flex space-x-3">
            <Button
              size="sm"
              variant="outline"
              onClick={handleDecline}
              className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;