  // Ferrari progress bar script fills red bar as you scroll through track section
  const progress = document.getElementById("bar");
  const trackSection = document.getElementById("track");

  // Throttle function 
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  // Updates progress bar based on how much of track section is visible
  function updateProgressBar() {
    const trackSectionRect = trackSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (trackSectionRect.top < viewportHeight && trackSectionRect.bottom > 0) {
      // Calculate percentage how much track section you've scrolled through
      //  visible part ÷ total scrollable area × 100
      const percentSeen = Math.min(100, ((viewportHeight - trackSectionRect.top) / (trackSectionRect.height + viewportHeight)) * 100);
      progress.style.width = `${percentSeen}%`;
    }
  }

  window.addEventListener("scroll", throttle(updateProgressBar, 16));
