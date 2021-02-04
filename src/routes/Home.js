import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo.js";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState();
  const [id, setId] = useState();
  const onChange = event => {
    setId(Date.now());
    setText(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    addToDo(text, id);
    setText("");
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Submit</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    toDos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDo: (text, id) => dispatch(actionCreators.addToDo(text, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
