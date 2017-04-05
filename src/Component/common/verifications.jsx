import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import GetData from './GetData';
import GetNextPage from './GetNextPage';



//定义输出内容
function output(cont, text) {
    var cont = document.getElementById('from').getElementsByTagName('p');
    for (var i = 0; i < cont.length; i++) {
        cont[i].style.display = "block";
        cont[i].innerText = text;
    }
}

//检查对象是否为空
function IsNull(str, cont) {
    var Str = document.getElementById(str).value.trim();
    if (Str.length == 0) {
        output(cont, "输入框内容不能为空！");
    }
}

//手机号码校验，长度为11位数字。
function checkMobile(str) {
    let Str = document.getElementById(str).value;
    let mobile = document.querySelector('.mobile');
    let RegularExp = /(^(13|14|15|18|17)\d{9}$)/
    if (Str.trim().length == 0) {
        mobile.innerHTML = "输入框内容不能为空!";
    } else if (RegularExp.test(Str)) {
        mobile.style.display = "none";
        return true;
    } else {
        mobile.style.display = "block";
        mobile.innerHTML = "手机号格式不正确！应该为11位长度的数字！";
        return false;
    }

}

//收货人姓名
function checkUsername(str, cont) {
    let Str = document.getElementById(str).value;
    let username = document.querySelector('.username');
    let RegularExp = /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/
    if (!Str) {
        username.innerHTML = "输入框内容不能为空!";
    } else if (RegularExp.test(Str)) {
        username.style.display = "none";
        return true;
    } else {
        mobile.style.display = "block";
        username.innerHTML = "收货人只能包含中文、英文、数字、下划线等字符!";
        return false;
    }
}

//地址
function checkarea(str, cont) {
    let Str = document.getElementById(str).value.trim();
    let area = document.querySelector('.area');
    if (Str.length) {
        area.style.display = "none";
    }
}

//详细地址
function checkDetailArea(str, cont) {
    let Str = document.getElementById(str).value;
    let detailarea = document.querySelector('.detailarea');
    let RegularExp = /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/
    if (!Str) {
        detailarea.innerHTML = "输入框内容不能为空!";
    } else if (RegularExp.test(Str)) {
        detailarea.style.display = "none";
        return true;
    } else {
        detailarea.style.display = "block";
        detailarea.innerHTML = "详细地址只能包含中文、英文、数字、下划线等字符!";
        return false;
    }
}

//邮政编码
function checkZipCode(str, cont) {
    let Str = document.getElementById(str).value;
    let isZipCode = document.querySelector('.isZipCode');
    let RegularExp = /^[0-9]{6}$/
    if (!Str) {
        isZipCode.innerHTML = "输入框内容不能为空!";
    } else if (RegularExp.test(Str)) {
        isZipCode.style.display = "none";
        return true;
    } else {
        isZipCode.style.display = "block";
        isZipCode.innerHTML = "请正确填写您的邮政编码!";
        return false;
    }
}

//退款理由
function checkTkreason(str) {
    let stkOption = document.getElementById(str).options;
    let tkreason = document.querySelector('.tkreason');
    for (var i = 0; i < stkOption.length; i++) {
        if (stkOption[i].selected) {
            if (i == 0) {

                tkreason.innerHTML = "请选择退款理由";
            } else {

                tkreason.style.display = "none";
            }
        }
    }

}

//退款金额
function checktkmoney(str, cont) {
    let Str = document.getElementById(str).value;
    let tkmoney = document.querySelector('.tkmoney');
    let RegularExp = /^\d+$/
    if (!Str) {
        tkmoney.innerHTML = "输入框内容不能为空!";
    } else if (RegularExp.test(Str)) {
        tkmoney.style.display = "none";
        return true;
    } else {
        tkmoney.style.display = "block";
        tkmoney.innerHTML = "只能输入0-9数字";
        return false;
    }
}

//运单号
function checkydnum(str, cont) {
    let Str = document.getElementById(str).value;
    let ydnum = document.querySelector('.ydnum');
    let RegularExp = /^\d+$/
    if (!Str) {
        ydnum.innerHTML = "输入框内容不能为空!";
    } else if (RegularExp.test(Str)) {
        ydnum.style.display = "none";
        return true;
    } else {
        ydnum.style.display = "block";
        ydnum.innerHTML = "只能输入0-9数字";
        return false;
    }
}

//退款说明
function checktkexplain(str, cont) {
    let Str = document.getElementById(str).value;
    let tkexplain = document.querySelector('.tkexplain');
    let RegularExp = /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/
    if (!Str) {
        tkexplain.innerHTML = "输入框内容不能为空!";
    } else if (RegularExp.test(Str)) {
        tkexplain.style.display = "none";
        return true;
    } else {
        tkexplain.style.display = "block";
        tkexplain.innerHTML = "只能包含中文、英文、数字、下划线等字符！";
        return false;
    }
}

//四舍五入 强制保留2位小数，如：2，会在2后面补上00.即2.00  
function toDecimal2(x) {  
            var f = parseFloat(x);  
            if (isNaN(f)) {  
                return false;  
            }  
            var f = Math.round(x*100)/100;  
            var s = f.toString();  
            var rs = s.indexOf('.');  
            if (rs < 0) {  
                rs = s.length;  
                s += '.';  
            }  
            while (s.length <= rs + 2) {  
                s += '0';  
            }  
            return s;  
        }  
export {
    output,
    IsNull,
    checkMobile,
    checkUsername,
    checkarea,
    checkDetailArea,
    checkZipCode,
    checkTkreason,
    checktkmoney,
    checkydnum,
    checktkexplain,
    toDecimal2
}





