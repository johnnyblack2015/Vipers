
export interface Player {
  id: number;
  name: string;
  role: 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicket Keeper' | 'Fielder';
  image: string;
  specialty: string;
}

export interface ClubStats {
  matchesPlayed: number;
  titlesWon: number;
  activeMembers: number;
}
