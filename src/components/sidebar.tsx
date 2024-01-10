import { Activity, Bell, Cog, DollarSign, LayoutDashboard, Package, Settings, Trash, Users } from 'lucide-react'
import SidebarItem from './sidebar-item';

export default function Sidebar() {

  const sidebarItems: { title: string; href: string; img: JSX.Element }[] = [
    {
      title: "Dashboard",
      href: "/",
      img: <LayoutDashboard size={24} strokeWidth={1.3}/>
    },
    {
      title: "Products",
      href: "/",
      img: <Package size={24} strokeWidth={1.3}/>
    },
    {
      title: "Users",
      href: "/",
      img: <Users size={24} strokeWidth={1.3}/>
    },
    {
      title: "Sales",
      href: "/",
      img: <DollarSign size={24} strokeWidth={1.3}/>
    },
    {
      title: "Settings",
      href: "/",
      img: <Settings size={24} strokeWidth={1.3}/>
    },

  ]


  return (
    <>
              <div className='w-64 absolute flex bg-slate-200 h-full flex-col justify-between'>
                <div className='px-8'>
                  <div className='h-16 w-full flex items-center'>
                    <Cog className='h-8 w-auto  stroke-slate-600 mr-2' />
                    <p className='text-slate-600 font-semibold mr-1'>Gearwheel</p>
                    <p className='text-slate-700 '>Admin</p>
                  </div>
                  <ul className='mt-8'>
                    {
                      sidebarItems.map((item) => {
                        return(
                          <SidebarItem href={item.href} title={item.title} img={item.img} key={item.title}/>
                        )
                      })
                    }
                  </ul>
                  <div className='flex justify-center mt-48 mb-4 w-full'>
                  </div>
                </div>
              </div>
            
  
    </>
  )
}
