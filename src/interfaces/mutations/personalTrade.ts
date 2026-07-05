import { Scalars } from "../index.js";
import { paginatorInfo } from "../other/index.js";
import { trade } from "../queries/trade.js";

export type acceptPersonalTradePaginator = {
    __typename?: 'acceptPersonalTradePaginator'
    paginatorInfo: paginatorInfo
    data: trade
}

export type declinePersonalTradePaginator = {
    __typename?: 'declinePersonalTradePaginator'
    paginatorInfo: paginatorInfo
    data: trade
}


export type mutationacceptPersonalTradeArgs = {
    id: Scalars['Int']
    offer_amount: Scalars['Int']
}

export type mutationDeclinePersonalTradeArgs = {
    id: Scalars['Int']
}