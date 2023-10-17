const Cards = (
    {
        cards, 
        setEditedName, 
        setEditedDescription, 
        setEditedEmail, 
        setEditedPhone,
        removeCard, 
        handleEdit, 
        editIndex, 
        setEditIndex
    }) => {

    if (cards.length === 0) {
        return (
            <h5>No business cards saved.</h5>
        );
    } else {
        return (
            <>
                {cards.map((card, index) => (
                    <div className='business-card' key={index}>
                        {editIndex === index ? (
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
                                <button className="edit-button" onClick={() => {
                                    setEditIndex(index);
                                }}>Edit</button>
                                <div onClick={() => {
                                    removeCard(index)
                                }}className="delete-icon">&#x2715;</div>
                            </>
                        )}
                        
                    </div>
                ))}
            </>
        );
    }
};

export default Cards;