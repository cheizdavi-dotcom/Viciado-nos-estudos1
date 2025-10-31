"use client";

import { useState, useEffect } from 'react';

// Duração total do contador: 1 hora, 30 minutos, 15 segundos em milissegundos.
const DURATION = (1 * 60 * 60 * 1000) + (30 * 60 * 1000) + (15 * 1000);

// Função para calcular o tempo restante
const calculateTimeLeft = (targetTime: number | null) => {
  if (targetTime === null) {
    return { hours: 0, minutes: 0, seconds: 0, total: 0 };
  }
  const difference = targetTime - Date.now();
  return {
    total: difference,
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este efeito garante que o código a seguir só rode no cliente
    setIsClient(true);

    let storedEndTime = localStorage.getItem('countdownEndTime');
    let endTime: number;
    const now = Date.now();

    if (storedEndTime && parseInt(storedEndTime, 10) > now) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      endTime = now + DURATION;
      localStorage.setItem('countdownEndTime', endTime.toString());
    }
    
    setTimeLeft(calculateTimeLeft(endTime));

    const timer = setInterval(() => {
      let currentEndTime = parseInt(localStorage.getItem('countdownEndTime') || '0', 10);
      const newTimeLeft = calculateTimeLeft(currentEndTime);

      if (newTimeLeft.total <= 0) {
        const newEndTime = Date.now() + DURATION;
        localStorage.setItem('countdownEndTime', newEndTime.toString());
        setTimeLeft(calculateTimeLeft(newEndTime));
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  // Renderiza um placeholder no servidor e antes da hidratação no cliente
  if (!isClient) {
    return (
        <div className="grid grid-cols-[auto_auto_auto_auto_auto] items-center justify-center gap-x-2 text-center">
            <div className="flex flex-col items-center">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-primary">--</span>
                <span className="text-xs text-foreground/90">HORAS</span>
            </div>
            <span className="font-headline text-2xl sm:text-3xl font-bold text-primary -translate-y-2">:</span>
            <div className="flex flex-col items-center">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-primary">--</span>
                <span className="text-xs text-foreground/90">MINUTOS</span>
            </div>
            <span className="font-headline text-2xl sm:text-3xl font-bold text-primary -translate-y-2">:</span>
            <div className="flex flex-col items-center">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-primary">--</span>
                <span className="text-xs text-foreground/90">SEGUNDOS</span>
            </div>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-[auto_auto_auto_auto_auto] items-center justify-center gap-x-1 sm:gap-x-2 text-center">
        <div className="flex flex-col items-center">
            <span className="font-headline text-2xl sm:text-3xl font-bold text-primary">{formatTime(timeLeft.hours)}</span>
            <span className="text-xs text-foreground/90">HORAS</span>
        </div>
        <span className="font-headline text-2xl sm:text-3xl font-bold text-primary -translate-y-2">:</span>
        <div className="flex flex-col items-center">
            <span className="font-headline text-2xl sm:text-3xl font-bold text-primary">{formatTime(timeLeft.minutes)}</span>
            <span className="text-xs text-foreground/90">MINUTOS</span>
        </div>
        <span className="font-headline text-2xl sm:text-3xl font-bold text-primary -translate-y-2">:</span>
        <div className="flex flex-col items-center">
            <span className="font-headline text-2xl sm:text-3xl font-bold text-primary">{formatTime(timeLeft.seconds)}</span>
            <span className="text-xs text-foreground/90">SEGUNDOS</span>
        </div>
    </div>
  );
}
