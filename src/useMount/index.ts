import React, { useEffect } from "react"
import { mountFunction } from './type'

export const useMount = (fn: mountFunction) => {

    useEffect(() => {
        fn?.()
    }, [])
}