import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => { fetchCollection('workouts').then(setWorkouts).catch((reason) => setError(reason.message)) }, [])

  return <section><div className="page-heading"><div><p className="eyebrow">TRAINING LIBRARY</p><h1>Workouts</h1><p className="lede">Pick a session that fits the energy you have today.</p></div></div>{error ? <p className="alert alert-warning">{error}</p> : <div className="workout-grid">{workouts.map((workout) => <article className="workout-card" key={workout._id}><span className="workout-type">{workout.type}</span><h2>{workout.title}</h2><p>{workout.description}</p><footer><span>{workout.duration} min</span><span className="difficulty">{workout.difficulty}</span></footer></article>)}</div>}</section>
}

export default Workouts