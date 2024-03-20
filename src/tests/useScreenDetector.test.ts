import useScreenDetector from "../hooks/useScreenDetector";
import { renderHook } from '@testing-library/react';

test('useScreenDetector hook', async ({ expect }) => {
    const { result, rerender } = renderHook(() => useScreenDetector(768));
  
    // Initial render
    expect(result.current).toBe(false);
  
    // Simulate resize to a desktop width
    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));
    rerender();
    expect(result.current).toBe(false); // should still be false
  
    // Simulate resize to a mobile width
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    rerender();
    expect(result.current).toBe(true); // should now be true
  
    // Test cleanup
    window.innerWidth = 1024; // reset the window width
  });

