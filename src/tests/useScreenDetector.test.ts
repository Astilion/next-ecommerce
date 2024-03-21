import useScreenDetector from "../hooks/useScreenDetector";
import { renderHook } from '@testing-library/react';

test('useScreenDetector hook', () => {
  const { result, rerender } = renderHook(() => useScreenDetector(1024));

  // Initial render
  expect(result.current).toBe(true);

  // Simulate resize to a desktop width
  window.innerWidth = 1280;
  window.dispatchEvent(new Event('resize'));
  rerender();
  expect(result.current).toBe(false); // should be false

  // Simulate resize to a mobile width
  window.innerWidth = 500;
  window.dispatchEvent(new Event('resize'));
  rerender();
  expect(result.current).toBe(true); // should now be true

  // Test cleanup
  window.innerWidth = 1280; // reset the window width
});
