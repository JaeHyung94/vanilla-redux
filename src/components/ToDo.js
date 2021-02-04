import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, id, deleteToDo }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={deleteToDo}>DEL</button>
      </Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
