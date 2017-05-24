/**
 * Created by liujunbin on 17/5/24.
 */

import React, {Component} from 'react'
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    componentDidMount() {

    }

    render() {
        return (
            <div className="content bglogin">
                <div className="main" >
                    <div className="logo"><em>&nbsp;</em>
                    </div>
                    <div className="inpline">
                        <label className="inpL">

                            <input placeholder="请输入用户名/手机号" type="text" id="login-account" />
                        </label>
                    </div>
                        <div className="inpline">
                            <label className="inpL">
                                <input placeholder="请输入密码" type="password" id="login-pwd"  /></label>
                        </div>
                        <div className="inpline">
                            <button type="button" id="login-submit" className="btn">登 录</button>
                        </div>


                </div>
            </div>
        )
    }

    }

    export default Login
