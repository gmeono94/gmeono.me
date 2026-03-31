<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useContactForm } from '@/composables/useContactForm'

const { t, locale } = useI18n()
const sectionRef = ref(null)
const isVisible = useScrollAnimation(sectionRef)
const { form, submitting, submitted, error, handleSubmit } = useContactForm()
</script>

<template>
  <section
    id="contact"
    ref="sectionRef"
    :class="[
      'py-24 md:py-36 bg-base relative noise transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
  >
    <div class="glow w-[400px] h-[400px] bg-accent/5 top-0 right-[10%]" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Big heading -->
      <h2 class="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
        {{ t('contact.heading') }}
      </h2>
      <p class="text-muted mb-16 max-w-lg text-[1rem]">
        {{ t('contact.subtitle') }}
      </p>

      <div class="grid md:grid-cols-5 gap-16">
        <!-- Form -->
        <div class="md:col-span-3">
          <div v-if="!submitted">
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono text-muted/60 uppercase tracking-wider mb-2">{{ t('contact.name') }}</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-5 py-3.5 rounded-xl border border-border bg-base-card text-primary focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-xs font-mono text-muted/60 uppercase tracking-wider mb-2">{{ t('contact.email') }}</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-5 py-3.5 rounded-xl border border-border bg-base-card text-primary focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label class="block text-xs font-mono text-muted/60 uppercase tracking-wider mb-2">{{ t('contact.message') }}</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-5 py-3.5 rounded-xl border border-border bg-base-card text-primary focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                :disabled="submitting"
                class="px-8 py-3.5 bg-accent hover:bg-accent-hover font-semibold rounded-full transition-all disabled:opacity-50 cursor-pointer hover:scale-105 font-display" style="color: #0A0A0A;"
              >
                {{ submitting ? '...' : t('contact.send') }}
              </button>
              <p v-if="error" class="text-red-400 text-sm mt-3">
                {{ locale === 'es' ? 'Hubo un error. Intenta de nuevo o escríbeme directo.' : 'Something went wrong. Try again or email me directly.' }}
              </p>
            </form>
          </div>

          <div v-else class="py-16 text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <i class="pi pi-check text-2xl text-accent" />
            </div>
            <p class="font-display text-xl font-bold">{{ locale === 'es' ? '¡Listo!' : 'Got it!' }}</p>
            <p class="text-muted mt-2">{{ locale === 'es' ? 'Gracias por escribirme, te contesto a la brevedad.' : "Thanks for reaching out, I'll get back to you soon." }}</p>
          </div>
        </div>

        <!-- Links -->
        <div class="md:col-span-2 flex flex-col justify-center gap-6">
          <a
            href="mailto:hola@gmeono.me"
            class="flex items-center gap-4 text-muted hover:text-accent transition-all group"
          >
            <div class="w-12 h-12 rounded-xl border border-border group-hover:border-accent/40 group-hover:bg-accent/5 flex items-center justify-center transition-all">
              <i class="pi pi-envelope" />
            </div>
            <div>
              <p class="text-xs text-muted/40 font-mono uppercase tracking-wider">Email</p>
              <p class="text-sm font-medium">hola@gmeono.me</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/gmeono/"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-4 text-muted hover:text-accent transition-all group"
          >
            <div class="w-12 h-12 rounded-xl border border-border group-hover:border-accent/40 group-hover:bg-accent/5 flex items-center justify-center transition-all">
              <i class="pi pi-linkedin" />
            </div>
            <div>
              <p class="text-xs text-muted/40 font-mono uppercase tracking-wider">LinkedIn</p>
              <p class="text-sm font-medium">in/gmeono</p>
            </div>
          </a>
          <a
            href="/gmeono.pdf"
            target="_blank"
            class="flex items-center gap-4 text-muted hover:text-accent transition-all group"
          >
            <div class="w-12 h-12 rounded-xl border border-border group-hover:border-accent/40 group-hover:bg-accent/5 flex items-center justify-center transition-all">
              <i class="pi pi-file-pdf" />
            </div>
            <div>
              <p class="text-xs text-muted/40 font-mono uppercase tracking-wider">Resume</p>
              <p class="text-sm font-medium">{{ t('contact.resume') }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
