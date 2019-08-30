import { useEffect, useRef } from 'react'
import { UseInterval } from '../types';

export const useInterval: UseInterval = (callback, delay) => {
  const savedCallback = useRef() as any;

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
