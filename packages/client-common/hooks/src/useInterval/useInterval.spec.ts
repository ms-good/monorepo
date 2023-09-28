import { renderHook } from '@testing-library/react';

import { useInterval } from './useInterval.ts';

let callback = jest.fn();

beforeAll(() => {
  jest.useFakeTimers();
});

beforeEach(() => {
  callback = jest.fn();
  jest.spyOn(window, 'setInterval');
  jest.spyOn(window, 'clearInterval');
});

afterEach(() => {
  callback.mockRestore();
  jest.clearAllTimers();
  jest.clearAllMocks();
});

afterAll(() => {
  jest.useRealTimers();
});

const context = describe;
describe('useInterval', () => {
  it('when exist delay, call setInterval', () => {
    const delay = 5000;
    renderHook(() => useInterval(callback, delay));
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), delay);
  });

  it('when delay is null, not call setInterval', () => {
    expect(setInterval).not.toHaveBeenCalled();
    renderHook(() => useInterval(callback, null));
    expect(setInterval).not.toHaveBeenCalled();
  });

  it('callback is executed for each delay', () => {
    const delay = 3000;
    renderHook(() => useInterval(callback, delay));
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(delay - 1);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('when unmount, execute clearInterval', () => {
    const { unmount } = renderHook(() => useInterval(callback, 200));
    const initialTimerCount = jest.getTimerCount();
    expect(clearInterval).not.toHaveBeenCalled();

    unmount();

    expect(clearInterval).toHaveBeenCalledTimes(1);
    // 컴포넌트가 언마운트되면서 하나의 타이머가 해제
    expect(jest.getTimerCount()).toBe(initialTimerCount - 1);
  });

  context('when changed delay', () => {
    it('when changed delay(200 => 500), execute setInterval ', () => {
      let delay = 200;
      const { rerender } = renderHook(() => useInterval(callback, delay));
      expect(callback).not.toHaveBeenCalled();

      jest.advanceTimersByTime(delay);
      expect(callback).toHaveBeenCalledTimes(1);

      delay = 500;
      rerender();

      jest.advanceTimersByTime(200);
      expect(callback).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(300);
      expect(callback).toHaveBeenCalledTimes(2);
    });

    it('when changed delay(200 => null), execute setInterval', () => {
      let delay: number | null = 200;
      const { rerender } = renderHook(() => useInterval(callback, delay));
      expect(callback).not.toHaveBeenCalled();
      const initialTimerCount = jest.getTimerCount();

      jest.advanceTimersByTime(delay);
      expect(callback).toHaveBeenCalledTimes(1);

      delay = null;
      rerender();

      jest.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(1);
      expect(jest.getTimerCount()).toBe(initialTimerCount - 1);
    });

    it('when changed delay(null => 500), execute setInterval ', () => {
      let delay: number | null = null;
      const { rerender } = renderHook(() => useInterval(callback, delay));
      expect(callback).not.toHaveBeenCalled();
      const initialTimerCount = jest.getTimerCount();

      expect(callback).not.toHaveBeenCalled();

      delay = 500;
      rerender();

      jest.advanceTimersByTime(delay);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(jest.getTimerCount()).toBe(initialTimerCount + 1);
    });

    it('when changed delay, execute clearInterval', () => {
      let delay = 200;
      const { rerender } = renderHook(() => useInterval(callback, delay));
      expect(clearInterval).not.toHaveBeenCalled();
      const initialTimerCount = jest.getTimerCount();

      delay = 500;
      rerender();

      expect(clearInterval).toHaveBeenCalledTimes(1);
      expect(jest.getTimerCount()).toBe(initialTimerCount);
    });
  });
});
