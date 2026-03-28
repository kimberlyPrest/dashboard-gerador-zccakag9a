import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string
  icon: LucideIcon
  trend?: string
  trendUp?: boolean
  trendNeutral?: boolean
  isLive?: boolean
}

export function KPICard({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
  trendNeutral,
  isLive,
}: KPICardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-3">
          <div className="text-2xl font-bold">{value}</div>
          {isLive && (
            <span className="flex h-2 w-2 relative">
              <span className="animate-pulse-live absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          )}
        </div>
        {trend && (
          <p
            className={cn(
              'text-xs font-medium mt-1',
              trendNeutral
                ? 'text-muted-foreground'
                : trendUp
                  ? 'text-emerald-600'
                  : 'text-rose-600',
            )}
          >
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
