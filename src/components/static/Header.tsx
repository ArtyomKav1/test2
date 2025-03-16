import points from "../../assets/points.svg"
import back from "../../assets/back.svg"
import style from "./header.module.sass"

function Header() {

    return (
        <>
            <div className={style.container}>
                <div>
                    <img src={points} alt="" />
                </div>
                <div>
                    <img src={back} alt="" />
                </div>
                <div className={style.header_text}>Просмотр</div>
                <div className={style.header_text}>Управление</div>

            </div>
        </>
    )
}

export default Header