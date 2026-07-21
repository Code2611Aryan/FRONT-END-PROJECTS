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
        left: dets.offsetX-20,
        top: dets.offsetY-20
    })
});