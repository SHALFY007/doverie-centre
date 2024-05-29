import './Footer.css'


function Footer() {

    return (
        <footer className="footer">
            <div className="container footer_container">
                <a href="" className="footer_link">
                    <h4 className="footer_header">Наши контакты</h4>
                </a>
                <b>
                    <p className='footer_txt'>
                        Адрес: г. Москва, ул. Большая Серпуховская, д 48. <br />
                        Телефон: +7 (495) 218-71-21, +7(926)218-71-21 <br />

                        E-mail: Doverie@yandex.ru <br />
                        Время работы: с 9:00 до 19:00 без выходных <br />

                    </p>
                </b>
            </div>
        </footer>
    )
}

export default Footer