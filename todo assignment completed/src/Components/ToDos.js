import React from 'react';

class ToDos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodoVal: '',
      checkValue: '',
      selectedId: '',
      dateVal: '',
    };
  }

  handleInputTextChange = (e) => {
    this.setState({ newTodoVal: e.target.value });
  };

  handleInputDateChange = (e) => {
    this.setState({ dateVal: e.target.value });
  };

  handleDateChange = (e) => {
    // console.log(e.target.value); // 2022-09-08
    let todoCompletionDate = e.target.value;
    let todaysDate = new Date().toJSON().slice(0, 10);

    let objId = this.state.selectedId;
    console.log(objId);

    let copyTodos = [...this.state.todos];
    let selectedTodo = copyTodos[objId];
    console.log(selectedTodo);

    if (todoCompletionDate > todaysDate) {
      let updatedSelectedTodo = {
        ...selectedTodo,
        date: e.target.value,
        remark: 'Good To go !!',
        style: {
          color: 'orangered',
          border: 'orangered',
          strike: '',
        },
      };
      copyTodos[objId] = updatedSelectedTodo;
      this.setState({ todos: copyTodos });
    } else {
      let updatedSelectedTodo = {
        ...selectedTodo,
        date: e.target.value,
        remark: 'Deadline Passed !!',
        style: {
          color: 'red',
          border: '#FFDE00',
          strike: '',
        },
      };
      copyTodos[objId] = updatedSelectedTodo;
      this.setState({ todos: copyTodos });
    }
  };

  handleDescription = (e) => {
    let objId = this.state.selectedId;
    console.log(objId);

    let copyTodos = [...this.state.todos];
    let selectedTodo = copyTodos[this.state.selectedId];
    let updatedSelectedTodo = {
      ...selectedTodo,
      description: e.target.value,
    };

    copyTodos[objId] = updatedSelectedTodo;
    this.setState({ todos: copyTodos });
  };

  handleCheck = (e) => {
    let objId = e.target.id;

    if (e.target.checked) {
      let copyTodos = [...this.state.todos];
      let selectedTodo = copyTodos[objId];
      let updateSelectedTodo = {
        ...selectedTodo,
        remark: 'Task is Completed',
        isChecked: true,
        style: {
          color: 'crimson',
          strike: '3px line-through',
          border: 'crimson',
        },
      };

      copyTodos[objId] = updateSelectedTodo;
      // console.log(copyTodos);
      this.setState({ todos: copyTodos });
    } else {
      let copyTodos = [...this.state.todos];
      let selectedTodo = copyTodos[objId];
      let updateSelectedTodo = {
        ...selectedTodo,
        remark: 'Set deadline...',
        isChecked: false,
        style: {
          color: '',
          strike: 'none',
          border: 'orangered',
        },
      };

      copyTodos[objId] = updateSelectedTodo;
      // console.log(copyTodos);
      this.setState({ todos: copyTodos });
    }
  };

  handleAdd = () => {
    // 👉🏻When we made array of objects👈🏻
    let todoCompletionDate = this.state.dateVal;
    let todaysDate = new Date().toJSON().slice(0, 10);

    let copyTodo = [...this.state.todos];
    let newTodoObj = {
      text: this.state.newTodoVal,
      remark: `${
        todoCompletionDate > todaysDate
          ? 'GOOD TO GO!!'
          : 'OOOpzz!! due date pased!!'
      }`,
      description: '',
      date: todoCompletionDate,
      isChecked: false,
      style: {
        color: 'orangered',
        strike: '',
        border: 'orangered',
      },
    };

    let updatedToDoArr = [...copyTodo, newTodoObj];
    this.setState({ todos: updatedToDoArr });
  };

  handleDelete = (e) => {
    let objId = e.target.id;
    // console.log(objId);

    let copyTodos = [...this.state.todos];
    copyTodos.splice(objId, 1);

    this.setState({ todos: copyTodos });
  };

  render() {
    console.log(this.state.todos, 'final todos');

    return (
      <div>
        <h2>Things Todo</h2>
        <hr />
        <div className="addContainer">
          <div className="twin">
            <input
              type="text"
              onChange={this.handleInputTextChange}
              placeholder="write todo"
              className="text"
            />
            <input
              type="date"
              onChange={this.handleInputDateChange}
              className="date"
            />
          </div>

          <button onClick={this.handleAdd}>Add</button>
        </div>
        <hr />
        <div className="todosContainer">
          {/* <span><input type='checkbox'/></span> */}
          <ul>
            {this.state.todos.map((item, ind) => {
              const { text, remark, isChecked, date, description, style } =
                item;

              return (
                <li
                  id={ind}
                  key={ind}
                  style={{ border: `10px solid ${style.border}` }}
                >
                  <div>
                    <h4>todo: {ind + 1}</h4>
                  </div>
                  <div className="top">
                    <div className="checkContainer">
                      <input
                        id={ind}
                        type="checkbox"
                        onClick={() => this.setState({ selectedId: ind })}
                        onChange={this.handleCheck}
                        checked={item.isChecked ? 'checked' : ''} // comment this and the previous checked after delete will pass to next todo
                      />
                    </div>
                    <div
                      className="textContainer"
                      style={{ textDecoration: style.strike }}
                    >
                      {text}
                    </div>
                    <div className="remarkContainer">
                      <span>
                        <strong>Remark:</strong>
                        <span style={{ color: style.color }} className={remark}>
                          {remark}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="displayDate">
                      {/* <div className="displayDate">{date}</div> */}
                      {/* DYnamically change date from here */}
                      <input
                        id={ind}
                        onClick={() => this.setState({ selectedId: ind })}
                        type="date"
                        value={item.date}
                        onChange={this.handleDateChange}
                      />
                    </div>
                    <div className="description">
                      <textarea
                        id={ind}
                        onClick={() => this.setState({ selectedId: ind })}
                        onChange={this.handleDescription}
                        value={description}
                      />
                    </div>
                    <div className="deleteButtonContainer">
                      <button id={ind} onClick={this.handleDelete}>
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default ToDos;
