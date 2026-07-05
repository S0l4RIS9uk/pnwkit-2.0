import { Scalars } from "../index.js"
import { paginatorInfo } from "../other/index.js"
import { taxBracket } from "../queries/bank.js"


export type deleteTaxBracketPaginator = {
    __typename?: 'DeleteTaxBracketPaginator'
    paginatorInfo: paginatorInfo
    data: taxBracket
}


export type mutationDeleteTaxBracketArgs = {
    id: Scalars['Int']
}