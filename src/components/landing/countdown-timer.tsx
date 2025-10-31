"use client";

import { useState, useEffect } from 'react';

const DURATION = (1 * 60 * 60 * 1000) + (30 * 60 * 1000) + (15 * 1000); // 1 hora, 30 minutos, 15 segundos

const calculateTimeLeft = (endTime: number | null) => {
  if (endTime === null) {
    return { hours: 0, minutes: 0, seconds: 0, total: 0 };
  }
  const difference = endTime - Date.now();
  let timeLeft = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  };

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference,
    };
  }

  return timeLeft;
};

export function CountdownTimer() {
  const [endTime, setEndTime] = useState<number | null>(null);
  const timeLeft = calculateTimeLeft(endTime);

  useEffect(() => {
    // This function runs only on the client side
    const getStoredEndTime = () => {
      const storedEndTime = localStorage.getItem('countdownEndTime');
      if (storedEndTime) {
        const parsedEndTime = parseInt(storedEndTime, 10);
        if (parsedEndTime > Date.now()) {
          return parsedEndTime;
        }
      }
      // If no valid end time, create a new one
      const newEndTime = Date.now() + DURATION;
      localStorage.setItem('countdownEndTime', newEndTime.toString());
      return newEndTime;
    };
    
    setEndTime(getStoredEndTime());
  }, []);

  useEffect(() => {
    if (endTime === null) return;

    const timer = setInterval(() => {
      if (Date.now() >= endTime) {
        const newEndTime = Date.now() + DURATION;
        localStorage.setItem('countdownEndTime', newEndTime.toString());
        setEndTime(newEndTime);
      } else {
        // We just need to trigger a re-render
        setEndTime(currentEndTime => currentEndTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);


  const formatTime = (time: number) => time.toString().padStart(2, '0');

  // Don't render the timer until we have the end time from the client
  if (endTime === null) {
    // Render a placeholder or null to avoid hydration mismatch
    return null;
  }

  return (
    <div className="grid grid-cols-[auto_auto_auto_auto_auto] items-center justify-center gap-x-2 text-center">
        <div className="flex flex-col items-center">
            <span className="font-headline text-3xl font-bold text-primary">{formatTime(timeLeft.hours)}</span>
            <span className="text-xs text-foreground/90">HORAS</span>
        </div>
        <span className="font-headline text-3xl font-bold text-primary -translate-y-2">:</span>
        <div className="flex flex-col items-center">
            <span className="font-headline text-3xl font-bold text-primary">{formatTime(timeLeft.minutes)}</span>
            <span className="text-xs text-foreground/90">MINUTOS</span>
        </div>
        <span className="font-headline text-3xl font-bold text-primary -translate-y-2">:</span>
        <div className="flex flex-col items-center">
            <span className="font-headline text-3xl font-bold text-primary">{formatTime(timeLeft.seconds)}</span>
            <span className="text-xs text-foreground/90">SEGUNDOS</span>
        </div>
    </div>
  );
}
