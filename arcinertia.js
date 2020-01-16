function ringcomcalc ()
{
     alert ("The answer is for the Area Moment of Inertia of an axis along X-axis from the Center of Mass");
     alert ("The blue dot represents the Origin");
     alert ("The green dot represents the Centroid");
     var x1 = document.getElementById ("oringradius").value;
     var z1 = document.getElementById ("iringradius").value;
     var qel = document.getElementById ("ringangle").value;
     var y1 = qel / 2;

     function toRadians1 (deg1)
     {
          return Math.PI * (deg1 / 180);
     }

     var plus1 = 270 + y1;
     var minus1 = 270 - y1;
     var radplus1 = toRadians1 (plus1);
     var radminus1 = toRadians1 (minus1);

     x1 = x1 / 1;
     z1 = z1 / 1;
     var t7 = (x1 * x1) - (z1 * z1);
     t7 = t7 / 1;
     var e1 = toRadians1 (qel);
     var area1 = (e1 * t7) / 2;
     area1 = area1 / 1;
     var inertia1 = (t7 * area1) / 2;
     inertia1 = inertia1 / 1;
     inertia1 = inertia1.toFixed (2);

     document.getElementById ("output670").value = "(" +inertia1+ ")";
     document.getElementById ("output671").value = "(" +(inertia1 / 2)+ ")";

     var e0 = toRadians1 (y1);
     var w1 = Math.sin (e0);
     var q1 = w1 / e0;
     var q2 = x1 * x1 * x1 * 2;
     var q3 = z1 * z1 * z1 * 2;
     var ras1 = x1 * x1 * 3;
     var ras2 = z1 * z1 * 3;
     q2 = q2 / 1;
     q3 = q3 / 1;
     ras1 = ras1 / 1;
     ras2 = ras2 / 1;
     var q5 = q2 - q3;
     var q6 = ras1 - ras2;
     var q7 = q5 / q6;
     var out1 = q1 * q7;

     var poi = area1 * out1 * out1;
     poi = poi / 1;
     inertia1 = inertia1 - poi;
     inertia1 = inertia1.toFixed (2);

     document.getElementById ("output3").value = "(" +inertia1+ ")";


     var srik = prompt ("Enter the Y-Coordinate of the point where your need axis" ,"Distance");
     srik = srik / 1;
     var zeltron = srik;
     zeltron = zeltron  / 1;
     area1 = area1 / 1;
     area1 = area1.toFixed (2);
     srik = srik * srik * area1;
     inertia1 = inertia1 / 1;
     inertia1 = inertia1 + srik;
     inertia1 = inertia1.toFixed (2);
     alert ("The two lines in red represent the lines one of which can be required by you and the black line is the the axis through the center of mass");
     document.getElementById ("output1").value = "(" +inertia1+ ")";
     document.getElementById ("output2").value = area1;

     var c2 = document.getElementById("can1");
     var co2 = c2.getContext ("2d");
     co2.clearRect (0, 0, can1.width, can1.height);

     co2.beginPath ();
     co2.moveTo (225, 0);
     co2.lineTo (225, 450);
     co2.strokeStyle = "black";
     co2.stroke ();

     co2.beginPath ();
     co2.moveTo (0, 225);
     co2.lineTo (450, 225);
     co2.strokeStyle = "black";
     co2.stroke ();

     co2.clearRect ((225 - x1), (225 - x1), 2 * x1, 2 * x1);

     co2.beginPath ();
     co2.arc (225, 225, x1, radminus1, radplus1);
     co2.lineTo (225, 225);
     co2.fillStyle = "gold";
     co2.fill ();

     co2.beginPath ();
     co2.arc (225, 225, z1, radminus1, radplus1);
     co2.lineTo (225, 225);
     co2.fillStyle = "white";
     co2.fill ();

     co2.beginPath ();
     co2.arc ((225), (225), 5, 0, 2 * Math.PI);
     co2.fillStyle = "blue";
     co2.fill ();

     co2.beginPath ();
     co2.arc (225, (225 - out1), 3, 0, 2 * Math.PI);
     co2.fillStyle = "green";
     co2.fill ();

     co2.beginPath ();
     co2.arc (225, (225 - out1), zeltron, 0, 2 * Math.PI);
     co2.strokeStyle = "red";
     co2.stroke ();
}
