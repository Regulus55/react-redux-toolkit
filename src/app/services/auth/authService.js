import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7070/api",
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token
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