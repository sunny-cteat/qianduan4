let listArr=['list1', 'list2', 'list3', 'list4', 'list5'];
var list = document.getElementsByTagName('li');
for(let i = 0; i < listArr.length; i++){
    list[i].addEventListener("click", function(){
        document.write(listArr[i]);
    },false);
}

