import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MorphSVGPlugin } from "gsap/all";
// gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(ScrollTrigger)


export const Page_1 = () => {
 const  circleRef  = useRef(null);
 const parentRef = useRef(null);
 const textRef = useRef(null);
 const blob1 = useRef(null);
 const blob2 = useRef(null);
 const textRef_2 = useRef(null);
  useEffect(() => {
  gsap.fromTo(textRef.current,{y:200,opacity:0},{y:0,opacity:1,duration:1})
  gsap.fromTo(circleRef.current,{y:200,opacity:0},{y:0,opacity:1,duration:1})
  
  if (window.MorphSVGPlugin) {
    gsap.registerPlugin(window.MorphSVGPlugin);
  }

   const tl = gsap.timeline({
    scrollTrigger:{
        trigger: parentRef.current,
        start: 'top 10%',
        end: 'bottom 80%',
        toggleActions: 'play pause reverse play',
        // pin: true,
        scrub: 2,
        markers: true,
    }
   })
   tl.to(circleRef.current,{y:400,duration:3})
   .to(circleRef.current,{x:-1000,duration:2})
//    .to(textRef_2.current,{x:500,duration:1,onComplete:() => gsap.set({textRef_2.current,{display: "block"}})})//-
   .fromTo(textRef_2.current, {x: 0, opacity:0},{ x: 500, opacity:1, duration: 1 })


  },[])
  useEffect(() => {
    gsap.to(blob1.current, {
        duration: 2,
        morphSVG: blob2.current,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });
  },[])
    return (
    <>
    <div className='navbar'>hello</div>
    <div className='parent' ref={parentRef}>
    <div className="parent_1">
    <div className='text' ref={textRef}>
        <div className='title'>Hi all, I'm Saad</div>
        <div className='description'>A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</div>
        <div className='logo'></div>
    </div>
    <div class="dotted-line"></div>
    <div className='circle' ref={circleRef} >    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 581 612" fill="none">
  <path id="blob1"  ref={blob1} fill-rule="evenodd" clip-rule="evenodd" d="M287.837 2.2674C388.308 12.1501 446.49 110.194 502.246 194.357C549.804 266.147 600.718 349.121 571.212 430.021C543.817 505.132 447.687 513.148 374.356 545.002C307.125 574.207 240.084 633.419 173.489 602.789C106.35 571.908 109.098 481.452 84.6027 411.73C52.6416 320.756 -29.7759 232.613 13.0936 146.242C61.4564 48.8042 179.579 -8.38128 287.837 2.2674Z" />

  <path id="blob2" ref={blob2} fill-rule="evenodd" clip-rule="evenodd" d="M267.901 0.479324C325.981 1.75432 386.108 8.51982 432.331 43.7097C478.016 78.4887 505.059 133.045 516.057 189.399C526.208 241.413 496.79 289.76 490.621 342.396C482.218 414.086 524.996 502.415 473.446 552.939C423.251 602.135 335.036 581.481 267.901 560.682C211.954 543.348 183.997 485.093 137.888 448.977C94.2816 414.821 25.6127 406.907 5.62748 355.247C-14.4598 303.324 24.5013 249.453 40.0136 195.985C56.1861 140.241 54.0872 74.1662 98.1395 36.3735C143.138 -2.23103 208.626 -0.821885 267.901 0.479324Z" />
</svg></div>
</div>
<div className="parent_2" >
<div className='text_2' ref={textRef_2}>
        <div className='title'>Hi all, I'm Saad</div>
        <div className='description'>A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</div>
        <div className='logo'></div>
    </div>
</div>
    </div>
    
    <div className='parent2'>

    </div>
  
    </>
    )
}
