import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/taskContextProvider';
//import type { TaskStateModel } from './models/TaskStateModel'; //comentar com o grupo de estudo sobre o uso do import "type"

export function App() {
	return (
		<TaskContextProvider>
			<Home />
		</TaskContextProvider>
	);
}
