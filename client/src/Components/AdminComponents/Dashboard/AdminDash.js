import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminHeader from '../Header/AdminHeader'
import './AdminDash.css'

function AdminDash() {
  return (
  <Fragment>
  <AdminHeader />
  <div style={{ backgroundColor: '#0b0c2a', minHeight: '100vh' }}>
  <div className="container mt">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card border-1 rounded shadow-sm text-center">
          <div className="card-body">
            <h2 className="mb-4"></h2>
            <div className="d-grid gap-2">
              <Link to={'/users'} className="btn btn-success btn-lg">
                View User Lists
              </Link>             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div> 
</Fragment>
)
}

export default AdminDash