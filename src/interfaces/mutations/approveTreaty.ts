import { Scalars } from "../index.js";
import { paginatorInfo } from "../other/index.js";
import { treaty } from "../queries/treaty.js";

export type approveTreatyPaginator = {
    __typename?: 'approveTreatyPaginator'
    paginatorInfo: paginatorInfo
    data: treaty
}

export type mutationApproveTreatyArgs = {
    id: Scalars['ID']
}