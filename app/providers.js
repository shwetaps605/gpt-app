'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

const { Toaster } = require("react-hot-toast")

const Providers = ({children}) => {

    const [ queryClient ] = useState(
        () => new QueryClient(
                {
                    defaultOptions: {
                        queries: {
                            staleTime: 30 * 1000
                        }
                }
            }
        )
    )
   
    return(
        <QueryClientProvider client={queryClient}>
            <Toaster/>
            {children}
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
        
    )
}

export default Providers;