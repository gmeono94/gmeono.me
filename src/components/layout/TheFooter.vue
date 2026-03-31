<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-border py-8 bg-base-light">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="font-display text-sm font-bold">GM<span class="text-accent">.</span></span>
        <span class="text-xs text-muted/40">{{ t('footer.built') }}</span>
      </div>
      <div class="flex items-center gap-6">
        <span class="text-xs text-muted/40">&copy; {{ new Date().getFullYear() }}</span>
        <a href="https://www.linkedin.com/in/gmeono/" target="_blank" rel="noopener" class="text-muted/40 hover:text-accent transition-colors">
          <i class="pi pi-linkedin text-sm" />
        </a>
        <a href="mailto:hola@gmeono.me" class="text-muted/40 hover:text-accent transition-colors">
          <i class="pi pi-envelope text-sm" />
        </a>
      </div>
    </div>
  </footer>
</template>
