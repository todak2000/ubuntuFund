import algoliasearch from "algoliasearch";
import algoliarecommend from '@algolia/recommend'



const appID = `${process.env.ALGOLIA_APP_ID}`;
const appKey = `${process.env.ALGOLIA_APP_KEY}`;

export const AlgoliaClient = algoliasearch(appID, appKey);
export const AlgoliaSuggestClient = algoliarecommend(appID, appKey);
