import { Cog } from 'lucide-react'

type Props = {
    href: string,
    title: string,
    img: JSX.Element
}

export default function SidebarItem({href, title, img} : Props) {
  return (
    <>        
        <li className='flex w-full justify-between text-slate-600 font-normal cursor-pointer items-center mb-1 p-2 pl-2 pr-2 rounded-md hover:bg-white'>
            <a
                href={href}
                className='flex items-center'
            >
                {img}
            <span className='text-sm ml-3'>{title}</span>
            </a>
        </li>        
    </>
  )
}
