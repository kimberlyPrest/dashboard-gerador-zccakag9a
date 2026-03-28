import { useMemo } from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const data = [
  { month: 'Jan', revenue: 18000 },
  { month: 'Fev', revenue: 22000 },
  { month: 'Mar', revenue: 20000 },
  { month: 'Abr', revenue: 27000 },
  { month: 'Mai', revenue: 32000 },
  { month: 'Jun', revenue: 30000 },
  { month: 'Jul', revenue: 38000 },
  { month: 'Ago', revenue: 42000 },
  { month: 'Set', revenue: 45000 },
  { month: 'Out', revenue: 43000 },
  { month: 'Nov', revenue: 48000 },
  { month: 'Dez', revenue: 52000 },
]

export function RevenueChart() {
  const chartConfig = useMemo(
    () => ({
      revenue: {
        label: 'Receita',
        color: 'hsl(var(--chart-1))',
      },
    }),
    [],
  )

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Receita ao Longo do Tempo</CardTitle>
        <CardDescription>Visualização dos últimos 12 meses de faturamento</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
              tickFormatter={(value) => `R$${value / 1000}k`}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#fillRevenue)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
