import { Kit } from '../../index.js';
import { topTradeInfo, topTradeInfoPaginator } from '../../interfaces/queries/topTradeInfo.js';
import GraphQL from '../../services/GraphQL.js';

/**
 * Gets a list of trade prices
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true, returns paginator information
 * @return {Promise<topTradeInfo | topTradeInfoPaginator>}
 */
export default async function topTradeInfoQuery(this: Kit, query: string, paginator?: false): Promise<topTradeInfo>;
export default async function topTradeInfoQuery(this: Kit, query: string, paginator: true): Promise<topTradeInfoPaginator>;
export default async function topTradeInfoQuery(
    this: Kit,
    query: string,
    paginator?: boolean,
): Promise<topTradeInfo | topTradeInfoPaginator> {

    const res = await GraphQL.makeCall(`
    {
    top_trade_info {
        ${query}
      }
    }
  `, this.apiKey);

    this.setRateLimit(res.rateLimit);
    
    return res.data.top_trade_info as topTradeInfo;
}
