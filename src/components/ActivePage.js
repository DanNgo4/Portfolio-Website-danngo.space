import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ActivePage = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const navLinks = document.querySelectorAll('.nav.page');

    navLinks.forEach(navLink => {
      if (currentPath === navLink.pathname) {
        styleNavLink(navLink, '#D3FFB3', '#212124');
      } else if (currentPath === '/') {
        styleNavLink(navLinks[0], '#D3FFB3', '#212124');
      }

      navLink.addEventListener('click', () => {
        navLinks.forEach(link => {
          styleNavLink(link, '', '');
        });
      });
    });

    return () => {
      navLinks.forEach(navLink => {
        navLink.removeEventListener('click', () => {
          navLinks.forEach(link => {
            styleNavLink(link, '', '');
          });
        });
      });
    };
  }, [location]);

  const styleNavLink = (navLink, backgroundColor, color) => {
    navLink.style.backgroundColor = backgroundColor;
    navLink.style.color = color;
  };

  return null;
};

export default ActivePage;
