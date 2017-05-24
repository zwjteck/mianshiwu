import React, {Component} from 'react';
import {connect} from 'react-redux'
import {doPostLogin, doGetHomeInfo, doGetUserInfo, doPostLoginCoach, doLogout} from '../actions/home'
import LoadingBar from 'react-redux-loading-bar'
import {highlight} from './common/Highlights.jsx'
import '../asssets/js/customer.myjs'
import '../asssets/css/reset.css'
import '../asssets/css/font-awesome.min.css'
import '../asssets/css/font-awesome-ie7.min.css'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}

    }


    componentDidMount() {

    }


    render() {


        return (
            <div className="mianshiwu">
                <div className="outpadding">
                    <div className="fixleft expand">
                        <div className="left_top">
                            <a href="index.html" className="active logo">MS</a>
                            <a href="" className="zt"><i className="fa fa-th"></i><span
                                className="zt1 drop_layer">专题</span></a>
                            <a href="" className="jyq"><i className="fa fa-users"></i><span
                                className="jyq1 drop_layer">简友圈</span></a>
                            <a href="" className="jyq"><i className="fa fa-pencil"></i><span
                                className="jyq1 drop_layer">写文章</span></a>

                        </div>
                        <div className="left_user">
                            <a href="" className="mypage"><i className="fa fa-user"></i><span
                                className="mypage1  userleft drop_layer">我的主页</span></a>
                            <a href="" className="mypage"><i className="fa fa-star"></i><span
                                className="mypage1 userleft drop_layer">我的收藏</span></a>
                            <a href="" className="zt"><i className="fa fa-bell"></i><span
                                className="zt1 userleft userleft drop_layer">提醒</span></a>
                            <a href="" className="zt"><i className="fa fa-envelope"></i><span
                                className="zt1 userleft drop_layer">简信</span></a>
                            <a href="#"><i className="fa fa-font" id="fontclick"></i></a>
                            <div id="fontall" className="drop_layer font_style">
                                <div className="fontchange">
                                    <a href="" className="change"><i className="fa fa-sun-o"></i></a>
                                    <a href="" className="change daytime"><i className="fa fa-moon-o"></i></a>
                                </div>
                                <div className="fontchange">
                                    <a href="" className="change daytime">宋体</a>
                                    <a href="" className="change">黑体</a>
                                </div>
                                <div className="fontchange">
                                    <a href="" className="change">简</a>
                                    <a href="" className="change daytime">繁</a>
                                </div>
                            </div>
                            <a href="" className="zt"><i className="fa fa-gears (alias)"></i><span
                                className="zt1 userleft drop_layer">设置</span></a>
                            <a href="" className="zt"><i className="fa fa-sign-out"></i><span
                                className="zt1 userleft drop_layer">登出</span></a>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <div id="container">
                        <div className="fiximg">
                            <div className="imgtxt">
                                <h2>面试屋</h2>
                                <h3>交流故事，沟通想法</h3>
                                <p>一个基于内容分享的社区</p>
                                <a href="" className="btn_bg"><i className="fa fa-send-o (alias)"></i><span>提笔写篇文章</span></a>
                            </div>
                            <div className="imgproduct">
                                <i className="fa fa-info"></i>
                                <div className="infor drop_layer">Photo by <a href="">little visuals</a></div>
                            </div>
                        </div>
                        <div id="js_main">
                            <div className="boxlist">
                                <ul className="tab_menu">
                                    <li className="current"><a href="index.html">发现</a></li>
                                    <li><a href="focus.html">关注</a></li>
                                    <li><a href="2015.html">2017精选</a></li>
                                    <li><a href="#"><i className="fa fa-cog"></i></a></li>
                                    <li className="search">
                                        <form>
                                            <input type="search" placeholder="搜索"  name="se" id="se" /><i className="fa fa-search"></i>
                                        </form>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab_box">
                                <ol className="links">
                                    <li><a href="index.html">热门</a></li>
                                    <li><a href="index.html">HTML5</a></li>
                                    <li><a href="index.html">iOS</a></li>
                                    <li><a href="index.html">javascript</a></li>
                                    <li><a href="index.html">Node.js</a></li>
                                    <li><a href="index.html">Java</a></li>
                                    <li><a href="index.html">PHP</a></li>
                                    <li><a href="index.html">Python</a></li>
                                    <li><a href="index.html">cocos2d-x</a></li>
                                    <li><a href="index.html">Unity3d</a></li>
                                    <li><a href="publish.html">面试屋出版</a></li>
                                </ol>
                                <div className="clearfix"></div>
                                <ul className="listbook">
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">丹顶鹤的日记本</a><em>·</em><span>大约2小时之前</span></p>
                                                <h4><a href="">转行并不意味着从零开始</a></h4>
                                                <div className="list_detail"><a href="">阅读 489</a><em>·</em><a href="">评论 28</a><em>·</em><span>喜欢 31</span><em>·</em><span>打赏 2</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/37.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">沈善书</a><em>·</em><span>大约3小时之前</span></p>
                                                <h4><a href="">女人可以不漂亮，但一定要有“嫁值”</a></h4>
                                                <div className="list_detail"><a href="">阅读 473</a><em>·</em><a href="">评论 4</a><em>·</em><span>喜欢 20</span><em>·</em><span>打赏 5</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/38.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">柯临</a><em>·</em><span>大约3小时之前</span></p>
                                                <h4><a href="">年底了，这是你的穷忙诊断书</a></h4>
                                                <div className="list_detail"><a href="">阅读 79</a><em>·</em><a href="">评论 0</a><em>·</em><span>喜欢 3</span><em>·</em><span>打赏 2</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/39.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">李斯特</a><em>·</em><span>大约5小时之前</span></p>
                                                <h4><a href="">你可知一滴精油，是上千朵玫瑰的绽放</a></h4>
                                                <div className="list_detail"><a href="">阅读 725</a><em>·</em><a href="">评论 4</a><em>·</em><span>喜欢 31</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/40.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">安梳颜</a><em>·</em><span>大约5小时之前</span></p>
                                                <h4><a href="">我可能要单身一辈子吧</a></h4>
                                                <div className="list_detail"><a href="">阅读 2100</a><em>·</em><a href="">评论 6300</a><em>·</em><span>喜欢 291</span><em>·</em><span>打赏 2</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/1.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">王若 </a><em>·</em><span>大约7小时之前</span></p>
                                                <h4><a href="">一群学霸当室友，到底是种怎样的体验？</a></h4>
                                                <div className="list_detail"><a href="">阅读 185</a><em>·</em><a href="">评论 12</a><em>·</em><span>喜欢 17</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/2.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">冬洱</a><em>·</em><span>大约8小时之前</span></p>
                                                <h4><a href="">年岁将尽，七本书让你阅尽人生百态</a></h4>
                                                <div className="list_detail"><a href="">阅读 2900</a><em>·</em><a href="">评论 2100</a><em>·</em><span>喜欢 120</span><em>·</em><span>打赏 2</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/3.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">小灯泡儿</a><em>·</em><span>大约6小时之前</span></p>
                                                <h4><a href="">嘿，这里有一封杭州妹子的情书（上卷）</a></h4>
                                                <div className="list_detail"><a href="">阅读 1595</a><em>·</em><a href="">评论 22</a><em>·</em><span>喜欢 115</span><em>·</em><span>打赏 1</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/4.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">lemon青柠檬</a><em>·</em><span>大约5小时之前</span></p>
                                                <h4><a href="">我爱你，但我恨这样的自己</a></h4>
                                                <div className="list_detail"><a href="">阅读 353</a><em>·</em><a href="">评论 8</a><em>·</em><span>喜欢 10</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/5.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">无脚鸟人</a><em>·</em><span>大约10小时之前</span></p>
                                                <h4><a href="">金星：我从不喜欢她，但我尊重她。</a></h4>
                                                <div className="list_detail"><a href="">阅读 5962</a><em>·</em><a href="">评论 42</a><em>·</em><span>喜欢 88</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/6.png" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">芊语芊寻</a><em>·</em><span>大约5小时之前</span></p>
                                                <h4><a href="">这辈子陪我最久的那个人呐</a></h4>
                                                <div className="list_detail"><a href="">阅读 2100</a><em>·</em><a href="">评论 2100</a><em>·</em><span>喜欢 120</span><em>·</em><span>打赏 2</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/7.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">诺逸漫</a><em>·</em><span>大约10小时之前</span></p>
                                                <h4><a href="">人物故事的力量</a></h4>
                                                <div className="list_detail"><a href="">阅读 170</a><em>·</em><a href="">评论 4</a><em>·</em><span>喜欢 7</span></div>

                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/8.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">娟子曰 </a><em>·</em><span>大约15小时之前</span></p>
                                                <h4><a href="">一个人的旅行</a></h4>
                                                <div className="list_detail"><a href="">阅读 2785</a><em>·</em><a href="">评论 75</a><em>·</em><span>喜欢 51</span><em>·</em><span>打赏 21</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/9.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">在自我提升的路上</a><em>·</em><span>大约6小时之前</span></p>
                                                <h4><a href="">跑步这件事，我也有些话要说</a></h4>
                                                <div className="list_detail"><a href="">阅读 318</a><em>·</em><a href="">评论 5</a><em>·</em><span>喜欢 10</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/10.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">塘主千金</a><em>·</em><span>大约3小时之前</span></p>
                                                <h4><a href="">【疯人院征文】瞌睡虫</a></h4>
                                                <div className="list_detail"><a href="">阅读 83</a><em>·</em><a href="">评论 8</a><em>·</em><span>喜欢 10</span></div>
                                            </div>
                                            <div className="list_img"><a href=""></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">天山看海</a><em>·</em><span>大约11小时之前</span></p>
                                                <h4><a href="">基本礼仪33招</a></h4>
                                                <div className="list_detail"><a href="">阅读 3196</a><em>·</em><a href="">评论 46</a><em>·</em><span>喜欢 204</span><em>·</em><span>打赏 1</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/12.png" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">mindwind</a><em>·</em><span>大约11小时之前</span></p>
                                                <h4><a href="">HTTPS 互联网世界的安全基础</a></h4>
                                                <div className="list_detail"><a href="">阅读 245</a><em>·</em><a href="">评论 3</a><em>·</em><span>喜欢 14</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/13.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">龙潇Shana</a><em>·</em><span>大约11小时之前</span></p>
                                                <h4><a href="">如此普通的我们，应该如何向优秀的人学习？</a></h4>
                                                <div className="list_detail"><a href="">阅读 377</a><em>·</em><a href="">评论 6</a><em>·</em><span>喜欢 17</span><em>·</em><span>打赏 2</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/14.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">诗桦</a><em>·</em><span>大约1天之前</span></p>
                                                <h4><a href="">这个馅儿的大蒸饺儿，吃了会上瘾！</a></h4>
                                                <div className="list_detail"><a href="">阅读 430</a><em>·</em><a href="">评论 22</a><em>·</em><span>喜欢 16</span><em>·</em><span>打赏 2</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/15.jpg" /></a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="list_lf">
                                                <p><a href="">等等z</a><em>·</em><span>大约11小时之前</span></p>
                                                <h4><a href="">五月天，下一次见你们的时候，我不要活的那么小心翼翼</a></h4>
                                                <div className="list_detail"><a href="">阅读 38</a><em>·</em><a href="">评论 3</a><em>·</em><span>喜欢 2</span><em>·</em><span>打赏 2</span></div>
                                            </div>
                                            <div className="list_img"><a href=""><img src="images/list/16.jpg" /></a></div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="more"><a href="" title="点击查看更多">点击查看更多</a></div>
                            </div>


                        </div>
                    </div>

                    <div className="fixuser">

                        <a href="#" className="user">
                            <img src="./images/icons/head.jpg" alt="头像"  name="头像"/>
                            <i className="fa fa-sort-desc" id="useclick"></i>
                        </a>

                        <ul id="hidelist" className="drop_layer useall use_menu">
                            <li><a href=""><i className="fa fa-pencil"></i>写文章</a></li>
                            <li><a href=""><i className="fa fa-user"></i>我的主页</a></li>
                            <li><a href=""><i className="fa fa-heart"></i>我喜欢的</a></li>
                            <li><a href=""><i className="fa fa-star"></i>我的收藏</a></li>
                            <li><a href=""><i className="fa fa-bell"></i>提醒</a></li>
                            <li><a href=""><i className="fa fa-envelope"></i>简信</a></li>
                            <li><a href=""><i className="fa fa-gears"></i>设置</a></li>
                            <li><a href=""><i className="fa fa-sign-out"></i>登出</a></li>
                        </ul>

                    </div>
                </div>

                </div>
                )
                }
                }


                const mapStateToProps = (state) => {
                return {}
            }

                const mapDispatchToProps = dispatch => {
                return {
                doGetHomeInfo: (id, cb) => dispatch(doGetHomeInfo(id, cb)),
            }
            }

                export default connect(mapStateToProps, mapDispatchToProps)(Home)
