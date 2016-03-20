import React from 'react';

// We need to import the classNames object
import classNames from 'classnames';
// import TextInput from './TextInput';

export default class TodoItem extends React.Component {
  render() {
    var itemClass = classNames({
      "todo": true,
      "completed": this.props.isCompleted,
      "editing": this.props.isEditing,
    });

    return <li className={itemClass}>
        <div className="view">
            <input type="checkbox"
                   className="toggle"
                   defaultChecked={this.props.isCompleted} >
            </input>
            <label className="todo">
                {this.props.text}
            </label>
            <button className="destroy"></button>
        </div>
    </li>;
  }
}
