import { useGetDashboardDataQuery } from '@/services/api'
import { ShoppingCart, Store, Truck, Users } from 'lucide-react'
import React from 'react'
import StatCard from './StatCard'

const SuperAdminDashboard: React.FC = () => {
  const { data: counts } = useGetDashboardDataQuery()

  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={counts?.data?.usersCount || '0'}
          icon={<Users size={24} className="text-blue-600" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Pharmacies"
          value={counts?.data?.pharmaciesCount || '0'}
          icon={<Store size={24} className="text-purple-600" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Suppliers"
          value={counts?.data?.suppliersCount || '0'}
          icon={<Truck size={24} className="text-green-600" />}
          trend={{ value: 2, isPositive: false }}
        />
        <StatCard
          title="Orders"
          value={counts?.data?.ordersCount || '0'}
          icon={<ShoppingCart size={24} className="text-orange-600" />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>
    </>
  )
}

export default SuperAdminDashboard
