import { Maybe, Scalars } from "../index.js"
import { nation } from "./nation.js"

export type apiKeyDetails = {
    __typename?: 'apiKeyDetails'
    nation?: Maybe<nation>
    key: Maybe<string>
    requests: Maybe<Scalars['Int']>
    max_requests: Maybe<Scalars['Int']>
    permission_bits: Maybe<Scalars['Int']>
}