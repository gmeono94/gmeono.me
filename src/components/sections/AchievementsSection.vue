<script setup>
import { useI18n } from 'vue-i18n'
import SectionWrapper from '@/components/layout/SectionWrapper.vue'

const { t } = useI18n()

const stats = ['experience', 'engineers', 'downloads', 'locations', 'enps', 'revenue']
</script>

<template>
  <SectionWrapper id="achievements" alt>
    <div class="flex items-center gap-3 mb-16">
      <span class="text-accent font-mono text-sm">/</span>
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight">
        {{ t('achievements.heading') }}
      </h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
      <div
        v-for="stat in stats"
        :key="stat"
      >
        <p class="text-5xl md:text-7xl font-extrabold text-accent leading-none mb-3">
          {{ t(`achievements.items.${stat}.value`) }}
        </p>
        <p class="text-sm text-muted font-medium uppercase tracking-wider">
          {{ t(`achievements.items.${stat}.label`) }}
        </p>
      </div>
    </div>
  </SectionWrapper>
</template>
