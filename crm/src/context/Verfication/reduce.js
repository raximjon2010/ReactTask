export const initial = 0;

export const VeficationFunc = (state, action) => {
  switch (action.type) {
    case 'Next':
      const { code, setBorder, setActive } = action.payload;
      if (!code.length || code.length < 4) {
        setBorder(false)
      } else {
        setBorder(true)
        setActive('newPw')
      }
  }
}