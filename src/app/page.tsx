import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedHeadline } from "@/components/animated-headline";
import { TestimonialMarquee } from "@/components/testimonial-marquee";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-foreground">
                StatsAI
              </Link>
            </div>

            {/* Primary Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#solutions"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#resources"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Resources
              </Link>
              <Link
                href="#company"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Company
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="default" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="default" size="default" asChild>
                <Link href="/signup">Join up</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        {/* Background div for unicorn.studio interactive element */}
        <div
          id="unicorn-background"
          className="absolute inset-0 z-0 w-full h-full"
          aria-hidden="true"
          data-purpose="unicorn-studio-background"
        >
          <div
            data-us-project="Zy9a85VDQtZzVbXdGH55"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
          <div className="max-w-4xl">
            <AnimatedHeadline />
            <Button variant="default" size="lg" asChild className="text-base">
              <Link href="/trial">Try it out</Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialMarquee />

      {/* Features Section */}
      <section id="features" className="w-full py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything you need to grow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-powered analytics that actually makes sense. No more guessing, just insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Real-Time Insights</CardTitle>
                <CardDescription>
                  Monitor your website performance as it happens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get instant notifications when trends change, traffic spikes, or conversion rates drop. Our AI monitors your metrics 24/7.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Predictive Analytics</CardTitle>
                <CardDescription>
                  Know what&apos;s coming before it happens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Machine learning models forecast future trends, helping you make proactive decisions instead of reactive ones.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales Intelligence</CardTitle>
                <CardDescription>
                  Understand your customers deeply
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI-driven customer segmentation and behavior analysis reveals exactly what drives conversions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smart Reports</CardTitle>
                <CardDescription>
                  Automated insights, zero effort
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Receive weekly executive summaries with actionable recommendations written in plain English.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Dashboards</CardTitle>
                <CardDescription>
                  Your metrics, your way
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Build beautiful, responsive dashboards that showcase the KPIs that matter to your team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>
                  Connect everything seamlessly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integrate with your existing tools. Shopify, WordPress, Stripe, and 50+ platforms supported.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-foreground">$29</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <Separator />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Up to 50K page views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Basic AI insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>1 website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="/signup?plan=starter">Get started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>Most popular choice</CardDescription>
                  </div>
                  <Badge>Popular</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-foreground">$99</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <Separator />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Up to 500K page views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Advanced AI insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>5 websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Custom dashboards</span>
                  </li>
                </ul>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <Link href="/signup?plan=professional">Get started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-foreground">Custom</div>
                  <div className="text-sm text-muted-foreground">contact sales</div>
                </div>
                <Separator />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Unlimited page views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Full AI suite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Unlimited websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>API access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>White-label options</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="/contact">Contact sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="py-12 md:py-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ready to transform your analytics?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of businesses making smarter decisions with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link href="/signup">Start free trial</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/demo">Watch demo</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/integrations" className="hover:text-foreground transition-colors">Integrations</Link></li>
                <li><Link href="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="/guides" className="hover:text-foreground transition-colors">Guides</Link></li>
                <li><Link href="/support" className="hover:text-foreground transition-colors">Support</Link></li>
                <li><Link href="/api" className="hover:text-foreground transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="/security" className="hover:text-foreground transition-colors">Security</Link></li>
                <li><Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 StatsAI. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="https://twitter.com" className="hover:text-foreground transition-colors">Twitter</Link>
              <Link href="https://linkedin.com" className="hover:text-foreground transition-colors">LinkedIn</Link>
              <Link href="https://github.com" className="hover:text-foreground transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Unicorn Studio Script */}
      <Script id="unicorn-studio" strategy="afterInteractive">
        {`!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.32/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`}
      </Script>
    </div>
  );
}
