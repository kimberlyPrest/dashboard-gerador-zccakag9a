import { useState } from 'react'
import { Download, Filter, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DatePickerWithRange } from '@/components/ui/date-picker-with-range'
import { ComparisonChart } from '@/components/analytics/ComparisonChart'
import { ActivityHeatmap } from '@/components/analytics/ActivityHeatmap'
import { toast } from 'sonner'

export default function Analytics() {
  const [isExporting, setIsExporting] = useState(false)
  const [key, setKey] = useState(0) // Used to force re-render charts to simulate filter update

  const handleExport = () => {
    setIsExporting(true)
    setTimeout(() => {
      setIsExporting(false)
      toast.success('Relatório Exportado', {
        description: 'O download do arquivo CSV começou.',
      })
    }, 1500)
  }

  const simulateFilterChange = () => {
    // This just changes the key of components to force them to re-render with new random mock data (e.g., in heatmap)
    setKey((prev) => prev + 1)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Análise Detalhada</h1>
          <p className="text-muted-foreground">
            Aprofunde-se nos dados e extraia insights valiosos.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={simulateFilterChange}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
          <Button
            onClick={handleExport}
            disabled={isExporting}
            className="transition-transform active:scale-[0.98]"
          >
            {isExporting ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            {isExporting ? 'Exportando...' : 'Exportar Dados'}
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border shadow-subtle">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground pr-2 border-r">
          <Filter className="h-4 w-4" />
          Filtros
        </div>

        <DatePickerWithRange />

        <Select defaultValue="all" onValueChange={simulateFilterChange}>
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Categorias</SelectItem>
            <SelectItem value="saas">SaaS</SelectItem>
            <SelectItem value="consulting">Consultoria</SelectItem>
            <SelectItem value="hardware">Hardware</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="active" onValueChange={simulateFilterChange}>
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os Status</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="churned">Cancelados (Churn)</SelectItem>
            <SelectItem value="trial">Em Período de Teste</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3" key={key}>
        <ComparisonChart />
        <ActivityHeatmap />
      </div>

      {/* Empty state example - usually hidden unless data is actually empty */}
      {/*
      <div className="flex flex-col items-center justify-center p-12 border border-dashed rounded-xl bg-card">
        <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4">
          <BarChart3 className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium">Nenhum dado encontrado</h3>
        <p className="text-muted-foreground text-sm max-w-sm text-center mt-2 mb-4">
          Ajuste os filtros acima para visualizar os dados de outro período ou categoria.
        </p>
        <Button variant="outline" onClick={simulateFilterChange}>Limpar Filtros</Button>
      </div>
      */}
    </div>
  )
}
