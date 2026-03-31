<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = useScrollAnimation(sectionRef)

const activeSet = ref(0)

const sets = [
  [
    { key: 'leadership', icon: 'pi pi-users' },
    { key: 'methodology', icon: 'pi pi-sync' }
  ],
  [
    { key: 'technical', icon: 'pi pi-code' },
    { key: 'communication', icon: 'pi pi-comments' }
  ]
]
</script>

<template>
  <section
    id="howIWork"
    ref="sectionRef"
    :class="[
      'snap-section py-24 md:py-32 bg-base-light relative noise transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p class="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3 flex items-center gap-3">
            <span class="w-8 h-px bg-accent" />
            {{ t('howIWork.heading') }}
          </p>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight">
            {{ t('howIWork.title') }}
          </h2>
        </div>

        <!-- Set toggle -->
        <div class="flex gap-2">
          <button
            v-for="(set, i) in sets"
            :key="i"
            @click="activeSet = i"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer',
              activeSet === i
                ? 'bg-accent text-base font-display'
                : 'border border-border text-muted hover:border-accent/40'
            ]"
          >
            <span>{{ t(`howIWork.categories.${set[0].key}.label`) }}</span>
            <span style="color: #555;">&</span>
            <span>{{ t(`howIWork.categories.${set[1].key}.label`) }}</span>
          </button>
        </div>
      </div>

      <!-- Two cards side by side -->
      <Transition name="fade" mode="out-in">
        <div :key="activeSet" class="grid md:grid-cols-2 gap-5">
          <div
            v-for="cat in sets[activeSet]"
            :key="cat.key"
            class="bg-base-card border border-border rounded-2xl p-6 md:p-8 group hover:border-accent/30 transition-all duration-300"
          >
            <!-- Card header -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <i :class="[cat.icon, 'text-lg text-accent']" />
              </div>
              <h3 class="font-display text-lg font-bold group-hover:text-accent transition-colors">
                {{ t(`howIWork.categories.${cat.key}.title`) }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-muted text-sm leading-relaxed mb-5">
              {{ t(`howIWork.categories.${cat.key}.description`) }}
            </p>

            <!-- Skills pills -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(skill, i) in t(`howIWork.categories.${cat.key}.skills`).split('|').map(s => s.trim())"
                :key="skill"
                class="pill-in px-3 py-1.5 rounded-lg text-xs border font-medium"
                :style="{
                  animationDelay: `${i * 40}ms`,
                  borderColor: '#222222',
                  color: '#AAAAAA',
                  backgroundColor: '#0A0A0A'
                }"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes pillIn {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}
.pill-in {
  animation: pillIn 0.25s ease forwards;
  opacity: 0;
}
</style>
