import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {ListItem,ListInfo,LoadMore} from '../style';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent{
    render (){
        const {articalList,getMoreList,page}=this.props;
        return (
            <div>
                {
                    articalList.map((item,index)=>{
                        return (
                            <Link key={index} to={'/detail/'+item.get('id')}>
                                <ListItem>
                                    <img className="pic" src={item.get('imgUrl')} alt="图片" />
                                    <ListInfo>
                                        <h3 className="titile">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                            
                        )
                    }
                    )
                }
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    articalList:state.getIn(['home','articalList']),
    page:state.getIn(['home','articalePage'])
});
const mapDispatch=(dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
})

export default connect(mapStateToProps,mapDispatch)(List);