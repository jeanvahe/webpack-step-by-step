import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  // Filters the items according to their status
  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
        (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
      );
    }
    return [];
  }
  // This function checks whether an item is completed
  isCompleted(item) {
    return item.get('status') === 'completed';
  }
    render() {
        return <section className='main'>
            <ul className="todo-list">
                {this.getItems().map(item=>
                <TodoItem key={item.get('text')}
                        text={item.get('text')} 
                        // We pass down the info on completion and editing
                        isCompleted={this.isCompleted(item)}
                        isEditing={item.get('editing')} />
                )}
            </ul>
        </section>
    }
}
