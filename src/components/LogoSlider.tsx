const logos = [
  "HubSpot",
  "Salesforce",
  "ClickFunnels",
  "ActiveCampaign",
  "Mailchimp",
  "Zapier",
  "Stripe",
  "WordPress",
  "Shopify",
];

const LogoSlider = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">
          Trusted by Teams & Brands Using My Systems
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-slide-left">
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[150px] h-16 text-muted-foreground font-semibold text-lg"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
