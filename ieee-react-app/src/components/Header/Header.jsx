import './Header.css'

function Header(){
    
    return(
        <header className='header'>
            <img src="./assets/react.svg" alt="IEEE logo" className="logo"/>
            <img src="./assets/react.svg" alt="NJIT logo" className="logo"/>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Upcoming Events</a></li>
                    <li><a href="#">Meet the Team</a></li>
                </ul>
                <hr></hr>
            </nav>
        </header>
    );

}

export default Header