function ringcomcalc ()
{
     var x1 = document.getElementById ("oringradius").value;
     var z1 = document.getElementById ("iringradius").value;
     var qel1 = document.getElementById ("ringangle1").value;
     var qel2 = document.getElementById ("ringangle2").value;
     var w6 = document.getElementById ("ringxcor").value;
     var w7 = document.getElementById ("ringycor").value;
     qel1 = qel1 / 1;
     qel2 = qel2 / 1;
     var y1 = (qel2 - qel1) / 2;
     var eer = (qel2 + qel1) / 2;
     w6 = w6 / 1;
     w7 = w7 / 1;
     function toRadians1 (deg1)
     {
          return Math.PI * (deg1 / 180);
     }

     var plus1 = 360 - qel1;
     var minus1 = 360 - qel2;
     var radplus1 = toRadians1 (plus1);
     var radminus1 = toRadians1 (minus1);

     var e1 = toRadians1 (y1);
     var w1 = Math.sin (e1);
     var q1 = w1 / e1;
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

     var eer1 = toRadians1 (eer);
     var cose = Math.cos (eer1);
     var cose1 = cose * out1;
     var sose = Math.sin (eer1);
     var sose1 = sose * out1;

     var t7 = (x1 * x1) - (z1 * z1);
     t7 = t7 / 1;
     var e1 = toRadians1 (qel2 - qel1);
     var area1 = (e1 * t7) / 2;
     let srikarx = (w6 + cose1).toFixed (2);
     let srikary = (w7 + sose1).toFixed (2);
     document.getElementById("output1").value = "(" + srikarx + ", " + srikary + ")";
     document.getElementById("output2").value = area1.toFixed (2);

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
     co2.arc ((225 + cose1), (225 - sose1), 3, 0, 2 * Math.PI);
     co2.fillStyle = "green";
     co2.fill ();
}
