import { Maybe, Scalars } from "../index.js"
import { paginatorInfo } from "../other/index.js"
import { bankrec } from "../queries/bank.js"

export type bankDepositPaginator = {
    __typename?: 'bankDepositPaginator'
    paginatorInfo: paginatorInfo
    data: bankrec
}

export type mutationbankDepositArgs = {
    money?: Maybe<Scalars['Float']>
    coal?: Maybe<Scalars['Float']>
    oil?: Maybe<Scalars['Float']>
    uranium?: Maybe<Scalars['Float']>
    iron?: Maybe<Scalars['Float']>
    bauxite?: Maybe<Scalars['Float']>
    lead?: Maybe<Scalars['Float']>
    gasoline?: Maybe<Scalars['Float']>
    munitions?: Maybe<Scalars['Float']>
    steel?: Maybe<Scalars['Float']>
    aluminum?: Maybe<Scalars['Float']>
    food?: Maybe<Scalars['Float']>
    note?: Maybe<Scalars['String']>
  }