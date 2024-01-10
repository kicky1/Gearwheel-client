import { useAuthorizationStore } from '@/stores/useAuthorizationStore'
import { Bell, Cog } from 'lucide-react'
import { UserDropDown } from './user-dropdown'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Users', href: '#', current: false },
  { name: 'Products', href: '#', current: false },
]

export default function Navbar() {
  const authorized = useAuthorizationStore((state) => state.authorized)
  if (!authorized) {
    return <></>
  }

  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Cog className="h-8 w-auto" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <UserDropDown />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
