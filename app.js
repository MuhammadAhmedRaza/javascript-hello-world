var name = prompt("Enter Your full Name");
var eng = +prompt("Enter Your English Marks");
var isl = +prompt("Enter Your Islamiat Marks");
var urdu = +prompt("Enter Your urdu Marks");
var phy = +prompt("Enter Your Physics Marks");
var math = +prompt("Enter Your Mathematics Marks");
var sum=(eng+isl+urdu+phy+math);
var percentage=(sum/500)*100;
if(percentage<50)
{
    alert("you are fail "  +name+  " your % is "  +percentage+"%");
}
else if( percentage>40 && percentage <60)
{
alert("you are an average student "  +name+  " your % is "  +percentage+"%");
}
else if(percentage>60 && percentage<80)
{
    alert("you are a good student " +name+  " your % is " +percentage+"%" );
}
else if(percentage>80 && percentage<100)
{
    alert("you are a very good student " +name+  " your % is "  +percentage+"%");
}
