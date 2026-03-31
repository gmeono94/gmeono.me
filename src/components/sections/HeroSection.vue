<script setup>
import { useI18n } from 'vue-i18n'
import MarqueeSection from './MarqueeSection.vue'

const { t } = useI18n()

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="min-h-screen flex flex-col bg-base relative overflow-hidden pt-16 noise">
    <!-- Glow blobs -->
    <div class="glow w-[500px] h-[500px] bg-accent/8 top-[10%] -right-[10%]" />
    <div class="glow w-[300px] h-[300px] bg-accent/5 bottom-[20%] left-[5%]" />

    <!-- Main content -->
    <div class="flex-1 flex items-center relative z-10">
      <div class="max-w-7xl mx-auto px-6 w-full">
        <div class="grid md:grid-cols-12 gap-8 items-center">

          <!-- Left: text -->
          <div class="md:col-span-7">
            <p class="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
              <span class="w-8 h-px bg-accent" />
              {{ t('hero.greeting') }}
            </p>

            <h1 class="font-display text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight mb-6">
              <span class="text-primary">GUSTAVO</span><br />
              <span class="text-accent">MEOÑO</span>
            </h1>

            <p class="font-display text-xl md:text-2xl text-primary/80 font-semibold mb-4">
              {{ t('hero.tagline') }}
            </p>

            <p class="text-sm text-muted max-w-lg leading-relaxed mb-10">
              {{ t('hero.subtitle') }}
            </p>

            <div class="flex items-center gap-4">
              <button
                @click="scrollToContact"
                class="px-7 py-3 bg-accent hover:bg-accent-hover font-semibold rounded-full transition-all cursor-pointer hover:scale-105 font-display" style="color: #0A0A0A;"
              >
                {{ t('hero.cta') }}
              </button>
              <a
                href="/gmeono.pdf"
                target="_blank"
                class="px-7 py-3 border border-border hover:border-accent text-muted hover:text-accent font-medium rounded-full transition-all flex items-center gap-2"
              >
                <i class="pi pi-download text-xs" />
                {{ t('hero.resume') }}
              </a>
            </div>
          </div>

          <!-- Right: photo -->
          <div class="md:col-span-5 flex justify-center md:justify-end">
            <div class="relative">
              <!-- Photo container -->
              <div class="w-64 h-80 md:w-80 md:h-[26rem] rounded-2xl overflow-hidden border-2 border-border relative">
                <img src="/photo.jpg" alt="Gustavo Meoño" class="w-full h-full object-cover" />
              </div>
              <!-- Decorative elements -->
              <div class="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border border-accent/20 -z-10" />
              <div class="absolute -top-4 -right-4 px-4 py-2 bg-accent text-xs font-bold font-display rounded-full" style="color: #0A0A0A;">
                {{ t('hero.role') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Marquee at bottom -->
    <MarqueeSection />
  </section>
</template>
