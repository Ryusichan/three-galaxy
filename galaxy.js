import gsap from "gsap";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

// scene 1
let scene1 = gsap.timeline();

ScrollTrigger.create({
  animation: scene1,
  trigger: ".scroll",
  start: "top top",
  end: "45% 100%",
});

// hills
let speed = 100;

scene1
  .to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0)
  .to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0)
  .to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03)
  .to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03)
  .to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03)
  .to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0)
  .to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0)
  .to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0)
  .to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);

// bird
let bird = gsap.timeline();

ScrollTrigger.create({
  animation: bird,
  trigger: ".scroll",
  start: "30% top",
  end: "60% 100%",
  scrub: 3,
});

bird.fromTo(
  "#bird",
  { opacity: 0 },
  {
    x: 800,
    y: -250,
    opacity: 1,
    ease: "power2.out",
  }
);

// clouds
let clouds = gsap.timeline();

ScrollTrigger.create({
  animation: clouds,
  trigger: ".scroll",
  start: "top top",
  end: "70% 100%",
  scrub: 1,
});

clouds
  .to("#cloud1", { x: 500 }, 0)
  .to("#cloud2", { x: 100 }, 0)
  .to("#cloud3", { x: -1000 }, 0)
  .to("#cloud4", { x: -700, y: 25 }, 0);

// sun
let sun = gsap.timeline();

ScrollTrigger.create({
  animation: sun,
  trigger: ".scroll",
  start: "top top",
  end: "2200 100%",
  scrub: 1,
});

sun
  .to("#bg_grad", { attr: { cy: "330" } }, 0.0)
  .to("#sun", { attr: { offset: "0.15" } }, 0.0)
  .to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.0)
  .to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.0)
  .to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.0)
  .to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.0)
  .to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

// scene 2
let scene2 = gsap.timeline();

ScrollTrigger.create({
  animation: scene2,
  trigger: ".scroll",
  start: "15% top",
  end: "40% 100%",
  scrub: 4,
});

scene2
  .fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)
  .fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1)
  .fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1)
  .fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2)
  .fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3)
  .fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

// bats
let bats = gsap.timeline();

ScrollTrigger.create({
  animation: bats,
  trigger: ".scroll",
  start: "40% top",
  end: "70% 100%",
  scrub: 3,
});

bats.fromTo(
  "#bats",
  { opacity: 1, y: 400, scale: 0 },
  {
    y: 120,
    scale: 0.8,
    transformOrigin: "50% 50%",
    ease: "power3.out",
  }
);

// sun increase
let sunset = gsap.timeline();

ScrollTrigger.create({
  animation: sunset,
  trigger: ".scroll",
  start: "2200 top",
  end: "5000 100%",
  scrub: 1,
});

sunset
  .to("#sun", { attr: { offset: "0.6" } }, 0)
  .to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0)
  .to("#sun", { attr: { "stop-color": "#ffff00" } }, 0)
  .to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0)
  .to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0)
  .to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

// transition
gsap.set("#scene3", { y: 580, visibility: "visible" });

let transition = gsap.timeline();

ScrollTrigger.create({
  animation: transition,
  trigger: ".scroll",
  start: "70% top",
  end: "bottom 100%",
  scrub: 3,
});

transition
  .to("#h2-1", { y: -680, scale: 1.5, transformOrigin: "50% 50%" }, 0)
  .to("#bg_grad", { attr: { cy: "-80" } }, 0.0)
  .to("#bg2", { y: 0 }, 0);

// scene 3
let scene3 = gsap.timeline();

ScrollTrigger.create({
  animation: scene3,
  trigger: ".scroll",
  start: "80% 50%",
  end: "bottom 100%",
  scrub: 3,
});

scene3
  .fromTo("#h3-1", { y: 300 }, { y: -550 }, 0)
  .fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03)
  .fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06)
  .fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09)
  .fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12)
  .fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0)
  .to("#bg2-grad", { attr: { cy: 600 } }, 0)
  .to("#bg2-grad", { attr: { r: 500 } }, 0);
