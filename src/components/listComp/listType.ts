
export type bodyType = {
    rowName: string
    salary: number
    equipmentCosts: number
    overheads: number
    estimatedProfit: number
    parentId: number | null
}
export type ListItemTypeProps = {
    editmode?: boolean
    child?: boolean
    addNewRow: (parantId: number, editMode: boolean | undefined) => Promise<void>
    deletRow: (rowId: number) => void
    getRows: () => void
    item: itemType
    level?: number
    isLastChild?: boolean
    setCreatetTime: (arg: boolean)=> void
}
export type itemType = {
    child: Array<itemType>
    equipmentCosts: number
    estimatedProfit: number
    id: number
    machineOperatorSalary: number
    mainCosts: number
    materials: number
    mimExploitation: number
    overheads: number
    rowName: string
    salary: number
    supportCosts: number
    total: number
}