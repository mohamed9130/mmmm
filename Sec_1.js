var one = document.getElementById("one");
var oneContext = one.getContext("2d");

oneContext.strokeStyle = "black";
oneContext.lineWidth = 40;

oneContext.moveTo(300, 100)
oneContext.lineTo(150, 450);
oneContext.lineTo(550, 450);
oneContext.lineTo(350, 200);
oneContext.lineTo(200, 600);


oneContext.stroke();
