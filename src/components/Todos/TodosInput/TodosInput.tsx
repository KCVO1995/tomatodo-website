import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '@/redux/actions/todos';
import axios from '@/config/axios';

import {Input} from 'antd';
import {EnterOutlined} from '@ant-design/icons';

interface InputTodosProps {addTodo: (params: { description: string }) => void}

const TodosInput = (props: InputTodosProps) => {
  const [description, setDescription] = useState('');

  const commit = async () => {
    if (description !== '') {
      try {
        const response = await axios.post('todos', {description});
        props.addTodo(response.data.resource);
        setDescription('');
      } catch (e) {throw new Error(e);}
    } else {alert('请指定一个todo');}
  };


  return (
    <div className="todo-input">
      <Input size="large"
             placeholder="添加新任务"
             suffix={description ? <EnterOutlined onClick={commit}/> : <span/>}
             onChange={e => setDescription(e.target.value)}
             onPressEnter={commit}
             value={description}
      />
    </div>
  );
};


const mapStateToProps = (ownProps: InputTodosProps) => ({
  ...ownProps
});

const mapDispatchToProps = {
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosInput);