export const initial = 0;

export const resetFunc = (state, action) => {
    switch(action.type) {
        case 'Next' : 
        const {number, setBorder, setActive} = action.payload
        if (!number || number < 9) {
           return setBorder(true)
        }
        else{
            setActive('verfication');
           return setBorder(false)
        }
    }
}