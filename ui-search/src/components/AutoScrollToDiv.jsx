import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function scrollToView(ele) {
  if (!ele) return;
  if (window.innerHeight < ele?.getBoundingClientRect().top) {
    ele?.scrollIntoView({ behavior: 'smooth' });
  }
}

const AutoScrollToDiv = () => {
  const location = useLocation();
  const refInputDiv = useRef(null);
  // NOTE: to automatically scroll down to the user input
  useEffect(() => {
    setTimeout(() => {
      scrollToView(refInputDiv.current);
    }, 100);
  }, [location]);

  return <div ref={refInputDiv} />;
};

export default AutoScrollToDiv;
