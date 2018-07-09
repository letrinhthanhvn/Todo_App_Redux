import { createStore, combineReducers } from 'redux'

const defaultArrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
    { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
    { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
    { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
    { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
    { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
    { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
    { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
    { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
]


// reducer 

//   const reducer = (state = defaultState, action) => {

//     switch (action.type) {
//       case "FILTER_SHOW_ALL":
//         return { ...state, filterStatus: "SHOW_ALL" }

//       case "FILTER_MEMORIZED":
//         return { ...state, filterStatus: "MEMORIZED" }

//       case "FILTER_NEED_PRACTICE":
//         return { ...state, filterStatus: "NEED_PRACTICE" }

//       case "TOGGLE_MEMORIZED":
//         return {
//           ...state,
//           arrWords: state.arrWords.map( item => {
//             if (item.id !== action.id) return item;
//             return { ...item, 
//               memorized: !item.memorized, 
//             }
//           }),
//           // memorized: !state.memorized
//         }

//       case "TOGGLE_IS_ADDING":
//         return {
//           ...state,
//           isAdding: !state.isAdding
//         }

//         case "TOGGLE_SHOW":
//         return {
//           ...state,
//           arrWords: state.arrWords.map( item => {
//             if (item.id !== action.id) return item;
//             return { ...item, 
//               isShow: !item.isShow, 
//             }
//           }),
//         }

//       case "ADD_WORD": 
//         return {
//           ...state,
//           arrWords: [{
//             id: state.arrWords.length + 1,
//             en: action.en,
//             vn: action.vn,
//             memorized: false,
//             isShow: false
//           }].concat(state.arrWords)
//         }

//       default:
//         break
//     }

//     return state
//   }


const isAddingReducer = (state = false, action) => {
    if (action.type === "TOGGLE_IS_ADDING") return !state

    return state
}

const filterStatusReducer = (state = "SHOW_ALL", action) => {
    if (action.type === "FILTER_SHOW_ALL") return "SHOW_ALL"
    if (action.type === "FILTER_MEMORIZED") return "MEMORIZED"
    if (action.type === "FILTER_NEED_PRACTICE") return "NEED_PRACTICE"
    return state
}

const arrWordsReducer = (state = defaultArrWords, action) => {
    if (action.type === "ADD_WORD") {
        return
        [{
            id: state.length + 1,
            en: action.en,
            vn: action.vn,
            memorized: false,
            isShow: false
        }].concat(state)
    }

    if (action.type === "TOGGLE_SHOW") {
        return state.map(item => {
            if (item.id !== action.id) return item;
            return {
                ...item,
                isShow: !item.isShow
            }
        })
    }

    if (action.type === "TOGGLE_MEMORIZED") {
        console.log("state", state)
        return state.map(item => {
            if (item.id !== action.id) return item;
            return {
                ...item,
                memorized: !item.memorized
            }
        })
    }

    return state
}


// tao ra store

const reducer = combineReducers({
    isAdding: isAddingReducer,
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer
})

const store = createStore(reducer)

// tich hop vao trong ung dung react 

export default store


