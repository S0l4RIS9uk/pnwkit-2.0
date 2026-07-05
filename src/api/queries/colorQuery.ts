import { Kit } from '../../index.js';
import { color } from '../../interfaces/queries/color.js';
import GraphQL from '../../services/GraphQL.js';

/**
 * Gets all color trade blocs
 * @param {string} query The graphql query to get info with
 * @return {Promise<color[]>}
 */
export default async function colorQuery(
    this: Kit,
    query: string,
): Promise<color[]> {
  const res = await GraphQL.makeCall(`
    {
      colors {
        ${query}
      }
    }
  `, this.apiKey);

  this.setRateLimit(res.rateLimit);

  return res.data.colors as color[];
}
