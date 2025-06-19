gsap.registerPlugin(TextPlugin, ScrambleTextPlugin);


const tLoad = gsap.timeline({});
tLoad
    .to("#loadText", {
        duration: 1,
        text: "Welcome to Soda &",
        ease: "none"
    })
    .to("#pixel", {
        duration: 1.5,
        scrambleText: {
            text: "{ Cod3 }",
            chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            speed: 0.25
        }
    })
    .to("#loadConsoleRef", {
        duration: 0.1,
        text: ">",
        ease: "none"
    })
    .to("#loadConsole", {
        duration: 0.5,
        text: ". . .",
        ease: "none"
    })
    .to("#loadConsole", {
        duration: 0.5,
        text: "",
        ease: "none"
    })
    .to("#loadConsole", {
        duration: 0.7,
        text: "loading site",
        ease: "power2.out"
    })
    .to("#loadConsole", {
        duration: 0.5,
        text: "",
        ease: "none"
    })
    .to("#loadConsole", {
        duration: 0.7,
        text: "generating resources",
        ease: "power2.out"
    })
    .to("#loadConsole", {
        duration: 0.5,
        text: "",
        ease: "none"
    })
    .to("#loadConsole", {
        color: "#ff0000",
        duration: 1,
        text: "critical error, too much aesthetic",
        ease: "power2.out",
    })
    .to(".loadContainer", {
        y: "-100%",
        duration: 1,
        onComplete: () => {document.querySelector(".loadContainer").remove(); document.body.style.overflow = 'auto';}
    })
    .to(".mainContainer", {
        y: "-100vh",
        duration: 1,
    }, "<");
