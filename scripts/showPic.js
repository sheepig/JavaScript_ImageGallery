addLoadEvent(preparePlaceholder);
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
function preparePlaceholder(){
	var placeholder = document.createElement('img');
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/gallery.jpeg");
    placeholder.setAttribute("alt","my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id","description");

    var desctext = document.createTextNode("choose an image");
    description.appendChild(desctext);

    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;//parentElement父元素
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
        //如果目标元素独生子
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
        //如果目标元素不是父元素的最后一个子元素，则将新元素插入到目标元素紧挨着的下一个兄弟元素之前。
    }
}

function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;//检查placeholder
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
	if(document.getElementById("description")){//检查description
    var text=whichpic.getAttribute("title")?whichpic.getAttribute("title") : "";//title不存在时，替换为空字符串
    var description=document.getElementById("description");
	if(description.firstChild.nodeType == 3){//文本类型
    description.firstChild.nodeValue=text;
	  }
	}
	return true;	
}