import { useMemo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart'

const data = [
  { name: 'SaaS', value: 4500, color: 'hsl(var(--chart-1))' },
  { name: 'Consultoria', value: 2500, color: 'hsl(var(--chart-2))' },
  { name: 'Hardware', value: 1800, color: 'hsl(var(--chart-3))' },
  { name: 'Suporte', value: 1200, color: 'hsl(var(--chart-4))' },
]

export function CategoryChart() {
  const chartConfig = useMemo(
    () => ({
      SaaS: { label: 'SaaS', color: 'hsl(var(--chart-1))' },
      Consultoria: { label: 'Consultoria', color: 'hsl(var(--chart-2))' },
      Hardware: { label: 'Hardware', color: 'hsl(var(--chart-3))' },
      Suporte: { label: 'Suporte', color: 'hsl(var(--chart-4))' },
    }),
    [],
  )

  return (
    <Card className="col-span-1 flex flex-col">
      <CardHeader>
        <CardTitle>Vendas por Categoria</CardTitle>
        <CardDescription>Distribuição de receita por linha de produto</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Categoria
                          </span>
                          <span className="font-bold text-muted-foreground">{payload[0].name}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Valor
                          </span>
                          <span className="font-bold">R$ {payload[0].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  className="hover:opacity-80 transition-opacity duration-200 outline-none"
                />
              ))}
            </Pie>
            <ChartLegend
              content={<ChartLegendContent />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
