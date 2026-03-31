<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = useScrollAnimation(sectionRef)

const services = [
  { key: 'leadership', icon: 'pi pi-users', size: 'bento-wide' },
  { key: 'architecture', icon: 'pi pi-server', size: '' },
  { key: 'teams', icon: 'pi pi-sitemap', size: '' },
  { key: 'data', icon: 'pi pi-chart-bar', size: '' },
  { key: 'ai', icon: 'pi pi-microchip-ai', size: 'bento-wide' },
  { key: 'product', icon: 'pi pi-mobile', size: '' }
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
        Services
      </p>
      <h2 class="font-display text-3xl md:text-5xl font-bold tracking-tight mb-16">
        {{ t('services.heading') }}
      </h2>

      <div class="bento-grid">
        <div
          v-for="service in services"
          :key="service.key"
          :class="[
            'group relative p-7 md:p-8 rounded-2xl border border-border bg-base-card overflow-hidden transition-all duration-300',
            service.size,
            'hover:border-accent/30'
          ]"
        >
          <!-- Hover glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
              <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <i :class="[service.icon, 'text-lg text-accent']" />
              </div>
              <i class="pi pi-arrow-up-right text-sm text-muted/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 class="font-display text-lg font-bold mb-3 group-hover:text-accent transition-colors">
              {{ t(`services.items.${service.key}.title`) }}
            </h3>
            <p class="text-sm text-muted leading-relaxed">
              {{ t(`services.items.${service.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
