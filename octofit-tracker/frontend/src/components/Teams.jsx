import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  const endpoint = '/api/teams/'

  useEffect(() => { fetchCollection(endpoint).then(setTeams).catch((reason) => setError(reason.message)) }, [])

  return <section><div className="page-heading"><div><p className="eyebrow">YOUR CREW</p><h1>Teams</h1><p className="lede">Find your people and make the next goal collective.</p></div></div>{error ? <p className="alert alert-warning">{error}</p> : <div className="card-grid">{teams.map((team) => <article className="feature-card" key={team._id}><div className="card-accent">✦</div><h2>{team.name}</h2><p>{team.members?.length || 0} members</p><div className="member-stack">{team.members?.slice(0, 5).map((member) => <span className="avatar small" key={member._id}>{member.name?.slice(0, 1) || '?'}</span>)}</div></article>)}</div>}{!error && teams.length === 0 && <p className="empty-state">No teams found.</p>}</section>
}

export default Teams