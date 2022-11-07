function drop(){
    var list = document.getElementsByClassName("sub_nav__list");
    if(list.style.display=="none"){
        list.style.display = 'block';
    }else{
        list.style.display='none';
    }
}
