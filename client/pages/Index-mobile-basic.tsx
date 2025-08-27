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
  Star,
  Users,
  Code,
  Palette,
  Shield,
  Database,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Terminal,
  Instagram,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  TrendingUp,
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
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [currentProjectPage, setCurrentProjectPage] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
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
    { id: "about", label: "About Us", icon: Info },
    { id: "process", label: "Our Process", icon: Settings },
    { id: "services", label: "Services", icon: Settings },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "pricing", label: "Pricing", icon: DollarSign },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  // Content data from desktop version
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      category: "ANALYZE",
      description: "We conduct comprehensive analysis of your business requirements, market position, and technical needs to develop a strategic roadmap that ensures project success from day one.",
      features: ["Business Analysis", "Market Research", "Technical Planning", "Strategy Development"],
      metric: { value: "100%", label: "Requirements Clarity" }
    },
    {
      number: "02", 
      title: "Design & Innovation",
      category: "CREATE",
      description: "Our design team creates intuitive, user-centered interfaces that balance aesthetic excellence with functional efficiency, ensuring optimal user experience across all platforms.",
      features: ["UI/UX Design", "Brand Integration", "Prototype Development", "User Testing"],
      metric: { value: "99%", label: "User Satisfaction Rate" }
    },
    {
      number: "03",
      title: "Development & Engineering", 
      category: "BUILD",
      description: "We build robust, scalable solutions using industry-leading technologies and best practices, ensuring your application performs flawlessly under any load conditions.",
      features: ["Full-Stack Development", "Cloud Architecture", "Performance Optimization", "Security Implementation"],
      metric: { value: "<0.5s", label: "Load Time Average" }
    },
    {
      number: "04",
      title: "Launch & Support",
      category: "DEPLOY", 
      description: "We ensure seamless deployment and provide ongoing maintenance, monitoring, and optimization services to keep your solution running at peak performance as your business grows.",
      features: ["Production Deployment", "Performance Monitoring", "24/7 Technical Support", "Continuous Optimization"],
      metric: { value: "99.9%", label: "Uptime Guarantee" }
    }
  ];

  const allServices = [
    { icon: Globe, title: "Web Development", description: "Modern, responsive websites built with cutting-edge technologies", color: "text-blue-400" },
    { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile applications", color: "text-green-400" },
    { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive designs that engage and convert", color: "text-purple-400" },
    { icon: Zap, title: "AI Integration", description: "Smart solutions powered by artificial intelligence", color: "text-yellow-400" },
    { icon: TrendingUp, title: "SEO Optimization", description: "Boost your search rankings and drive organic traffic", color: "text-pink-400" },
    { icon: Settings, title: "Custom Solutions", description: "Tailored software solutions for unique business needs", color: "text-cyan-400" },
    { icon: Users, title: "Consulting Services", description: "Strategic technology consulting and digital transformation", color: "text-orange-400" },
    { icon: Shield, title: "Cybersecurity", description: "Comprehensive security solutions to protect your digital assets", color: "text-red-400" },
    { icon: Cloud, title: "Cloud Solutions", description: "Scalable cloud infrastructure and migration services", color: "text-indigo-400" },
    { icon: BarChart3, title: "Data Analytics", description: "Transform raw data into actionable business insights", color: "text-emerald-400" },
    { icon: Code, title: "API Development", description: "Robust APIs for seamless system integrations", color: "text-violet-400" },
    { icon: Database, title: "DevOps & CI/CD", description: "Streamlined development and deployment pipelines", color: "text-teal-400" }
  ];

  const portfolioProjects = [
    { title: "E-Commerce Platform", description: "Modern shopping experience with AI recommendations", tech: ["React", "Node.js", "AI/ML"] },
    { title: "Healthcare App", description: "Telemedicine platform connecting patients and doctors", tech: ["React Native", "Firebase", "WebRTC"] },
    { title: "FinTech Dashboard", description: "Real-time financial analytics and trading platform", tech: ["Vue.js", "Python", "WebSocket"] },
    { title: "Smart IoT System", description: "Connected devices management platform", tech: ["Angular", "IoT", "Cloud"] },
    { title: "AI Analytics Suite", description: "Machine learning powered business intelligence platform", tech: ["Python", "TensorFlow", "React"] },
    { title: "Blockchain Wallet", description: "Secure cryptocurrency wallet with DeFi integration", tech: ["Solidity", "Web3.js", "Next.js"] },
    { title: "Video Streaming App", description: "High-performance video platform with live streaming", tech: ["React Native", "WebRTC", "Node.js"] },
    { title: "Cloud Monitoring Tool", description: "Real-time infrastructure monitoring and alerting system", tech: ["Go", "Docker", "Kubernetes"] }
  ];

  const pricingPlans = [
    {
      name: "Custom Software/Tools",
      price: "$100",
      maxPrice: "Unlimited",
      popular: false,
      perks: [
        "Tailored to your needs",
        "Full source code", 
        "Documentation included",
        "Testing & debugging",
        "Performance optimized",
        "Support & maintenance"
      ]
    },
    {
      name: "Websites", 
      price: "$150",
      maxPrice: "Unlimited",
      popular: true,
      perks: [
        "Fully built & deployed",
        "Professional design",
        "Mobile responsive", 
        "SEO optimized",
        "Fast loading times",
        "Contact forms"
      ]
    },
    {
      name: "Discord Bots",
      price: "$50", 
      maxPrice: "$500",
      popular: false,
      perks: [
        "Custom commands",
        "Database integration",
        "Moderation features", 
        "Auto-responses",
        "Activity tracking",
        "24/7 hosting setup"
      ]
    }
  ];

  const interestOptions = [
    "Web Design", "Web Development", "Software/App Development", 
    "E-commerce Solutions", "UI/UX Design", "Digital Marketing", "Other"
  ];

  const budgetOptions = [
    "$0 - $1K", "$1K - $5K", "$5K - $10K", 
    "$10K - $25K", "$25K - $50K", "$50K+"
  ];

  const projectsPerPage = 4;
  const totalPages = Math.ceil(portfolioProjects.length / projectsPerPage);
  const currentProjects = portfolioProjects.slice(
    currentProjectPage * projectsPerPage,
    (currentProjectPage + 1) * projectsPerPage
  );

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
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
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
            <div className="mb-4 inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400">
              Future-Ready Solutions, Custom-Built
            </div>
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
              Development Services
            </motion.p>
            <motion.p 
              className="text-base mb-8 text-muted-foreground leading-relaxed"
              variants={mobileVariants}
            >
              Cutting-edge web development, mobile apps, and cloud solutions that drive your business forward.
            </motion.p>
            
            {/* System Status Terminal Preview */}
            <motion.div 
              className="mb-8 p-4 bg-black/50 border border-green-400/30 rounded-lg text-left text-sm font-mono text-green-400"
              variants={mobileVariants}
            >
              <div className="mb-2 text-green-300">SYSTEM STATUS: OPERATIONAL</div>
              <div className="space-y-1 text-xs">
                <div>[ACTIVE] CUSTOM SOFTWARE SOLUTIONS</div>
                <div>[ACTIVE] WEB APPLICATION DEVELOPMENT</div>
                <div>[ACTIVE] AI/ML INTEGRATION SERVICES</div>
                <div>[PRIORITY] LEGACY SYSTEM MODERNIZATION</div>
              </div>
            </motion.div>
            
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
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Us Section */}
        <section id="about" className="px-4 py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-md mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About Us
            </motion.h2>
            <motion.h3 
              className="text-xl font-semibold text-center mb-8 text-muted-foreground"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Crafting Digital Excellence
            </motion.h3>
            
            <motion.div 
              className="space-y-6 mb-12"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed">
                We are a cutting-edge software development company dedicated to transforming innovative ideas into powerful digital solutions. Our team of expert developers, designers, and strategists work collaboratively to deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in modern web development, mobile applications, and AI integration, we bring your vision to life with precision and creativity.
              </p>
            </motion.div>

            {/* Company Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-8"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="text-2xl font-bold text-blue-400 mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Process Section */}
        <section id="process" className="px-4 py-16 bg-muted/20">
          <div className="max-w-md mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Process
            </motion.h2>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                >
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center mr-4">
                      <span className="font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-1">{step.category}</div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{step.metric.label}</span>
                    <span className="text-sm font-bold text-primary">{step.metric.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
            
            <div className="space-y-4">
              {allServices.map((service, index) => {
                const IconComponent = service.icon;
                const isExpanded = expandedService === index;
                
                return (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-xl bg-card/50 backdrop-blur-sm border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : index)}
                      className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <IconComponent className={cn("w-6 h-6 mr-3", service.color)} />
                        <h3 className="font-semibold text-left">{service.title}</h3>
                      </div>
                      <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="px-4 py-3">
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                            <button className="text-blue-400 text-sm font-medium flex items-center">
                              Learn More <ArrowRight className="w-3 h-3 ml-1" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="px-4 py-16 bg-muted/20">
          <div className="max-w-md mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Portfolio
            </motion.h2>
            
            <div className="space-y-6 mb-6">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Portfolio Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setCurrentProjectPage(Math.max(0, currentProjectPage - 1))}
                  disabled={currentProjectPage === 0}
                  className="px-4 py-2 rounded-lg bg-card/50 border border-border disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="text-sm text-muted-foreground">
                  {currentProjectPage + 1} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentProjectPage(Math.min(totalPages - 1, currentProjectPage + 1))}
                  disabled={currentProjectPage === totalPages - 1}
                  className="px-4 py-2 rounded-lg bg-card/50 border border-border disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-4 py-16 bg-background">
          <div className="max-w-md mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Pricing
            </motion.h2>
            
            <div className="space-y-6 mb-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "p-6 rounded-xl border relative",
                    plan.popular 
                      ? "bg-primary/5 border-primary/30" 
                      : "bg-card/50 border-border"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-2xl font-bold">{plan.price}</span>
                      <span className="text-sm text-muted-foreground ml-1"> - {plan.maxPrice}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.perks.map((perk, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{perk}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={cn(
                    "w-full py-3 rounded-lg font-semibold transition-colors",
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-card border border-border hover:bg-accent"
                  )}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-xs text-center text-muted-foreground"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              *Note: Final pricing depends on the complexity, features, and specific requirements of your project. Contact us for a detailed quote tailored to your needs.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 py-16 bg-muted/20">
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
            
            {/* Quick Contact Options */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a 
                href="mailto:contact@kor.dev"
                className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors text-center"
              >
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium">Email</div>
                <div className="text-xs text-muted-foreground">contact@kor.dev</div>
              </a>
              
              <a 
                href="#"
                className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors text-center"
              >
                <Instagram className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                <div className="text-sm font-medium">Instagram</div>
                <div className="text-xs text-muted-foreground">@kor.dev</div>
              </a>
              
              <a 
                href="#"
                className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors text-center"
              >
                <MessageCircle className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium">Discord</div>
                <div className="text-xs text-muted-foreground">Join Server</div>
              </a>
              
              <a 
                href="#"
                className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors text-center"
              >
                <Send className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium">Telegram</div>
                <div className="text-xs text-muted-foreground">@kor_dev</div>
              </a>
            </motion.div>

            {/* Status Indicators */}
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-8 text-sm"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-muted-foreground">Online</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-400 mr-1" />
                <span className="text-muted-foreground">Response: &lt; 24h</span>
              </div>
            </motion.div>

            {/* Full Contact Form */}
            <motion.form 
              className="space-y-4"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-3 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Interest Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground">What interests you?</label>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => {
                        setSelectedInterests(prev => 
                          prev.includes(interest) 
                            ? prev.filter(i => i !== interest)
                            : [...prev, interest]
                        );
                      }}
                      className={cn(
                        "p-2 rounded-lg text-xs border transition-colors",
                        selectedInterests.includes(interest)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card/50 border-border hover:border-primary/50"
                      )}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground">Budget Range</label>
                <div className="grid grid-cols-3 gap-2">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={cn(
                        "p-2 rounded-lg text-xs border transition-colors",
                        selectedBudget === budget
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card/50 border-border hover:border-primary/50"
                      )}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Project Description</label>
                <textarea 
                  rows={4} 
                  className="w-full px-3 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Something about your great idea..."
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Your Request
                <Send className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.form>

            <motion.p 
              className="text-center text-sm text-muted-foreground mt-4"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We typically respond within 24 hours
            </motion.p>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 bg-background border-t border-border">
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
              {[
                { Icon: Github, href: "#" },
                { Icon: Twitter, href: "#" }, 
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "mailto:contact@kor.dev" },
                { Icon: Instagram, href: "#" },
                { Icon: MessageCircle, href: "#" }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-muted-foreground hover:text-blue-400 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-xs text-muted-foreground space-y-1"
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>COPYRIGHT (C) 2024 KOR SYSTEMS - ALL RIGHTS RESERVED</div>
              <div>contact@kor.dev • <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></div>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}
