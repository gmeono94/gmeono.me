<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = useScrollAnimation(sectionRef)

const roles = ['unam', 'flink_em', 'flink_vp', 'flink_bi', 'pepper', 'commando']
const active = ref('commando')
</script>

<template>
  <section
    id="experience"
    ref="sectionRef"
    :class="[
      'snap-section py-24 md:py-36 bg-base transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
        <span class="w-8 h-px bg-accent" />
        {{ t('experience.heading') }}
      </p>

      <!-- Interactive timeline -->
      <div class="grid md:grid-cols-12 gap-8 mt-12">
        <!-- Left: role list -->
        <div class="md:col-span-5 space-y-1">
          <button
            v-for="role in roles"
            :key="role"
            @click="active = role"
            :class="[
              'w-full text-left px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer group flex items-center justify-between',
              active === role
                ? 'bg-base-card border border-accent/30'
                : 'border border-transparent hover:bg-base-card/50'
            ]"
          >
            <div>
              <div class="flex items-center gap-3">
                <span
                  class="w-2 h-2 rounded-full shrink-0"
                  :class="role === 'commando' ? 'bg-green-400 animate-pulse' : active === role ? 'bg-accent' : 'bg-border'"
                />
                <span class="font-display font-bold" :class="active === role ? 'text-primary' : 'text-muted'">
                  {{ t(`experience.roles.${role}.company`) }}
                </span>
              </div>
              <span class="text-xs text-muted/60 ml-5 font-mono">
                {{ t(`experience.roles.${role}.period`) }}
              </span>
            </div>
            <i
              class="pi pi-arrow-right text-xs transition-all"
              :class="active === role ? 'text-accent translate-x-0 opacity-100' : 'text-transparent -translate-x-2 opacity-0'"
            />
          </button>
        </div>

        <!-- Right: detail panel -->
        <div class="md:col-span-7">
          <div class="bg-base-card border border-border rounded-2xl p-8 md:p-10 min-h-[300px]">
            <Transition name="fade" mode="out-in">
              <div :key="active">
                <span class="inline-block px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full mb-5">
                  {{ t(`experience.roles.${active}.tag`) }}
                </span>
                <h3 class="font-display text-2xl md:text-3xl font-bold mb-1">
                  {{ t(`experience.roles.${active}.role`) }}
                </h3>
                <p class="text-accent font-medium mb-6">
                  {{ t(`experience.roles.${active}.company`) }}
                  <span class="text-muted/40 mx-2">·</span>
                  <span class="text-muted text-sm font-mono">{{ t(`experience.roles.${active}.period`) }}</span>
                </p>
                <p class="text-muted leading-relaxed text-base">
                  {{ t(`experience.roles.${active}.description`) }}
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
