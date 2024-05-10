'use client'

const { Toaster } = require("react-hot-toast")

const Providers = ({children}) => {
    return(
        <>
            <Toaster position="top-center"/>
            {children}
        </>
    )
}

export default Providers