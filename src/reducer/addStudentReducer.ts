export const reducer = (state,action)=>{
    console.log(action)
switch(action.type){
    case 'ADD_STUDENT' : {
        return [...state,{id:Date.now(), ...action.payload}]
    }
    case 'EDIT_STUDENT' : {
        return state.map((student)=>(
            action.payload.id === student.id ? {...student, ...action.payload} : student
        ))
    }
    case 'DELETE_STUDENT': {
        return state.filter((student)=>(
            student.id !== action.payload
        ))
    }
    default : {
        return state;
    }
}

}