import { ref } from 'vue'

export function useContactForm() {
  const form = ref({
    name: '',
    email: '',
    message: ''
  })

  const submitting = ref(false)
  const submitted = ref(false)

  const handleSubmit = async () => {
    submitting.value = true
    // TODO: integrate with a form service (Formspree, EmailJS, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitted.value = true
    submitting.value = false
  }

  return { form, submitting, submitted, handleSubmit }
}
