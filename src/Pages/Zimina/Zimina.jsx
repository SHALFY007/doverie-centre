import './Zimina.css'

function Zimina() {

    return (
        <main className="specialist">
            <section className="specialist_name_block">
                <div className="container specialist_top_container">
                    <img src="./img/zimina.png" alt="" className="specialist_img" />
                    <h1 className="specialist_header">Зимина Вероника Ильинична</h1>
                </div>
            </section>
            <div className="container specialist_container">
                <p className="specialist_txt">
                Психолог, гештальт-терапевт, супервизор, тренер психотерапевтических и супервизорских групп, специалист по психосоматике и EMDR, профайлер-верификатор.                </p>
                
                <ul className="specialist_list">
                    <li className="specialist_list_mini">Стоимость консультации (55 мин): 10 000 руб.</li>
                </ul>
                <p className="specialist_txt">
                «25 лет назад мое увлечение психологией стало неотъемлемой частью жизни. Я до сих пор люблю свою работу. Для меня психотерапия – это со-творчество, в котором я использую весь свой опыт, знания, сочетание различных методик и техник на благо клиента. А клиент, в свою очередь, берет на себя ответственность за своевременное посещение встреч и за собственное развитие. Я искренне считаю, что помочь можно только тому, кто этого хочет. Можно не знать, чего именно хочется, или что вы желаете изменить – достаточно того, что на первой встрече вы скажете: «Жить, как раньше, больше не могу и не хочу, а как по-другому – не знаю и не умею». Обязательно приходите, и у нас все сложится»! </p>            </div>
        </main>
    )
}

export default Zimina