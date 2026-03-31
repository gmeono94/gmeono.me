<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const mobileOpen = ref(false)
const scrolled = ref(false)

const links = ['about', 'experience', 'services', 'techStack', 'contact']

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}

const scrollTo = (id) => {
  mobileOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const onScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-base/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="text-xl font-bold tracking-tight text-primary font-display">
        GM<span class="text-accent">.</span>
      </a>

      <!-- Desktop -->
      <div class="hidden md:flex items-center gap-8">
        <button
          v-for="link in links"
          :key="link"
          @click="scrollTo(link)"
          class="text-sm text-muted hover:text-primary transition-colors cursor-pointer"
        >
          {{ t(`nav.${link}`) }}
        </button>
        <button
          @click="toggleLocale"
          class="text-xs font-mono px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition-colors cursor-pointer text-muted"
        >
          {{ locale === 'en' ? 'ES' : 'EN' }}
        </button>
      </div>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-primary cursor-pointer"
        @click="mobileOpen = !mobileOpen"
      >
        <i :class="mobileOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-xl" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="mobileOpen"
      class="md:hidden bg-base/95 backdrop-blur-md border-t border-border px-6 py-6 flex flex-col gap-5"
    >
      <button
        v-for="link in links"
        :key="link"
        @click="scrollTo(link)"
        class="text-sm text-muted hover:text-primary text-left cursor-pointer"
      >
        {{ t(`nav.${link}`) }}
      </button>
      <button
        @click="toggleLocale"
        class="text-sm font-medium text-accent text-left cursor-pointer"
      >
        {{ locale === 'en' ? 'Español' : 'English' }}
      </button>
    </div>
  </nav>
</template>
