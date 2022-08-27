import { updateRedux} from './taskSlice'

export const sendRequest = () => {
    return dispatch => {
        dispatch(updateRedux({
            // tasks: [1,2,3],
            // ongoingTasks: [1,2,3],
            // completedTasks: [1,2,3] 
        }))
    }
}