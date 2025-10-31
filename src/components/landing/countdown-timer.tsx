"use client";

import { useState, useEffect } from 'react';

// Define o tempo final com base no armazenamento local para persistir entre recarregamentos
const getEndTime = () => {
  if (typeof window !== 'undefined') {
    const storedEndTime = localStorage.getItem('countdownEndTime');
    if (storedEndTime) {
      const endTime = parseInt(storedEndTime, 10);
      // Se o tempo já expirou, reseta para um novo ciclo
      if (endTime > Date.now()) {
        return endTime;
      }
    }
    // Define a duração para 1 hora, 30 minutos e 15 segundos a partir de agora
    const newEndTime = Date.now() + (1 * 60 * 60 * 1000) + (30 * 60 * 1000) + (15 * 1000);
    localStorage.setItem('countdownEndTime', newEndTime.toString());
    return newEndTime;
  }
  // Fallback para o servidor
  return Date.now() + (1 * 60 * 60 * 1000) + (30 * 60 * 1000) + (15 * 1000);
};


const calculateTimeLeft = (endTime: number) => {
  const difference = endTime - Date.now();
  let timeLeft = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export function CountdownTimer() {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Garante que o código do lado do cliente seja executado apenas no navegador
    setEndTime(getEndTime());
  }, []);

  useEffect(() => {
    if (endTime === null) return;

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endTime);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        // Quando o tempo acabar, define um novo tempo final para reiniciar o ciclo
        const newEndTime = getEndTime();
        if (typeof window !== 'undefined') {
          localStorage.setItem('countdownEndTime', newEndTime.toString());
        }
        setEndTime(newEndTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

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
