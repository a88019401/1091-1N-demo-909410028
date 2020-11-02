alert('hi')
function change(index) {
    const p = document.getElementById('show');
    console.log('show', p);
    switch(index){
        case 1:
       p.innerHTML ='<iframe width=100% height=100% src="./w1 intro/W1 INTRO.html" />'
        break;
        case 2:
       p.innerHTML ='<iframe width=100% height=100% src="./w1 poke/pokeman.html" />'
       break;
       case 3:
       p.innerHTML ='<iframe width=100% height=100% src="./w2 IG/image.html" />';
       break;
       case 4:
       p.innerHTML ='<iframe width=100% height=100% src="./w2 blog/blog.html" />';
       break;
       case 5:
       p.innerHTML ='<iframe width=100% height=100% src="./w3 div/div.html" />';
       break;
       case 6:
       p.innerHTML ='<iframe width=100% height=100% src="./w3 divtku/divtku60.html" />';
       break;
       case 7:
       p.innerHTML ='<iframe width=100% height=100% src="./w7/w7/index.html" />';
       break}
}