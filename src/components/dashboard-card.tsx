import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { JsxElement } from 'typescript'

type Props = {
  title: string
  image: JSX.Element
  text: string
  description: string
  value: string
}

export default function DashboardCard({ title, image, text, description, value }: Props) {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {image}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{text}</div>
          <p className="text-xs text-muted-foreground">{
            value.startsWith('+') ? 
            <span className="text-xs text-green-500">{value}</span> : 
            <span className="text-xs text-red-500">{value}</span>}
            {description}
          </p>
        </CardContent>
      </Card>
    </>
  )
}
