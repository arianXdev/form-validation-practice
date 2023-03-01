import { useState } from "react";

import { useFormik } from "formik";

import { mainFormSchema } from "./validations/mainValidation";

import "./App.css";

const App = () => {
	const [person, setPerson] = useState({});

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			country: "",
			address: "",
			city: "",
			state: "",
			zipCode: "",
		},
		validationSchema: mainFormSchema,
		onSubmit: (values) => {
			setPerson(values);
			console.log(person);
		},
	});

	return (
		<main className="App">
			<div className="container w-full">
				<div className="flex flex-col items-center p-3">
					<h1 className="text-2xl font-black text-black">Form Validation using Yup + Formik</h1>

					<br />

					<form onSubmit={formik.handleSubmit}>
						<div className="overflow-hidden drop-shadow-2xl rounded-3xl">
							<div className="bg-white px-4 py-5 sm:p-6">
								<div className="grid grid-cols-6 gap-6">
									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
											First name
										</label>
										<input
											type="text"
											name="firstName"
											autoComplete="given-name"
											{...formik.getFieldProps("firstName")}
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
										{formik.touched.firstName && formik.errors.firstName ? <span className="input-error">{formik.errors.firstName}</span> : null}
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
											Last name
										</label>
										<input
											type="text"
											name="lastName"
											{...formik.getFieldProps("lastName")}
											autoComplete="family-name"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
										{formik.touched.lastName && formik.errors.lastName ? <span className="input-error">{formik.errors.lastName}</span> : null}
									</div>

									<div className="col-span-6 sm:col-span-3">
										<input
											type="text"
											name="fullName"
											id="fullName"
											autoComplete="family-name"
											disabled
											placeholder="Full Name"
											value={
												formik.values.firstName === "" && formik.values.lastName === ""
													? "Full Name"
													: `${formik.values.firstName} ${formik.values.lastName}`
											}
											className="mt-1 block w-full rounded-md border-gray-200 text-stone-800 shadow-sm sm:text-sm disabled:opacity-75"
										/>
									</div>

									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="email" className="block text-sm font-medium text-gray-700">
											Email address
										</label>
										<input
											type="text"
											name="email"
											{...formik.getFieldProps("email")}
											autoComplete="email"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
										{formik.touched.email && formik.errors.email ? <span className="input-error">{formik.errors.email}</span> : null}
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="country" className="block text-sm font-medium text-gray-700">
											Country
										</label>
										<select
											name="country"
											autoComplete="country-name"
											{...formik.getFieldProps("country")}
											className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-teal-400 sm:text-sm"
										>
											<option value="">Select a country</option>
											<option value="0">United States</option>
											<option value="1">Canada</option>
											<option value="2">Persia</option>
											<option value="3">England</option>
											<option value="4">Germany</option>
											<option value="5">France</option>
										</select>
										{formik.touched.country && formik.errors.country ? <span className="input-error">{formik.errors.country}</span> : null}
									</div>

									<div className="col-span-6">
										<label htmlFor="address" className="block text-sm font-medium text-gray-700">
											Street address
										</label>
										<input
											type="text"
											name="address"
											{...formik.getFieldProps("address")}
											autoComplete="street-address"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
										{formik.touched.address && formik.errors.address ? <span className="input-error">{formik.errors.address}</span> : null}
									</div>

									<div className="col-span-6 sm:col-span-6 lg:col-span-2">
										<label htmlFor="city" className="block text-sm font-medium text-gray-700">
											City
										</label>
										<input
											type="text"
											name="city"
											{...formik.getFieldProps("city")}
											autoComplete="address-level2"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
										{formik.touched.city && formik.errors.city ? <span className="input-error">{formik.errors.city}</span> : null}
									</div>

									<div className="col-span-6 sm:col-span-3 lg:col-span-2">
										<label htmlFor="state" className="block text-sm font-medium text-gray-700">
											State / Province
										</label>
										<input
											type="text"
											name="state"
											{...formik.getFieldProps("state")}
											autoComplete="address-level1"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
										{formik.touched.state && formik.errors.state ? <span className="input-error">{formik.errors.state}</span> : null}
									</div>

									<div className="col-span-6 sm:col-span-3 lg:col-span-2">
										<label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
											ZIP / Postal code
										</label>
										<input
											type="text"
											name="zipCode"
											{...formik.getFieldProps("zipCode")}
											autoComplete="postal-code"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-400 focus:ring-teal-400 sm:text-sm"
										/>
										{formik.touched.zipCode && formik.errors.zipCode ? <span className="input-error">{formik.errors.zipCode}</span> : null}
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
