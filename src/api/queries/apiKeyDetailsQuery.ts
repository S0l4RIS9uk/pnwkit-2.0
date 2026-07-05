import { Kit } from '../../index.js';
import { apiKeyDetails } from '../../interfaces/queries/apiKeyDetails.js';
import GraphQL from '../../services/GraphQL.js';

/**
 * Gets the details of the api key
 * @param {string} query The graphql query to get info with
 * @return {Promise<apiKeyDetails>}
 */
export default async function apiKeyDetailsQuery(
    this: Kit,
    query: string,
): Promise<apiKeyDetails> {
    const res = await GraphQL.makeCall(`
    {
      me {
        ${query}
      }
    }
  `, this.apiKey);

    this.setRateLimit(res.rateLimit);

    return res.data.me as apiKeyDetails;
}
