import { useMemo } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const data = [
  { name: 'Seg', atual: 4000, anterior: 2400 },
  { name: 'Ter', atual: 3000, anterior: 1398 },
  { name: 'Qua', atual: 2000, anterior: 9800 },
  { name: 'Qui', atual: 2780, anterior: 3908 },
  { name: 'Sex', atual: 1890, anterior: 4800 },
  { name: 'Sáb', atual: 2390, anterior: 3800 },
  { name: 'Dom', atual: 3490, anterior: 4300 },
]

export function ComparisonChart() {
  const config = useMemo(
    () => ({
      atual: { label: 'Período Atual', color: 'hsl(var(--primary))' },
      anterior: { label: 'Período Anterior', color: 'hsl(var(--muted-foreground))' },
    }),
    [],
  )

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Desempenho: Atual vs Anterior</CardTitle>
        <CardDescription>Comparação de volume de acessos por dia da semana.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-[350px] w-full">
          <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <ChartTooltip
              cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="atual" fill="var(--color-atual)" radius={[4, 4, 0, 0]} barSize={32} />
            <Bar
              dataKey="anterior"
              fill="var(--color-anterior)"
              radius={[4, 4, 0, 0]}
              barSize={32}
              opacity={0.5}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
