export default function throttle(fn: Function, wait: number) {
  let isCalled = false;

  return function (...args: any[]) {
    if (!isCalled) {
      fn(...args);
      isCalled = true;
      setTimeout(function () {
        isCalled = false;
      }, wait);
    }
  };
}
