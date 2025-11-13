export default function ContactItem ({ stor, deleteContact }) {
    
    return (
        <div>
            {stor.map(contact => (
                <div key={contact.id}>
                    <img src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="" />
                    <div>
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                        <p>{contact.status}</p>
                    </div>
                    <button onClick={() => deleteContact(contact.id)}>Видалити</button>
                </div>
            ))}
        </div>
    )
}