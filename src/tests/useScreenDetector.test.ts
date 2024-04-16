import useScreenDetector from "../hooks/useScreenDetector";
import { renderHook, act } from '@testing-library/react';

describe('useScreenDetector', () => {
  it('should return true for mobile screen sizes', () => {
    global.innerWidth = 500;

    const { result } = renderHook(() => useScreenDetector(true));


    expect(result.current).toBe(true);
  });

  it('should return false for non-mobile screen sizes', () => {
    global.innerWidth = 1200;

    const { result } = renderHook(() => useScreenDetector(true));

    expect(result.current).toBe(false);
  });

  it('should update isMobile when the window size changes', () => {
    global.innerWidth = 1200;

    const { result } = renderHook(() => useScreenDetector(true));

    expect(result.current).toBe(false);

    act(() => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));
    });


    expect(result.current).toBe(true);
  });
});