var MIN_WIDTH = 0
var MAX_WIDTH = 100
var cont = document.getElementById('cont');
var num = (window.screen.width/50)-1;
for(var i=0; i<num*2+1; i++){
    var line1 = document.createElement('div'); 
    line1.id = 'id'+i;
    if(i%2==0){
        var oneLineDiv = document.createElement('div');
        oneLineDiv.className = 'one-line';
        line1.className = 'line1';
    }else{
        line1.className = 'line2';
    }
    
    oneLineDiv.appendChild(line1);
    cont.appendChild(oneLineDiv);
}


var j = 0;
setInterval(() => {
    if(j%2==0){
        helper1();  
    }else{
        helper2();
    }
    j+=1;
}, 2000);

function helper1(){
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

function helper2(){
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
