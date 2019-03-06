import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHomeDataAction=(result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articalList:result.articalList,
    recommendList:result.recommendList
});

export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('./api/homeData.json').then((res)=>{
            const result=res.data.data;
            dispatch(changeHomeDataAction(result));
        }).catch(()=>{
            console.log('error');
        })
    }
}

const addHomeList=(list,nextPage)=>({
    type:constants.ADD_ARTICALE_LIST,
    list:fromJS(list),
    nextPage
});

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('./api/homeList.json?page='+page).then((res)=>{
            const result=res.data.data;
            dispatch(addHomeList(result,(page+1)));
        }).catch(()=>{
            console.log('error');
        })
    }
}

export const toggleTopShow=(show)=>({
    type:constants.TOGGLE_TOP_SHOW,
    show
});

export const toshowCode=()=>({
    type:constants.SHOW_CODE
});
export const todismissCode=()=>({
    type:constants.DISMISS_CODE
})

//关于writers
const changeWritersDataAction=(result1)=>({
    type:constants.CHANGE_WRITERS_DATA,
    result1:fromJS(result1),
    writerTotalPage:Math.ceil(result1.length/5)
});
export const getWriterList=()=>{
    return (dispatch)=>{
        axios.get('./api/writers.json').then((res)=>{
            const result1=res.data.data;
            dispatch(changeWritersDataAction(result1));
        }).catch(()=>{
            console.log('error');
        })
    }
};
export const changeWriterPage=(writerPage)=>({
    type:constants.CHANGE_WRITER_PAGE,
    writerPage
});
