import Link from "../../atoms/Link/Link";

function Header(props) {
    return (
      <div>
        <header>
          <h1>{props.logo}</h1>
          <nav>
            <ul>
              <li>
                <Link href='/' text='Dodaj nowy post'/>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
  
  export default Header;
  