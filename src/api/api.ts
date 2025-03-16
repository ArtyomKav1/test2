
import axios from 'axios';

const rootId = { "id": 157500, "rowName": "4a00a801-2bb7-48b6-9730-2a16fa5548c3" }


const instance = axios.create({
    baseURL: "http://185.244.172.108:8081/",
})
// type LoginResponseType = {
//     data: { userId: number }
//     resultCode: ResultCodeEnum
//     messages: Array<string>
// }

// https://185.244.172.108:8081/v1/outlay-rows/entity/157444/row/list

export const userAPI = {
    getRow() {
        return instance.get(`/v1/outlay-rows/entity/${rootId.id}/row/list`)
            .then(response => {
                return response;
            });
    },
    createRow(rowName: string, salary: number, equipmentCosts: number, overheads: number, estimatedProfit: number, parentId: number | null) {
        return instance.post<createRowAPIType>(`v1/outlay-rows/entity/${rootId.id}/row/create`,
            {
                equipmentCosts: equipmentCosts,
                estimatedProfit: estimatedProfit,
                machineOperatorSalary: 0,
                mainCosts: 0,
                materials: 0,
                mimExploitation: 0,
                overheads: overheads,
                parentId: parentId,
                rowName: rowName,
                salary: salary,
                supportCosts: 0
            },
            {
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                return response;
            });
    },
    deletRow(rowId: number) {
        return instance.delete(`v1/outlay-rows/entity/${rootId.id}/row/${rowId}/delete`, {
            headers: {
                'accept': '*/*'
            }
        })
            .then(response => {
                return response;
            });
    },
    updateRow(rowName: string, salary: number, equipmentCosts: number, overheads: number, estimatedProfit: number,  rowId: number) {
        return instance.post<updateRowAPIType>(`v1/outlay-rows/entity/${rootId.id}/row/${rowId}/update`,
            {
                equipmentCosts: equipmentCosts,
                estimatedProfit: estimatedProfit,
                machineOperatorSalary: 0,
                mainCosts: 0,
                materials: 0,
                mimExploitation: 0,
                overheads: overheads,
                rowName: rowName,
                salary: salary,
                supportCosts: 0
            },)
            .then(response => {
                return response;
            });
    },
}



// type getRowAPIType = {

// }
type createRowAPIType = {

}
// type deletRowAPIType = {

// }
type updateRowAPIType = {

}
