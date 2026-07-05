import { Scalars } from "../index.js";
import { paginatorInfo } from "../other/index.js";
import { taxBracket } from "../queries/bank.js";

export type mutationAssignTaxBracketArgs = {
    id: Scalars['Int']
    target_id: Scalars['Int']
  }

export type assignTaxBracketPaginator = {
    __typename?: 'assignTaxBracketPaginator'
    paginatorInfo: paginatorInfo
    data: taxBracket
}