import { Scalars } from "../index.js"
import { paginatorInfo } from "../other/index.js"
import { treaty } from "../queries/treaty.js"

export type proposeTreatyPaginator = {
    __typename?: 'proposeTreatyPaginator'
    paginatorInfo: paginatorInfo
    data: treaty
}

export type mutationProposeTreatyArgs = {
    alliance_id: Scalars['ID']
    length: Scalars['Int']
    type: Scalars['String']
    url: Scalars['String']
}