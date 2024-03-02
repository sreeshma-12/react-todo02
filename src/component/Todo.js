import React, { Component } from "react";
import "./Todo.css";
export class Todo extends Component {
    state = {
        input: "",
        items: [],
    };
    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        });
        // console.log(this.state.input);
    };
    storeItems = (event) => {
        event.preventDefault();
        // this below is another method without using spread operator
        //  const allItems= this.state.items
        //  allItems.push(input)
        const { input } = this.state;

        this.setState({
            //   items:allItems
            // aray adding in a single line using spread
            items: [...this.state.items, input],
            input: "",
        });
    };
    deleteItem = (key) => {
        // console.log(key);
        // this below is another method without using filter method
        // const allItems = this.state.items;
        // allItems.splice(key, 1);

        // array deleting in a single line using filter
        this.setState({
            items: this.state.items.filter((data, index) => index !== key),
        });
    };

    render() {
        const { input, items } = this.state;
        console.log(items);
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo List</h1>
                    <input
                        type="text"
                        value={input}
                        onChange={this.handleChange}
                        placeholder="Enter here"
                    />
                    <button>Add</button>
                </form>
                <ul>
                    {/* items <i className="fa-solid fa-trash-can"></i> */}

                    {items.map((data, index) => (
                        <li key={index}>
                            {" "}
                            {data}
                            <i
                                className="fa-solid fa-trash-can"
                                onClick={() => this.deleteItem(index)}
                            ></i>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Todo;
