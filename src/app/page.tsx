"use client";

import { Briefcase, Hammer, Image, Mail, BookOpen, Shield } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeMediumTitles"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="C Wall Builders"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Projects", id: "projects" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Professional Construction Solutions"
          description="C Wall Builders brings decades of expertise to every project. From residential walls to commercial masonry, we deliver quality craftsmanship and reliability you can trust."
          tag="Building Excellence"
          tagIcon={Hammer}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          leftCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/round-saw-hands-builder-work-laying-paving-slabs_1150-10081.jpg",              imageAlt: "Construction workers on site"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/unevenly-built-brick-wall-with-cement-coming-out-cracks_181624-1443.jpg",              imageAlt: "Wall construction project"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/construction-workers-climbing-scaffolding_23-2152021008.jpg",              imageAlt: "Building scaffolding"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/construction-workers-yellow-vests-vests-raise-their-hands-air_505751-3797.jpg",              imageAlt: "Construction team at work"},
          ]}
          rightCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/giant-glass-buildings_1127-2023.jpg",              imageAlt: "Commercial building project"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/construction-with-mobile-phone_329181-2852.jpg",              imageAlt: "Residential construction"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/production-manufacture-sightseeing-excursion-interior-ceramic-tile-manufacturing-plant-ceramic-tile-manufacturing-plant-with-conveyer-belt_645730-195.jpg",              imageAlt: "Industrial construction"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/round-saw-hands-builder-work-laying-paving-slabs_1150-10081.jpg",              imageAlt: "Completed project"},
          ]}
          buttons={[
            { text: "Get a Quote", href: "#contact" },
            { text: "View Projects", href: "#projects" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Story"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          title="20+ Years of Building Trust"
          description="C Wall Builders started with a simple mission: deliver exceptional construction services with uncompromising quality. From foundation walls to complex masonry projects, we've built lasting relationships with homeowners, contractors, and businesses throughout the region."
          metrics={[
            { value: "500+", title: "Projects Completed" },
            { value: "98%", title: "Customer Satisfaction" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/giant-glass-buildings_1127-2023.jpg"
          imageAlt="C Wall Builders team on construction site"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSixteen
          title="Why Choose C Wall Builders"
          description="We combine experience, precision, and customer focus to deliver outstanding results on every project."
          tag="Our Advantage"
          tagIcon={Shield}
          tagAnimation="slide-up"
          negativeCard={{
            items: [
              "Inconsistent quality workmanship",              "Missing deadlines and delays",              "Poor communication with clients",              "Hidden costs and surprises"],
          }}
          positiveCard={{
            items: [
              "Certified, experienced craftsmen",              "On-time, on-budget project delivery",              "Transparent communication throughout",              "No hidden fees or surprises"],
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="projects" data-section="projects">
        <ProductCardThree
          title="Featured Projects"
          description="Explore our portfolio of completed construction projects across residential, commercial, and industrial sectors."
          tag="Portfolio"
          tagIcon={Image}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Downtown Commercial Complex",              price: "2.4M",              imageSrc: "http://img.b2bpic.net/free-photo/giant-glass-buildings_1127-2023.jpg",              imageAlt: "Commercial building"},
            {
              id: "2",              name: "Residential Home Addition",              price: "285K",              imageSrc: "http://img.b2bpic.net/free-photo/construction-with-mobile-phone_329181-2852.jpg",              imageAlt: "Residential construction"},
            {
              id: "3",              name: "Industrial Warehouse",              price: "1.8M",              imageSrc: "http://img.b2bpic.net/free-photo/production-manufacture-sightseeing-excursion-interior-ceramic-tile-manufacturing-plant-ceramic-tile-manufacturing-plant-with-conveyer-belt_645730-195.jpg",              imageAlt: "Industrial building"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Projects", href: "#" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="C Wall Builders transformed our vision into reality. Their professionalism, attention to detail, and commitment to quality exceeded all expectations. We couldn't be happier with our new home!"
          author="Sarah Johnson, Homeowner"
          rating={5}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              alt: "Customer 1"},
            {
              src: "http://img.b2bpic.net/free-photo/confident-beautiful-young-businesswoman-looking-camera-head-shot-portrait_1163-4928.jpg",              alt: "Customer 2"},
            {
              src: "http://img.b2bpic.net/free-photo/happy-builder-hardhat_1398-1726.jpg",              alt: "Customer 3"},
            {
              src: "http://img.b2bpic.net/free-photo/content-beautiful-businesswoman-standing-window_1262-1778.jpg",              alt: "Customer 4"},
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Construction Insights"
          description="Stay informed with tips, trends, and best practices from our experienced construction professionals."
          tag="Blog"
          tagIcon={BookOpen}
          tagAnimation="slide-up"
          blogs={[
            {
              id: "1",              category: "Safety",              title: "10 Essential Safety Tips for Construction Sites",              excerpt: "Ensure worker safety and project success with our comprehensive guide to construction site safety protocols.",              imageSrc: "http://img.b2bpic.net/free-photo/female-engineer-writing-notes-while-working-new-project-office_637285-107.jpg",              imageAlt: "Construction safety",              authorName: "Mike Thompson",              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              date: "15 Jan 2025"},
            {
              id: "2",              category: "Renovation",              title: "Planning Your Home Addition Project",              excerpt: "From permits to design, learn the key steps to successfully plan and execute your home addition.",              imageSrc: "http://img.b2bpic.net/free-photo/workers-talking-phone-doing-paperwork_23-2147668775.jpg",              imageAlt: "Home renovation",              authorName: "Jennifer Davis",              authorAvatar: "http://img.b2bpic.net/free-photo/confident-beautiful-young-businesswoman-looking-camera-head-shot-portrait_1163-4928.jpg",              date: "08 Jan 2025"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Read More", href: "#" }]}
          buttonAnimation="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Ready for Your Next Project?"
          description="Contact C Wall Builders today for a free consultation and project quote. Let's build something great together."
          background={{ variant: "rotated-rays-animated" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Get Quote"
          termsText="We respect your privacy. We'll only use your email to send project information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="C Wall Builders"
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Projects", href: "#projects" },
                { label: "Blog", href: "#blog" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Residential Construction", href: "#services" },
                { label: "Commercial Building", href: "#services" },
                { label: "Masonry Work", href: "#services" },
              ],
            },
            {
              title: "Contact",              items: [
                { label: "Get a Quote", href: "#contact" },
                { label: "Email Us", href: "mailto:info@cwallbuilders.com" },
                { label: "Call Us", href: "tel:+1234567890" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "License & Insurance", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 C Wall Builders. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
