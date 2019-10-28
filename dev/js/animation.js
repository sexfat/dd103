console.log('start');



function alerts() {
    TweenMax.to('.a1' ,1,{
        x:100
    });
}




TweenMax.to('.a2' , 5 ,{
  x: 200,
  width: 50,
//   repeat: -1,
  rotation: 360,
//   opacity: 0,
  ease: Elastic.easeOut.config(1, 0.3),
  onComplete: alerts
})