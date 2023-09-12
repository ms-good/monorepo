import { useState } from 'react';
import { State } from './types';
import { useInterval } from '@/hooks';

export const useStopWatch = () => {
  const [state, setState] = useState<State>('init');
  const [initTime, setInitTime] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const [fullTimeList, setFullTimeList] = useState<number[]>([]);

  const currentTime = initTime && time ? time - initTime : 0;
  const recordData = fullTimeList.map((fullTime, index) => ({
    index: index + 1,
    sectionRecord: fullTime - (fullTimeList[index - 1] ?? 0),
    fullTime: fullTime,
  }));

  useInterval(
    () => {
      setTime(new Date().getTime());
    },
    state === 'progress' ? 1 : null,
  );

  const handleSectionRecord = () => {
    setFullTimeList((fullTimeList) => [...fullTimeList, currentTime]);
  };

  const handleStart = () => {
    setState('progress');
    setInitTime(new Date().getTime());
  };

  const handleContinue = () => {
    setState('progress');
  };

  const handlePause = () => {
    setState('pause');
  };

  const handleInit = () => {
    setState('init');
    setTime(0);
    setInitTime(null);
  };

  return {
    state,
    recordData,
    currentTime,
    handleSectionRecord,
    handleStart,
    handleContinue,
    handlePause,
    handleInit,
  };
};
