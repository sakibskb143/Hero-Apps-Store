import React, { useEffect, useState } from "react";

const Counter = ({ end, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {decimals ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </>
  );
};

const Stat = () => {
  return (
    <div className="intel bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-20">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-center">
          Trusted by Millions, Built for You
        </h1>

        <div className="stats stats-vertical lg:stats-horizontal shadow bg-transparent md:gap-20">
          {/* Stat 1 */}
          <div className="stat place-items-center">
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value text-5xl">
              <Counter end={26.6} decimals={1} suffix="M" />
            </div>
            <div className="stat-desc text-gray-200">
              21% more than last month
            </div>
          </div>

          {/* Stat 2 */}
          <div className="stat place-items-center">
            <div className="stat-title text-white">Total Reviews</div>
            <div className="stat-value text-5xl">
              <Counter end={906} suffix="K" />
            </div>
            <div className="stat-desc text-gray-200">
              46% more than last month
            </div>
          </div>

          {/* Stat 3 */}
          <div className="stat place-items-center">
            <div className="stat-title text-white">Active Apps</div>
            <div className="stat-value text-5xl">
              <Counter end={132} suffix="+" />
            </div>
            <div className="stat-desc text-gray-200">31 more will launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
