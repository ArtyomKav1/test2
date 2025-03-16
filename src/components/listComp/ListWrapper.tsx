
import { userAPI } from "../../api/api"
import ListItem from "./ListItem"
import { itemType } from "./listType"
import style from "./listWrapper.module.sass"
import { useEffect, useState } from "react"
const zeroItem = {
    child: [],
    equipmentCosts: 0,
    estimatedProfit: 0,
    id: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: "",
    salary: 0,
    supportCosts: 0,
    total: 0
}
function ListWrapper() {
    const [dataList, setdataList] = useState<Array<itemType>>([])
    const [createTime, setCreatetTime] = useState<boolean>(false)
    const getRows = async () => {
        let dataApi = await userAPI.getRow()
        setdataList(dataApi.data)
        console.log(dataApi.data)
    }
    useEffect(() => {
        getRows()
    }, [])
    const addNewRow = async (parantId: number, editMode: boolean | undefined) => {
        if (editMode || createTime) return
        const NewRow = JSON.parse(JSON.stringify(zeroItem))
        NewRow["id"] = parantId
        const newPattern = [...dataList, NewRow]
        setdataList(newPattern)
        setCreatetTime(true)
    }
    const deletRow = async (rowId: number) => {
        await userAPI.deletRow(rowId)
        getRows()
    }
    return (
        <>
            <div className={style.list__wrapper}>
                <div className={style.list__header}>
                    <div>Уровень</div>
                    <div>Наименование работ</div>
                    <div>Основная з/п</div>
                    <div>Оборудование</div>
                    <div>Накладные расходы</div>
                    <div>Сметная прибыль</div>
                </div>
                <div className={style.list__main}>
                    {dataList && dataList.length < 1 &&
                        < ListItem
                            editmode={true}
                            addNewRow={addNewRow}
                            deletRow={deletRow}
                            item={zeroItem}
                            getRows={getRows}
                            setCreatetTime={setCreatetTime}
                        />
                    }
                    {
                        dataList && dataList.map((item: itemType, ind: number) => (
                            <div key={ind}>
                                <ListItem
                                    editmode={false}
                                    addNewRow={addNewRow}
                                    deletRow={deletRow}
                                    item={item}
                                    getRows={getRows}
                                    setCreatetTime={setCreatetTime}
                                />
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    )
}

export default ListWrapper
