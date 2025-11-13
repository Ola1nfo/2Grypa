export default function SideBar ({stor}) {

    const totalContacts = stor.length
    return (
        <aside className="container border-end shadow">
            <div className="row">
                <div className="col-12">
                    <div className="contacts-labels">
                        <div className="fs-3 mb-5 mt-4 d-flex justify-content-between">
                            <span>Всі контакти:</span><span>{totalContacts}</span>
                        </div>
                        <div className="list fs-5">
                            <div className="d-flex justify-content-between mb-3">
                                <div className="lav lab-success">Work</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}