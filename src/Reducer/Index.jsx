import { Tool, merged } from '../Container/Tool';
/**
 * 存储登录的用户信息
 * 
 * @param {string} [state=JSON.parse(Tool.localItem('User'))]
 * @param {Object} action
 * @returns Object
 */
const User = (state = JSON.parse(Tool.localItem('User')), action) => {

    switch (action.type) {
        case 'signinSuccess': //登录成功
            Tool.localItem('User', JSON.stringify(action.target));
            return action.target;
        case 'signin': //退出
            Tool.removeLocalItem('User');
            return null;
        default:
            return state;
    }

}

const DB = (_ID = '', seting = {}) => {
    const cb = {
        setDefaut: () => {
            var defaults = merged({
                path: '', //当前页面的href
                loadAnimation: true, //true显示加载动画，false 不显示加载动画
                loadMsg: '加载中', //加载提示
                data: null, //页面的数据
                scrollX: 0, //滚动条X
                scrollY: 0, //滚动条Y 
                mdrender: true //当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
            }, seting);
            return {
                defaults,
                path: {}
            };
        },
        setState: (state, target) => {
            state.path[target.path] = target;
            //console.log(target.path);
            return merged(state);
        }
    }
    return (state = {}, action = {}) => {
				//console.log(action._ID);
        if (action._ID && action._ID !== _ID) {
        	
            return state;
        } else if (cb[action.type]) {
        	console.log(action.target);
            return cb[action.type](state, action.target);
        } else {
        	
            return cb.setDefaut();
        }
    }
}
const IndexList = DB('IndexList', { page: 1, nextBtn: true, limit: 10, mdrender: false, data: [] }); //首页
const Topic = DB('Topic'); //主题详情
const MyMessages = DB('MyMessages'); //消息
const Product = DB('Product'); //产品详情页
const WeChat = DB('WeChat'); //聊天页面
const Personal =DB('Personal');//个人中心页面
const UserView = DB('UserView', { tabIndex: 0 }); //用户详情
const Classification = DB('Classification'); //聊天页面
const SearchResult = DB('SearchResult'); //搜索

export default { IndexList, Topic, MyMessages, UserView, User, Product, WeChat, Personal,Classification,SearchResult}