import React, {useState} from 'react';
import {updateTodo, editTodo} from '@/redux/actions/todos';
import {connect} from 'react-redux';
import axios from '@/config/axios';
import {Todo} from '@/types';
import classNames from 'classnames';

import './TodosItem.less';
import {EnterOutlined, DeleteFilled} from '@ant-design/icons';
import {Checkbox, Input} from 'antd';


interface InputItemProps {
  todo: Todo
  todos: Todo[]
  updateTodo: (params: Todo) => Todo[]
  editTodo: (id: number) => Todo[]
}

const TodosItem = (props: InputItemProps) => {
  const [editText, setEditText] = useState(props.todo.description);

  const commit = () => {
    editText !== '' ? updateTodo({description: editText}) : updateTodo({deleted: true});};


  const updateTodo = async (params: any) => {
    const {id} = props.todo;
    try {
      const response = await axios.put(`todos/${id}`, params);
      props.updateTodo(response.data.resource);
    } catch (e) {throw new Error(e);}
  };

  const toEdit = (id: number) => {props.editTodo(id);};

  const Text = <span onDoubleClick={() => toEdit(props.todo.id)}>{props.todo.description}</span>;

  const Edition = (
    <div className="editing">
      <Input
        placeholder="按回车键确认删除这个任务"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        onPressEnter={commit}
        autoFocus={true}
      />
      <div className="iconWrapper">
        <EnterOutlined onClick={commit}/>
        <DeleteFilled onClick={() => updateTodo({deleted: true})}/>
      </div>
    </div>
  );

  const todoItemClass = classNames({
    'input-todos': true,
    editing: props.todo.editing,
    completed: props.todo.completed
  });


  return (
    <div className={todoItemClass}>
      <Checkbox
        checked={props.todo.completed}
        onChange={e => {updateTodo({completed: e.target.checked, completed_at: new Date()});}}>
      </Checkbox>
      {props.todo.editing ? Edition : Text}
    </div>
  );
};

const mapStateToProps = (state: { todos: Todo[] }, ownProps: any) => {
  const todos = state.todos;
  return {
    todos,
    ...ownProps
  };
};

const mapDispatchToProps = {
  updateTodo,
  editTodo
};

export default connect(mapStateToProps, mapDispatchToProps,)(TodosItem);
