console.log('start');



function alerts() {
    TweenMax.to('.a1', 1, {
        x: 100
    });
}




TweenMax.to('.a2', 5, {
    x: 200,
    width: 150,
    //   repeat: -1,
    rotation: 360,
    //   opacity: 0,
    ease: Elastic.easeOut.config(1, 0.3)
    // onComplete: alerts
});


TweenMax.fromTo('.a3', 4,{
    x: 200
}, {
    x: 600
})

TweenMax.staggerFromTo('.a4' , 1 ,{
    x: 300
   
},{
    ease: Elastic.easeOut.config(1, 0.3),
    x:600
},0.5);

TweenMax.to('.a5' , 1 , {
  x:200,
  repeat: -1,
  repeatDelay: .6, 
  yoyo: true
});
// TweenMax.from('.a5' , 1 , {
//     x:100
//   },{
//     x: 200 
//   })

// var Tl = new TimelineMax({
//   repeat: 1,
//   repeatDelay: .2,
//   yoyo: true


// });

// Tl.to('.b1',1, {
//    x: 100
// }).to('.b1' ,1, {
//     y: 100
// }).to('.b1', 1, {
//     x: 300,
//     scale: 2
// });

// TweenMax.to('.b2',1,{
//    rotation: 180,
//    transformOrigin : 'bottom top'
// })
TweenMax.fromTo('.b2',1,{
   x: 100,
   boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)" //陰影
 },{
   X: 200
    
 })









