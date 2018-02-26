import * as Types from "../const/ActionTypes";
import * as Methods from "../const/http/HttpMethods";
import {API_PROJECT_FETCH} from "../const/ApiPath";
import {API_CALL} from "../const/ActionTypes";
import {api} from "./api/Api";
import {METHODS_CALL} from "../const/ActionTypes";

export function fetchProjectData(data) {
    return {
        type: API_CALL,
        actions: [Types.FETCH_PROJECT_DATA_REQUEST, Types.FETCH_PROJECT_DATA_SUCCESS, Types.FETCH_PROJECT_DATA_ERROR],
        promise: api(API_PROJECT_FETCH, Methods.POST, data)
    }
}