var MIN_WIDTH = 0;
var MAX_WIDTH = 100;
var cont1  = document.getElementById('cont1');
var cont2 = document.getElementById('cont2');
var num = (window.screen.width/50)-1;

for(var i=0; i<num*2+1; i++){
    var line1 = document.createElement('div'); 
    line1.id = 'id'+i;
    if(i%2==0){
        var oneLineDiv = document.createElement('div');
        oneLineDiv.className = 'one-line';
        line1.className = 'lineV1';
    }else{
        line1.className = 'lineV2';
    }
    
    oneLineDiv.appendChild(line1);
    cont2.appendChild(oneLineDiv);
}

for(var i= 0; i< 60; i++){
    var div = document.createElement('div');
    div.id = i.toString();
    if(i%2==0){
        div.className = 'list1';
    }else{
        div.className = 'list2';
    }
    cont1.appendChild(div);
}

var head = document.createElement('h1');
head.innerText = 'HARSH';
head.className = 'header'
var body = document.getElementsByTagName('body')[0];
body.appendChild(head);

cont1.style.position='relative'
var j = 0;

setInterval(() => {
    if(j%2==0){
        helper1();
        helperV1();
        cont1.style.top='-500px'  
    }else{
        helper2();
        helperV2();
        cont1.style.top='0px'
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

function helperV1(){
    var top = 0;
    var bottom = 0;
    for(var i= 0; i< num*2+1; i++){
        var mDiv = document.getElementById('id'+i);
        if(i%2==0){
            top+=1
            if(top%2==0){
                mDiv.style.height = MIN_WIDTH+'vh'
            }else{
                mDiv.style.height = MAX_WIDTH+'vh'
            }
        }else{
            bottom+=1
            if(bottom%2==0){
                mDiv.style.height = MAX_WIDTH+'vh'
            }else{
                mDiv.style.height = MIN_WIDTH+'vh'
            }
        }
        
    }
}

function helperV2(){
    var top = 0;
    var bottom = 0;
    for(var i= 0; i< num*2+1; i++){
        var mDiv = document.getElementById('id'+i);
        if(i%2==0){
            top+=1
            if(top%2==0){
                mDiv.style.height = MAX_WIDTH+'vh'
            }else{
                mDiv.style.height = MIN_WIDTH+'vh'
            }
        }else{
            bottom+=1
            if(bottom%2==0){
                mDiv.style.height = MIN_WIDTH+'vh'
            }else{
                mDiv.style.height = MAX_WIDTH+'vh'
            }
        }
        
    }
}