import React from 'react';
import {connect} from 'react-redux';
import {Todo} from '@/types';
import {initTodos} from '@/redux/actions/todos';


import './Todos.less';
import InputItem from './TodosItem/TodosItem';
import TodosInput from './TodosInput/TodosInput';

interface TodosProps {
  completed: Todo[]
  unCompleted: Todo[]
}

const Todos = (props: TodosProps) => {


  return (
    <div className="todos">
      <TodosInput/>
      <main className="todoList">
        {
          props.unCompleted.map((t: Todo) => {
            return <InputItem key={t.id} todo={t}/>;
          })
        }
        {
          props.completed.map((t: Todo) => {
            return <InputItem key={t.id} todo={t}/>;
          })
        }
      </main>
    </div>
  );
};


const mapStateToProps = (state: { todos: Todo[] }, ownProps: any) => {
  return {...ownProps}
};

const mapDispatchToProps = {initTodos};

export default connect(mapStateToProps, mapDispatchToProps,)(Todos);

