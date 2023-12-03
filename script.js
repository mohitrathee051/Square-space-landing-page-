const tl=gsap.timeline({defaults:{duration:1}});

tl.from(".nav img,.nav h3,.nav h4,.nav button", {
    duration: 2, 
    y: -100,
    delay:1, 
    opacity: 0, 
    stagger: 0.2
});

tl.from(".content h1", {duration: 1, 
    y: 200, 
    opacity: 0, 
    stagger: 0.2
});

tl.from(".content img", {
    duration: 1.5, 
    scale:0, 
    opacity: 0, 
    stagger: 0.2
});

tl.from(".content h5", {
    duration: 1, 
    scale:0, 
    opacity: 0, 
    stagger: 0.2
});

tl.to(".content h5", {
    y:40,
    duration: 1,
    yoyo: true,
    repeat: -1    
});