// LOCOMOTIVE SCROLL

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier: 1,
  lerp: 0.08,
});


setTimeout(() => {
  locoScroll.update();
}, 500);


// VIDEO PLAY BUTTON ANIMATION

function videoAnimation() {

  let videoBox = document.querySelector(".video-box");
  let playBtn = document.querySelector(".play");


  videoBox.addEventListener("mouseenter", function () {

    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
      duration: 0.3
    });

  });


  videoBox.addEventListener("mouseleave", function () {

    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
      duration: 0.3
    });

  });


  videoBox.addEventListener("mousemove", function (dets) {

    gsap.to(playBtn, {
      left: dets.offsetX,
      top: dets.offsetY,
      duration:0.3
    });

  });

}

videoAnimation();



// HERO TEXT + VIDEO ANIMATION

function textAnimation(){

  let text = document.querySelectorAll(".page1 .text");


  gsap.from(text, {

    y:100,
    opacity:0,
    duration:1,
    stagger:0.3,
    ease:"power3.out"

  });



  gsap.from(".page1 .video-box",{

    scale:0.9,
    opacity:0,
    duration:0.8,
    delay:0.8,
    ease:"power3.out"

  });


}


textAnimation();



// UPDATE LOCOMOTIVE AFTER EVERYTHING LOADS

window.addEventListener("load",()=>{

  locoScroll.update();

});

let child = document.querySelector(".child");
let cursur = document.querySelector(".cursur");
child.addEventListener("mouseenter",function(dets){
     gsap.to(cursur,{
        scale:1,
        opacity:1,
        duration:0.3
    });
});

child.addEventListener("mouseleave", function(){

    gsap.to(cursur,{
        scale:0,
        opacity:0,
        duration:0.3
    });

});

child.addEventListener("mousemove", function(dets){

    gsap.to(cursur,{
        left:dets.clientX,
        top:dets.clientY,
        duration:0.2
    });

});