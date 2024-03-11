export const initial = false;

const ActiveF = (state,action) => {
    switch(action.type) {
        case 'open' :return true
        case 'close': return false
        default: state
    }
}
export default ActiveF