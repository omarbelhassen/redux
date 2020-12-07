import { checkTask } from "../Actions";
import {ADD_TASK,CHECK_TASK,DELETE_TASK,EDIT_TASK,FILTER_TASK,}from"../Constants/index";

const initialState ={ 
    todo: [],
    status:"all",
};

export const reducerTas =(state=initialState,action)=>{
    switch (action.type){
        case ADD_TASK:
            return {...state,todo:[...state.todos,action.payload]};
            case DELETE_TASK:
                return {
                    ...state,
                    todos:state.todos.filter((el)=>el.id !==action.payload),
                };
                case checkTask:
                    return {
                        ...state,todos:state.todos.map((el) =>
                    el.id===action.payload ? {...el,completed: !el.completed}:el
                        ),
                    };
                    case EDIT_TASK :
                        return {
                            ...state,
                            todos:state.todos.map((el)=> 
                            el.id===action.payload.id? {...el, text:action.payload.text}
                        :el
                            ),    
                    };
                    case FILTER_TASK:
                        return {
                            ...state,
                            status: action.payload,

                        };
                        default:
                            return state;
                    }
                };


