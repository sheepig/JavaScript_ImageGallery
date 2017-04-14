addLoadEvent(prepareGallery);
//检查点
function prepareGallery(){
if(!document.getElementsByTagName) return false;
if(!document.getElementById) return false;
if(!document.getElementById("imagegallery"))  return false;
var gallery= document.getElementById("imagegallery");
var links = gallery.getElementsByTagName("a");
for(var i=0; i <links.length; i++){
links[i].onclick = function(){

return !showPic(this);
}
   }
}

function showPic(whichpic){
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
	return true;
	
	
}