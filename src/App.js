import './App.css';
import MultipleChoice from "./conponents/multiple/MultipleChoice";

function App() {
  return (
      <form action="#" className="formApp">
          <MultipleChoice
              title = "Title"
              dateStart = "Date Start"
              dateFinish = "Date Finish"
              information = "Information"
          />
      </form>
  );
}

export default App;
