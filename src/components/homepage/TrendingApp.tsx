import React from 'react';
import AppCard from './AppCard';
import { IApp } from '../../types/apps.type';

const getAllApps = async (): Promise<IApp[]> => {
  const res = await fetch('http://localhost:3000/data.json', {
    cache: 'no-store',
  });
  return res.json();
};

const TrendingApp = async () => {
  const allApps: IApp[] = await getAllApps();

  const top5Apps = allApps.sort((a, b) => b.ratingAvg - a.ratingAvg).slice(0, 5);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-120 mx-auto mb-10 space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Trending Apps</h2>
        <p className="text-gray-500 text-sm md:text-base">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {top5Apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};

export default TrendingApp;
