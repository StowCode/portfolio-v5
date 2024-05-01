import { useEffect } from 'react';

const useFadeDown = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-down--hold');
    
    const fadeInObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-down--run');
          fadeInObserver.unobserve(entry.target);
        }
      });
    });
    
    elements.forEach(element => {
      fadeInObserver.observe(element);
    });
  }, []);
};

export default useFadeDown;
