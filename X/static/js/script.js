function dialog_show(){
    var n= document.getElementById('dialog-co');
    n.showModal()
}
function dialog_close(){
    var n= document.getElementById("dialog-co");
    n.close()
}
var ret='{{re}}'
console.log(ret)
var jsVar = '{{msname}}'
var jsVar1='{{msemail}}'
window.addEventListener('load',check());
function check(){
    if (ret=='retern'){
        console.log(ret)
        var n=document.getElementById('dialog-bor');
        var m=document.getElementById('dialog-bor1');
        var z=document.getElementById('dialog-bor2');
        if(jsVar=='the name is already exist'|| jsVar1=='tha email has already Used' ){
        n.style.display='block'
        m.style.display='none'
        z.style.display='none'
        } else{
        var k=document.getElementById('number-email')
        n.style.display='none'
        k.style.display='block'
        var n= document.getElementById("dialog-co");
        n.close()
        var q= document.getElementById('number');
        q.showModal()
      
        }
    }
    ret=undefined;
}