<script setup>
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import HowIWorkSection from '@/components/sections/HowIWorkSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <TheNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ServicesSection />
    <HowIWorkSection />
    <TechStackSection />
    <!-- Contact + Footer together as last snap unit -->
    <div class="snap-section" style="min-height: auto;">
      <ContactSection />
      <TheFooter />
    </div>
  </main>
</template>
