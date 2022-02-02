// 리듀서 함수 만들기

/* 액션 타입 정의 */
const TODO_INSERT = "TODO/INSERT";
const TODO_UPDATE = "TODO/UPDATE";
const TODO_REMOVE = "TODO/REMOVE";
const TODO_TOGGLE = "TODO/TOGGLE";
const TODO_SET = "TODO/SET";

/* 액션 생성 함수 */
export const todoInsert = (id, text) => {
    return {
        type : TODO_INSERT,
        payload : {
            id : id,
            text : text,
            checked : false,
        },
    };
};

export const todoRemove = (id) => {
    return {
        type: TODO_REMOVE,
        payload : {id : id},
    };
};

export const todoUpdate = (id, text) => {
    return {
        type: TODO_UPDATE,
        payload : {id :id, text : text}
    };
};
export const todoToggle = (id) => {
    return {
        type : TODO_TOGGLE,
        payload : {id: id}
    };
};

export const todoSetUpdate = (id) => {
    return {
        type : TODO_SET,
        payload : {id : id}
    };
};

/* 초기상태 */

const initState= {
    todos : [
        {
            id:1,
            text : 'todo-list With Redux!',
            checked : false,
            updated : false,
        },
    ]
};

/* 리듀서 생성 */
const todoReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case TODO_INSERT :
            return {
                ...state,
                todos: state.todos.concat({
                    id : payload.id,
                    text : payload.text,
                    checked : false,
                }),
            };
        case TODO_REMOVE:
            return {
                ...state,
                todos : state.todos.filter((todo) => todo.id !== payload.id),
            };
        case TODO_UPDATE:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === payload.id ? {...todo, text: payload.text} : todo),
            };
        case TODO_TOGGLE:   
            return {
                ...state,
                todos : state.todos.map((todo) => todo.id === payload.id ? {...todo, checked : !todo.checked} : todo),
            };
        case TODO_SET :
            return {
                ...state,
                todos : state.todos.map((todo) => todo.id === payload.id ? {...todo, updated : !todo.updated} : todo),
            } 
        default :
            return {...state}
    }
}

export default todoReducer;