import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ea8f0a306fmsh03f5a4f6784ccd9p1e0777jsnc111601ec4b1',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const cryptoRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory ,count}) => cryptoRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;








// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//     params: {textFormat: 'Raw', safeSearch: 'Off'},
//   };