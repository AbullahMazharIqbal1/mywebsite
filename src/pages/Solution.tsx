import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { ArrowRight, Rocket, Target, Users, Zap, Brain, Shield, Globe, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import DNAHelix from '@/components/3d/DNAHelix';

const Solution = () => {
  const solutions = [
    {
      icon: <Rocket className="h-12 w-12" />,
      title: 'Startup Solutions',
      description: 'MVP development and rapid prototyping for early-stage companies.',
      features: ['Quick MVP Development', 'Investor-Ready Demos', 'Scalable Architecture', 'Cost-Effective Solutions'],
      caseStudy: 'Helped TechFlow raise $2M Series A with their platform MVP',
      metrics: ['3x faster development', '50% cost reduction', '98% uptime']
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Enterprise Solutions',
      description: 'Large-scale applications with enterprise-grade security and performance.',
      features: ['Enterprise Architecture', 'Advanced Security', 'High Availability', 'Integration Capabilities'],
      caseStudy: 'Modernized GlobalCorp\'s legacy system serving 1M+ users',
      metrics: ['40% performance boost', '99.9% uptime', '100% security compliance']
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Digital Transformation',
      description: 'Complete business process digitization and workflow automation.',
      features: ['Process Automation', 'Legacy System Migration', 'Digital Workflows', 'Analytics Integration'],
      caseStudy: 'Digitized ManufacturingPlus operations, saving $500K annually',
      metrics: ['60% process efficiency', '40% cost savings', '24/7 operations']
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'AI-Powered Solutions',
      description: 'Intelligent systems with machine learning and automation capabilities.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      caseStudy: 'Built AI recommendation engine increasing FinanceBot conversions by 35%',
      metrics: ['35% conversion increase', '70% automation rate', 'Real-time insights']
    }
  ];

  const industries = [
    { name: 'FinTech', icon: '💰', description: 'Payment systems, trading platforms, financial analytics' },
    { name: 'HealthTech', icon: '🏥', description: 'Patient management, telemedicine, health analytics' },
    { name: 'E-commerce', icon: '🛒', description: 'Online stores, marketplaces, inventory management' },
    { name: 'EdTech', icon: '📚', description: 'Learning platforms, course management, student portals' },
    { name: 'Real Estate', icon: '🏠', description: 'Property management, CRM systems, virtual tours' },
    { name: 'Manufacturing', icon: '🏭', description: 'IoT integration, supply chain, quality control' }
  ];

  const technologies = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', 'Go', 'PHP', '.NET Core']
    },
    {
      category: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB']
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      category: 'AI/ML',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face', 'MLflow']
    },
    {
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'iOS Native', 'Android Native', 'Ionic', 'Xamarin']
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
          <DNAHelix />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
              Our Solutions
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Tailored Solutions</span>
              <br />
              for Every Challenge
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From startup MVPs to enterprise-grade systems, we deliver solutions 
              that drive growth and transform businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader className="pb-6">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 w-fit">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h4 className="font-semibold mb-2 text-sm">Case Study:</h4>
                    <p className="text-sm text-muted-foreground mb-3">{solution.caseStudy}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {solution.metrics.map((metric, metricIndex) => (
                        <Badge key={metricIndex} variant="secondary" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/contact">
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise across multiple industries with solutions tailored to specific business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <h3 className="font-semibold text-lg">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge technologies and proven frameworks to deliver robust, scalable solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center">
                    <Code className="mr-3 h-5 w-5 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
            <h2 className="text-4xl font-bold">Our Solution Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful delivery every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analysis',
                description: 'Deep dive into your business needs, challenges, and objectives.',
                icon: <Target className="h-6 w-6" />
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Create a comprehensive solution strategy and technology roadmap.',
                icon: <Brain className="h-6 w-6" />
              },
              {
                step: '03',
                title: 'Development',
                description: 'Agile development with regular feedback and iterative improvements.',
                icon: <Code className="h-6 w-6" />
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Secure deployment with comprehensive testing and monitoring.',
                icon: <Rocket className="h-6 w-6" />
              }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                  <span className="text-primary">{phase.icon}</span>
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Proven Results</h2>
            <p className="text-xl text-muted-foreground">
              Our solutions deliver measurable business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '500+', label: 'Projects Delivered' },
              { metric: '99.9%', label: 'Uptime Average' },
              { metric: '150+', label: 'Happy Clients' },
              { metric: '50%', label: 'Average Cost Savings' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your challenges and create a custom solution that drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;