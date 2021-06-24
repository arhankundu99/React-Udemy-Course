import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const {isLoading, error, sendRequest} = useHttp();

  const enterTaskHandler = async (taskText) => {
      const requestConfig = {
        url: 'https://react-http-74835-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
            'Content-Type': 'application/json',
        }
      }
      const applyData = (data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
  
        props.onAddTask(createdTask);
      }
      sendRequest(requestConfig, applyData);
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
