import { mutationDeclinePersonalTradeArgs, mutationacceptPersonalTradeArgs } from "./mutations/personalTrade.js";
import { mutationApproveTreatyArgs } from "./mutations/approveTreaty.js";
import { mutationAssignTaxBracketArgs } from "./mutations/assignTaxBracket.js";
import { mutationbankDepositArgs } from "./mutations/bankDeposit.js";
import { mutationBankWithdrawArgs } from "./mutations/bankWithdraw.js";
import { mutationCancelTreatyArgs } from "./mutations/cancelTreaty.js";
import { mutationCreateTaxBracketArgs } from "./mutations/createTaxBracket.js";
import { mutationDeleteTaxBracketArgs } from "./mutations/deleteTaxBracket.js";
import { mutationProposeTreatyArgs } from "./mutations/proposeTreaty.js";
import { queryActivityStatsArgs } from "./queries/activityStat.js";
import { queryAlliancesArgs } from "./queries/alliance.js";
import { queryBankrecsArgs } from "./queries/bank.js";
import { queryBannedNationArgs } from "./queries/bannedNation.js";
import { queryBaseballGamesArgs, queryBaseballPlayersArgs, queryBaseballTeamsArgs } from "./queries/baseball.js";
import { queryBountiesArgs } from "./queries/bounty.js";
import { queryCitiesArgs } from "./queries/city.js";
import { queryEmbargoesArgs } from "./queries/embargo.js";
import { queryNationsArgs } from "./queries/nation.js";
import { queryNationResourceStatsArgs } from "./queries/nationResourceStat.js";
import { queryResourceStatsArgs } from "./queries/resourceStat.js";
import { queryTradesArgs } from "./queries/trade.js";
import { queryTradepricesArgs } from "./queries/tradePrice.js";
import { queryTreasureTradesArgs } from "./queries/treasureTrade.js";
import { queryTreatiesArgs } from "./queries/treaty.js";
import { queryWarsArgs } from "./queries/war.js";
import { queryWarattacksArgs } from "./queries/warAttack.js";
import { mutationAssignAlliancePositionArgs, mutationCreateAlliancePositionArgs, mutationDeleteAlliancePositionArgs } from "./mutations/alliancePosition.js";
import { queryBulletinArgs } from "./queries/bulletin.js";
import { queryBulletinReplyArgs } from "./queries/bulletinReplies.js";

export type anyCall =
    queryActivityStatsArgs |
    queryAlliancesArgs |
    queryBankrecsArgs |
    queryBaseballGamesArgs |
    queryBaseballPlayersArgs |
    queryBaseballTeamsArgs |
    queryBountiesArgs |
    queryCitiesArgs |
    queryEmbargoesArgs |
    queryNationsArgs |
    queryResourceStatsArgs |
    queryTradepricesArgs |
    queryTradesArgs |
    queryTreasureTradesArgs |
    queryTreatiesArgs |
    queryWarattacksArgs |
    queryWarsArgs |
    queryBannedNationArgs |
    queryNationResourceStatsArgs |
    mutationbankDepositArgs |
    mutationBankWithdrawArgs |
    mutationApproveTreatyArgs |
    mutationCancelTreatyArgs |
    mutationAssignTaxBracketArgs |
    mutationCreateTaxBracketArgs |
    mutationDeleteTaxBracketArgs |
    mutationProposeTreatyArgs |
    mutationacceptPersonalTradeArgs |
    mutationDeclinePersonalTradeArgs |
    mutationAssignAlliancePositionArgs |
    mutationCreateAlliancePositionArgs |
    mutationDeleteAlliancePositionArgs |
    queryBulletinArgs |
    queryBulletinReplyArgs;

export type Maybe<T> = T | null;

export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTimeAuto: any
    Date: any
    DateTime: any
    DateTimeTz: any
}