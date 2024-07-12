const input=document.getElementById('input-box');
const listContainer=document.querySelector('.ul-list-iteams');

function AddToDO() {
    
    if (input.value==='') {
        alert('Enter To do please!');
        return;
    }else{

        let li =document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);

        let Span=document.createElement("span");
        Span.innerHTML="\u00d7";
        li.appendChild(Span);
    }
    input.value="";
   SaveLocalStorage();

    
}

listContainer.addEventListener("click",function(E){
    if (E.target.tagName==="LI") {
            E.target.classList.toggle("checked");
           SaveLocalStorage()
            
    }else if(E.target.tagName==="SPAN"){
        E.target.parentElement.remove();
       SaveLocalStorage()
    }
 
},false)



function SaveLocalStorage() {
    localStorage.setItem("appsz",listContainer.innerHTML);
}


function getLocalStorage() {
    listContainer.innerHTML=localStorage.getItem("appsz");
}

getLocalStorage();

