import React, {useState, useEffect} from 'react';
import axios from '@/config/axios';
import {useHistory} from 'react-router-dom';
import {Menu, Dropdown} from 'antd/es';
import {DownOutlined} from '@ant-design/icons';
import '@/components/Home/Home.less';
import Todos from '@/components/Todos/Todos';
import Tomatoes from '@/components/Tomato/Tomatoes';
import {Todo, Tomato} from '@/types';
import {initTodos} from '@/redux/actions/todos';
import {connect} from 'react-redux';
import _ from 'lodash';
import {format} from 'date-fns';
import {initTomatoes} from '@/redux/actions/tomatoes';
import Statistics from '@/components/Statistics/Statistics';

interface Use {
  id: number
  name: string
  avatar: string
  extra: string
  account: string
  created_at: Date
  updated_at: Date
  deleted: boolean
}


interface HomeProps {
  initTodos: (todos: Todo[]) => void
  deleted: Todo[]
  completed: Todo[]
  unCompleted: Todo[]
  unfinishedTomatoes: Tomato[]
  abortTomatoes: Tomato[]
  finishedTomatoGroup: {}
  finishedTomatoes: Tomato[]
  initTomatoes: (payload: Tomato[]) => void
}

const Home = (props: HomeProps) => {
  const history = useHistory();

  const [user, setUser] = useState({} as Use);

  const getMe = async () => {
    const response = await axios.get('/me');
    setUser(response.data);
  };

  const getTodo = async () => {
    try {
      const response = await axios.get('todos');
      const todos = response.data.resources.map((t: Todo) =>
        Object.assign({}, t, {editing: false})
      );
      props.initTodos(todos);
    } catch (e) {throw new Error(e);}
  };

  const getTomatoes = async () => {
    try {
      const response = await axios.get('tomatoes');
      const tomatoes = response.data.resources.map((t: Todo) =>
        Object.assign({}, t, {editing: false})
      );
      console.log(tomatoes);
      props.initTomatoes(tomatoes);
    } catch (e) {throw new Error(e);}
  };

  useEffect(() => {
    getMe();
    getTodo();
    getTomatoes();
  }, []);

  const logout = () => {
    localStorage.setItem('x-token', '');
    history.push('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <span>偏好设置</span>
      </Menu.Item>
      <Menu.Item key="2" onClick={logout}>
        <span>登出</span>
      </Menu.Item>
    </Menu>
  );


  return (
    <div className="index">
      <header>
        <h1>Tomatodo</h1>
        <Dropdown overlay={menu} trigger={['click']}>
          <a href=" " className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <span>{user.account}</span><DownOutlined/>
          </a>
        </Dropdown>
      </header>
      <main>
        <Tomatoes finishedTomatoGroup={props.finishedTomatoGroup} unfinishedTomatoes={props.unfinishedTomatoes}/>
        <Todos completed={props.completed} unCompleted={props.unCompleted}/>
      </main>
      <Statistics completed={props.completed}
                  deleted={props.deleted}
                  finishedTomatoGroup={props.finishedTomatoGroup}
                  finishedTomatoes={props.finishedTomatoes}
                  abortTomatoes={props.abortTomatoes}
      />
    </div>
  );
};

const mapStateToProps = (state: { todos: Todo[], tomatoes: Tomato[] }, ownProps: any) => {
  const todos = state.todos;
  const deleted = todos.filter(t => t.deleted);
  const unDeleted = todos.filter(t => !t.deleted);
  const completed = unDeleted.filter(t => t.completed) || [];
  const unCompleted = unDeleted.filter(t => !t.completed) || [];
  const tomatoes = state.tomatoes;
  const abortTomatoes = state.tomatoes.filter(t => t.aborted && !t.ended_at);
  const unfinishedTomatoes = state.tomatoes.filter(t => !t.description && !t.ended_at && !t.aborted);
  const finishedTomatoes = state.tomatoes.filter(t => t.description && t.ended_at && !t.aborted);
  const getfinishedTomatoGroup = () => {
    return _.groupBy(finishedTomatoes, (tomato) => {
      return format(new Date(tomato.started_at), 'yyyy-MM-d');
    });
  };
  const finishedTomatoGroup = getfinishedTomatoGroup();
  return {
    todos,
    deleted,
    completed,
    unCompleted,
    tomatoes,
    unfinishedTomatoes,
    finishedTomatoGroup,
    finishedTomatoes,
    abortTomatoes,
    ...ownProps
  };
};

const mapDispatchToProps = {initTodos, initTomatoes};

export default connect(mapStateToProps, mapDispatchToProps)(Home);








