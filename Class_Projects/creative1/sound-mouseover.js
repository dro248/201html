var star
var interstella
var summer
var blind
var date
var harry
var intern
var james
var lord
var money
var narnia
var remember
var trek
var avengers
var identity
var knight
var hobbit
var martian
var valentines

function playclip() 
{
date=document.getElementById("mySoundClip");
date.play(); 
star.pause();
interstella.pause();
summer.pause();
blind.pause();
harry.pause();
intern.pause();
james.pause();
lord.pause();
money.pause();
narnia.pause();
remember.pause();
trek.pause();
avengers.pause();
identity.pause();
knight.pause();
hobbit.pause();
martian.pause();
valentines.pause();
summer.pause();
}


function playclip1()
{
intern=document.getElementById("mySoundClip1");
intern.play();
date.pause(); 
star.pause();
interstella.pause();
summer.pause();
blind.pause();
harry.pause();
james.pause();
lord.pause();
money.pause();
narnia.pause();
remember.pause();
trek.pause();
avengers.pause();
identity.pause();
knight.pause();
hobbit.pause();
martian.pause();
valentines.pause();
}
 
function playclip2()
{
summer=document.getElementById("mySoundClip2");
summer.play();
date.pause(); 
intern.pause();
star.pause();
interstella.pause();
blind.pause();
harry.pause();
james.pause();
lord.pause();
money.pause();
narnia.pause();
remember.pause();
trek.pause();
avengers.pause();
identity.pause();
knight.pause();
hobbit.pause();
martian.pause();
valentines.pause();
}

function playclip3()
{

valentines=document.getElementById("mySoundClip3");
valentines.play();
date.pause(); 
star.pause();
interstella.pause();
summer.pause();
blind.pause();
harry.pause();
james.pause();
lord.pause();
money.pause();
narnia.pause();
remember.pause();
trek.pause();
avengers.pause();
identity.pause();
knight.pause();
hobbit.pause();
martian.pause();
valentines.pause();
intern.pause();

}

function playclip4()
{

}

function playclip5()
{

}
function playclip6()
{

}
function playclip7()
{

}
function playclip8()
{

}
function playclip9()
{

}
function playclip10()
{

}
function playclip11()
{

}
function playclip12()
{

}
function playclip13()
{

}
function playclip14()
{

}
function playclip15()
{

}
function playclip16()
{

}
function playclip17()
{

}
function playclip18()
{

}
function playclip19()
{

}
function playclip20()
{

}





//this would be inserted into the html for each sound file.  I can't get it to stop playing though once I play it must be an easier wasy to get it to work.
<script type="text/javascript" src="sound-mouseover.js"></script>


<div style="position:relative;left:120px;top:500px;">
<audio id="mySoundClip" >
<source src="audio/Date_night.mp3"></source>
<source src="audio/Date_night.ogg"></source>
</audio>
<div id="sounddiv"><bgsound id="sound"></div>
<a href="about.htm"  onmouseover="playclip();">sound</a><br>
</div>


<audio id="mySoundClip1" >
<source src="audio/Interstella.mp3"></source>
<source src="audio/Interstella.ogg"></source>
</audio>
<div id="sounddiv"><bgsound id="sound"></div>
<a href="about.htm"  onmouseover="playclip1();"  >sound</a><br> 

<audio id="mySoundClip2" >
<source src="audio/Intern.mp3"></source>
<source src="audio/Intern.ogg"></source>
</audio>
<div id="sounddiv"><bgsound id="sound"></div>
<a href="about.htm"  onmouseover="playclip2();"  >sound</a><br> 
