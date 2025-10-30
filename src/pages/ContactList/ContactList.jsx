import ContactItem from "../../components/ContactItem/ContactItem"
import SideBar from "../../components/SideBar/SideBar"

export default function ContactList() {
    return (
        <div className="container rounded bg-white shadow-lg">
            <div className="row">
                <div className="col-4">
                    <SideBar />
                </div>
                <div className="col-8">
                    <ContactItem />
                </div>
            </div>
        </div>
    )
}