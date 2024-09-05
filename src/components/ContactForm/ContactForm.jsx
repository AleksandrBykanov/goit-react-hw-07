import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch} from "react-redux";
import { addContact } from "../../redux/contactsOps";


const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Enter the correct number xxx-xxx-xx-xx")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const profile = {
      name: values.name,
      number: values.number,
    };
    addProfile(profile);
    actions.resetForm();
  };

  const addProfile = (profile) => {
  dispatch(addContact(profile))
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name:
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label} htmlFor="number">
          Number:
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="555-555-55-55"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
