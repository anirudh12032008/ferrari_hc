  const progress = document.getElementById("bar");
  const trackSection = document.getElementById("track");

  window.addEventListener("scroll", () => {
    const rect = trackSection.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    if (rect.top < viewHeight && rect.bottom > 0) {
      const percentSeen = Math.min(100, ((viewHeight - rect.top) / (rect.height + viewHeight)) * 100);
      progress.style.width = `${percentSeen}%`;
    }
  });
