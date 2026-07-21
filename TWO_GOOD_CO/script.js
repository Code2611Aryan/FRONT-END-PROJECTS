

 const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
     multiplier: 1, // Scroll speed
  lerp: 0.08,
  });

  setTimeout(() => {
  locoScroll.update();
}, 500); 

// ADDING THE PLAY BUTTON IN TBE VIDEO OF THE HERO SECTION
function videoanimation(){
    let videobox = document.querySelector(".video-box")
let plybtn = document.querySelector(".play")
videobox.addEventListener("mouseenter",function(){
    gsap.to(plybtn,{
        scale:1,
        opacity:1
    });

});

videobox.addEventListener("mouseleave",function(){
     gsap.to(plybtn,{
        scale:0,
        opacity:0
    });

});

videobox.addEventListener("mousemove", function(dets){
    gsap.to(plybtn,{
        left: dets.offsetX,
        top: dets.offsetY
    })
});

}

videoanimation();

// NOW EDITING THE ANIMATION OF THE MAIN TEXT OF THE HERO SECTION 

function textanimation(){
    let text = document.querySelectorAll(".text");
    gsap.from(text,{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
});
 gsap.from(".page1 .video-box",{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.5,
});

}

textanimation();




