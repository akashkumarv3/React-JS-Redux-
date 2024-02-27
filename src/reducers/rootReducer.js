import nameReeducer from "./nameReducer";
import locReducer from "./locReducer";
import actionReducer from './actionReducer'
import { combineReducers } from "redux";
import { reducer  as form} from "redux-form";
import endToEndReducer  from "./endToEndReducer";

const rootReducer=combineReducers({nameReeducer,locReducer,actionReducer,form,eter:endToEndReducer});

export default rootReducer;