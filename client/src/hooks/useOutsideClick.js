import { useEffect, useRef } from 'react';

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;

//https://www.robinwieruch.de/react-hook-detect-click-outside-component/