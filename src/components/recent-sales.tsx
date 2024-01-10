import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

const salesArray = [
  {
    src: '/avatar/01.png',
    initials: 'KW',
    name: 'Krzysztof Wicki',
    email: 'krzysztofwicki1@gmail.com',
    amount: '1,999,999',
  },
  {
    src: '/avatar/02.png',
    initials: 'SK',
    name: 'Szymon Kowalski',
    email: 'szymonkowalski@gmail.com',
    amount: '2,999,999',
  },
  {
    src: '/avatar/03.png',
    initials: 'DG',
    name: 'Daniel Gołębiewski',
    email: 'danielgołębiewski@gmail.com',
    amount: '1,999,999',
  },
  {
    src: '/avatar/04.png',
    initials: 'KR',
    name: 'Karol Rynkowski',
    email: 'karolrynkowski@gmail.com',
    amount: '3,999,999',
  },
  {
    src: '/avatar/03.png',
    initials: 'DG',
    name: 'Daniel Gołębiewski',
    email: 'danielgołębiewski@gmail.com',
    amount: '1,999,999',
  },
  {
    src: '/avatar/04.png',
    initials: 'KR',
    name: 'Karol Rynkowski',
    email: 'karolrynkowski@gmail.com',
    amount: '3,999,999',
  },
]

export function RecentSales() {
  return (
    <div className="space-y-8 max-h-80 overflow-y-auto">
      {salesArray.map((sale: any, index: number) => (
        <div className="flex items-center" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.src} alt="Avatar" />
            <AvatarFallback>{sale.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto mr-1 font-medium">+${sale.amount}</div>
        </div>
      ))}
    </div>
  )
}
