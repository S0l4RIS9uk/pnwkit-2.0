import { Scalars } from "../index.js";
import { paginatorInfo } from "../other/index.js";
import { treaty } from "../queries/treaty.js";

export type cancelTreatyPaginator = {
    __typename?: 'cancelTreatyPaginator'
    paginatorInfo: paginatorInfo
    data: treaty
}

export type mutationCancelTreatyArgs = {
    id: Scalars['ID']
}