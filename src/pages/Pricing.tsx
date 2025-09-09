import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Check, ArrowRight, Star, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingCubes from '@/components/3d/FloatingCubes';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: <Zap className="h-8 w-8" />,
      price: '$2,500',
      period: 'one-time',
      description: 'Perfect for small businesses and startups',
      features: [
        'Landing Page Design',
        'Mobile Responsive',
        'Basic SEO Setup',
        'Contact Form',
        '30 Days Support',
        'Source Code Included'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      icon: <Star className="h-8 w-8" />,
      price: '$8,500',
      period: 'one-time',
      description: 'Ideal for growing businesses',
      features: [
        'Custom Web Application',
        'Database Integration',
        'User Authentication',
        'Admin Dashboard',
        'API Development',
        '90 Days Support',
        'Performance Optimization',
        'Security Features'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      icon: <Crown className="h-8 w-8" />,
      price: 'Custom',
      period: 'quote',
      description: 'For large-scale applications',
      features: [
        'Custom Architecture',
        'Microservices Design',
        'Cloud Infrastructure',
        'Advanced Security',
        'Load Balancing',
        '1 Year Support',
        'Dedicated Team',
        'Priority Support'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const additionalServices = [
    {
      service: 'Mobile App Development',
      price: '$12,000 - $35,000',
      description: 'Native iOS/Android or Cross-platform apps'
    },
    {
      service: 'AI/ML Integration',
      price: '$15,000 - $50,000',
      description: 'Custom AI solutions and machine learning models'
    },
    {
      service: 'DevOps & Cloud Setup',
      price: '$3,000 - $10,000',
      description: 'CI/CD pipelines and cloud infrastructure'
    },
    {
      service: 'UI/UX Design',
      price: '$2,000 - $8,000',
      description: 'Complete design system and user experience'
    },
    {
      service: 'Maintenance & Support',
      price: '$500 - $2,000/month',
      description: 'Ongoing updates, monitoring, and support'
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the pricing?',
      answer: 'All prices include development, testing, deployment, and the specified support period. Source code and documentation are always included.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer flexible payment schedules: 30% upfront, 40% at project midpoint, and 30% upon completion.'
    },
    {
      question: 'What if my project requirements change?',
      answer: 'We use agile methodology and can accommodate changes. Additional features are billed separately at our hourly rate of $150/hour.'
    },
    {
      question: 'Do you provide hosting?',
      answer: 'We can set up hosting on your preferred platform (AWS, Google Cloud, etc.) and provide initial configuration. Ongoing hosting costs are separate.'
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
          <FloatingCubes />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
              Pricing Plans
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Transparent</span> Pricing
              <br />
              for Every Project
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your project. No hidden fees, no surprises. 
              Just honest pricing for quality development work.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-card border-border hover:border-primary/50 transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-8 pt-8">
                  <div className="text-center space-y-4">
                    <div className={`mx-auto w-fit ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`}>
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold">
                        {plan.price}
                        {plan.period !== 'quote' && (
                          <span className="text-lg text-muted-foreground font-normal">
                            /{plan.period}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="block">
                    <Button 
                      className={`w-full ${plan.popular ? 'animate-glow' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expand your project with specialized services tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{service.service}</h3>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Why Choose Our Pricing?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">No Hidden Costs</h3>
                    <p className="text-muted-foreground">
                      What you see is what you pay. All costs are transparent and discussed upfront.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Flexible Payment Terms</h3>
                    <p className="text-muted-foreground">
                      We offer milestone-based payments to ensure you're comfortable throughout the project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-muted-foreground">
                      We stand behind our work with comprehensive testing and quality assurance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Post-Launch Support</h3>
                    <p className="text-muted-foreground">
                      Every project includes support to ensure smooth operation after launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                <p className="text-muted-foreground">
                  Get a detailed quote for your specific project requirements.
                </p>
                
                <div className="space-y-4">
                  <Link to="/contact">
                    <Button size="lg" className="w-full group">
                      Get Custom Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <p className="text-sm text-muted-foreground">
                    Free consultation • No obligation • 24hr response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Pricing FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our pricing and payment process.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;