import './App.css';
import MultipleChoice from "./conponents/MultipleChoice";
import React from "react";

function App() {
    return (
        <>
            <MultipleChoice
                title="Title"
                dateStart="Date Start"
                dateFinish="Date Finish"
                information="Information"
            />
        </>
    );
}

export default App;
