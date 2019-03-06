import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    topicList:[],
    articalList:[],
    recommendList:[],
    WriterLists:[],
    articalePage:1,
    writerPage:1,
    writerTotalPage:1,
    showScroll:false,
    codeShow:false
});

const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articalList:fromJS(action.articalList),
        recommendList:fromJS(action.recommendList)
     });
};
const addArticaleList=(state,action)=>{
    return state.merge({
        articalList:state.get('articalList').concat(action.list),
        articalePage:action.nextPage
    });
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.ADD_ARTICALE_LIST:
            return addArticaleList(state,action);
        case constants.TOGGLE_TOP_SHOW:
            return state.set('showScroll',action.show);
        case constants.SHOW_CODE:
            return state.set('codeShow',true);
        case constants.DISMISS_CODE:
            return state.set('codeShow',false);
        case constants.CHANGE_WRITERS_DATA:
            return state.merge({
                WriterLists:action.result1,
                writerTotalPage:action.writerTotalPage
            });
        case constants.CHANGE_WRITER_PAGE:
            return state.set('writerPage',action.writerPage);
        default:
            return state;
    }
}