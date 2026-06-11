const videos = document.querySelectorAll("video");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.5 }); // play when 50% visible

    videos.forEach(video => {
      observer.observe(video);
    });