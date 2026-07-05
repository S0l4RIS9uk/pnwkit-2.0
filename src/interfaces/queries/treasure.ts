import { Maybe, Scalars } from "../index.js"
import { nation } from "./nation.js"

export type treasure = {
    __typename?: 'treasure'
    name?: Maybe<Scalars['String']>
    color?: Maybe<Scalars['String']>
    continent?: Maybe<Scalars['String']>
    bonus?: Maybe<Scalars['Int']>
    spawn_date?: Maybe<Scalars['Date']>
    nation_id: Maybe<Scalars['ID']>
    nation?: Maybe<nation>
  }