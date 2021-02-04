import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  return (
    <div>
      <h1>{toDos?.text}</h1>
      <h5>Created at: {toDos?.id}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDos: state.find(toDo => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
