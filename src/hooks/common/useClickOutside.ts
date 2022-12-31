import { useCallback, useEffect, useRef, useState } from 'react';


export const useClickOutside = <F extends Function>(initial: boolean = false, onClose?: F) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(initial);


  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsVisible(false)
      onClose?.()
    }
  }, [onClose])

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !(ref.current).contains((e.target) as Node)) {
        setIsVisible(false)
        onClose?.()
      }
    },
    [onClose],
  )

  const clickToVisible = useCallback(() => setIsVisible(true), []);
  

  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [clickListener, escapeListener])


  return { ref, clickToVisible, isVisible }
}