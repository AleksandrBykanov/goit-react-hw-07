import css from "../ContactList/ContactList.module.css"
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import {  deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";


const ContactList = () => {
  const dispatch = useDispatch();
  const filterItems = useSelector(selectFilteredContacts);
  
  const deleteProfile = (profileId) => {
    const thunk = deleteContact(profileId)
    dispatch(thunk)
  };

  return (
    <div>
      <ul className={css.ul}>
        {filterItems.map((item) => (
          <li className={css.li} key={item.id}>
            <Contact number={item.number} name={item.name} deleteProfile={()=>{deleteProfile(item.id)}} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;