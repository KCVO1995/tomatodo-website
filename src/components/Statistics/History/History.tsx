import React from 'react';
import {Tabs} from 'antd';
import {Todo, Tomato} from '@/types';
import _ from 'lodash';
import {format, differenceInMinutes, parseISO} from 'date-fns';
import './History.less';
import HistoryItem from '@/components/Statistics/HistoryItem/HistoryItem';

const {TabPane} = Tabs;

interface TodoHistoryProps {
  completed: Todo[]
  deleted: Todo[]
  finishedTomatoGroup: {}
  abortTomatoes: Tomato[]
  historyType: string
}


const History = (props: TodoHistoryProps) => {

  const getCompletedGroup = () => {
    return _.groupBy(props.completed, (todo) => {
      return format(new Date(todo.updated_at), 'yyyy-MM-d');
    });
  };

  const getDates = (group: {}) => {
    return Object.keys(group).sort((a, b) => Date.parse(b) - Date.parse(a));
  };


  const completedList = getDates(getCompletedGroup()).map(date => {
    const todos = getCompletedGroup()[date];
    return (
      <div key={date} className="list">
        <div className="title">
          <div>
            <span className="date">{format(new Date(date), 'M月d日')}</span>
            <span>{format(new Date(date), 'E')}</span>
          </div>
          <span>完成了 {todos.length} 个任务</span>
        </div>
        <div className="items">
          {
            todos.map((todo) => {
              return <HistoryItem data={todo} key={todo.id} itemType="completed"/>;
            })
          }
        </div>
      </div>
    );
  });

  const deletedList = props.deleted.map(todo => {
    return (<HistoryItem data={todo} key={todo.id} itemType="deleted"/>);
  });

  const finishedTomatoList = getDates(props.finishedTomatoGroup).map(date => {
    // @ts-ignore
    const tomatoes = props.finishedTomatoGroup[date];
    let min = 0;
    tomatoes.forEach((tomato: Tomato) => {
      min += differenceInMinutes(parseISO(tomato.ended_at.toString()), parseISO(tomato.started_at.toString()));
    });
    const minText = () => {return ` ${min % 60} 分钟`;};
    const hourText = Math.floor(min / 60) < 1 ? '' : ` ${Math.floor(min / 60)} 小时`;
    return (
      <div key={date} className="list">
        <div className="title">
          <div>
            <span className="date">{format(new Date(date), 'M月d日')}</span>
            <span>{format(new Date(date), 'E')}</span>
          </div>
          <div>完成了 {tomatoes.length} 个番茄</div>
          <span>总计
            {hourText}
            {minText()}
          </span>
        </div>
        <div className="items">
          {
            tomatoes.map((tomato: Tomato) => {
              return <HistoryItem data={tomato} key={tomato.id} itemType="finishedToamto"/>;
            })
          }
        </div>
      </div>
    );
  });

  const abortTomatoList = props.abortTomatoes.map(tomato => {
    return (<HistoryItem data={tomato} key={tomato.id} itemType="abortTomato"/>);
  });

  const list = () => {
    if (props.historyType === 'todo') {
      console.log(1);
      return (
        <div className="todo-history">
          <Tabs defaultActiveKey="1">
            <TabPane tab="已完成任务" key="1">
              {completedList}
            </TabPane>
            <TabPane tab="已删除任务" key="2">
              {deletedList}
            </TabPane>
          </Tabs>
        </div>
      );
    } else if (props.historyType === 'tomato') {
      return (
        <div className="todo-history">
          <Tabs defaultActiveKey="1">
            <TabPane tab="完成的番茄" key="1">
              {finishedTomatoList}
            </TabPane>
            <TabPane tab="被打断的番茄" key="2">
              {abortTomatoList}
            </TabPane>
          </Tabs>
        </div>
      );
    }
  };

  return (
    <>
      {list()}
    </>
  );
};

export default History;