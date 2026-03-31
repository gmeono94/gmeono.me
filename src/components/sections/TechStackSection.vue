<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { techStack } from '@/data/techStack'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = useScrollAnimation(sectionRef)

const categories = Object.keys(techStack)
</script>

<template>
  <section
    id="techStack"
    ref="sectionRef"
    :class="[
      'snap-section py-24 md:py-36 transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
    style="background-color: #0A0A0A;"
  >
    <div class="max-w-7xl mx-auto px-6">
      <p style="color: #E8C872;" class="font-mono text-xs tracking-widest uppercase mb-4">/ {{ t('techStack.heading') }}</p>
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-16" style="color: #FAFAFA;">
        Tools I work<br />
        <span style="color: #888888;">with daily</span>
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="category in categories" :key="category">
          <h3
            class="text-xs font-bold uppercase tracking-widest mb-6 pb-3 font-mono"
            style="color: #E8C872; border-bottom: 1px solid #222222;"
          >
            {{ t(`techStack.categories.${category}`) }}
          </h3>
          <div class="flex flex-col gap-3">
            <div
              v-for="tech in techStack[category]"
              :key="tech.name"
              class="flex items-center gap-3 group cursor-default"
            >
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                style="background-color: #161616; border: 1px solid #222222;"
              >
                <img :src="tech.icon" :alt="tech.name" class="w-5 h-5" loading="lazy" />
              </div>
              <span style="color: #AAAAAA;" class="text-sm font-medium group-hover:text-white transition-colors">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
