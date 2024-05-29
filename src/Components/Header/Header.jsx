import { useEffect, useRef } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {

    const header = useRef('')
    let position = window.pageYOffset;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.pageYOffset)
            if (window.pageYOffset < 100) {
                document.querySelector('.header').classList.remove('dark')
            } else {
                document.querySelector('.header').classList.add('dark')
            }
        })
    }, [window.pageYOffset])

    return (
        <header className="header" ref={header}>
            <div className="container header_container">
                <div className="logo_block">
                    <img src="./img/logo.png" alt="logo" className="logo" />
                    <h4 className="logo_header">Психологический центр «ДОВЕРИЕ»</h4>
                </div>
                <nav className="navigation">
                    <NavLink to={"/"}>
                        <a href="#" className="link">Главная</a>

                    </NavLink>
                    <NavLink to={"/about"}>
                        <a href="#" className="link">О центре</a>

                    </NavLink>
                    <a href="#" className="link spec_link">Наши специалисты
                        <div className="menu">
                            <NavLink to={'/volohov'}>
                                <a href="#" className="menu_link">Волохов Дмитрий Вячеславович  </a>
                            </NavLink>
                            <NavLink to={'/zimina'}>
                                <a href="#" className="menu_link">Зимина Вероника Ильинична </a>
                            </NavLink>
                            <NavLink to={'/mikheeva'}>
                                <a href="#" className="menu_link">Михеева Светлана Ивановна </a>
                            </NavLink>
                        </div>
                    </a>
                    <NavLink to={'/contacts'}>
                        <a href="#" className="link">Контакты</a>
                    </NavLink>

                </nav>

            </div>
        </header>
    )
}

export default Header