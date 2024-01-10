import LoginCard from '@/components/login-card'
import RegisterCard from '@/components/register-card'

import { useState } from 'react'

function Login() {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className="flex flex-col min-h-screen dark:bg-zinc-800/30">
      <div className="max-w-5xl mx-auto">
        {isRegister ? (
          <RegisterCard setIsRegister={setIsRegister} />
        ) : (
          <LoginCard setIsRegister={setIsRegister} />
        )}
      </div>
    </div>
  )
}

export default Login
