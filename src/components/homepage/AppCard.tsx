import React from 'react';
import Image from 'next/image';
import { IApp } from '../../types/apps.type';

const AppCard: React.FC<{ app: IApp }> = ({ app }) => {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all cursor-pointer group">
      {/* Play Store Style Rounded App Icon */}
      <div className="relative w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 dark:border-slate-700/50">
        <Image
          src={app.image}
          alt={app.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1">
        <h3 className="font-medium text-sm text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-primary transition-colors">
          {app.title}
        </h3>

        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{app.companyName}</p>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
          <div className="flex items-center gap-0.5 font-semibold">
            <span>{app.ratingAvg}</span>
            <span className="text-amber-500 text-xs">★</span>
          </div>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="text-slate-500">{app.downloads}</span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
