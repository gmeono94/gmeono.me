<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = useScrollAnimation(sectionRef)
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    :class="[
      'snap-section py-24 md:py-36 bg-base-light relative noise transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Big intro quote -->
      <blockquote class="font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug mb-16 max-w-4xl">
        <span class="text-accent">"</span>{{ t('about.intro') }}<span class="text-accent">"</span>
      </blockquote>

      <div class="grid md:grid-cols-2 gap-16">
        <div class="space-y-6">
          <p class="text-muted leading-relaxed">{{ t('about.p1') }}</p>
          <p class="text-muted leading-relaxed">{{ t('about.p2') }}</p>
        </div>
        <div>
          <p class="text-muted leading-relaxed mb-10">{{ t('about.p3') }}</p>

          <!-- Mini facts -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <p class="font-display text-3xl font-bold text-accent">20+</p>
              <p class="text-xs text-muted mt-1 uppercase tracking-wider">{{ t('achievements.items.locations.label') }}</p>
            </div>
            <div>
              <p class="font-display text-3xl font-bold text-accent">85</p>
              <p class="text-xs text-muted mt-1 uppercase tracking-wider">eNPS</p>
            </div>
            <div>
              <p class="font-display text-3xl font-bold text-accent">25%</p>
              <p class="text-xs text-muted mt-1 uppercase tracking-wider">{{ t('achievements.items.revenue.label') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
