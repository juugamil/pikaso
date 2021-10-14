gsap.set('cards*', { autoAlpha: 0, y: '1rem' });

// Is triggered in the Intersection Bbserver
const animateVisible = (block, ratio, isIntersecting) => {
  // When the element is in view:
  if (ratio > 0 && isIntersecting) {
    // Animate all the children of this element
    gsap.to(block.querySelectorAll('*'), {
      // duration is one second
      duration: 1,
      // animate back to visible
      autoAlpha: 1,
      // animate back to top
      y: '0',
      // stagger will make all animations fire 0.3 seconds after each other.
      stagger: 0.3,
      // Ease In Out: accelerates --> decelerates
      ease: 'power3.inOut',
    });
  } else {
    // When the element is not in view anymore we set it to invisible and downward for 1rem (16px usually)
    gsap.set(block.querySelectorAll('*'), {
      autoAlpha: 0,
      y: '1rem',
    });
  }
};