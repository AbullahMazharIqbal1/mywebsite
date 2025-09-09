import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import HeroModel from '@/components/3d/HeroModel';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'hello@scriptix.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm EST'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      details: '123 Innovation Street',
      description: 'San Francisco, CA 94103'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'We respond to all inquiries quickly'
    }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'AI Solutions',
    'Cloud Architecture',
    'UI/UX Design',
    'Cybersecurity',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Neon background effect */}
      <div className="neon-bg" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <HeroModel />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
              Contact Us
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              Let's Build Something
              <br />
              <span className="text-gradient">Amazing Together</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to turn your ideas into reality? Get in touch with our team and 
              let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="mr-3 h-6 w-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="bg-input border-border"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="bg-input border-border"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="bg-input border-border"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="bg-input border-border"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Project Description *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and requirements..."
                        rows={5}
                        required
                        className="bg-input border-border resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Have questions about your project? We're here to help. 
                  Contact us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="text-foreground font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Response Promise */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Quick Response Promise</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 4 hours during business hours 
                    and within 24 hours on weekends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity, but most web applications take 8-16 weeks, while mobile apps typically require 12-20 weeks."
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes! We offer comprehensive maintenance packages including bug fixes, security updates, and feature enhancements."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely. We often collaborate with in-house teams and can integrate seamlessly into your existing development workflow."
              },
              {
                question: "What's your payment structure?",
                answer: "We typically work with milestone-based payments: 30% upfront, 40% at project midpoint, and 30% upon completion."
              }
            ].map((faq, index) => (
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

export default Contact;