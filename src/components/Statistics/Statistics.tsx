import React, {useState} from 'react';
import './Statistics.less';
import {Todo, Tomato} from '@/types';
import Polygon from '@/components/Statistics/Polygon/Polygon';
import History from '@/components/Statistics/History/History';
import _ from 'lodash';
import {format} from 'date-fns';

interface StatisticsProps {
  completed: Todo[]
  deleted: Todo[]
  finishedTomatoGroup: {}
  finishedTomatoes: Tomato[]
  abortTomatoes: Tomato[]
}

const Statistics = (props: StatisticsProps) => {

  const [toggle, setToggle] = useState('');

  const dailyTodo = () => {
    return _.groupBy(props.completed, (todo) => {
      return format(new Date(todo.updated_at), 'yyyy-MM-d');
    });
  };

  const history = () => {
    if (toggle) {
      return <History finishedTomatoGroup={props.finishedTomatoGroup}
                      abortTomatoes={props.abortTomatoes}
                      completed={props.completed}
                      deleted={props.deleted}
                      historyType={toggle}
                      />;
    } else {
      return <span/>;
    }
  };

  return (
    <div className="statistics">
      <ul>
        <li onClick={() => setToggle('tomato')}
            className={toggle === 'tomato' ? 'active' : ''}>
          <div className="text">
            <span className="title">番茄历史</span>
            <span>累计完成番茄</span>
            <span className="count">{props.finishedTomatoes.length}</span>
          </div>
          <Polygon dailyTodo={props.finishedTomatoGroup} totalCompleted={props.finishedTomatoes.length}/>
        </li>
        <li onClick={() => setToggle('todo')}
            className={toggle === 'todo' ? 'active' : ''}>
          <div className="text">
            <span className="title">任务历史</span>
            <span>累计完成任务</span>
            <span className="count">{props.completed.length}</span>
          </div>
          <Polygon dailyTodo={dailyTodo()} totalCompleted={props.completed.length}/>
        </li>
      </ul>
      {history()}
    </div>
  );
};

export default Statistics;