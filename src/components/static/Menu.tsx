import style from "./menu.module.sass"
import arrow from "../../assets/arrow.svg"
import icon_item from "../../assets/icon_item.svg"
import ListWrapper from "../listComp/ListWrapper"
const menuItem = [
    "По проекту",
    "Объекты",
    "РД",
    "МТО",
    "СМР",
    "График",
    "МиМ",
    "Рабочие",
    "Капвложения",
    "Бюджет",
    "Финансирование",
    "Панорамы",
    "Камеры",
    "Поручения",
    "Контрагенты"
]



function Menu() {



    return (
        <>
            <div className={style.main__wrapper}>
                <div className={style.left__wrapper}>
                    <div className={style.menu__title__wrapper}>
                        <div className={style.menu__title__text}>
                            <div className={style.menu__title}>Название проекта</div>
                            <div className={style.menu__sub__title}>Аббревиатура</div>
                        </div>
                        <div><img src={arrow} alt="" /></div>

                    </div>
                    <div className={style.wrapper__item__list}>
                        {
                            menuItem.map((item, ind) => <div key={ind} className={style.menu__item}>
                                <div><img src={icon_item} alt="" /></div>
                                <div> {item}</div>
                            </div>)
                        }
                    </div>
                </div>










                <div className={style.right__wrapper}>
                    <div className={style.right__wrapper__title}>Строительно-монтажные работы</div>
                    <div className={style.line}></div>
                    <div className={style.right__wrapper__info}>
                        <ListWrapper/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu