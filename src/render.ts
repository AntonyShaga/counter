
export const countObj = {
    initialCount: 0,
    reset:0,
    maxCount:5,
    disabledIncrease:false,
    disabledReset:false
}
export type CountObjType = {
    countObj: CountObjectType
}
type CountObjectType =  {
    initialCount: number
    reset: number
    maxCount: number
    disabledIncrease: boolean
    disabledReset: boolean
}