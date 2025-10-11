// app/games/[gameId]/page.tsx

import { notFound } from 'next/navigation';
import { Game } from '@/app/types/Game';
import { mockGames } from '@/app/types/mockData';
import GameDetailsLayout from './GameDetailsLayout';

// ... (تابع fetchGameDetails بدون تغییر) ...
async function fetchGameDetails(gameId: string): Promise<Game | null> {
  return new Promise((resolve) => {
    const foundGame = mockGames.find(game => game.id === gameId);
    setTimeout(() => {
      resolve(foundGame as Game);
    }, 100);
  });
}

export default async function GameDetailPage({ params }: { params: { gameId: string } }) {
  const { gameId } = params;
  const game = await fetchGameDetails(gameId);

  if (!game) {
    notFound();
  }

  return (
    <GameDetailsLayout game={game} />
  );
}