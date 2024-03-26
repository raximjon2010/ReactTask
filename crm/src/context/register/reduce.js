export const initial = 0;

export const funcRegister = (state, action) => {
    switch (action.type) {
        case 'onData': 
        let {name, pasword, res, setActive, setisActive, setborderInput} = action.payload;
          return name.toUpperCase().toLowerCase() === 'Rahimjon'.toUpperCase().toLowerCase() && pasword === res ? 
              setActive('analitika')
              :
              setisActive("Sizning ma'lumotlaringiz noto'g'ri"),
              setborderInput(false)
              case 'view' : 
              let {isView, setisView} = action.payload
              return setisView(!isView)
    }
};