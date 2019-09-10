  import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    let className = this.props.data.completed ? "active" : "";
    return (
      <>
        <p
          className={className}
          data-roll={this.props.data.completed}
          onClick={() =>
            this.props.dispatch({
              type: "TOGGLE-COMPLETED",
              id: this.props.data.id
            })
          }
        >
          {this.props.data.item}
        </p>
      </>
    );
  }
}

export default Todo;