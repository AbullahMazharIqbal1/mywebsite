import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { ArrowRight, Code, Smartphone, Brain, Cloud, Palette, Shield, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaveGrid from '@/components/3d/WaveGrid';
import FloatingCubes from '@/components/3d/FloatingCubes';

const Services = () => {
  const mainServices = [
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'Node.js & Python', 'Database Design', 'API Development'],
      price: 'Starting at $5,000'
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS Native', 'Android Native'],
      price: 'Starting at $8,000'
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'AI Solutions',
      description: 'Intelligent systems powered by machine learning and AI.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Chatbots'],
      price: 'Starting at $10,000'
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: 'Cloud Architecture',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS & Azure', 'DevOps & CI/CD', 'Microservices', 'Container Orchestration'],
      price: 'Starting at $3,000'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $2,500'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training'],
      price: 'Starting at $4,000'
    }
  ];

  const additionalServices = [
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Database Optimization',
      description: 'Performance tuning and optimization for better efficiency.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Performance Audits',
      description: 'Comprehensive analysis to improve application speed.'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Code Reviews',
      description: 'Expert code analysis and improvement recommendations.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business needs and project requirements.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Strategic planning and architecture design for optimal results.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and feedback loops.'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deployment, testing, and ongoing support for your solution.'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Neon background effect */}
      <div className="neon-bg" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <WaveGrid />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
              Our Services
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Comprehensive</span>
              <br />
              Digital Solutions
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end development services 
              to bring your digital vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">{service.price}</span>
                      <Button size="sm" variant="outline" className="group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Complementary services to enhance your digital presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-primary mx-auto w-fit">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground">
            Every project is unique. Let's discuss your specific requirements and create a tailored solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge tools and frameworks for modern solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Docker', 'TypeScript', 'PostgreSQL', 'GraphQL', 'Kubernetes', 'Next.js', 'Flutter'].map((tech, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 w-full text-center hover:border-primary/30 transition-colors">
                <span className="font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;