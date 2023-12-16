import React from 'react'
import AdminBandForm from './AdminBandForm'
import AdminVenueForm from './AdminVenueForm'

function AdminDashboard() {
  return (
    <div>
        <AdminVenueForm />
        <AdminBandForm />
    </div>
  )
}

export default AdminDashboard