/**
 * @description
 *   milliseconds를 받아서 mm:ss.(ms)(ms) 형태로 변환합니다.
 *   99분 99초를 넘어가는 경우는 고려하지 않습니다.
 * @example
 *   ```
 *   msToTimeString(0)==='00:00.00';
 *   msToTimeString(1000)==='00:01.00';
 *   ```
 */
export const msToTimeString = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = (ms % 1000).toString().slice(0, 2).padStart(2, '0');

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;

  return formattedTime;
};
