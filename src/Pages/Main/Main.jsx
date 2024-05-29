import './Main.css'

function Main() {

    return (
        <main className="main">
            <section className="main_top">
                <div className="container main_top_container">
                    <div className="main_top_block">
                        <h1 className="main_header">Психологический центр «ДОВЕРИЕ»</h1>
                        <h4 className="slogan">Помогаем каждому человеку найти опору в себе самом и полноценно использовать собственный потенциал для обретения личного благополучия.</h4>
                    </div>
                    <img src="./img/img.jpg" alt="img" className="main_img" />
                </div>
            </section>
            <section className="main_description">
                <div className="container main_description_container">
                    <h4 className="main_description_txt">Психологический центр «ДОВЕРИЕ» - команда компетентных психологов- профессионалов, работающих на благо людей.</h4>
                    <h4 className="main_description_txt">Выражаем огромную благодарность нашим клиентам за доверие.</h4>
                </div>
            </section>
            <hr />
            <section className="main_spec">
                <div className="container main_spec_container">
                    <h4 className="main_spec_header">Наши специалисты</h4>
                    <p className="main_spec_txt">
                        <a href="" className="main_spec_link">Волохов Дмитрий Вячеславович </a>(Клинический психолог, телесно-ориентированный психотерапевт, гештальт-терапевт) <br />
                    </p>
                    <p className="main_spec_txt">
                        <a href="" className="main_spec_link">Зимина Вероника Ильинична  </a>(психолог, кризисный терапевт для взрослых, специалист по психосоматике. Консультант для родителей) <br />
                    </p>
                    <p className="main_spec_txt">
                        <a href="" className="main_spec_link">Михеева Светлана Ивановна  </a>(психолог, гештальт-терапевт, детский психолог, семейный психолог)
                    </p>
                </div>
            </section>
            <hr />
        </main>
    )
}

export default Main