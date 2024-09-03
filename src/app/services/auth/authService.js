import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7070/api",
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.userToken
            console.log('8888888888888',token)
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
                return headers
            }
        }
    }),
    endpoints: (build) => ({
        getDetails: build.query({
            query: () => ({
                url: "/auth",
                method: "GET",
            })
        })
    })
})

export const {useGetDetailsQuery} = authApi