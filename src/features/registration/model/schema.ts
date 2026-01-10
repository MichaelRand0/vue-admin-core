import { toTypedSchema } from '@vee-validate/zod'
import { object, string, type infer as zInfer } from 'zod'

export const registerSchema = object({
  email: string().min(1).email(),
  password: string().min(1),
  firstName: string().min(1),
  lastName: string(),
})

export type RegisterFormValues = zInfer<typeof registerSchema>

export const registerStepSchema1 = toTypedSchema(registerSchema.pick({ email: true }))
