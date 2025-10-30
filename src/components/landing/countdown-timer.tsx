"use client";

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center space-x-2 text-center">
        <div className="flex flex-col items-center">
            <span className="font-headline text-3xl font-bold text-primary">{formatTime(timeLeft.hours)}</span>
            <span className="text-xs text-muted-foreground">HORAS</span>
        </div>
        <span className="font-headline text-3xl font-bold text-primary">:</span>
        <div className="flex flex-col items-center">
            <span className="font-headline text-3xl font-bold text-primary">{formatTime(timeLeft.minutes)}</span>
            <span className="text-xs text-muted-foreground">MINUTOS</span>
        </div>
        <span className="font-headline text-3xl font-bold text-primary">:</span>
        <div className="flex flex-col items-center">
            <span className="font-headline text-3xl font-bold text-primary">{formatTime(timeLeft.seconds)}</span>
            <span className="text-xs text-muted-foreground">SEGUNDOS</span>
        </div>
    </div>
  );
}