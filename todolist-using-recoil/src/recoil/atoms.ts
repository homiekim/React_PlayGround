import { atom, selector } from "recoil";
import { todoType } from "../typings/todo";

export const todoAtom = atom<Array<todoType>>({
  key: "todolist",
  default: [],
});

export const statusAtom = atom<string>({
  key: "status",
  default: "All",
});

export const filterSelector = selector({
  key: "fliterTodoList",
  get: ({ get }) => {
    const status = get(statusAtom);
    const todolist = get(todoAtom);
    if (status === "All") {
      return todolist;
    } else if (status === "Done") {
      return todolist.filter((v) => v.isDone === true);
    } else {
      return todolist.filter((v) => v.isDone === false);
    }
  },
  set:({get, set})=>{
    const doneList = get(todoAtom).map(v => v.isDone ? v : {...v, isDone :true});
    set(todoAtom, doneList);
  }
});




// export const addSelector = selector<Array<todoType>>({
//   key:'addSelector',
//   get:({get}) => {
//     return get(todoAtom);
//   },
//   set:({get, set}, newValue) =>{
//     const prevArray = get(todoAtom);

//     }
//     set(todoAtom, prevArray.concat(newValue[0]));
//   }
// });

// export const AddTodo = (newTodo: todoType) =>
//   useRecoilCallback(({ snapshot, set }) => (newTodo:todoType) => {
//     const prevTodolist = snapshot.getLoadable(todoAtom).getValue();
//     set(todoAtom, [...prevTodolist, newTodo])
//   },[todoAtom]);

// interface ActionType {
//   type: string;
//   data: any;
// }

// // eslint-disable-next-line react-hooks/rules-of-hooks
// export const reducer = useRecoilTransaction_UNSTABLE(
//   ({ get, set }) =>
//     (action: ActionType) => {
//       switch (action.type) {
//         case "addTodo":
//           const prevTodo = get(todoAtom);
//           set(todoAtom,[...prevTodo, action.data])
//           break;
//         default:
//           return;
//       }
//     }
// );
