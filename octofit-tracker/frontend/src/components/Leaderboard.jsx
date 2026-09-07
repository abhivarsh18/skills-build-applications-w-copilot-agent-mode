import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => { fetchCollection('leaderboard').then(setEntries).catch((reason) => setError(reason.message)) }, [])

  return <section><div className="page-heading"><div><p className="eyebrow">ALL-TIME RANKINGS</p><h1>Leaderboard</h1><p className="lede">Small wins add up to serious momentum.</p></div></div>{error ? <p className="alert alert-warning">{error}</p> : <div className="ranking-list">{entries.map((entry, index) => <article className={`ranking-row rank-${entry.rank || index + 1}`} key={entry._id || entry.user?._id || index}><span className="rank-number">{entry.rank || index + 1}</span><div className="avatar">{entry.user?.name?.slice(0, 1) || '?'}</div><div className="ranking-name"><strong>{entry.user?.name || 'Unknown athlete'}</strong><span>{entry.activities || 0} activities</span></div><strong className="ranking-points">{entry.points || 0}<small> PTS</small></strong></article>)}</div>}</section>
}

export default Leaderboard