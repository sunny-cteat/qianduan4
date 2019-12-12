//创建li标签并添加文本
    //首页
    var ul = document.getElementsByClassName("nav");
    var li1 = document.getElementsByClassName("item")[0];
    var new_li1 = document.createElement("li");
    new_li1.innerHTML="首页";
    ul[0].insertBefore(new_li1,li1);
    //关于  
    var newnode=document.createElement("li");
    newnode.innerHTML="关于";
    ul[0].appendChild(newnode);



//“运动”替换为“文章”
var new_li3 = document.createElement("li");  //创建新节点--文章
var newtext = document.createTextNode("文章");
new_li3.appendChild(newtext);

var li3 = document.getElementsByTagName("ul")[0];  //找到分节点
var old_li3 = li3.children[3];   //找到要替换的节点--运动

li3.replaceChild(new_li3,old_li3);



//删除li标签--评论
var x = ul[0].removeChild(ul[0].childNodes[4]);

