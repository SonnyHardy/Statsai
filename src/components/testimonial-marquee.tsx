"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

gsap.registerPlugin(ScrollTrigger)

const topRowTestimonials = [
  { name: "Sarah Mitchell", company: "TechStart", quote: "StatsAI transformed how we understand our customers. The predictive analytics saved us thousands.", initials: "SM" },
  { name: "James Chen", company: "GrowthLabs", quote: "Finally, analytics that don't require a data science degree. The AI insights are spot-on.", initials: "JC" },
  { name: "Emily Rodriguez", company: "CloudCo", quote: "We increased conversions by 34% in the first month. The real-time alerts are game-changing.", initials: "ER" },
  { name: "Michael Park", company: "DataFlow", quote: "The best analytics platform we've ever used. Our team makes better decisions every day.", initials: "MP" },
  { name: "Lisa Anderson", company: "RetailHub", quote: "StatsAI's predictive models helped us optimize inventory and boost revenue by 28%.", initials: "LA" },
  { name: "David Kim", company: "StartupX", quote: "The AI-powered insights gave us a competitive edge we didn't know we needed.", initials: "DK" },
  { name: "Rachel Green", company: "MediaCorp", quote: "Our marketing ROI improved dramatically. StatsAI shows us exactly what works.", initials: "RG" },
  { name: "Tom Wilson", company: "EcomPlus", quote: "Real-time analytics that actually matter. This tool is a must-have for any serious business.", initials: "TW" },
  { name: "Jennifer Lee", company: "FinTech Pro", quote: "The dashboard customization is incredible. We track exactly what we need, nothing more.", initials: "JL" },
  { name: "Alex Martinez", company: "SaaSify", quote: "StatsAI integrated seamlessly with our stack. Setup took 10 minutes, results came immediately.", initials: "AM" },
]

const bottomRowTestimonials = [
  { name: "Nina Patel", company: "AnalyticsPro", quote: "The customer segmentation features are unmatched. We finally understand our audience.", initials: "NP" },
  { name: "Robert Chang", company: "TechVentures", quote: "StatsAI helped us identify growth opportunities we were completely missing before.", initials: "RC" },
  { name: "Sophie Turner", company: "BrandBoost", quote: "The API integration was seamless. Now all our data flows into one intelligent dashboard.", initials: "ST" },
  { name: "Marcus Johnson", company: "InnovateCo", quote: "Best investment we made this year. The insights pay for themselves every week.", initials: "MJ" },
  { name: "Olivia Brown", company: "DigitalEdge", quote: "Our team's productivity skyrocketed. No more manual reports or guesswork.", initials: "OB" },
  { name: "Kevin Zhang", company: "GrowthMetrics", quote: "The AI recommendations are incredibly accurate. It's like having a data scientist on staff.", initials: "KZ" },
  { name: "Amanda Scott", company: "VentureHub", quote: "StatsAI's real-time monitoring saved us from a major issue before it became critical.", initials: "AS" },
  { name: "Daniel Wright", company: "PulseData", quote: "The predictive analytics feature is worth the price alone. Game-changing for planning.", initials: "DW" },
  { name: "Priya Sharma", company: "NextGen", quote: "Finally, an analytics tool that speaks business language, not just technical jargon.", initials: "PS" },
  { name: "Carlos Rivera", company: "ScaleUp", quote: "We scaled 3x faster with StatsAI's insights guiding our decisions every step.", initials: "CR" },
]

export function TestimonialMarquee() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll(".testimonial-card")

    gsap.fromTo(
      cards,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-16 overflow-hidden bg-background">
      {/* Top Row - Animates Left */}
      <div className="flex gap-6 mb-6">
        <div className="flex gap-6 animate-marquee-left">
          {topRowTestimonials.concat(topRowTestimonials).map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-[400px] testimonial-card">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground mb-4 line-clamp-2">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Row - Animates Right */}
      <div className="flex gap-6">
        <div className="flex gap-6 animate-marquee-right">
          {bottomRowTestimonials.concat(bottomRowTestimonials).map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-[400px] testimonial-card">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground mb-4 line-clamp-2">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
