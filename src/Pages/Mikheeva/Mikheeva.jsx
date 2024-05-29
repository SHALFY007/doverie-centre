import './Mikheeva.css'

function Mikheeva() {

    return (
        <main className="specialist">
            <section className="specialist_name_block">
                <div className="container specialist_top_container">
                    <img src="./img/mikheeva.jpg" alt="" className="specialist_img" />
                    <h1 className="specialist_header">Михеева Светлана Ивановна</h1>
                </div>
            </section>
            <div className="container specialist_container">
                <p className="specialist_txt">
                Психолог, гештальт-терапевт, детский психолог, семейный психолог.                </p>
                <ul className="specialist_list">
                    <li className="specialist_list_mini">Стоимость консультации (55 мин): 3 500 руб.    </li>
                </ul>
                <p className="specialist_txt">
                «Из более чем 10-летнего опыта работы я активно практикую метод арт-терапии — считаю его наиболее бережным и глубоким. Он позволяет выразить себя через искусство и метафоры, а в процессе консультации проработать эти метафоры и осознать их». </p>            </div>
        </main>
    )
}

export default Mikheeva