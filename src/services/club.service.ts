
import { Injectable, signal } from '@angular/core';
import { Player, ClubStats } from '../models/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  // Private mutable state (Encapsulation)
  private readonly _stats = signal<ClubStats>({
    matchesPlayed: 42,
    titlesWon: 5,
    activeMembers: 24
  });

  private readonly _players = signal<Player[]>([
    {
      id: 1,
      name: 'Alex "Bolt" Strider',
      role: 'Batsman',
      specialty: 'Aggressive Opener',
      image: 'https://picsum.photos/400/500?random=1'
    },
    {
      id: 2,
      name: 'Marcus "The Wall" Chen',
      role: 'Wicket Keeper',
      specialty: 'Reflex Specialist',
      image: 'https://picsum.photos/400/500?random=2'
    },
    {
      id: 3,
      name: 'David "Velocity" Jones',
      role: 'Bowler',
      specialty: '150km/h Yorkers',
      image: 'https://picsum.photos/400/500?random=3'
    },
    {
      id: 4,
      name: 'Sam "Spinner" Gupta',
      role: 'All-Rounder',
      specialty: 'Googly Master',
      image: 'https://picsum.photos/400/500?random=4'
    },
    {
      id: 5,
      name: 'Leo "Lefty" Thompson',
      role: 'Batsman',
      specialty: 'Cover Drive King',
      image: 'https://picsum.photos/400/500?random=5'
    },
    {
      id: 6,
      name: 'Ryan "Rocket" Miller',
      role: 'Fielder',
      specialty: 'Run Out Expert',
      image: 'https://picsum.photos/400/500?random=6'
    },
    {
      id: 7,
      name: 'Kian "Ace" Patel',
      role: 'Bowler',
      specialty: 'Swing Sultan',
      image: 'https://picsum.photos/400/500?random=7'
    },
    {
      id: 8,
      name: 'Tom "Titan" Wilson',
      role: 'All-Rounder',
      specialty: 'Power Hitter',
      image: 'https://picsum.photos/400/500?random=8'
    }
  ]);

  // Public readonly accessors (Getters)
  get stats() {
    return this._stats.asReadonly();
  }

  get players() {
    return this._players.asReadonly();
  }
}
