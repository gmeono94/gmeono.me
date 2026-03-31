<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

defineProps({
  id: String,
  alt: { type: Boolean, default: false }
})

const sectionRef = ref(null)
const isVisible = useScrollAnimation(sectionRef)
</script>

<template>
  <section
    :id="id"
    ref="sectionRef"
    :class="[
      'py-24 md:py-32 transition-all duration-700',
      alt ? 'bg-base-light' : 'bg-base',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6">
      <slot />
    </div>
  </section>
</template>
