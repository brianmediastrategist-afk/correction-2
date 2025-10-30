import { useState } from "react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import LogoSlider from "@/components/LogoSlider";
import CardSlider from "@/components/CardSlider";
import DetailsModal from "@/components/DetailsModal";
import LogoCarousel from "@/components/LogoCarousel";
import { Button } from "@/components/ui/button";
import {
  Target,
  Settings,
  TrendingUp,
  Workflow,
  Users,
  Zap,
  MessagesSquare,
  GitBranch,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroThumb from "@/assets/hero-shorts-thumb.jpg";

const Index = () => {
  const [showFreelancerModal, setShowFreelancerModal] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedAutomation, setSelectedAutomation] = useState<any>(null);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showAutomationModal, setShowAutomationModal] = useState(false);

  const scrollToDiscovery = () => {
    const element = document.getElementById("discovery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      id: "seo",
      title: "SEO & Keywords",
      description: "Rank higher on Google with data-driven keyword strategies",
      image: "https://images.pexels.com/photos/3848606/pexels-photo-3848606.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Our SEO expertise helps you dominate search results. We conduct comprehensive keyword research, optimize on-page elements, build high-quality backlinks, and create content strategies that rank. With our proven methodology, we've helped businesses increase organic traffic by 300%+ within 6 months.",
    },
    {
      id: "social",
      title: "Social Media Strategy",
      description: "Build engaged communities across all major platforms",
      image: "https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "We craft social media strategies that convert followers into customers. From content calendars to community management, we handle everything. Our approach focuses on engagement-first content that builds trust and loyalty with your audience.",
    },
    {
      id: "content",
      title: "Content Marketing",
      description: "Create valuable content that attracts your ideal clients",
      image: "https://images.pexels.com/photos/3568519/pexels-photo-3568519.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Content is king, and we're master storytellers. We develop comprehensive content strategies including blog posts, videos, whitepapers, and case studies. Each piece is designed to educate your audience and position you as an industry authority.",
    },
    {
      id: "leads",
      title: "Lead Generation",
      description: "Build a pipeline of qualified leads ready to buy",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Generate high-quality leads consistently with our proven lead generation funnels. We use targeted ads, landing pages, and nurture sequences to attract and convert your ideal customers. Our systems produce 10+ qualified leads weekly for our clients.",
    },
    {
      id: "ads",
      title: "Paid Advertising",
      description: "Profitable ads that generate immediate revenue",
      image: "https://images.pexels.com/photos/3714897/pexels-photo-3714897.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Master Google, Meta, and LinkedIn ads with our expert team. We create high-converting ad campaigns with optimal ROAS. Every dollar spent is tracked and optimized for maximum return. Typical clients see 5:1 to 10:1 return on ad spend.",
    },
    {
      id: "email",
      title: "Email Marketing",
      description: "Convert subscribers into loyal, repeat customers",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Email remains one of the highest ROI marketing channels. We build segmented lists, create compelling sequences, and automate campaigns. Our email funnels generate consistent revenue with 30-50% open rates and 5-10% conversion rates.",
    },
  ];

  const automations = [
    {
      id: "lead-auto",
      title: "Lead Generation Automation",
      description: "Capture and qualify leads 24/7 without manual work",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Set it and forget it. Our lead capture systems work around the clock to bring in qualified prospects. From form submissions to automated follow-ups, we handle everything. Your sales team gets pre-qualified leads ready to close.",
    },
    {
      id: "crm-auto",
      title: "CRM Update Automation",
      description: "Keep your CRM updated automatically from multiple sources",
      image: "https://images.pexels.com/photos/3862606/pexels-photo-3862606.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Eliminate manual data entry. We connect your CRM with all your tools so data flows automatically. Customer interactions, deals, follow-ups—everything syncs in real-time. This saves your team 5+ hours per week while improving accuracy.",
    },
    {
      id: "content-auto",
      title: "Writing & Content Automation",
      description: "Generate consistent content without hiring writers",
      image: "https://images.pexels.com/photos/3568519/pexels-photo-3568519.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "AI-powered content generation combined with human touch. We set up systems that produce blog posts, social media content, and email copy. Your content calendar runs on autopilot while maintaining your brand voice.",
    },
    {
      id: "chatbots",
      title: "AI Chatbots",
      description: "Instant customer support and lead qualification 24/7",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Deploy intelligent chatbots that qualify leads and answer FAQs instantly. Our bots learn from conversations and improve over time. They handle 80% of common inquiries, freeing your team for high-value work.",
    },
    {
      id: "sales-flow",
      title: "Sales Funnel Automation",
      description: "Move leads through your sales process automatically",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Automate your entire sales process from lead capture to close. Multi-stage workflows handle follow-ups, objection responses, and deal progression. Your sales team focuses on closing while automation handles everything else.",
    },
    {
      id: "email-io",
      title: "Email Integration & Workflows",
      description: "Trigger actions based on email interactions automatically",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Create powerful workflows triggered by email opens, clicks, and replies. Send SMS alerts when important emails arrive. Tag contacts automatically based on behavior. Personalize experiences at scale.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative py-32 lg:py-40 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            {/* Left Column - Text */}
            <div className="flex-1 max-w-2xl space-y-10 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-primary">Trusted by 250+ Businesses</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight" style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Build Funnels<br/>That Convert
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                Automated marketing systems that attract clients and scale revenue — without the guesswork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={scrollToDiscovery}
                  className="text-lg px-10 py-7 h-auto rounded-full font-semibold flex items-center gap-3 group relative overflow-hidden"
                  style={{ background: 'var(--gradient-accent)', boxShadow: '0 10px 40px hsla(24, 95%, 53%, 0.3)' }}
                >
                  <span className="relative z-10">For Business Owners</span>
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowFreelancerModal(true)}
                  className="text-lg px-10 py-7 h-auto rounded-full font-semibold border-2 border-secondary/20 hover:border-secondary/40 flex items-center gap-3 group bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all"
                >
                  <span>For Freelancers</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary/10">
                <div className="space-y-1">
                  <div className="text-5xl font-black bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">250+</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Funnels Built</div>
                </div>
                <div className="space-y-1">
                  <div className="text-5xl font-black bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent flex items-center gap-1">4.9<span className="text-3xl">★</span></div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Client Rating</div>
                </div>
                <div className="space-y-1">
                  <div className="text-5xl font-black bg-gradient-to-br from-secondary to-secondary/70 bg-clip-text text-transparent">$15M+</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Generated</div>
                </div>
              </div>
            </div>

            {/* Right Column - Vertical Video Card (9:16 for Shorts) */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-2xl"></div>
                  <div className="relative w-[300px] sm:w-[340px] lg:w-[400px] aspect-[9/16] bg-white rounded-[2.5rem] overflow-hidden border border-secondary/10 hover:scale-[1.02] transition-all duration-500 group" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                    <img
                      src={heroThumb}
                      alt="Business presentation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20 transition-all duration-300">
                      <button className="rounded-full p-6 hover:scale-110 transition-all duration-300 relative" style={{ background: 'var(--gradient-accent)', boxShadow: '0 10px 40px hsla(24, 95%, 53%, 0.5)' }}>
                        <svg
                          className="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social Icons Below Video */}
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 group/icon border border-secondary/10 animate-fade-in"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)', animationDelay: '200ms' }}
                  >
                    <svg className="w-7 h-7 text-[#E4405F] group-hover/icon:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 group/icon border border-secondary/10 animate-fade-in"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)', animationDelay: '300ms' }}
                  >
                    <svg className="w-7 h-7 text-[#000000] group-hover/icon:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 group/icon border border-secondary/10 animate-fade-in"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)', animationDelay: '400ms' }}
                  >
                    <svg className="w-7 h-7 text-[#0A66C2] group-hover/icon:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:contact@yourgrowthstudio.com"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 group/icon border border-secondary/10 animate-fade-in"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)', animationDelay: '500ms' }}
                  >
                    <svg className="w-7 h-7 text-primary group-hover/icon:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Scroll</span>
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Discovery Section */}
      <section id="discovery" className="py-24 lg:py-32 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1 space-y-8 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-sm font-semibold text-accent">Free Consultation</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight" style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Let's Build Systems That Sell For You
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                We create automated systems that attract ideal clients and loop loyal customers, freeing up hours to focus on growth.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">30-Minute Strategy Call</h3>
                    <p className="text-sm text-muted-foreground">Discover opportunities in your business</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Custom Action Plan</h3>
                    <p className="text-sm text-muted-foreground">Tailored strategy for your goals</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Zero Obligation</h3>
                    <p className="text-sm text-muted-foreground">Just value and insights</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-secondary/10">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 border-2 border-white flex items-center justify-center text-white font-bold">JM</div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 border-2 border-white flex items-center justify-center text-white font-bold">SK</div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/70 border-2 border-white flex items-center justify-center text-white font-bold">AL</div>
                </div>
                <div>
                  <div className="font-bold text-secondary">Join 250+ Business Owners</div>
                  <div className="text-sm text-muted-foreground">Who scaled with our systems</div>
                </div>
              </div>
            </div>

            {/* Right Column - Meeting Card */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                  <div className="bg-gradient-to-r from-primary to-accent p-6">
                    <h3 className="text-2xl font-black text-white">Schedule Your Free Strategy Call</h3>
                    <p className="text-white/90 mt-2">Pick a time that works for you</p>
                  </div>
                  <div className="h-[900px] lg:h-[1000px] bg-muted/30 overflow-hidden overflow-x-hidden">
                    <iframe
                      src="https://kinovadigitalmarketing.com/meetings/bkinavusha"
                      className="w-full h-full border-0"
                      title="Schedule a Meeting"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="about" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-secondary">What I Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            I design and implement custom digital strategies that help
            businesses scale through proven marketing systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-card shadow-md">
              <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Funnels</h3>
              <p className="text-muted-foreground">
                High-converting sales systems
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-md">
              <Settings className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Automations</h3>
              <p className="text-muted-foreground">
                Workflow efficiency at scale
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-md">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Strategy</h3>
              <p className="text-muted-foreground">
                Data-driven growth planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Grid */}
      <section id="services" className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-secondary">
            Funnel Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Target}
              title="High-Converting Funnel Design"
              description="Attract and convert leads with precision-built funnels"
              fullDescription="Design custom marketing funnels tailored to your business that guide prospects from awareness to purchase with optimized conversion at every step."
              onBookCall={scrollToDiscovery}
            />
            <ServiceCard
              icon={TrendingUp}
              title="Sales Page Optimization"
              description="Maximize conversions with data-driven design"
              fullDescription="Transform your sales pages into high-performing assets with A/B testing, copywriting, and conversion rate optimization strategies."
              onBookCall={scrollToDiscovery}
            />
            <ServiceCard
              icon={Users}
              title="Lead Generation Systems"
              description="Build predictable pipelines that scale"
              fullDescription="Implement multi-channel lead generation systems that consistently deliver qualified prospects to your sales team."
              onBookCall={scrollToDiscovery}
            />
            <ServiceCard
              icon={Zap}
              title="Landing Page Creation"
              description="Convert traffic into qualified leads"
              fullDescription="Create stunning, high-converting landing pages optimized for your target audience and campaign goals."
              onBookCall={scrollToDiscovery}
            />
          </div>
        </div>
      </section>

      {/* Automation Grid */}
      <section id="automations" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-secondary">
            Automation Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Workflow}
              title="CRM Workflows"
              description="Attract and convert leads automatically"
              fullDescription="Set up intelligent CRM workflows that nurture leads, automate follow-ups, and keep your sales pipeline moving efficiently."
              onBookCall={scrollToDiscovery}
            />
            <ServiceCard
              icon={MessagesSquare}
              title="Lead Nurturing Sequences"
              description="Build relationships at scale"
              fullDescription="Create personalized email sequences that educate, engage, and convert prospects into customers over time."
              onBookCall={scrollToDiscovery}
            />
            <ServiceCard
              icon={GitBranch}
              title="Multi-platform Integrations"
              description="Connect your entire tech stack"
              fullDescription="Seamlessly integrate all your marketing and sales tools to create a unified, automated system that works together."
              onBookCall={scrollToDiscovery}
            />
            <ServiceCard
              icon={Settings}
              title="Process Automation"
              description="Eliminate manual tasks forever"
              fullDescription="Automate repetitive business processes to save time, reduce errors, and focus on high-value activities."
              onBookCall={scrollToDiscovery}
            />
          </div>
        </div>
      </section>

      {/* Logo Slider */}
      <LogoSlider />

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-secondary">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What platforms & tools do you integrate?
              </AccordionTrigger>
              <AccordionContent>
                I work with all major marketing platforms including HubSpot,
                Salesforce, ClickFunnels, ActiveCampaign, Zapier, and many
                more. I'll recommend the best tools for your specific needs and
                budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How do you measure ROI on funnel projects?
              </AccordionTrigger>
              <AccordionContent>
                We track key metrics including conversion rates, cost per lead,
                customer acquisition cost, and lifetime value. You'll receive
                detailed analytics dashboards showing exactly how your funnels
                are performing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What's the typical timeline for a funnel project?
              </AccordionTrigger>
              <AccordionContent>
                Most funnel projects take 2-4 weeks from strategy to launch,
                depending on complexity. We'll provide a detailed timeline
                during our discovery call.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Do you offer ongoing support after launch?
              </AccordionTrigger>
              <AccordionContent>
                Yes! I offer maintenance packages and ongoing optimization
                services to ensure your funnels continue performing at their
                best. We can also train your team to manage updates
                independently.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Can you work with my existing tech stack?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! I specialize in integrating with existing systems
                and tools. We'll audit your current setup and create a seamless
                integration plan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-semibold text-accent">What We Offer</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-4 leading-tight" style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Services That Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we provide comprehensive marketing services to attract and convert your ideal clients.
            </p>
          </div>

          <CardSlider
            cards={services}
            onCardClick={(card) => {
              setSelectedService(card);
              setShowServiceModal(true);
            }}
          />
        </div>
      </section>

      {/* Automations Section */}
      <section id="automations" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-1/3 left-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-semibold text-primary">Automate Everything</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-4 leading-tight">
              Work While You <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} className="inline">Sleep</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sophisticated automations that handle repetitive tasks, qualify leads, and nurture customers 24/7.
            </p>
          </div>

          <CardSlider
            cards={automations}
            onCardClick={(card) => {
              setSelectedAutomation(card);
              setShowAutomationModal(true);
            }}
          />
        </div>
      </section>

      {/* Tools & Tech Stack Section */}
      <section id="tools" className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span className="text-sm font-semibold text-secondary">Modern Stack</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-4 leading-tight">Tools & Tech Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with industry-leading platforms to deliver powerful, scalable solutions.
            </p>
          </div>

          <div className="space-y-8">
            <LogoCarousel
              title="Automation & Workflows"
              logos={[
                { name: "n8n", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/n8n.svg" },
                { name: "Make", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/make.svg" },
                { name: "Zapier", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/zapier.svg" },
                { name: "GoHighLevel", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/go-high-level.svg" },
              ]}
            />

            <LogoCarousel
              title="Marketing & CRM"
              logos={[
                { name: "HubSpot", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/hubspot.svg" },
                { name: "Zoho", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/zoho.svg" },
                { name: "Apollo", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/apollo.svg" },
                { name: "MailerLite", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/mailerlite.svg" },
              ]}
            />

            <LogoCarousel
              title="Project Management"
              logos={[
                { name: "ClickUp", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/clickup.svg" },
                { name: "Monday", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/monday.svg" },
              ]}
            />

            <LogoCarousel
              title="Web & SEO"
              logos={[
                { name: "WordPress", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/wordpress.svg" },
                { name: "Google Analytics", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/google-analytics.svg" },
                { name: "Fathom Analytics", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/fathom-analytics.svg" },
              ]}
            />

            <LogoCarousel
              title="Social & Content"
              logos={[
                { name: "Instagram", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/instagram.svg" },
                { name: "Meta", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/meta.svg" },
                { name: "LinkedIn", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/linkedin.svg" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden bg-white" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                <img
                  src="https://images.pexels.com/photos/3779035/pexels-photo-3779035.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="About Us"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 w-fit">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm font-semibold text-primary">Our Story</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                We Build Systems, Not Just Websites
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of combined experience in digital marketing and automation, our team has helped 250+ businesses generate millions in revenue through strategic funnels and automated systems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just build pretty websites—we engineer systems that convert visitors into customers and customers into loyal advocates. Every strategy is backed by data, every implementation is tested, and every result is measurable.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-secondary font-medium">Data-driven strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-secondary font-medium">Transparent communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-secondary font-medium">Proven track record</span>
                </div>
              </div>

              <Button size="lg" onClick={scrollToDiscovery} className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all">
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-muted border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="font-bold text-xl mb-4">Your Growth Studio</h3>
              <p className="text-muted-foreground">
                Building systems that sell for freelancers and businesses.
              </p>
            </div>

            {/* Center Column */}
            <div>
              <h3 className="font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button
                    onClick={() => scrollToDiscovery()}
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToDiscovery()}
                    className="hover:text-primary transition-colors"
                  >
                    Automations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToDiscovery()}
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="font-bold text-xl mb-4">
                Let's Build Your Growth System
              </h3>
              <Button size="lg" onClick={scrollToDiscovery} className="w-full">
                Book a Call →
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>
              © 2025 Your Growth Studio. Building systems that sell.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Dialog open={showFreelancerModal} onOpenChange={setShowFreelancerModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solutions for Freelancers</DialogTitle>
            <DialogDescription className="text-left pt-4 space-y-3">
              <p>
                As a freelancer, you need systems that work while you focus on
                delivering great work to clients.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Automated lead generation funnels</li>
                <li>Client onboarding workflows</li>
                <li>Email nurture sequences</li>
                <li>Portfolio showcases that convert</li>
              </ul>
              <p className="font-semibold">
                Let's build a system that brings clients to you.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={scrollToDiscovery}>Schedule a Call</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showBusinessModal} onOpenChange={setShowBusinessModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solutions for Businesses</DialogTitle>
            <DialogDescription className="text-left pt-4 space-y-3">
              <p>
                Scale your business with marketing systems that generate
                predictable revenue.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Multi-channel acquisition funnels</li>
                <li>CRM automation & integration</li>
                <li>Sales team enablement tools</li>
                <li>Customer retention workflows</li>
              </ul>
              <p className="font-semibold">
                Let's create a growth engine for your business.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={scrollToDiscovery}>Schedule a Call</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Service Details Modal */}
      <DetailsModal
        isOpen={showServiceModal}
        onClose={() => setShowServiceModal(false)}
        title={selectedService?.title || ""}
        image={selectedService?.image || ""}
        details={selectedService?.details || ""}
        onBookMeeting={scrollToDiscovery}
      />

      {/* Automation Details Modal */}
      <DetailsModal
        isOpen={showAutomationModal}
        onClose={() => setShowAutomationModal(false)}
        title={selectedAutomation?.title || ""}
        image={selectedAutomation?.image || ""}
        details={selectedAutomation?.details || ""}
        onBookMeeting={scrollToDiscovery}
      />
    </div>
  );
};

export default Index;
