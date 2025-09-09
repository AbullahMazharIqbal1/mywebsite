import { Button } from '@/components/ui/button';
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import CodeEditor from '@/components/CodeEditor';
import Navigation from '@/components/Navigation';
import CookieConsent from '@/components/CookieConsent';
import HeroModel from '@/components/3d/HeroModel';
import FloatingCubes from '@/components/3d/FloatingCubes';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Neon background effect for entire page */}
      <div className="neon-bg" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6">
        {/* 3D Model Background */}
        <div className="absolute inset-0 z-0">
          <HeroModel />
        </div>
        
        {/* Additional floating orbs for depth */}
        <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 glow-effect opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 glow-effect opacity-20 animate-float" />
        <div className="absolute top-1/2 left-1/3 w-56 sm:w-80 h-56 sm:h-80 glow-effect opacity-25 animate-float" style={{animationDelay: '2s'}} />
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Content - Code Editor */}
          <div className="order-2 lg:order-1 lg:pr-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CodeEditor />
          </div>
          
          {/* Right Content - Hero Text */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center bg-secondary/50 border border-border rounded-full px-4 py-2 animate-scale-in">
              <span className="text-sm font-medium text-muted-foreground">
                🚀 Empowering Global Startup Growth
              </span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                <div className="futuristic-text" style={{animationDelay: '0.2s'}}>
                  <span className="text-foreground break-words">FUTURE-DRIVEN</span>
                </div>
                <div className="futuristic-text" style={{animationDelay: '0.4s'}}>
                  <span className="text-foreground break-words">SOFTWARE</span>
                </div>
                <div className="futuristic-text" style={{animationDelay: '0.6s'}}>
                  <span className="text-gradient break-words">DEVELOPMENT</span>
                  <span className="text-accent typing-animation"> {'}'}</span>
                </div>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in" style={{animationDelay: '1s'}}>
                We craft high-quality digital solutions that help businesses 
                grow, scale, and innovate in a fast-changing world.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <Link to="/contact">
                <Button size="lg" className="group animate-glow hover-scale">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-border hover:bg-secondary hover-scale">
                  See Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Landing Page Sections */}
      
      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-gradient">nocvacode</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver cutting-edge solutions with modern technologies and industry best practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover-scale transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Fast Development</h3>
              <p className="text-muted-foreground">Rapid prototyping and development with modern frameworks and tools</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 hover-scale transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">High Performance</h3>
              <p className="text-muted-foreground">Optimized applications with lightning-fast loading times</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 hover-scale transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Secure & Scalable</h3>
              <p className="text-muted-foreground">Enterprise-grade security with scalable architecture</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20 relative">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <FloatingCubes />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Technologies We <span className="text-gradient">Master</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technologies for modern web and mobile applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
              <div key={tech} className="bg-card border border-border rounded-xl p-6 text-center hover-scale transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-2xl font-bold text-primary mb-2">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">500+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">50+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">99%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-gradient">Development Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure project success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Design', desc: 'Creating beautiful and functional designs' },
              { step: '03', title: 'Development', desc: 'Building with cutting-edge technology' },
              { step: '04', title: 'Launch', desc: 'Deploying and maintaining your solution' }
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 hover-scale transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients say about working with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Exceptional service and outstanding results. They transformed our vision into reality.' },
              { name: 'Michael Chen', role: 'CTO, InnovateCo', text: 'Professional team with deep technical expertise. Highly recommend their services.' },
              { name: 'Emily Davis', role: 'Founder, DigitalFlow', text: 'They delivered beyond our expectations. Great communication throughout the project.' }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-card border border-border rounded-xl p-6 hover-scale">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ready to Build Your <span className="text-gradient">Dream Project</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="animate-glow hover-scale">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="hover-scale">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Follow Us */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow Us</span>
              <div className="flex space-x-3">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Scroll to explore */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Scroll to explore</span>
              <div className="flex flex-col space-y-1">
                <div className="w-4 h-0.5 bg-muted-foreground"></div>
                <div className="w-4 h-0.5 bg-muted-foreground/60"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Cookie Consent Component */}
      <CookieConsent />
    </div>
  );
};

export default Home;