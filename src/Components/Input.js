import React from "react";

function Input(){
    return(
        <div className="input">
            <form>
                <label htmlFor="notes">Notes</label>
                <input id="notes" type="text" name="notes" placeholder="Add new note" autoFocus/>
                <button type="submit" className="addBtn">Add Note</button>
            </form>
        </div>
    );

}

export default Input;