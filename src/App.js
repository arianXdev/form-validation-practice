import { mainFormSchema } from "./validations/mainValidation";

import "./App.css";

const App = () => {
	return (
		<main className="App">
			<div className="container w-full">
				<div className="flex flex-col items-center p-3">
					<h1 className="text-2xl font-black">Form Validation using Yup + Formik</h1>
				</div>
			</div>
		</main>
	);
};

export default App;
