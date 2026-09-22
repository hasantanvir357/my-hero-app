import React from 'react';
import AppCard from './AppCard';
import { IApp } from '../../types/apps.type';

// Fetch function (Server Component compatible)
const getAllApps = async (): Promise<IApp[]> => {
  const res = await fetch('http://localhost:3000/data.json', {
    cache: 'no-store',
  });
  return res.json();
};

const TrendingApp = async () => {
  const apps: IApp[] = await getAllApps();

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-lg mx-auto mb-10 space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trending Apps</h2>
        <p className="text-base-content/70 text-sm md:text-base">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};

export default TrendingApp;
