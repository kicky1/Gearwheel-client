import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUpSchema, SignUpSchemaType } from '@/validation/login-schema'
import { RotateCw } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from './ui/use-toast'
import { register } from '@/actions/post-register'

type Props = {
  setIsRegister: (flag: boolean) => void
}

export default function RegisterCard({ setIsRegister }: Props) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) })

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    setLoading(true)
    register(data)
      .then(() => {
        toast({
          title: 'Register Success',
          description: 'The user has been correctly registered.',
        })
        setLoading(false)
      })
      .catch((error: any) => {
        const errorMessage = error?.response?.data['username']
          ? error?.response?.data['username'][0]
          : error?.response?.data[0][0]
        console.log(errorMessage)
        toast({
          variant: 'destructive',
          title: 'Register Error',
          description: errorMessage,
        })
        setLoading(false)
      })
  }

  return (
    <>
      <div className="my-16 text-center">
        <div className="flex flex-col items-center justify-center mt-16">
          <Card className="w-[28rem]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Registration</CardTitle>
              <CardDescription>
                <>
                  <p>Please fill username, email and password below to login </p>
                  <p>your account</p>
                </>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 text-left">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2 pb-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="username"
                    placeholder="Enter your username"
                    {...registerForm('username')}
                  />
                  {errors.username && (
                    <span className="text-red-500 text-sm">{errors.username.message}</span>
                  )}
                </div>
                <div className="grid gap-2 pb-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...registerForm('email')}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div className="grid gap-2 pb-3">
                  <Label htmlFor="password1">Password</Label>
                  <Input
                    id="password1"
                    type="password"
                    placeholder="Create a password"
                    {...registerForm('password1')}
                  />
                  {errors.password1 && (
                    <span className="text-red-500 text-sm">{errors.password1.message}</span>
                  )}
                </div>

                <div className="grid gap-2 pb-3">
                  <Label htmlFor="password2">Password</Label>
                  <Input
                    id="password2"
                    type="password"
                    placeholder="Confirm a password"
                    {...registerForm('password2')}
                  />
                  {errors.password2 && (
                    <span className="text-red-500 text-sm">{errors.password2.message}</span>
                  )}
                </div>

                <div className="mt-4">
                  <Button className="w-full " disabled={loading} type="submit">
                    {loading ? (
                      <RotateCw className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="place-content-center">
              <>
                <p>
                  Already have an account?
                  <span
                    className="inline-block cursor-pointer text-blue-500 ml-1 hover:underline"
                    onClick={() => {
                      setIsRegister(false)
                    }}
                  >
                    Login now
                  </span>
                </p>
              </>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
