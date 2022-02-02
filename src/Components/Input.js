import React from "react";

window.onload = function(){

let container = document.querySelector('.card-container');
let addBtn = document.querySelector('.addBtn');
let inp = document.querySelector('.inp');
let form = document.querySelector('.form');

function valueFetch(e){
    const val = e.value;
    return val;
}

function createCard(){
    var vl = valueFetch(inp);
    var newEl = document.createElement('div');
    newEl.className = ".card";
    newEl.innerText = vl;
    return newEl;
}

function createNewNote(){
    var nc = createCard();
    container.append(nc);
}



addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createNewNote();
    form.reset();
    inp.focus();
    const foo = [1,2,3];
    const[n] = foo;
    console.log(n);
});


}


function Input(){
    return(
        <div className="input"> 
            <form className="form">
                <input className="inp" size='50' type="text"  placeholder="Add new note" autoFocus/>
                <button type="submit" className="addBtn">Add Note</button>
            </form>
        </div>
    );

}

export default Input;