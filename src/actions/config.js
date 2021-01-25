import store from '../store';
import { SET_SCREEN_WIDTH,SHOW_PROFILE_UPDATE_PAGE } from './actionTypes';


const updateScreenSize = async (data) => {
  await store.dispatch({ type: SET_SCREEN_WIDTH, payload: data });
};

const toggleProfilePage = () => {

}
export default updateScreenSize;
