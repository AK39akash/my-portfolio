import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const animateCamera = (camera) => {
    gsap.to(camera.position, {
        z: 2,
        scrollTrigger: {
            trigger: "#about",
            start: "top center",
            end: "bottom center",
            scrub: true,
        }
    })    

    gsap.to(camera.rotation, {
        y: Math.PI * 0.5,
        scrollTrigger: {
            trigger: "#projects",
            start: "top center",
            end: "bottom center",
            scrub: true,
        }
    })
}