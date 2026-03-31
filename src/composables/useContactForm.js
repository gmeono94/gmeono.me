import { ref } from 'vue'

const FORMSPREE_URL = 'https://formspree.io/f/xbdpyqbw'

export function useContactForm() {
  const form = ref({
    name: '',
    email: '',
    message: ''
  })

  const submitting = ref(false)
  const submitted = ref(false)
  const error = ref(false)

  const handleSubmit = async () => {
    submitting.value = true
    error.value = false

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.value.name,
          email: form.value.email,
          message: form.value.message
        })
      })

      if (res.ok) {
        submitted.value = true
      } else {
        error.value = true
      }
    } catch {
      error.value = true
    } finally {
      submitting.value = false
    }
  }

  return { form, submitting, submitted, error, handleSubmit }
}
