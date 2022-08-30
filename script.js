window.onload = function(){

    let canvass = document.getElementById('canva');
    let contextt = canvass.getContext('2d');
    
    contextt.lineWidth = 3;
    contextt.strokeStyle = "black";
    contextt.fillStyle = "#996633";
    
    
    contextt.moveTo(300,100);
    
    contextt.lineTo(100,300);
    contextt.lineTo(500, 300);
    contextt.lineTo(300, 100);
    contextt.fill();
    
    
    contextt.moveTo(100, 300);

    contextt.lineTo(100, 750);
    contextt.lineTo(500, 750);
    contextt.lineTo(500, 300);
    

    contextt.moveTo(150, 350);
    contextt.lineTo(150, 450);
    contextt.lineTo(250, 450);
    contextt.lineTo(250, 350);
    contextt.lineTo(150, 350);

    

    contextt.moveTo(350, 350);
    contextt.lineTo(450, 350);
    contextt.lineTo(450, 450);
    contextt.lineTo(350, 450);
    contextt.lineTo(350, 350);

    

    contextt.moveTo(150, 400);
    contextt.lineTo(250, 400);

    contextt.moveTo(200, 350);
    contextt.lineTo(200, 450);


    contextt.moveTo(350, 400);
    contextt.lineTo(450, 400);

    contextt.moveTo(400, 350);
    contextt.lineTo(400, 450)

    

    contextt.moveTo(250, 550);

    contextt.lineTo(350, 550);
    contextt.lineTo(350, 750);
    contextt.moveTo(250, 750);
    contextt.lineTo(250, 550);


    contextt.moveTo(400, 150);

    contextt.lineTo(400, 200);

    contextt.moveTo(450, 150);
    contextt.lineTo(450, 250);

    contextt.moveTo(380, 150);
    contextt.lineTo(470, 150);

    contextt.moveTo(380, 130);
    
    contextt.lineTo(380, 150);
    contextt.moveTo(379, 130);
    contextt.lineTo(469, 130);
    contextt.lineTo(469, 151);


    contextt.moveTo(500, 600);
    contextt.lineTo(550, 530);
    contextt.lineTo(600, 600);
    
    contextt.moveTo(600, 600);
    contextt.lineTo(600, 750);

   contextt.moveTo(600, 600);
   contextt.lineTo(650, 530);
   contextt.lineTo(700, 600);

   contextt.moveTo(700, 750);
   contextt.lineTo(700, 600);

   contextt.moveTo(700, 600);
   contextt.lineTo(750, 530);
   contextt.lineTo(800, 598);

   contextt.moveTo(500, 750);
   contextt.lineTo(800, 750);

   contextt.moveTo(50, 600);
   contextt.lineTo(100, 550);
   contextt.moveTo(50, 600);
   contextt.lineTo(50, 750);
   contextt.moveTo(50, 600);
   contextt.lineTo(0, 550);


   contextt.moveTo(100, 750);
   contextt.lineTo(0, 750)



   contextt.moveTo(330, 620);
   contextt.lineTo(320, 620);

   contextt.moveTo(330, 620);
   contextt.lineTo(330, 630);

 

   contextt.moveTo(100, 690);
   contextt.lineTo(250, 690);

   contextt.moveTo(350, 690);
   contextt.lineTo(500, 690);

    contextt.stroke();

}