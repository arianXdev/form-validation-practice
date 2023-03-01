import * as Yup from "yup";

export const mainFormSchema = Yup.object().shape({
	firstName: Yup.string().required("Required!"),
	lastName: Yup.string().required("Required!"),
	email: Yup.string().email("Email is invalid!").required("Required!"),
	country: Yup.string().required("Choose a country!"),
	address: Yup.string().notRequired(),
	city: Yup.string().required("Required!"),
	state: Yup.string().required("Required!"),
	zipCode: Yup.number().integer().min(4, "at least 4 characters").required("Required!"),
});
