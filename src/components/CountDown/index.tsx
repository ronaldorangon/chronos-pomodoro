import { TaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';
import { useContext } from 'react';

export function CountDown() {
	const taskContext = useContext(TaskContext);
	console.log(taskContext);
	return <div className={styles.container}>00:00</div>;
}
