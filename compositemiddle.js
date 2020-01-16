let finalarea = 0;
let sigmacenterx = 0;
let sigmacentery = 0;
let exceptionalcondition = 0;
let x = [];
let y = [];
let arrayarea = [];
let inertiax1 = [];
let inertiay1 = [];

function refreshmiddle ()
{
     c1 = document.getElementById("can3");
     co1 = c1.getContext ("2d");

     co1.clearRect (0, 0, c1.width, c1.height);

     x = [];
     y = [];

     finalarea = 0;
     sigmacenterx = 0;
     sigmacentery = 0;
     exceptionalcondition = 0;

     arrayarea = [];
     inertiax1 = [];
     inertiay1 = [];

     document.getElementById ("zeltron").value = " ";
     document.getElementById ("zeltron1").value = " ";
     document.getElementById ("zeltron2").value = " ";
     document.getElementById ("xeltron").value = " ";
     document.getElementById ("zeltron3").value = " ";
}

function compositemiddlecalc ()
{
     function distance (disx1, disy1, disx2, disy2)
     {
          var disty = Math.sqrt (Math.pow ((disx1 - disx2), 2) + Math.pow ((disy1 - disy2), 2));
          return disty;
     }

     let c1, co1, height, breadth, centerx, centery, area, areax, areay, srik, rm = 2, inertiay, inertiax, distycmx, distycmy, i, j, mix = 0, miy = 0;

     c1 = document.getElementById("can3");
     co1 = c1.getContext ("2d");

     co1.beginPath ();
     co1.moveTo (600, 0);
     co1.lineTo (600, 1200);
     co1.stroke ();

     co1.beginPath ();
     co1.moveTo (0, 600);
     co1.lineTo (1200, 600);
     co1.stroke ();

     if (exceptionalcondition == 0)
     {
          alert ("No non numeric values are recognised by the algorithm may give errors. So please be careful while entering the values");
          alert ("This window is only for calculating moment of inertia of rectangle shapes using center of the rectangle and length and breadth of it.");
     }

     breadth = prompt ("Please enter the breadth of the rectangle", "Breadth");
     breadth = breadth / 1;
     height = prompt ("Please enter the height of the rectangle", "Height");
     height = height / 1;
     centerx = prompt ("Please enter the center X-Coordinate of the rectangle", "X-Coordinate");
     centerx = centerx / 1;
     x.push (centerx);
     centery = prompt ("Please enter the center Y-Coordinate of the rectangle", "Y-Coordinate");
     centery = centery / 1;
     y.push (centery);

     if (exceptionalcondition != 0)
     {
          rm = prompt ("Enter if you want to add or remove shapes: Enter 1 to remove shape and 2 to add shape");
     }

     area = height * breadth;
     area = area / 1;

     inertiax = breadth * height * height * height / 12;
     inertiax = inertiax / 1;
     inertiay = height * breadth * breadth * breadth / 12;
     inertiay = inertiay / 1;

     if (rm == 2)
     {
          inertiax1.push (inertiax);
          inertiay1.push (inertiay);
          arrayarea.push (area);
     }
     else
     {
          inertiax1.push (-inertiax);
          inertiay1.push (-inertiay);
          arrayarea.push (-area);
     }

     areax = area * centerx;
     areax = areax / 1;
     areay = area * centery;
     areay = areay / 1;

     if (rm == 2)
     {
          sigmacenterx = sigmacenterx + areax;
          sigmacenterx = sigmacenterx / 1;
          sigmacentery = sigmacentery + areay;
          finalarea = finalarea / 1;
          finalarea = finalarea + area;
     }
     else
     {
          sigmacenterx = sigmacenterx - areax;
          sigmacenterx = sigmacenterx / 1;
          sigmacentery = sigmacentery - areay;
          sigmacentery = sigmacentery / 1;
          finalarea = finalarea - area;
          finalarea = finalarea / 1;
     }

     co1.beginPath ();
     co1.rect (600 + centerx - (breadth / 2), 600 - centery - (height / 2), breadth, height);
     if (rm == 2)
     {
          co1.fillStyle = "gold";
     }
     else
     {
          co1.fillStyle = "white";
     }
     co1.fill ();

     co1.beginPath ();
     co1.arc (600 + centerx, 600 - centery, 2, 0, 2 * Math.PI);
     co1.fillStyle = "green";
     co1.fill ();

     srik = prompt ("Are you done with adding shapes: Enter 1 if done and 2 if not done");

     exceptionalcondition = exceptionalcondition + 1;

     if (srik == 1)
     {
          sigmacenterx = sigmacenterx / finalarea;
          sigmacentery = sigmacentery / finalarea;

          co1.beginPath ();
          co1.arc (600 + sigmacenterx, 600 - sigmacentery, 5, 0, 2 * Math.PI);
          co1.fillStyle = "red";
          co1.fill ();

          co1.beginPath ();
          co1.arc (600, 600, 5, 0, 2 * Math.PI);
          co1.fillStyle = "blue";
          co1.fill ();

          for (i = 0; i < (exceptionalcondition); i ++)
          {
               distycmx = x [i] - sigmacenterx;
               distycmx = distycmx / 1;
               if (distycmx < 0)
               {
                    distycmx = - distycmx;
               }
               distycmx = distycmx * distycmx;

               distycmy = y [i] - sigmacentery;
               distycmy = distycmy / 1;
               if (distycmy < 0)
               {
                    distycmy = - distycmy;
               }
               distycmy = distycmy * distycmy;

               x [i] = distycmy * arrayarea [i];
               y [i] = distycmx * arrayarea [i];

               inertiax1 [i] = inertiax1 [i] + x [i];
               inertiay1 [i] = inertiay1 [i] + y [i];

          }

          for (j = 0; j < (exceptionalcondition); j ++)
          {
               mix = mix + inertiax1 [j];
               miy = miy + inertiay1 [j];
          }

          mix = mix.toFixed (2);
          miy = miy.toFixed (2);
          sigmacenterx = sigmacenterx.toFixed (2);
          sigmacentery = sigmacentery.toFixed (2);
          finalarea = finalarea.toFixed (2);
          document.getElementById ("zeltron").value = mix;
          document.getElementById ("zeltron1").value = miy;
          document.getElementById ("zeltron2").value = (mix + miy);
          document.getElementById ("zeltron3").value= "(" + sigmacenterx + ", " + sigmacentery + ")";
          document.getElementById ("xeltron").value = finalarea;
     }
}
