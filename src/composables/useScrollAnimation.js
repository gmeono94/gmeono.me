import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(elementRef, options = {}) {
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      },
      { threshold: options.threshold ?? 0.1 }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return isVisible
}
