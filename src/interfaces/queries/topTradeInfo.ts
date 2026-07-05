import { Maybe, Scalars } from "../index.js";
import { paginatorInfo } from "../other/index.js";

export type topTradeInfoPaginator = {
    __typename?: 'topTradeInfoPaginator'
    paginatorInfo: paginatorInfo
    data: topTradeInfo
}

export type topTradeInfo = {
    market_index: Maybe<Scalars['Int']>
    resources: resource[]
}

export type resource = {
    resource: Maybe<Scalars['String']>
    average_price: Maybe<Scalars['Int']>
    best_buy_offer: Maybe<resourceInfo>,
    best_sell_offer: Maybe<resourceInfo>,
}

export type resourceInfo = {

}