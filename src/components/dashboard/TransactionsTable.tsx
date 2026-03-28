import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const transactions = [
  {
    id: 'TRX-9821',
    customer: { name: 'João Silva', email: 'joao.silva@exemplo.com', avatar: '1' },
    date: 'Hoje, 14:32',
    amount: 'R$ 1.250,00',
    status: 'Sucesso',
  },
  {
    id: 'TRX-9820',
    customer: { name: 'Maria Souza', email: 'msouza@empresa.com', avatar: '2' },
    date: 'Hoje, 11:15',
    amount: 'R$ 840,00',
    status: 'Pendente',
  },
  {
    id: 'TRX-9819',
    customer: { name: 'Carlos Santos', email: 'carlos@tech.com', avatar: '3' },
    date: 'Ontem, 16:45',
    amount: 'R$ 3.100,00',
    status: 'Falhou',
  },
  {
    id: 'TRX-9818',
    customer: { name: 'Fernanda Lima', email: 'nanda.lima@studio.br', avatar: '4' },
    date: 'Ontem, 09:20',
    amount: 'R$ 450,00',
    status: 'Sucesso',
  },
  {
    id: 'TRX-9817',
    customer: { name: 'Tech Solutions Ltda', email: 'financeiro@techs.com', avatar: '5' },
    date: '24 Mar, 15:30',
    amount: 'R$ 12.500,00',
    status: 'Sucesso',
  },
]

export function TransactionsTable() {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
        <CardDescription>As últimas 5 transações registradas no sistema.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id} className="group cursor-pointer">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`https://img.usecurling.com/ppl/thumbnail?seed=${tx.customer.avatar}`}
                      />
                      <AvatarFallback>{tx.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">{tx.customer.name}</span>
                      <span className="text-xs text-muted-foreground">{tx.customer.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                <TableCell className="font-medium">{tx.amount}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant="outline"
                    className={
                      tx.status === 'Sucesso'
                        ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600'
                        : tx.status === 'Pendente'
                          ? 'border-amber-500/50 bg-amber-500/10 text-amber-600'
                          : 'border-rose-500/50 bg-rose-500/10 text-rose-600'
                    }
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
