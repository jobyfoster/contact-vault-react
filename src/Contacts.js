const Contacts = (
    {
        contacts, 
        setEditedName, 
        setEditedDescription, 
        setEditedEmail, 
        setEditedPhone,
        removeContact, 
        handleEdit, 
        editIndex, 
        setEditIndex,
        searchTerm
    }) => {

        if (contacts.length === 0) {                //if no contacts
            return (
                <h5>No contacts saved.</h5>
            );
        } else {                                    //if we have contacts stored
            let hasVisibleCards = false;
        
            return (
                <>
                    {contacts.map((card, index) => {
                        if (
                          searchTerm &&                                                         //if the user has not typed something into the searchbar
                          !card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&        //if the searchTerm is not found in the card name
                          !card.description.toLowerCase().includes(searchTerm.toLowerCase())    //if the searchTerm is not found in the card description
                        ) {
                          return null;                                                          //return null
                        }
        
                        hasVisibleCards = true;
        
                        return (
                            <div className='contact-card' key={index}>
                                {editIndex === index ? (                                        //checks if the current card is being edited
                                    <>
                                        <input
                                            className='edit-card-input edit-card-name'
                                            type="text"
                                            placeholder={card.name}
                                            onChange={(e) => setEditedName(e.target.value)}
                                            maxLength={25}
                                            size={12}
                                            required
                                        />
                                        <input
                                            className='edit-card-input'
                                            type="text"
                                            placeholder={card.description}
                                            onChange={(e) => setEditedDescription(e.target.value)}
                                            maxLength={40}
                                            size={20}
                                            required
                                        />
                                        <input
                                            className='edit-card-input'
                                            type="email"
                                            placeholder={card.email}
                                            onChange={(e) => setEditedEmail(e.target.value)}
                                            maxLength={100}
                                            size={20}
                                        />
                                        <input
                                            className='edit-card-input'
                                            type="tel"
                                            placeholder={card.phone}
                                            onChange={(e) => setEditedPhone(e.target.value)}
                                            maxLength={15}
                                            size={15}
                                        />
                                        <button type="submit" className='save-button' onClick={(e) => handleEdit(index)}>Save</button>
                                    </> 
                                ) : (
                                    <>
                                        <h4 className='card-full-name'>{card.name}</h4>
                                        <p className="card-description">{card.description}</p>
                                        <a className='card-email' href={`mailto:${card.email}`}>{card.email}</a>
                                        <p>{card.phone}</p>

                                        <div className="edit-and-delete-btns">
                                            <button className="edit-button" onClick={() => {
                                                setEditIndex(index);
                                            }}>Edit</button>

                                            <div onClick={() => {
                                                removeContact(index)
                                            }}className="delete-icon">&#x2715;</div>
                                        </div>
                                        
                                    </>
                                )}
                                    </div>
                                );
                            }
                        )
                    }
                    {!hasVisibleCards && <h5>No business cards match your search.</h5>}
                </>
            );
        }
        
};

export default Contacts;