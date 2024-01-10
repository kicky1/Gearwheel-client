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
import { SignInSchema, SignInSchemaType } from '@/validation/login-schema'
import { RotateCw } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { setAuthorized, setUser } from '@/stores/useAuthorizationStore'
import { useToast } from './ui/use-toast'
import { login } from '@/actions/post-login'

type Props = {
  setIsRegister: (flag: boolean) => void
}

export default function LoginCard({ setIsRegister }: Props) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) })

  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    setLoading(true)
    login(data)
      .then((response) => {
        toast({
          title: 'Login Success',
          description: 'The user has been correctly logged in.',
        })
        setLoading(false)
        setUser(response.user)
        setAuthorized(true)
      })
      .catch((error: any) => {
        toast({
          variant: 'destructive',
          title: 'Login Error',
          description: error?.response?.data?.non_field_errors[0],
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
              <CardTitle className="text-2xl">{'Login'}</CardTitle>
              <CardDescription>
                <>
                  <p>Please enter your username and password below to login </p>
                  <p>your account</p>
                </>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 text-left">
              <>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-2 pb-3">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="username"
                      placeholder="Jhon"
                      {...register('username')}
                    />
                    {errors.username && (
                      <span className="text-red-500 text-sm">{errors.username.message}</span>
                    )}
                  </div>
                  <div className="grid gap-2 pb-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      {...register('password')}
                    />
                    {errors.password && (
                      <span className="text-red-500 text-sm">{errors.password.message}</span>
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
              </>
            </CardContent>
            <CardFooter className="place-content-center">
              <>
                <p>
                  Don't have an account?
                  <span
                    className="inline-block cursor-pointer text-blue-500 ml-1 hover:underline"
                    onClick={() => {
                      setIsRegister(true)
                    }}
                  >
                    Singup now
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
