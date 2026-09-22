import React from 'react';
import Image from 'next/image';

export interface IRating {
  name: string;
  count: number;
}

export interface IApp {
  image: string;
  title: string;
  companyName: string;
  id: number;
  description: string;
  size: number;
  reviews: string;
  ratingAvg: number;
  downloads: string;
  ratings: IRating[];
}

const AppCard: React.FC<{ app: IApp }> = ({ app }) => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-200 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div className="w-full aspect-square bg-base-200 rounded-xl overflow-hidden mb-3 relative">
        <Image
          src={app.image}
          alt={app.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-base text-base-content line-clamp-1 group-hover:text-primary transition-colors">
          {app.title}
        </h3>

        <p className="text-xs text-base-content/60 line-clamp-1">{app.companyName}</p>

        <div className="flex items-center justify-between text-xs font-medium pt-1">
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 px-2.5 py-1 rounded-md">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>{app.downloads}</span>
          </div>

          <div className="flex items-center gap-1 bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400 px-2.5 py-1 rounded-md">
            <span>★</span>
            <span>{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
