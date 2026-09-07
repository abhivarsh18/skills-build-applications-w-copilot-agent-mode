import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Leaderboard.deleteMany({}),
      Activity.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Ada Lovelace', email: 'ada@example.com', profile: 'Distance runner and data enthusiast.' },
      { name: 'Grace Hopper', email: 'grace@example.com', profile: 'Swimmer focused on consistent training.' },
      { name: 'Alan Turing', email: 'alan@example.com', profile: 'Cyclist working toward a faster century ride.' },
    ]);

    const teams = await Team.create([
      { name: 'Code Sprinters', members: [users[0]._id, users[2]._id] },
      { name: 'Binary Balance', members: [users[1]._id] },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'Running', duration: 32, distance: 5.2, points: 52, completedAt: new Date('2026-09-01') },
      { user: users[0]._id, type: 'Yoga', duration: 25, points: 25, completedAt: new Date('2026-09-03') },
      { user: users[1]._id, type: 'Swimming', duration: 45, distance: 1.5, points: 45, completedAt: new Date('2026-09-02') },
      { user: users[1]._id, type: 'Cycling', duration: 38, distance: 12, points: 60, completedAt: new Date('2026-09-04') },
      { user: users[2]._id, type: 'Cycling', duration: 60, distance: 20, points: 100, completedAt: new Date('2026-09-01') },
      { user: users[2]._id, type: 'Running', duration: 28, distance: 4.6, points: 46, completedAt: new Date('2026-09-05') },
    ]);

    await Leaderboard.create([
      { user: users[2]._id, team: teams[0]._id, points: 146, rank: 1 },
      { user: users[1]._id, team: teams[1]._id, points: 105, rank: 2 },
      { user: users[0]._id, team: teams[0]._id, points: 77, rank: 3 },
    ]);

    await Workout.create([
      { title: 'Starter Run', description: 'A short, steady run for building consistency.', difficulty: 'beginner', type: 'Running', duration: 25 },
      { title: 'Power Ride', description: 'Intervals to build cycling strength and stamina.', difficulty: 'intermediate', type: 'Cycling', duration: 40 },
      { title: 'Pool Endurance', description: 'A measured swim with relaxed recovery intervals.', difficulty: 'intermediate', type: 'Swimming', duration: 35 },
      { title: 'Mobility Reset', description: 'Gentle mobility work for a balanced recovery day.', difficulty: 'beginner', type: 'Yoga', duration: 20 },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
