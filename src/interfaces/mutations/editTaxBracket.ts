import { Scalars } from "../index.js"
import { paginatorInfo } from "../other/index.js"
import { taxBracket } from "../queries/bank.js"

export type mutationEditTaxBracketArgs = {
    id: Scalars['ID']
    name: Scalars['String']
    money_tax_rate?: Scalars['Int']
    resource_tax_rate?: Scalars['Int']
}

export type editTaxBracketPaginator = {
    __typename?: 'editTaxBracketPaginator'
    paginatorInfo: paginatorInfo
    data: taxBracket
}