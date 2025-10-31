"use client";

import { useState, useEffect } from 'react';

// Duração total do contador: 1 hora, 30 minutos, 15 segundos em milissegundos.
const DURATION = (1 * 60 * 60 * 1000) + (30 * 60 * 1000) + (15 * 1000);

// Função para calcular o tempo restante
const calculateTimeLeft = (targetTime: number | null) => {
  if (targetTime === null) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
  const difference = targetTime - new Date().getTime();
  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export function CountdownTimer() {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Efeito para definir que o componente está no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efeito para inicializar o contador a partir do localStorage
  useEffect(() => {
    if (!isClient) return; // Só executa no cliente

    const storedEndTime = localStorage.getItem('countdownEndTime');
    const now = new Date().getTime();

    if (storedEndTime && parseInt(storedEndTime, 10) > now) {
      setEndTime(parseInt(storedEndTime, 10));
    } else {
      const newEndTime = now + DURATION;
      localStorage.setItem('countdownEndTime', newEndTime.toString());
      setEndTime(newEndTime);
    }
  }, [isClient]);

  const timeLeft = calculateTimeLeft(endTime);

  // Efeito para atualizar o contador a cada segundo
  useEffect(() => {
    if (endTime === null) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      if (now >= endTime) {
        // Se o tempo acabou, reinicia o contador
        const newEndTime = now + DURATION;
        localStorage.setItem('countdownEndTime', newEndTime.toString());
        setEndTime(newEndTime);
      } else {
        // Força a re-renderização para atualizar o tempo
        setEndTime(current => current); 
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);
  
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  // Não renderiza nada no servidor ou antes da hidratação no cliente
  if (!isClient || endTime === null) {
    // Renderiza um placeholder estático para evitar o erro de hidratação
    return (
        <div className="grid grid-cols-[auto_auto_auto_auto_auto] items-center justify-center gap-x-2 text-center">
            <div className="flex flex-col items-center">
                <span className="font-headline text-3xl font-bold text-primary">--</span>
                <span className="text-xs text-foreground/90">HORAS</span>
            </div>
            <span className="font-headline text-3xl font-bold text-primary -translate-y-2">:</span>
            <div className="flex flex-col items-center">
                <span className="font-headline text-3xl font-bold text-primary">--</span>
                <span className="text-xs text-foreground/90">MINUTOS</span>
            </div>
            <span className="font-headline text-3xl font-bold text-primary -translate-y-2">:</span>
            <div className="flex flex-col items-center">
                <span className="font-headline text-3xl font-bold text-primary">--</span>
                <span className="text-xs text-foreground/90">SEGUNDOS</span>
            </div>
        </div>
    );
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
