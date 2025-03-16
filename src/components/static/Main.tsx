import Header from "./Header"
import Menu from "./Menu"
import style from "./main.module.sass"






function Main() {

    return (
        <>
            <div className={style.main__wrapper}>
                <div className={style.header__line}>
                    <Header />
                </div>

                <Menu />
            </div>
        </>
    )
}

export default Main
