console.log('start');
var controller = new ScrollMagic.Controller();




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


TweenMax.fromTo('.a3', 4, {
    x: 200
}, {
    x: 600
})

TweenMax.staggerFromTo('.a4', 1, {
    x: 300

}, {
    ease: Elastic.easeOut.config(1, 0.3),
    x: 600
}, 0.5);

TweenMax.to('.a5', 1, {
    x: 200,
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


//第三個場景

var title03 = TweenMax.to('.c1', 1, {
    y: 100
})


var scene = new ScrollMagic.Scene({
    triggerElement: '#tripper_01',
     triggerHook: 0,
     duration: 400,
     offset: 100
}).setTween(title03).addIndicators().addTo(controller);

// 第四個場景

var d1= TweenMax.to('.d1' ,1 ,{
    x: 200
})


var scene2  = new ScrollMagic.Scene({
    triggerElement: '#tripper_02',
     triggerHook: 0
}).setClassToggle('.section_04' , 'on').setTween(d1).addIndicators().addTo(controller);

