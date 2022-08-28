import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompletedTasks from './components/CompletedTasks';
import NewTask from './components/NewTask';
import OngoingTasks from './components/OngoingTasks';
import Tasks from './components/Tasks';
import Layout from './components/UI/Layout';
import { sendRequest } from './features/actions';
import { updateRedux } from './features/taskSlice';

let firstLoading = true;

function App() {

  const dispatch = useDispatch();
  const allTasks = useSelector(state => state.tasks)

  useEffect(() => {
    // console.log(localStorage.getItem('tasks'))
    const loadedTasks = (localStorage.getItem('tasks') != 'undefined' || localStorage.getItem('tasks') != null) ? JSON.parse(localStorage.getItem('tasks')) : {
      tasks: [],
      ongoingTasks: [],
      completedTasks: []
    }
    console.log(localStorage.getItem('tasks'))
    console.log(loadedTasks)
    if (loadedTasks !== null) {
      dispatch(updateRedux(loadedTasks))
    }
  }, [])

  useEffect(() => {
    if (!firstLoading) {
      localStorage.setItem('tasks', JSON.stringify(allTasks))
      console.log('Hell0 from 2nd useEffect')
    }
    firstLoading = false;
   
  }, [allTasks])

  return (
    <Layout>
        <div className="App">
          <NewTask />
          <div className="task-wrapper">
              <Tasks />
              <OngoingTasks />
              {/* <CompletedTasks /> */}
          </div>
        </div>
    </Layout>

  );
}

export default App;
