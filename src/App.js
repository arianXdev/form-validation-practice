import { useState } from "react";
import { mainFormSchema } from "./validations/mainValidation";

import "./App.css";

const App = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleSubmitForm = (event) => {
		event.preventDefault();

		console.log(`${firstName} ${lastName}`);
	};

	return (
		<main className="App">
			<div className="container w-full">
				<div className="flex flex-col items-center p-3">
					<h1 className="text-2xl font-black text-black">Form Validation using Yup + Formik</h1>

					<br />

					<form onSubmit={handleSubmitForm}>
						<div className="overflow-hidden drop-shadow-2xl rounded-3xl">
							<div className="bg-white px-4 py-5 sm:p-6">
								<div className="grid grid-cols-6 gap-6">
									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
											First name
										</label>
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											value={firstName}
											onChange={(e) => setFirstName(e.target.value)}
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
											Last name
										</label>
										<input
											type="text"
											name="last-name"
											id="last-name"
											value={lastName}
											onChange={(e) => setLastName(e.target.value)}
											autoComplete="family-name"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<input
											type="text"
											name="full-name"
											id="full-name"
											autoComplete="family-name"
											disabled
											placeholder="Full Name"
											value={firstName === "" && lastName === "" ? "Full Name" : `${firstName} ${lastName}`}
											className="mt-1 block w-full rounded-md border-gray-200 text-stone-800 shadow-sm sm:text-sm disabled:opacity-75"
										/>
									</div>

									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
											Email address
										</label>
										<input
											type="text"
											name="email-address"
											id="email-address"
											autoComplete="email"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="country" className="block text-sm font-medium text-gray-700">
											Country
										</label>
										<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-teal-400 sm:text-sm"
										>
											<option>United States</option>
											<option>Canada</option>
											<option>Persia</option>
											<option>England</option>
											<option>Germany</option>
											<option>France</option>
										</select>
									</div>

									<div className="col-span-6">
										<label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
											Street address
										</label>
										<input
											type="text"
											name="street-address"
											id="street-address"
											autoComplete="street-address"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-6 lg:col-span-2">
										<label htmlFor="city" className="block text-sm font-medium text-gray-700">
											City
										</label>
										<input
											type="text"
											name="city"
											id="city"
											autoComplete="address-level2"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3 lg:col-span-2">
										<label htmlFor="region" className="block text-sm font-medium text-gray-700">
											State / Province
										</label>
										<input
											type="text"
											name="region"
											id="region"
											autoComplete="address-level1"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3 lg:col-span-2">
										<label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
											ZIP / Postal code
										</label>
										<input
											type="text"
											name="postal-code"
											id="postal-code"
											autoComplete="postal-code"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
									</div>
								</div>
							</div>

							<div className="d-flex justify-center bg-gray-50 px-4 py-3 text-center sm:px-6">
								<button
									type="submit"
									className="w-1/2 inline-flex justify-center rounded-full border border-transparent bg-teal-500 py-2 px-5 text-sm font-black text-white shadow-2xl shadow-teal-200  hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
								>
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default App;
