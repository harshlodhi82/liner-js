var MIN_WIDTH = 0;
var MAX_WIDTH = 100;
var cont  = document.getElementById('cont');
for(var i= 0; i< 60; i++){
    var div = document.createElement('div');
    div.id = i.toString();
    if(i%2==0){
        div.className = 'list1';
    }else{
        div.className = 'list2';
    }
    cont.appendChild(div);
}
cont.style.position='relative'
var j = 0;
setInterval(() => {
    if(j%2==0){
        helper1();
        cont.style.top='-500px'    
    }else{
        helper2();
        cont.style.top='0px'
    }
    j+=1;
}, 2000);

function helper1(){
    var left = 0;
    var right = 0;
    for(var i= 0; i< 60; i++){
        var mDiv = document.getElementById(i.toString());
        if(i%2==0){
            left+=1
            if(left%2==0){
                mDiv.style.width = MIN_WIDTH+'%'
            }else{
                mDiv.style.width = MAX_WIDTH+'%'
            }
        }else{
            right+=1
            if(right%2==0){
                mDiv.style.width = MAX_WIDTH+'%'
            }else{
                mDiv.style.width = MIN_WIDTH+'%'
            }
        }
        
    }
}

function helper2(){
    var left = 0;
    var right = 0;
    for(var i= 0; i< 60; i++){
        var mDiv = document.getElementById(i.toString());

        if(i%2==0){
            left+=1
            if(left%2==0){
                mDiv.style.width = MAX_WIDTH+'%'
            }else{
                mDiv.style.width = MIN_WIDTH+'%'
            }
        }else{
            right+=1
            if(right%2==0){
                mDiv.style.width = MIN_WIDTH+'%'
            }else{
                mDiv.style.width = MAX_WIDTH+'%'
            }
        }
    }
}