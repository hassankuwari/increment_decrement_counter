export const incNumber = (num) => ({
    type: "INCREMENT",
    payload: num
})


export const decNumber = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}