let path = `M 20 100 Q 768 100 1516 100`

let finalPath = `M 20 100 Q 768 100 1516 100`

let string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path = `M 20 100 Q ${dets.x} ${dets.y} 1516 100`
    gsap.to("svg path",{
        attr:{ d: path },
        duration: 1,
        ease: "elastic.out"
    })
    console.log(path)
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})

