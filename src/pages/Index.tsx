import { useState } from "react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import LogoSlider from "@/components/LogoSlider";
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

  const scrollToDiscovery = () => {
    const element = document.getElementById("discovery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-secondary">Featured Demo</div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
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
      <section id="discovery" className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-col items-stretch gap-12">
            {/* Left Column - Text */}
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Let's Build Systems That Sell For You
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We create automated systems that attract ideal clients and loop
                loyal customers, freeing up hours to focus on growth.
              </p>
              <Button size="lg" onClick={scrollToDiscovery} className="mt-2">
                Book a Meeting
              </Button>
            </div>

            {/* Right Column - Meeting Card */}
            <div className="w-full">
              <div className="bg-card rounded-xl p-4 sm:p-8 shadow-lg border-2 border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-[1000px] sm:h-[1100px] md:h-[1200px] bg-muted rounded-lg overflow-hidden overflow-x-hidden">
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
    </div>
  );
};

export default Index;
