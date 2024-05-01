import { useEffect } from 'react';

const useFadeInAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in--hold');
    
    const fadeInObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--run');
          fadeInObserver.unobserve(entry.target);
        }
      });
    });
    
    elements.forEach(element => {
      fadeInObserver.observe(element);
    });
  }, []);
};

export default useFadeInAnimation;
