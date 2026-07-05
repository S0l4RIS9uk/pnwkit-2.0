import { Maybe, Scalars } from "../index.js"

export type color = {
    __typename?: 'color'
    color?: Maybe<Scalars['String']>
    bloc_name?: Maybe<Scalars['String']>
    turn_bonus?: Maybe<Scalars['Int']>
}