import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { ArrowRight, Users, Target, Lightbulb, Award, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import DNAHelix from '@/components/3d/DNAHelix';
import WaveGrid from '@/components/3d/WaveGrid';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '8+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission-Driven',
      description: 'We are committed to delivering solutions that drive real business results and create meaningful impact.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships through trust and exceptional service.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, design, and project delivery.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech innovation.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Full-stack architect passionate about scalable solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'UX expert creating intuitive digital experiences.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Kumar',
      role: 'Lead Developer',
      bio: 'Backend specialist with expertise in cloud architecture.',
      image: '/api/placeholder/300/300'
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
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
              About Scriptix
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              Building the <span className="text-gradient">Future</span>
              <br />
              One Line of Code at a Time
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate developers, designers, and innovators dedicated to 
              creating software solutions that transform businesses and empower growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016, Scriptix began as a small team of developers with a big vision: 
                  to democratize access to cutting-edge software solutions for businesses of all sizes.
                </p>
                <p>
                  What started as a passion project has evolved into a full-service development 
                  agency, helping startups and enterprises across the globe transform their ideas 
                  into powerful digital solutions.
                </p>
                <p>
                  Today, we're proud to be at the forefront of technological innovation, 
                  specializing in AI-powered applications, cloud-native architectures, 
                  and modern web technologies.
                </p>
              </div>
              
              <Link to="/contact">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <Globe className="h-8 w-8 text-primary mb-3" />
                    <div className="text-sm font-medium">Global Reach</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <Zap className="h-8 w-8 text-accent mb-3" />
                    <div className="text-sm font-medium">Fast Delivery</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border col-span-2">
                    <Award className="h-8 w-8 text-primary mb-3" />
                    <div className="text-sm font-medium">Award-Winning Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-primary mx-auto w-fit">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your project and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/services">
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;