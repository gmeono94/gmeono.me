<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = useScrollAnimation(sectionRef)

const services = [
  { key: 'leadership', icon: 'pi pi-users' },
  { key: 'architecture', icon: 'pi pi-server' },
  { key: 'teams', icon: 'pi pi-sitemap' },
  { key: 'data', icon: 'pi pi-chart-bar' },
  { key: 'ai', icon: 'pi pi-microchip-ai' },
  { key: 'product', icon: 'pi pi-mobile' }
]
</script>

<template>
  <section
    id="services"
    ref="sectionRef"
    :class="[
      'snap-section py-24 md:py-36 bg-base-light relative noise transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <p class="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
        <span class="w-8 h-px bg-accent" />
        {{ t('nav.services') }}
      </p>
      <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-14">
        {{ t('services.heading') }}
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="service in services"
          :key="service.key"
          class="group p-6 rounded-2xl border border-border-hover bg-base hover:border-accent/30 transition-all duration-300"
        >
          <i :class="[service.icon, 'text-xl text-accent mb-4 block']" />
          <h3 class="font-display text-[1rem] font-bold mb-2 text-primary group-hover:text-accent transition-colors">
            {{ t(`services.items.${service.key}.title`) }}
          </h3>
          <p class="text-sm text-muted leading-relaxed">
            {{ t(`services.items.${service.key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
