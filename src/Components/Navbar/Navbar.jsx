import style from './Navbar.module.css';
function Navbar({ name, age }) {

    return (
        <div className={style.test}>
            <h2>hello {name} you are {age}</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}
export default Navbar;