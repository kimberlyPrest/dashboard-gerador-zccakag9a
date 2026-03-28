import { useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const times = ['00-04h', '04-08h', '08-12h', '12-16h', '16-20h', '20-24h']

// Generate random mock data for heatmap intensities
const generateData = () => {
  return days.map((day) => ({
    day,
    values: times.map(() => Math.floor(Math.random() * 100)),
  }))
}

export function ActivityHeatmap() {
  const data = useMemo(() => generateData(), [])

  const getIntensityClass = (value: number) => {
    if (value < 20) return 'bg-primary/5'
    if (value < 40) return 'bg-primary/20'
    if (value < 60) return 'bg-primary/40'
    if (value < 80) return 'bg-primary/70 text-primary-foreground'
    return 'bg-primary text-primary-foreground font-medium'
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Mapa de Atividade</CardTitle>
        <CardDescription>Picos de uso por dia e horário.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {/* Header row for times */}
          <div className="grid grid-cols-[auto_repeat(6,1fr)] gap-1 mb-2">
            <div className="w-8"></div>
            {times.map((time) => (
              <div
                key={time}
                className="text-[10px] text-center text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {time.split('-')[0]}h
              </div>
            ))}
          </div>

          {/* Heatmap rows */}
          {data.map((row) => (
            <div key={row.day} className="grid grid-cols-[auto_repeat(6,1fr)] gap-1 items-center">
              <div className="text-xs text-muted-foreground w-8 font-medium">{row.day}</div>
              {row.values.map((val, idx) => (
                <div
                  key={idx}
                  title={`${val} interações`}
                  className={cn(
                    'h-8 rounded-sm flex items-center justify-center text-[10px] transition-all hover:scale-105 cursor-crosshair',
                    getIntensityClass(val),
                  )}
                >
                  <span className="opacity-0 hover:opacity-100 transition-opacity">{val}</span>
                </div>
              ))}
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
            <span>Menos</span>
            <div className="flex gap-1">
              {[5, 20, 40, 70, 100].map((v) => (
                <div key={v} className={cn('h-3 w-3 rounded-sm', getIntensityClass(v))} />
              ))}
            </div>
            <span>Mais</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
