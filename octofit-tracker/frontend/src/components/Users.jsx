import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => { fetchCollection('users').then(setUsers).catch((reason) => setError(reason.message)) }, [])

  return <section><div className="page-heading"><div><p className="eyebrow">THE COMMUNITY</p><h1>Members</h1><p className="lede">A quick look at the people making progress together.</p></div><div className="stat-chip"><strong>{users.length}</strong><span>athletes</span></div></div>{error ? <p className="alert alert-warning">{error}</p> : <div className="user-grid">{users.map((user) => <article className="user-card" key={user._id}><div className="avatar large">{user.name?.slice(0, 1) || '?'}</div><div><h2>{user.name}</h2><p>{user.email}</p><span>{user.profile || 'Ready for the next challenge.'}</span></div></article>)}</div>}</section>
}

export default Users