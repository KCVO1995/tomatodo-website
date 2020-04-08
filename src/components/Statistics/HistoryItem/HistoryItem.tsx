import {Todo, Tomato} from '@/types';
import {format} from 'date-fns';
import React, {useState} from 'react';
import {updateTodo} from '@/redux/actions/todos';
import {editTomato, updateTomato} from '@/redux/actions/tomatoes';
import {connect} from 'react-redux';
import axios from '@/config/axios';

import './HistoryItem.less';
import {Input} from 'antd';

interface TodoHistoryItemProps {
  itemType: string
  data: any
  updateTodo: (payload: Todo) => void
  updateTomato: (payload: Tomato) => void
  editTomato: (id: number) => void
}

const HistoryItem = (props: TodoHistoryItemProps) => {

  const [editText, setEditText] = useState(props.data.description);

  const commit = () => {
    editText !== '' ? updateTomato({description: editText}) : updateTomato({aborted: true});
  };


  const updateTodo = async (params: any) => {
    const {id} = props.data;
    try {
      const response = await axios.put(`todos/${id}`, params);
      props.updateTodo(response.data.resource);
    } catch (e) {throw new Error(e);}
  };

  const updateTomato = async (params: any) => {
    console.log(1);
    const {id} = props.data;
    try {
      const response = await axios.put(`tomatoes/${id}`, params);
      props.updateTomato(response.data.resource);
    } catch (e) {throw new Error(e);}
  };


  const action = () => {
    if (props.itemType === 'completed') {
      return (
        <div className="action">
          <span onClick={() => updateTodo({completed: false})}>恢复 </span>
          <span onClick={() => updateTodo({deleted: true})}>删除</span>
        </div>
      );
    } else if (props.itemType === 'deleted') {
      return (
        <div className="action">
          <span onClick={() => updateTodo({deleted: false})}>恢复</span>
        </div>
      );
    } else if (props.itemType === 'finishedToamto') {
      if (props.data.editing) {
        return (
          <div className="action editing">
            <span onClick={commit}>提交 </span>
            <span onClick={() => updateTomato({editing: false})}>取消</span>
          </div>
        );
      } else {
        return (
          <div className="action">
            <span onClick={() => props.editTomato(props.data.id)}>编辑 </span>
            <span onClick={() => updateTomato({aborted: true})}>删除</span>
          </div>
        );
      }
    } else if (props.itemType === 'abortTomato') {
      if (props.data.editing) {
        return (
          <div className="action editing">
            <span onClick={commit}>提交 </span>
            <span onClick={() => updateTomato({editing: false})}>取消</span>
          </div>
        );
      } else {
        return (
          <div className="action">
            <span onClick={() => props.editTomato(props.data.id)}>编辑 </span>
          </div>
        );
      }
    }
  };

  const time = () => {
    if (props.itemType === 'completed') {
      return (
        <span className="time">{format(new Date(props.data.updated_at), 'HH:mm')}</span>
      );
    } else if (props.itemType === 'deleted') {
      return (
        <span className="time">{format(new Date(props.data.updated_at), 'M月d日')}</span>
      );
    } else if (props.itemType === 'finishedToamto') {
      return (
        <span className="time">
          {format(new Date(props.data.started_at), 'HH:mm')}
          -
          {format(new Date(props.data.ended_at), 'HH:mm')}
        </span>
      );
    } else if (props.itemType === 'abortTomato') {
      return (
        <span className="time">{format(new Date(props.data.started_at), 'M月d日')}</span>
      );
    }
  };


  const description = () => {
    if (props.itemType === 'finishedToamto' || props.itemType === 'abortTomato') {
      if (props.data.editing) {
        return (
          <Input
            placeholder="按回车键确认删除这个任务"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onPressEnter={commit}
            autoFocus={true}
          />
        );
      } else {
        return (<span>{props.data.description || '这是一个没有描述的番茄'}</span>);
      }
    } else {
      return (<span>{props.data.description || '这是一个没有描述的番茄'}</span>);
    }
  };


  return (
    <div className="item">
      <div className="detail">
        {time()}
        {description()}
      </div>
      {action()}
    </div>
  );
};


const mapStateToProps = (state: { todos: Todo[] }, ownProps: any) => {
  return {
    ...ownProps
  };
};

const mapDispatchToProps = {
  updateTodo,
  updateTomato,
  editTomato
};

export default connect(mapStateToProps, mapDispatchToProps,)(HistoryItem);

