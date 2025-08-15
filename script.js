  const progress = document.getElementById("bar");
  const trackSection = document.getElementById("track");

  window.addEventListener("scroll", () => {
    const trackSectionRect = trackSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (trackSectionRect.top < viewportHeight && trackSectionRect.bottom > 0) {
      const percentSeen = Math.min(100, ((viewportHeight - trackSectionRect.top) / (trackSectionRect.height + viewportHeight)) * 100);
      progress.style.width = `${percentSeen}%`;
    }
  });
