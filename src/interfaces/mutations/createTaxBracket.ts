import { Scalars } from "../index.js";
import { paginatorInfo } from "../other/index.js";
import { taxBracket } from "../queries/bank.js";

export type createTaxBracketPaginator = {
    __typename?: 'DeleteTaxBracketPaginator'
    paginatorInfo: paginatorInfo
    data: taxBracket
  }

export type mutationCreateTaxBracketArgs = {
    name: Scalars['String']
    money_tax_rate: Scalars['Int']
    resource_tax_rate: Scalars['Int']
  }