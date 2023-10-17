import './App.css';
import uploadIcon from './img/upload.png';
import { useEffect, useState } from "react";
import Cards from './Cards';

function App() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedCards = localStorage.getItem("businessCards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { name, description, email, phone };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem("businessCards", JSON.stringify(updatedCards));

    setName("");
    setDescription("");
    setEmail("");
    setPhone("");
  };

  const handleEdit = (indexToEdit) => {
    const updatedCards = [...cards];
    const originalCard = {...updatedCards[indexToEdit]};
  
    const newCard = {
      name: editedName ? editedName : originalCard.name,
      description: editedDescription ? editedDescription : originalCard.description,
      email: editedEmail ? editedEmail : originalCard.email,
      phone: editedPhone ? editedPhone : originalCard.phone
    };
  
    updatedCards[indexToEdit] = newCard;
    
    setCards(updatedCards);
    localStorage.setItem("businessCards", JSON.stringify(updatedCards));
  
    setEditedName("");
    setEditedDescription("");
    setEditedEmail("");
    setEditedPhone("");
    setEditIndex(null);
  };
  

  const deleteCard = (indexToDelete) => {
    const updatedCards = cards.filter((_, index) => index !== indexToDelete);
    setCards(updatedCards);
    localStorage.setItem("businessCards", JSON.stringify(updatedCards));
  };

  return (
    <>
      <form className='navbar' onSubmit={handleSubmit}>
        <input
          className='new-card-input'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={25}
          size={16}
          required
        />
        <input
          className='new-card-input'
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={40}
          size={30}
          required
        />
        <input
          className='new-card-input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={100}
          size={25}
        />
        <input
          className='new-card-input'
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={15}
          size={20}
        />
        <button type="submit" className='new-card-button'><img  className='upload-icon' src={uploadIcon} alt="upload icon" /></button>
      </form>
      <div className="cards-area">
        <h3>({cards.length}) Business Cards</h3>
        <div className='cards'>
          <Cards                                        //likely could have done this better
          cards={cards}                                 //but screw it lol
          setEditedName={setEditedName}
          setEditedDescription={setEditedDescription}
          setEditedEmail={setEditedEmail}
          setEditedPhone={setEditedPhone}
          removeCard={deleteCard}
          handleEdit={handleEdit}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          />
        </div>
      </div>
    </>
  );
}

export default App;