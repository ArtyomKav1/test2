import trashChest from "../../assets/list_trashchest.svg"
import icon_item from "../../assets/list_icon.svg"
import style from "./listItem.module.sass"
import { useState } from "react"
import { userAPI } from "../../api/api"
import { itemType, ListItemTypeProps } from "./listType"

function ListItem(props: ListItemTypeProps) {
    const nestingLevel = props.level || 0
    const [editMode, setEditMode] = useState<boolean | undefined>(props.editmode)
    const [rowName, setRowName] = useState<string>("")
    const [salary, setSalary] = useState<number>(0)
    const [equipmentCosts, setEquipmentCosts] = useState<number>(0)
    const [overheads, setOverheads] = useState<number>(0)
    const [estimatedProfit, setEstimatedProfit] = useState<number>(0)
    if (!props.item.rowName && editMode === false) {
        setEditMode(true)
    }
    const handleKeyPress = async (event: { key: string }) => {
        if (event.key === 'Enter') {
            setEditMode(false)
            props.setCreatetTime(false)
            if (!props.item.rowName) {
                const parentId = !props.item.rowName && props.item.id === 0 ? null : props.item.id
                await userAPI.createRow(rowName, salary, equipmentCosts, overheads, estimatedProfit, parentId)
                props.getRows()
            } else {
                const id = props.item.id
                await userAPI.updateRow(rowName, salary, equipmentCosts, overheads, estimatedProfit, id)
                props.getRows()
            }
        }
    };
    function levelH() {
        let count = props.item.child.length
        recurs(props.item.child)

        function recurs(mass: Array<itemType>) {

            for (let i = 0; i < mass.length; i++) {
                if (mass[i].child.length > 0) {
                    count += mass[i].child.length
                    recurs(mass[i].child)
                } else {
                    return
                }

            }
        }


        return count
    }
    const chilwVL = 30 * nestingLevel
    const lineChild: number = levelH() * 65
    return (
        <>
            <div className={style.list__item__wrapper}>
                <div className={style.list} onKeyDown={handleKeyPress} onDoubleClick={() => setEditMode(true)}>
                    <div style={{ marginLeft: chilwVL }}>

                        <div className={`${style.box__options} + ' ' + ${editMode && style.box__options__active}  `} >
                            {props.child && <div className={style.hor__line}></div>}
                            {props.child && <div className={style.vert__line} ></div>}
                            {props.isLastChild === false && <div style={{ height: lineChild, top: "" }} className={style.vert__line__child} ></div>}


                            <img src={icon_item} style={{ cursor: "pointer" }} alt="" onClick={() => props.addNewRow(props.item.id, editMode)} />
                            {!editMode && <img style={{ cursor: "pointer" }} src={trashChest} alt="" onClick={() => props.deletRow(props.item.id)} />}

                        </div>
                    </div>



                    {!editMode ? <div >{props.item.rowName}</div> : <input autoFocus className={style.input} value={rowName} onChange={e => setRowName(e.target.value)} />}
                    {!editMode ? <div >{props.item.salary}</div> : <input className={style.input} value={salary} onChange={e => setSalary(Number(e.target.value))} type="number" pattern="[0-9]*" />}
                    {!editMode ? <div >{props.item.equipmentCosts}</div> : <input className={style.input} value={equipmentCosts} onChange={e => setEquipmentCosts(Number(e.target.value))} type="number" pattern="[0-9]*" />}
                    {!editMode ? <div >{props.item.overheads}</div> : <input className={style.input} value={overheads} onChange={e => setOverheads(Number(e.target.value))} type="number" pattern="[0-9]*" />}
                    {!editMode ? <div >{props.item.estimatedProfit}</div> : <input className={style.input} value={estimatedProfit} onChange={e => setEstimatedProfit(Number(e.target.value))} type="number" pattern="[0-9]*" />}

                </div>
                <div >
                    {props.item.child?.map((itemChild, index: number) => (<div key={index} >
                        <ListItem
                            level={nestingLevel + 1}
                            editmode={false}
                            child={true}
                            addNewRow={props.addNewRow}
                            deletRow={props.deletRow}
                            item={itemChild}
                            getRows={props.getRows}
                            isLastChild={index === props.item.child!.length - 1}
                            setCreatetTime={props.setCreatetTime}
                        />
                    </div>
                    ))}
                </div>
            </div >
        </>
    )
}
export default ListItem

