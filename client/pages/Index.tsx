import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { RetroToggle } from "@/components/ui/retro-toggle";
import { useTheme } from "@/hooks/use-theme";
import { useRetroMode } from "@/hooks/use-retro-mode";
import { useUnifiedNotifications } from "@/components/ui/unified-notification";
import { useBrowserDetection } from "@/hooks/use-browser-detection";
import {
  Menu,
  X,
  Home,
  Info,
  Settings,
  Briefcase,
  DollarSign,
  Phone,
  Globe,
  Smartphone,
  Cloud,
  Mail,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Zap,
  Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Index() {
  const { theme } = useTheme();
  const { mode } = useRetroMode();
  const { showInfo } = useUnifiedNotifications();
  const { isMobileSafari, isIOS } = useBrowserDetection();
  const prefersReducedMotion = useReducedMotion();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const hasShownWelcomeRef = useRef(false);

  // Welcome notification - shows once
  useEffect(() => {
    if (!hasShownWelcomeRef.current) {
      hasShownWelcomeRef.current = true;
      setTimeout(() => {
        showInfo(
          "Welcome to KOR!",
          "Mobile-optimized experience ready. Tap X to dismiss.",
          0
        );
      }, 1000);
    }
  }, [showInfo]);

  // Mobile-optimized animations
  const mobileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.25 }
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "services", label: "Services", icon: Settings },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "pricing", label: "Pricing", icon: DollarSign },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      subtitle: "React • Node.js • TypeScript",
      description: "Modern, responsive websites that deliver exceptional user experiences.",
      color: "text-blue-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      subtitle: "iOS • Android • React Native",
      description: "Native and cross-platform mobile applications for any device.",
      color: "text-green-400"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      subtitle: "AWS • Digital Ocean • Vercel",
      description: "Scalable cloud infrastructure and deployment solutions.",
      color: "text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-80 h-full bg-card/95 backdrop-blur-lg border-r border-border z-50 p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  KOR DIGITAL
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-5 h-5 text-blue-400" />
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}
              </div>
              
              <div className="absolute bottom-8 left-6 right-6 border-t border-border pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <div className="flex items-center space-x-2">
                    <ThemeToggle />
                    <RetroToggle />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Performance</span>
                  <span className="text-sm text-green-400 font-medium">MOBILE</span>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            KOR DIGITAL
          </h1>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-accent transition-colors">
              <Moon className="w-5 h-5 text-blue-400" />
            </button>
            <button className="p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-accent transition-colors">
              <Zap className="w-5 h-5 text-green-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
          {/* Mobile Particles - Very Lightweight */}
          {!prefersReducedMotion && (
            <>
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400/50 rounded-full animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }} />
              <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: "2s", animationDuration: "5s" }} />
            </>
          )}
          
          <motion.div
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center max-w-md mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              style={{ textShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            >
              KOR DIGITAL
            </motion.h1>
            <motion.p 
              className="text-xl mb-2 text-muted-foreground"
              variants={mobileVariants}
            >
              Modern Web Solutions
            </motion.p>
            <motion.p 
              className="text-base mb-8 text-muted-foreground leading-relaxed"
              variants={mobileVariants}
            >
              Cutting-edge web development, mobile apps, and cloud solutions that drive your business forward.
            </motion.p>
            
            <motion.div 
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              variants={mobileVariants}
            >
              <motion.button
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-foreground font-semibold hover:bg-accent transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-4 py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-md mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            
            <div className="space-y-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className={cn("w-8 h-8 mr-3", service.color)} />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <motion.button 
                      className="text-blue-400 font-medium flex items-center group"
                      whileHover={{ x: 4 }}
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-12 bg-muted/20">
          <div className="max-w-md mx-auto text-center">
            <motion.h2 
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Impact
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div 
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">Uptime</span>
                  <span className="text-blue-400 font-bold">99.8%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.8%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-2xl font-bold text-green-400 mb-1">2024</div>
                  <div className="text-sm text-muted-foreground">Since</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 py-16 bg-background">
          <div className="max-w-md mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            
            <motion.form 
              className="space-y-6"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 bg-muted/20 border-t border-border">
          <div className="max-w-md mx-auto text-center">
            <motion.div 
              className="mb-4"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                KOR DIGITAL
              </h3>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-6 mb-6"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-blue-400 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-sm text-muted-foreground"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              © 2024 KOR Digital • <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}
