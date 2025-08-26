import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
  Star,
  Users,
  Code,
  Palette,
  Shield,
  Database,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Instagram,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Index() {
  const { showInfo } = useUnifiedNotifications();
  const { isMobileSafari, isIOS } = useBrowserDetection();
  const prefersReducedMotion = useReducedMotion();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [currentProjectPage, setCurrentProjectPage] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
  });
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const hasShownWelcomeRef = useRef(false);

  // Animated counters effect
  useEffect(() => {
    if (isCounterVisible) {
      const animateCounter = (
        target: number,
        key: keyof typeof counters,
        duration: number,
      ) => {
        const start = Date.now();
        const increment = target / (duration / 16);

        const updateCounter = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(target * progress);

          setCounters((prev) => ({ ...prev, [key]: current }));

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        updateCounter();
      };

      setTimeout(() => animateCounter(100, "projects", 2000), 200);
      setTimeout(() => animateCounter(50, "clients", 2000), 600);
      setTimeout(() => animateCounter(5, "years", 2000), 1000);
    }
  }, [isCounterVisible]);

  // Welcome notification - shows once
  useEffect(() => {
    if (!hasShownWelcomeRef.current) {
      hasShownWelcomeRef.current = true;
      setTimeout(() => {
        showInfo(
          "Welcome to KOR!",
          "Premium mobile experience ready. Tap X to dismiss.",
          0,
        );
      }, 1000);
    }
  }, [showInfo]);

  // Enhanced mobile animations
  const premiumVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 50, rotate: 0 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 360,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 1.2,
        ease: "easeOut",
      },
    },
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

  // Content data (same as before but enhanced presentation)
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      category: "ANALYZE",
      description:
        "We conduct comprehensive analysis of your business requirements, market position, and technical needs to develop a strategic roadmap that ensures project success from day one.",
      features: [
        "Business Analysis",
        "Market Research",
        "Technical Planning",
        "Strategy Development",
      ],
      metric: { value: "100%", label: "Requirements Clarity" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Design & Innovation",
      category: "CREATE",
      description:
        "Our design team creates intuitive, user-centered interfaces that balance aesthetic excellence with functional efficiency, ensuring optimal user experience across all platforms.",
      features: [
        "UI/UX Design",
        "Brand Integration",
        "Prototype Development",
        "User Testing",
      ],
      metric: { value: "99%", label: "User Satisfaction Rate" },
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Development & Engineering",
      category: "BUILD",
      description:
        "We build robust, scalable solutions using industry-leading technologies and best practices, ensuring your application performs flawlessly under any load conditions.",
      features: [
        "Full-Stack Development",
        "Cloud Architecture",
        "Performance Optimization",
        "Security Implementation",
      ],
      metric: { value: "<0.5s", label: "Load Time Average" },
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Launch & Support",
      category: "DEPLOY",
      description:
        "We ensure seamless deployment and provide ongoing maintenance, monitoring, and optimization services to keep your solution running at peak performance as your business grows.",
      features: [
        "Production Deployment",
        "Performance Monitoring",
        "24/7 Technical Support",
        "Continuous Optimization",
      ],
      metric: { value: "99.9%", label: "Uptime Guarantee" },
      color: "from-orange-500 to-red-500",
    },
  ];

  const allServices = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technologies",
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      color: "text-green-400",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage and convert",
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Smart solutions powered by artificial intelligence",
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic",
      color: "text-pink-400",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored software solutions for unique business needs",
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic technology consulting and digital transformation",
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets",
      color: "text-red-400",
      gradient: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      color: "text-indigo-400",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights",
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 to-green-500/20",
    },
    {
      icon: Code,
      title: "API Development",
      description: "Robust APIs for seamless system integrations",
      color: "text-violet-400",
      gradient: "from-violet-500/20 to-purple-500/20",
    },
    {
      icon: Database,
      title: "DevOps & CI/CD",
      description: "Streamlined development and deployment pipelines",
      color: "text-teal-400",
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
  ];

  const portfolioProjects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with AI recommendations",
      tech: ["React", "Node.js", "AI/ML"],
      gradient: "from-blue-500/10 to-purple-500/10",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop&crop=center",
    },
    {
      title: "Healthcare App",
      description: "Telemedicine platform connecting patients and doctors",
      tech: ["React Native", "Firebase", "WebRTC"],
      gradient: "from-green-500/10 to-blue-500/10",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=240&fit=crop&crop=center",
    },
    {
      title: "FinTech Dashboard",
      description: "Real-time financial analytics and trading platform",
      tech: ["Vue.js", "Python", "WebSocket"],
      gradient: "from-yellow-500/10 to-orange-500/10",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=240&fit=crop&crop=center",
    },
    {
      title: "Smart IoT System",
      description: "Connected devices management platform",
      tech: ["Angular", "IoT", "Cloud"],
      gradient: "from-purple-500/10 to-pink-500/10",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=240&fit=crop&crop=center",
    },
    {
      title: "AI Analytics Suite",
      description: "Machine learning powered business intelligence platform",
      tech: ["Python", "TensorFlow", "React"],
      gradient: "from-cyan-500/10 to-blue-500/10",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center",
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with DeFi integration",
      tech: ["Solidity", "Web3.js", "Next.js"],
      gradient: "from-orange-500/10 to-red-500/10",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=240&fit=crop&crop=center",
    },
    {
      title: "Video Streaming App",
      description: "High-performance video platform with live streaming",
      tech: ["React Native", "WebRTC", "Node.js"],
      gradient: "from-red-500/10 to-pink-500/10",
      image:
        "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=400&h=240&fit=crop&crop=center",
    },
    {
      title: "Cloud Monitoring Tool",
      description: "Real-time infrastructure monitoring and alerting system",
      tech: ["Go", "Docker", "Kubernetes"],
      gradient: "from-teal-500/10 to-green-500/10",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop&crop=center",
    },
  ];

  const pricingPlans = [
    {
      name: "Custom Software/Tools",
      price: "$100",
      maxPrice: "Unlimited",
      popular: false,
      gradient: "from-gray-500/10 to-slate-500/10",
      perks: [
        "Tailored to your needs",
        "Full source code",
        "Documentation included",
        "Testing & debugging",
        "Performance optimized",
        "Support & maintenance",
      ],
    },
    {
      name: "Websites",
      price: "$150",
      maxPrice: "Unlimited",
      popular: true,
      gradient: "from-blue-500/20 to-purple-500/20",
      perks: [
        "Fully built & deployed",
        "Professional design",
        "Mobile responsive",
        "SEO optimized",
        "Fast loading times",
        "Contact forms",
      ],
    },
    {
      name: "Discord Bots",
      price: "$50",
      maxPrice: "$500",
      popular: false,
      gradient: "from-indigo-500/10 to-blue-500/10",
      perks: [
        "Custom commands",
        "Database integration",
        "Moderation features",
        "Auto-responses",
        "Activity tracking",
        "24/7 hosting setup",
      ],
    },
  ];

  const interestOptions = [
    "Web Design",
    "Web Development",
    "Software/App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Digital Marketing",
    "Other",
  ];

  const budgetOptions = [
    "$0 - $1K",
    "$1K - $5K",
    "$5K - $10K",
    "$10K - $25K",
    "$25K - $50K",
    "$50K+",
  ];

  const projectsPerPage = 4;
  const totalPages = Math.ceil(portfolioProjects.length / projectsPerPage);
  const currentProjects = portfolioProjects.slice(
    currentProjectPage * projectsPerPage,
    (currentProjectPage + 1) * projectsPerPage,
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden mobile-gradient-bg mobile-optimized-animations">
      {/* Floating scroll indicator */}
      <motion.div
        className="fixed bottom-8 right-4 z-20 p-3 rounded-full mobile-premium-card mobile-fab mobile-scroll-hint"
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            "0 4px 15px rgba(59, 130, 246, 0.3)",
            "0 8px 25px rgba(59, 130, 246, 0.5)",
            "0 4px 15px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          rotate: 10,
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          window.scrollTo({ top: window.scrollY + 400, behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-5 h-5 text-blue-400" />
        <div className="mobile-pulse-ring" />
      </motion.div>
      {/* Beautiful Animated Background */}
      <div className="fixed inset-0 mobile-mesh-bg pointer-events-none z-0" />

      {/* Orbital Background Elements */}
      <div className="mobile-orbital-bg fixed inset-0 z-0">
        <div className="mobile-orbit"></div>
        <div className="mobile-orbit"></div>
        <div className="mobile-orbit"></div>
      </div>

      {/* Enhanced Floating Particles with More Life */}
      <div className="mobile-floating-particles fixed inset-0 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="mobile-particle mobile-optimized-animations"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * -2}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              background: [
                "radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(236, 72, 153, 0.7) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(34, 211, 238, 0.8) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(245, 158, 11, 0.7) 0%, transparent 70%)",
              ][i % 6],
            }}
          />
        ))}
      </div>

      {/* Enhanced Breathing Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full mobile-breathing-orb mobile-optimized-animations"
            style={{
              left: `${15 + ((i * 12) % 70)}%`,
              top: `${25 + ((i * 18) % 50)}%`,
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              background: [
                "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(34, 197, 94, 0.13) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(236, 72, 153, 0.11) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(245, 158, 11, 0.10) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(139, 92, 246, 0.11) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
              ][i],
              filter: "blur(25px)",
              animationDelay: `${i * 1.2}s`,
              transform: "translateZ(0)",
            }}
          />
        ))}
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-80 h-full mobile-premium-card z-50 p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold mobile-premium-text">kor</h2>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent transition-colors mobile-tilt-card"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="space-y-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg mobile-premium-card hover:bg-accent transition-all duration-300"
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">{item.label}</span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="absolute bottom-8 left-6 right-6 border-t border-border pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Performance
                  </span>
                  <span className="text-sm text-green-400 font-medium mobile-stat-counter">
                    PREMIUM
                  </span>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Mobile Header */}
      {/* Animated Menu button in corner */}
      <motion.button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-30 p-3 rounded-xl mobile-premium-card mobile-tilt-card mobile-menu-enhanced mobile-fab mobile-touch-feedback relative overflow-hidden"
        whileHover={{
          scale: 1.15,
          rotate: 8,
          boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
        }}
        whileTap={{ scale: 0.85, rotate: -8 }}
        animate={{
          y: [0, -3, 0],
          boxShadow: [
            "0 8px 20px rgba(59, 130, 246, 0.3)",
            "0 12px 30px rgba(59, 130, 246, 0.5)",
            "0 8px 20px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Menu className="w-6 h-6 relative z-10" />

        {/* Enhanced pulse rings */}
        <div className="mobile-pulse-ring" />
        <div
          className="mobile-pulse-ring"
          style={{ animationDelay: "1s" }}
        />

        {/* Breathing border effect with glow */}
        <div
          className="absolute inset-0 rounded-xl border border-blue-400/40"
          style={{
            animation: "border-pulse 2s ease-in-out infinite",
            boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.2)",
          }}
        />

        {/* Sparkle effect */}
        <div className="mobile-sparkle absolute top-0 right-0" />
      </motion.button>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Enhanced Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-start justify-center px-4 pt-8 pb-8 relative overflow-hidden mobile-ambient-glow mobile-section-enhanced"
        >
          {/* Enhanced wave background layers */}
          <div className="mobile-wave-bg absolute inset-0 z-0" style={{ animationDelay: "0s" }} />
          <div className="mobile-wave-bg absolute inset-0 z-0" style={{ animationDelay: "-5s", animationDirection: "reverse" }} />
          <div className="mobile-wave-bg absolute inset-0 z-0" style={{ animationDelay: "-10s", opacity: 0.5 }} />
          {/* Removed floating shapes */}

          <motion.div
            variants={premiumVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center max-w-md mx-auto mt-8"
          >
            {/* Enhanced floating badge with lively animations */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 px-4 py-3 rounded-full backdrop-blur-sm relative overflow-hidden"
              variants={floatingVariants}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "2px solid transparent",
                backgroundClip: "padding-box",
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
              }}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.2)",
                  "0 0 40px rgba(59, 130, 246, 0.4)",
                  "0 0 30px rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)",
              }}
            >
              {/* Dynamic Border Effect */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(255, 255, 255, 0.2) 0deg, rgba(73, 146, 255, 0.4) 90deg, rgba(255, 255, 255, 0.2) 180deg, rgba(73, 146, 255, 0.4) 270deg, rgba(255, 255, 255, 0.2) 360deg)",
                  padding: "2px",
                  borderRadius: "inherit",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                }}
              />

              {/* Animated Sparkle Icon */}
              <svg
                className="w-4 h-4 flex-shrink-0 animate-sparkle"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3.5L10.088 9.313C9.99015 9.61051 9.82379 9.88088 9.60234 10.1023C9.38088 10.3238 9.11051 10.4901 8.813 10.588L3 12.5L8.813 14.412C9.11051 14.5099 9.38088 14.6762 9.60234 14.8977C9.82379 15.1191 9.99015 15.3895 10.088 15.687L12 21.5L13.912 15.687C14.0099 15.3895 14.1762 15.1191 14.3977 14.8977C14.6191 14.6762 14.8895 14.5099 15.187 14.412L21 12.5L15.187 10.588C14.8895 10.4901 14.6191 10.3238 14.3977 10.1023C14.1762 9.88088 14.0099 9.61051 13.912 9.313L12 3.5Z"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 3.5V7.5"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 17.5V21.5"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 5.5H7"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 19.5H21"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="font-inter text-sm font-normal text-center text-white/80">
                Future-Ready Solutions, Custom-Built
              </span>
            </motion.div>

            {/* Enhanced main title with lively animations */}
            <motion.h1
              className="font-poppins text-6xl sm:text-7xl md:text-8xl font-bold mb-6 relative text-white tracking-tight"
              variants={premiumVariants}
              style={{
                filter:
                  "drop-shadow(0 0 20px rgba(73, 146, 255, 0.8)) drop-shadow(0 0 40px rgba(34, 211, 238, 0.5))",
                textShadow:
                  "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(37, 99, 235, 0.4)",
              }}
            >
              {/* Individual letter animations with enhanced liveliness */}
              <motion.span
                className="inline-block relative warm-glow-text"
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, 2, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0,
                }}
                whileHover={{
                  scale: 1.2,
                  rotateZ: 10,
                  textShadow: "0 0 50px rgba(59, 130, 246, 1)",
                }}
              >
                K
              </motion.span>
              <motion.span
                className="inline-block relative warm-glow-text"
                animate={{
                  y: [0, -8, 0],
                  rotateZ: [0, -2, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                whileHover={{
                  scale: 1.2,
                  rotateZ: -10,
                  textShadow: "0 0 50px rgba(168, 85, 247, 1)",
                }}
              >
                o
              </motion.span>
              <motion.span
                className="inline-block relative warm-glow-text"
                animate={{
                  y: [0, -6, 0],
                  rotateZ: [0, 3, 0],
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                whileHover={{
                  scale: 1.2,
                  rotateZ: 15,
                  textShadow: "0 0 50px rgba(34, 197, 94, 1)",
                }}
              >
                r
              </motion.span>
            </motion.h1>

            {/* Enhanced subtitle with sophisticated desktop-level styling */}
            <motion.div className="relative mb-4" variants={premiumVariants}>
              {/* Background glow effect */}
              <div
                className="absolute inset-0 blur-3xl opacity-30 animate-pulse"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(73, 146, 255, 0.6) 0%, rgba(34, 211, 238, 0.4) 50%, transparent 70%)",
                  transform: "scale(1.5)",
                }}
              />

              <div className="font-poppins text-xl sm:text-2xl md:text-3xl font-bold relative z-10">
                <span
                  className="relative inline-block text-white"
                  style={{
                    filter:
                      "drop-shadow(0 0 20px rgba(73, 146, 255, 0.8)) drop-shadow(0 0 40px rgba(34, 211, 238, 0.5))",
                  }}
                >
                  <span className="warm-glow-text animate-warm-glow-pulse">
                    {"Development Services".split("").map((letter, i) => (
                      <span
                        key={i}
                        className="inline-block"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: "gentle-float 4s ease-in-out infinite",
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Enhanced description with sophisticated typography */}
            <motion.div
              className="mb-10 px-4 relative"
              variants={premiumVariants}
            >
              <p className="font-poppins text-lg sm:text-xl text-center leading-relaxed relative z-10">
                <span
                  className="text-white/90"
                  style={{
                    textShadow:
                      "0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(34, 211, 238, 0.2)",
                    filter: "drop-shadow(0 0 8px rgba(73, 146, 255, 0.4))",
                  }}
                >
                  Cutting-edge web development, mobile apps, and cloud solutions
                  that drive your business forward with modern technology.
                </span>
              </p>

              {/* Subtle background glow */}
              <div
                className="absolute inset-0 blur-2xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(73, 146, 255, 0.3) 0%, transparent 70%)",
                  transform: "scale(1.2)",
                }}
              />
            </motion.div>

            {/* Removed terminal section */}

            {/* Enhanced action buttons with sophisticated desktop-level styling */}
            <motion.div
              className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6"
              variants={premiumVariants}
            >
              <motion.button
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-poppins px-12 py-5 rounded-2xl text-white font-bold relative overflow-hidden group shadow-2xl mobile-button-enhanced mobile-fab mobile-touch-feedback"
                whileHover={{
                  y: -12,
                  scale: 1.08,
                  boxShadow:
                    "0 30px 60px rgba(59, 130, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.5)",
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95, rotateX: -5 }}
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
                  filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center text-lg">
                  <span className="warm-glow-text">Get Started</span>
                  <ArrowRight className="w-6 h-6 ml-3 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </span>

                {/* Multiple layer effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={() => {
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-poppins px-12 py-5 rounded-2xl font-bold border-2 relative overflow-hidden group backdrop-blur-xl mobile-button-enhanced mobile-fab mobile-touch-feedback"
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  borderColor: "rgba(59, 130, 246, 0.8)",
                  boxShadow:
                    "0 25px 50px rgba(59, 130, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)",
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95, rotateX: -5 }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(25px)",
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))",
                }}
              >
                <span className="relative z-10 text-lg">
                  <span
                    className="warm-glow-text font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, #60a5fa 0%, #34d399 50%, #a78bfa 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                    }}
                  >
                    View Portfolio
                  </span>
                </span>

                {/* Glass effect layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />

                {/* Border glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl border border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(34, 211, 238, 0.3)) border-box",
                    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced About Us Section */}
        <section
          id="about"
          className="px-4 py-16 relative mobile-section-enhanced"
        >
          <div className="max-w-md mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-4 mobile-premium-text"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About Us
            </motion.h2>
            <motion.h3
              className="text-xl font-semibold text-center mb-8 text-muted-foreground"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Crafting Digital Excellence
            </motion.h3>

            <motion.div
              className="space-y-6 mb-12"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed">
                We are a cutting-edge software development company dedicated to
                transforming innovative ideas into powerful digital solutions.
                Our team of expert developers, designers, and strategists work
                collaboratively to deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in modern web development, mobile
                applications, and AI integration, we bring your vision to life
                with precision and creativity.
              </p>
            </motion.div>

            {/* Enhanced Company Stats with Animated Counters */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8 mobile-grid-enhanced mobile-optimized-animations"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onViewportEnter={() => setIsCounterVisible(true)}
            >
              <motion.div
                className="text-center p-6 mobile-premium-card mobile-tilt-card mobile-touch-feedback mobile-fab relative overflow-hidden"
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                }}
                animate={{
                  y: [0, -4, 0],
                  rotateZ: [0, 1, 0],
                  boxShadow: [
                    "0 10px 25px rgba(59, 130, 246, 0.3)",
                    "0 15px 35px rgba(59, 130, 246, 0.5)",
                    "0 10px 25px rgba(59, 130, 246, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0,
                }}
              >
                <motion.div
                  className="text-3xl font-bold mobile-stat-counter mb-2"
                  animate={{
                    scale: [1, 1.1, 1],
                    color: [
                      "rgb(59, 130, 246)",
                      "rgb(168, 85, 247)",
                      "rgb(59, 130, 246)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {counters.projects}+
                </motion.div>
                <div className="text-sm text-muted-foreground">Projects</div>
                {/* Animated border */}
                <div className="absolute inset-0 border border-blue-400/30 rounded-lg animate-pulse" />
              </motion.div>

              <motion.div
                className="text-center p-6 mobile-premium-card mobile-tilt-card relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(168, 85, 247, 0.3)",
                }}
                animate={{
                  y: [0, -4, 0],
                  boxShadow: [
                    "0 8px 20px rgba(168, 85, 247, 0.2)",
                    "0 12px 25px rgba(168, 85, 247, 0.3)",
                    "0 8px 20px rgba(168, 85, 247, 0.2)",
                  ],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <motion.div
                  className="text-3xl font-bold mobile-stat-counter mb-2"
                  animate={{
                    scale: [1, 1.15, 1],
                    color: [
                      "rgb(168, 85, 247)",
                      "rgb(34, 197, 94)",
                      "rgb(168, 85, 247)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  {counters.clients}+
                </motion.div>
                <div className="text-sm text-muted-foreground">Clients</div>
                <div
                  className="absolute inset-0 border border-purple-400/30 rounded-lg animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </motion.div>

              <motion.div
                className="text-center p-6 mobile-premium-card mobile-tilt-card relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(34, 197, 94, 0.3)",
                }}
                animate={{
                  y: [0, -2, 0],
                  boxShadow: [
                    "0 8px 20px rgba(34, 197, 94, 0.2)",
                    "0 12px 25px rgba(34, 197, 94, 0.3)",
                    "0 8px 20px rgba(34, 197, 94, 0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <motion.div
                  className="text-3xl font-bold mobile-stat-counter mb-2"
                  animate={{
                    scale: [1, 1.12, 1],
                    color: [
                      "rgb(34, 197, 94)",
                      "rgb(236, 72, 153)",
                      "rgb(34, 197, 94)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                >
                  {counters.years}+
                </motion.div>
                <div className="text-sm text-muted-foreground">Years</div>
                <div
                  className="absolute inset-0 border border-green-400/30 rounded-lg animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section id="process" className="px-4 py-16 relative">
          <div className="max-w-md mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-8 mobile-premium-text"
              variants={premiumVariants}
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
                  variants={premiumVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="mobile-premium-card mobile-tilt-card mobile-touch-feedback mobile-button-enhanced p-6 rounded-xl relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    rotateY: 4,
                    rotateX: 2,
                    boxShadow: "0 25px 50px rgba(73, 146, 255, 0.4)",
                  }}
                  animate={{
                    y: [0, -3, 0],
                    rotateZ: [0, 0.5, 0],
                    boxShadow: [
                      "0 5px 35px rgba(73, 146, 255, 0.2)",
                      "0 10px 45px rgba(73, 146, 255, 0.35)",
                      "0 5px 35px rgba(73, 146, 255, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`}
                  />

                  <div className="flex items-start mb-4 relative z-10">
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
                    >
                      <span className="font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-1 font-semibold tracking-wider">
                        {step.category}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  <div className="mb-4 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-primary/15 text-primary rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border relative z-10">
                    <span className="text-xs text-muted-foreground">
                      {step.metric.label}
                    </span>
                    <span className="text-lg font-bold mobile-stat-counter">
                      {step.metric.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section
          id="services"
          className="px-4 py-16 relative mobile-section-enhanced"
        >
          <div className="max-w-md mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-8 mobile-premium-text"
              variants={premiumVariants}
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
                    variants={premiumVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="mobile-premium-card mobile-tilt-card mobile-touch-feedback mobile-button-enhanced rounded-xl overflow-hidden relative"
                    whileHover={{
                      scale: 1.06,
                      y: -12,
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(73, 146, 255, 0.3)",
                      rotateX: 4,
                    }}
                    animate={{
                      y: [0, -2, 0],
                      rotateZ: [0, 0.3, 0],
                      borderColor: [
                        "rgba(73, 146, 255, 0.3)",
                        "rgba(168, 85, 247, 0.3)",
                        "rgba(34, 197, 94, 0.3)",
                        "rgba(73, 146, 255, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 6 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`}
                    />

                    <motion.button
                      onClick={() =>
                        setExpandedService(isExpanded ? null : index)
                      }
                      className="w-full p-4 flex items-center justify-between hover:bg-accent/30 transition-all duration-300 relative z-10"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center">
                        <IconComponent
                          className={cn("w-6 h-6 mr-3", service.color)}
                        />
                        <h3 className="font-semibold text-left">
                          {service.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4 relative z-10"
                        >
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Portfolio Section */}
        <section id="portfolio" className="px-4 py-16 relative">
          <div className="max-w-md mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-8 mobile-premium-text"
              variants={premiumVariants}
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
                  variants={premiumVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mobile-premium-card mobile-tilt-card mobile-touch-feedback mobile-button-enhanced rounded-xl relative overflow-hidden"
                  whileHover={{
                    scale: 1.08,
                    y: -15,
                    rotateY: 8,
                    rotateX: 3,
                    boxShadow: "0 30px 60px rgba(73, 146, 255, 0.5)",
                  }}
                  animate={{
                    y: [0, -4, 0],
                    rotateZ: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
                  />

                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-xl" />
                  </div>

                  {/* Project Content */}
                  <div className="relative z-10 p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-primary/15 text-primary rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Portfolio Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-4">
                <motion.button
                  onClick={() =>
                    setCurrentProjectPage(Math.max(0, currentProjectPage - 1))
                  }
                  disabled={currentProjectPage === 0}
                  className="px-4 py-2 rounded-lg mobile-premium-card mobile-button-enhanced mobile-touch-feedback disabled:opacity-50 disabled:cursor-not-allowed mobile-tilt-card"
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                >
                  Previous
                </motion.button>
                <span className="text-sm text-muted-foreground font-medium">
                  {currentProjectPage + 1} of {totalPages}
                </span>
                <motion.button
                  onClick={() =>
                    setCurrentProjectPage(
                      Math.min(totalPages - 1, currentProjectPage + 1),
                    )
                  }
                  disabled={currentProjectPage === totalPages - 1}
                  className="px-4 py-2 rounded-lg mobile-premium-card mobile-button-enhanced mobile-touch-feedback disabled:opacity-50 disabled:cursor-not-allowed mobile-tilt-card"
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                >
                  Next
                </motion.button>
              </div>
            )}
          </div>
        </section>

        {/* Enhanced Pricing Section */}
        <section id="pricing" className="px-4 py-16 relative">
          <div className="max-w-md mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-8 mobile-premium-text"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Pricing
            </motion.h2>

            <div className="space-y-8 mb-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={premiumVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "mobile-premium-card mobile-tilt-card p-6 rounded-xl relative",
                    plan.popular &&
                      "ring-2 ring-blue-500/50 mt-4 overflow-hidden",
                    !plan.popular && "overflow-hidden",
                  )}
                  whileHover={{
                    scale: plan.popular ? 1.08 : 1.05,
                    y: plan.popular ? -15 : -10,
                    rotateY: plan.popular ? 8 : 5,
                    boxShadow: plan.popular
                      ? "0 30px 60px rgba(59, 130, 246, 0.5)"
                      : "0 20px 40px rgba(73, 146, 255, 0.3)",
                  }}
                  animate={{
                    y: [0, plan.popular ? -5 : -2, 0],
                    scale: [1, plan.popular ? 1.02 : 1.01, 1],
                  }}
                  transition={{
                    duration: plan.popular ? 3 : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-40`}
                  />

                  {plan.popular && (
                    <div className="corner-ribbon">
                      <span>
                        <Star className="w-3 h-3 inline mr-1" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6 relative z-10">
                    <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl font-bold mobile-stat-counter">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {" "}
                        - {plan.maxPrice}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 relative z-10">
                    {plan.perks.map((perk, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{perk}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={cn(
                      "w-full py-4 rounded-lg font-semibold transition-all duration-300 relative z-10",
                      plan.popular
                        ? "mobile-glow-button text-primary-foreground"
                        : "mobile-premium-card border border-border hover:bg-accent",
                    )}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-xs text-center text-muted-foreground"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              *Note: Final pricing depends on the complexity, features, and
              specific requirements of your project. Contact us for a detailed
              quote tailored to your needs.
            </motion.p>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="px-4 py-16 relative">
          <div className="max-w-md mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-8 mobile-premium-text"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>

            {/* Enhanced Quick Contact Options */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  detail: "contact@kor.dev",
                  href: "mailto:contact@kor.dev",
                  color: "text-blue-400",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  detail: "@kor.dev",
                  href: "#",
                  color: "text-pink-400",
                },
                {
                  icon: MessageCircle,
                  label: "Discord",
                  detail: "Join Server",
                  href: "#",
                  color: "text-blue-500",
                },
                {
                  icon: Send,
                  label: "Telegram",
                  detail: "@kor_dev",
                  href: "#",
                  color: "text-blue-400",
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="mobile-premium-card mobile-tilt-card p-4 rounded-xl text-center hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    rotateZ: 2,
                    boxShadow: "0 15px 30px rgba(73, 146, 255, 0.3)",
                  }}
                  animate={{
                    y: [0, -2, 0],
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 3 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                >
                  <contact.icon
                    className={cn("w-6 h-6 mx-auto mb-2", contact.color)}
                  />
                  <div className="text-sm font-medium">{contact.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {contact.detail}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced Status Indicators */}
            <motion.div
              className="flex items-center justify-center space-x-6 mb-8 text-sm"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center mobile-premium-card px-3 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-muted-foreground">Online</span>
              </div>
              <div className="flex items-center mobile-premium-card px-3 py-2 rounded-full">
                <Clock className="w-4 h-4 text-blue-400 mr-1" />
                <span className="text-muted-foreground">
                  Response: &lt; 24h
                </span>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.form
              className="space-y-4"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 rounded-lg mobile-premium-card text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 rounded-lg mobile-premium-card text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-3 rounded-lg mobile-premium-card text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-3 rounded-lg mobile-premium-card text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Enhanced Interest Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground">
                  What interests you?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((interest) => (
                    <motion.button
                      key={interest}
                      type="button"
                      onClick={() => {
                        setSelectedInterests((prev) =>
                          prev.includes(interest)
                            ? prev.filter((i) => i !== interest)
                            : [...prev, interest],
                        );
                      }}
                      className={cn(
                        "p-3 rounded-lg text-xs border transition-all duration-300",
                        selectedInterests.includes(interest)
                          ? "mobile-glow-button text-primary-foreground border-primary"
                          : "mobile-premium-card border-border hover:border-primary/50",
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {interest}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Enhanced Budget Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground">
                  Budget Range
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {budgetOptions.map((budget) => (
                    <motion.button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={cn(
                        "p-3 rounded-lg text-xs border transition-all duration-300",
                        selectedBudget === budget
                          ? "mobile-glow-button text-primary-foreground border-primary"
                          : "mobile-premium-card border-border hover:border-primary/50",
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {budget}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-3 rounded-lg mobile-premium-card text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Something about your great idea..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full mobile-glow-button px-8 py-4 rounded-xl text-primary-foreground font-semibold flex items-center justify-center relative overflow-hidden"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  Submit Your Request
                  <Send className="w-4 h-4 ml-2" />
                </span>
              </motion.button>
            </motion.form>

            <motion.p
              className="text-center text-sm text-muted-foreground mt-6"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We typically respond within 24 hours
            </motion.p>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="px-4 py-8 mobile-premium-card border-t border-border relative">
          <div className="max-w-md mx-auto text-center">
            <motion.div
              className="mb-4"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mobile-premium-text">kor</h3>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6 mb-6"
              variants={premiumVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: MessageCircle, href: "#" },
                { Icon: Mail, href: "mailto:contact@kor.dev" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-muted-foreground hover:text-blue-400 transition-colors mobile-tilt-card p-2 rounded-lg"
                  whileHover={{
                    y: -8,
                    scale: 1.2,
                    rotateZ: 5,
                    color: "rgb(59, 130, 246)",
                  }}
                  whileTap={{ scale: 0.8, rotateZ: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  animate={{
                    y: [0, -3, 0],
                    rotateZ: [0, 2, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.6,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}
