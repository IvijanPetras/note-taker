import React from "react";

window.onload = function(){

let container = document.querySelector('.card-container');
let addBtn = document.querySelector('.addBtn');
let inp = document.querySelector('.inp');

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
    var card = document.createElement('div');
    card.innerText = inp.value;
    container.append(card);
    inp = "";
    
});


}


function Input(){
    return(
        <div className="input"> 
            <form>
                <label htmlFor="notes">Notes</label>
                <input className="inp" id="notes" type="text" name="notes" placeholder="Add new note" autoFocus/>
                <button type="submit" className="addBtn">Add Note</button>
            </form>
        </div>
    );

}

export default Input;