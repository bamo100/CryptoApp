import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'ea8f0a306fmsh03f5a4f6784ccd9p1e0777jsnc111601ec4b1',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const cryptoRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => cryptoRequest(`/coins?limit=${count}`)
        })
    })
});

export const {useGetCryptosQuery} = cryptoApi