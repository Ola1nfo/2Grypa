import ContactItem from "../../components/ContactItem/ContactItem"
import SideBar from "../../components/SideBar/SideBar"

export default function ContactList({ stor, deleteContact }) {
    return (
        <div className="container rounded bg-white shadow-lg">
            <div className="row">
                <div className="col-4">
                    <SideBar stor={stor} />
                </div>
                <div className="col-8">
                    <ContactItem stor={stor} deleteContact={deleteContact} />
                </div>
            </div>
        </div>
    )
}