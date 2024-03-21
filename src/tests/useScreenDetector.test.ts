import useScreenDetector from "../hooks/useScreenDetector";
import { renderHook, act } from '@testing-library/react';

describe('useScreenDetector', () => {
  it('should return true for mobile screen sizes', () => {
    window.innerWidth = 500
    const { result } = renderHook(() => useScreenDetector(768))
    expect(result.current).toBe(true)
  })

  it('should return false for non-mobile screen sizes', () => {
    window.innerWidth = 800
    const { result } = renderHook(() => useScreenDetector(768))
    expect(result.current).toBe(false)
  })

  it('should update value when window size changes', async () => {
    window.innerWidth = 800
    const { result } = renderHook(() => useScreenDetector(768))
    expect(result.current).toBe(false)

    act(() => {
      window.innerWidth = 500
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe(true)
  })
})