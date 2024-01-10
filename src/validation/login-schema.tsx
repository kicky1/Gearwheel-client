import z from 'zod'

export type SignInSchemaType = z.infer<typeof SignInSchema>
export type SignUpSchemaType = z.infer<typeof SignUpSchema>

export const SignInSchema = z.object({
  username: z.string().min(1, 'Value is too short'),
  password: z.string().min(8, 'Password is too short'),
})

export const SignUpSchema = z
  .object({
    username: z.string().min(1, 'Value is too short'),
    email: z.string().email('Invalid email'),
    password1: z
      .string()
      .min(8, 'Password is too short')
      .refine((password) => /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password), {
        message: 'Password must contain both letters and numbers',
      }),
    password2: z
      .string()
      .min(8, 'Password is too short')
      .refine((password) => /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password), {
        message: 'Password must contain both letters and numbers',
      }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords don't match",
    path: ['password2'],
  })
