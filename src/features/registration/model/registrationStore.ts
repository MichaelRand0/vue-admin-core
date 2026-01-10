import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import type { RegisterFormValues } from './schema'

export const registrationStore = defineStore('registration', () => {
  const currentStep = ref(1)

  const form = reactive(<Partial<RegisterFormValues>>{
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  })

  const setRegisterForm = (data: Partial<RegisterFormValues>) => {
    Object.assign(form, data)
  }

  const nextStep = () => currentStep.value++

  const prevStep = () => currentStep.value--

  return {
    currentStep,
    form,
    setRegisterForm,
    nextStep,
    prevStep,
  }
})
