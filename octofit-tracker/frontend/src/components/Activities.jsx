import { useEffect, useState } from 'react'
import { fetchCollection, formatDate } from '../api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('activities').then(setActivities).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section>
      <div className="page-heading">
        <div><p className="eyebrow">LIVE FEED</p><h1>Activity pulse</h1><p className="lede">The team is moving. Keep the streak alive.</p></div>
        <div className="stat-chip"><strong>{activities.length}</strong><span>logged sessions</span></div>
      </div>
      {error ? <p className="alert alert-warning">{error}</p> : <div className="activity-list">{activities.map((activity) => <article className="activity-row" key={activity._id}><div className="activity-icon">{activity.type?.slice(0, 1) || 'A'}</div><div className="activity-main"><strong>{activity.user?.name || 'Anonymous athlete'}</strong><span>{activity.type} · {activity.duration} min</span></div><div className="activity-meta"><strong>+{activity.points || 0}</strong><span>pts · {formatDate(activity.completedAt)}</span></div></article>)}</div>}
      {!error && activities.length === 0 && <p className="empty-state">No activities have been logged yet.</p>}
    </section>
  )
}

export default Activities