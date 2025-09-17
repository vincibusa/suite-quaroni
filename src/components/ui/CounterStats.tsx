"use client";

import { useEffect, useRef, useState } from "react";

interface CounterStatsProps {
  stats: Array<{
    number: number;
    label: string;
    suffix?: string;
    prefix?: string;
  }>;
}

export default function CounterStats({ stats }: CounterStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate counters
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, 20);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [stats, isVisible]);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="space-y-2">
          <div className="text-4xl md:text-5xl font-bold counter text-white">
            {stat.prefix || ""}{counts[index]}{stat.suffix || ""}
          </div>
          <div className="text-gray-300 text-sm md:text-base font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}