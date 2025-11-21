function Header(){
    return(
        <Header>
            <img src="./assets/react.svg" alt="IEEE logo" className="logo"/>
            <img src="./assets/react.svg" alt="NJIT logo" className="logo"/>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Upcoming Events</a></li>
                    <li><a href="#">Meet the Team</a></li>
                </ul>
            </nav>
        </Header>
    )
}

export default Header