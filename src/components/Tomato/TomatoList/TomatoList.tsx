import React from 'react';
import {Tomato} from '@/types';
import {format} from 'date-fns';
import './TomatoList.less'

interface TomatoListProps {
  finishedTomatoGroup: {}
}

interface TomatoItemProps {
  tomato: Tomato
}

const TomatoItem = (props: TomatoItemProps) => {
  return (
    <div className="item">
      <span className='duration'>
        {format(new Date(props.tomato.started_at), 'HH:mm')}
          -
        {format(new Date(props.tomato.ended_at), 'HH:mm')}
      </span>
      <span className="description">{props.tomato.description}</span>
    </div>
  );
};

const TomatoList = (props: TomatoListProps) => {


  const getDates = () => {
    const dates = Object.keys(props.finishedTomatoGroup);
    return dates.sort((a, b) => Date.parse(b) - Date.parse(a)).splice(0,3);
  };



  const list = getDates().map((date) => {
    // @ts-ignore
    const tomatoes = props.finishedTomatoGroup[date];
    return (
      <div key={date} className="tomato">
        <div className="title">
          <span className="date">{format(new Date(date), 'M月d日')}</span>
          <span className="finished">完成了{tomatoes.length}个番茄</span>
        </div>
        {
          tomatoes.map((t: Tomato) => <TomatoItem key={t.id} tomato={t}/>)
        }
      </div>
    );
  });

  return (
    <div className="tomato-list">
      {list}
    </div>
  );
};

export default TomatoList;