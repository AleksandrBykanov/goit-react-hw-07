import css from "../ContactList/ContactList.module.css"
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import {  deleteContact } from "../../redux/contactsOps";


const ContactList = () => {
  const dispatch = useDispatch();

  const selectContacts = useSelector((state)=> state.contacts.contacts.items);
  const selectNameFilter = useSelector((state)=>state.filters.filters.name)

  const filterItems = selectContacts.filter((item) => item.name.toLowerCase().includes(selectNameFilter.toLowerCase()));
  
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
