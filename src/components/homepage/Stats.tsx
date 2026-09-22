import React from 'react';

const Stats = () => {
  return (
    <section className="bg-linear-to-r from-purple-600 to-indigo-600 py-16 px-4 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Trusted By Millions, Built For You</h2>

      <div className="stats stats-vertical lg:stats-horizontal bg-transparent text-white w-full max-w-5xl mx-auto">
        <div className="stat place-items-center">
          <div className="stat-title text-purple-200">Total Downloads</div>
          <div className="stat-value text-5xl font-extrabold my-1">29.6M</div>
          <div className="stat-desc text-purple-200">21% More Than Last Month</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-purple-200">Total Reviews</div>
          <div className="stat-value text-5xl font-extrabold my-1">906K</div>
          <div className="stat-desc text-purple-200">46% More Than Last Month</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-purple-200">Active Apps</div>
          <div className="stat-value text-5xl font-extrabold my-1">132+</div>
          <div className="stat-desc text-purple-200">31 More Will Launch</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
