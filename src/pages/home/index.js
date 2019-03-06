import React,{PureComponent} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
    Banner
} from './style';
import Slider from 'react-slick';


class Home extends PureComponent{
    
    handleScrollTop(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    render (){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000
          };
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Banner>
                        <Slider {...settings}>
                            <div>
                                <img className="banner-img" src='//upload.jianshu.io/admin_banners/web_images/4587/37a0abd67a60ad056442c351f94bc781eb36c704.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt="简书助力互加计划" />
                            </div>
                            <div>
                                <img className="banner-img" src='//upload.jianshu.io/admin_banners/web_images/4581/7d2de2315ecbba908b85d9278f5e96896027f28a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt="简书助力互加计划" />
                            </div>
                            <div>
                                <img className="banner-img" src='//upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt="简书助力互加计划" />
                            </div>
                            <div>
                                <img className="banner-img" src='//upload.jianshu.io/admin_banners/web_images/4584/fab2b75c99249e7c0c2a64a0e1dceb1127be254c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt="简书助力互加计划" />
                            </div>
                            <div>
                                <img className="banner-img" src='//upload.jianshu.io/admin_banners/web_images/4586/2eff4db8c6dac6253049da311e4f65359e075775.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt="简书助力互加计划" />
                            </div>
                        </Slider>
                    </Banner>
                    <Topic>Topic</Topic>
                    <List>List</List>
                </HomeLeft>
                <HomeRight>
                    <Recommend>Recommend</Recommend>
                    <Writer>Writer</Writer>
                </HomeRight>
                {
                    this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回顶部</BackTop>:null
                }
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    commponemtWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopshow);

    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopshow);
    }

}

const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
});
const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopshow(){
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});
export default connect(mapState,mapDispatch)(Home);