import './Volohov.css'

function Volohov() {

    return (
        <main className="specialist">
            <section className="specialist_name_block">
                <div className="container specialist_top_container">
                    <img src="./img/volohov.png" alt="" className="specialist_img" />
                    <h1 className="specialist_header">Волохов Дмитрий Вячеславович</h1>
                </div>
            </section>
            <div className="container specialist_container">
                <p className="specialist_txt">
                Магистр психологии, клинический психолог, семейный психотерапевт, научный сотрудник Федерального центра по развитию общего и инклюзивного образования МГППУ
                </p>
                <p className="specialist_txt">
                Стоимость консультации:</p>
                <ul className="specialist_list">
                    <li className="specialist_list_mini">индивидуальный прием (55 мин) = 4 200 руб.;</li>
                    <li className="specialist_list_mini">семейный прием (1,5 часа) = 8 000 руб.</li>
                </ul>
                <p className="specialist_txt">
                «Меня вдохновляет личность Человека. В работе с клиентами я стремлюсь к раскрытию их личностного потенциала, расширению представлений о себе и своих возможностях».                </p>
            </div>
        </main>
    )
}

export default Volohov