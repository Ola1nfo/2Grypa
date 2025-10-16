import { Link } from 'react-router-dom'

export default function Header () {
    return (
        <header className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar bg-body-tertiary rounded shadow">
                        <div className="container-fluid">
                            <div className="navbar-brand">
                                <Link to='/' className='navbar-brand'>Contact List</Link>
                                <Link to='/add-contact' className='navbar-brand'>Add Contact</Link>
                            </div>
                            <form className='d-flex' role='search'>
                                <input type="search" className='form-control me-2' placeholder='Search' aria-label='Search'/>
                                <button className='btn btn-outline-success' type='submit'>Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}