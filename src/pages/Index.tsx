import { DollarSign, Users, UserPlus, Activity } from 'lucide-react'
import { KPICard } from '@/components/dashboard/KPICard'
import { RevenueChart } from '@/components/dashboard/RevenueChart'
import { CategoryChart } from '@/components/dashboard/CategoryChart'
import { TransactionsTable } from '@/components/dashboard/TransactionsTable'

export default function Index() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Visão Geral</h1>
        <p className="text-muted-foreground">
          Monitoramento em tempo real dos principais indicadores.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Receita Total"
          value="R$ 45.231,89"
          icon={DollarSign}
          trend="+20.1% desde o mês passado"
          trendUp
        />
        <KPICard
          title="Novas Assinaturas"
          value="+2.350"
          icon={UserPlus}
          trend="+18.1% desde o mês passado"
          trendUp
        />
        <KPICard
          title="Usuários Ativos"
          value="12.234"
          icon={Users}
          trend="+4.3% nesta semana"
          trendNeutral
          isLive
        />
        <KPICard
          title="Taxa de Churn"
          value="2.4%"
          icon={Activity}
          trend="+0.4% desde o mês passado"
          trendUp={false}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        <RevenueChart />
        <CategoryChart />
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        <TransactionsTable />
      </div>
    </div>
  )
}
