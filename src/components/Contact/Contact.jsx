import css from "../Contact/Contact.module.css";

const Contact = ({ number, name, deleteProfile }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button className={css.btn} type="button"
        onClick={() => {deleteProfile()}}>Delete</button>
    </>
  );
};

export default Contact;
