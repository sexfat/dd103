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
    x:600
},0.5);



