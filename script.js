gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed",
});

function loadingPage() {
  var timeline = gsap.timeline({});
  timeline.from("#loading-screen", {
    duration: 1,
    delay: 0,
    onStart: () => {
      let count = 1;
      var counterArea = document.querySelector(".counterArea");
      setInterval(() => {
        if (count <= 100) {
          count++;
          counterArea.style.width = `${count}vw`;
          // counterArea.style.height = `${count++}px`;
        }
      }, 12);
    },
  });
  timeline.to(".counterArea", {
    delay: 1,
    opacity: 0,
  });
  timeline.to("  .twoWayArrow", {
    delay: 0,
    opacity: 0,
  });

  timeline.to("#loading-screen", {
    ease: "power2.out",
    duration: 1,
    y: "-100%",
  });
  timeline.from(".smooth-scroll", {
    scale: 0,
    delay: -0.2,
    duration: 1,
  });
}

// calling The Functions
loadingPage();
