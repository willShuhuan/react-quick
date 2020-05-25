/**
 * @Description: 正则校验
 * @author dongshuhuan
 * @date 2020-05-25
 */

/*是否带有小数*/
function    isDecimal(strValue )  {
    var  objRegExp= /^\d+\.\d+$/;
    return  objRegExp.test(strValue);
}

/*校验是否中文名称组成 */
function ischina(str) {
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验是否全由8位数字组成 */
function isStudentNo(str) {
    var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验电话码格式 */
function isTelCode(str) {
    var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return reg.test(str);
}

/*校验邮件地址是否合法 */
function IsEmail(str) {
    var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    return reg.test(str);
}

/**
 * [reg 百度网盘链接匹配]
 * 说明：匹配支持百度分享的两种链接格式
 * 格式一：链接: https://pan.baidu.com/s/15gzY8h3SEzVCfGV1xfkJsQ 提取码: vsuw 复制这段内容后打开百度网盘手机App，操作更方便哦
 * 格式二：http://pan.baidu.com/share/link?shareid=179436&uk=3272055266 提取码: vsuw 复制这段内容后打开百度网盘手机App，操作更方便哦
 * 匹配出下载地址和提取码，并且还支持如果没有提取码，也能匹配出下载链接。
 * @type {正则表达式}
 * @return array 返回匹配成功的链接和地址
 */

function baiduDownLinkArr( string ){
    var reg = /([http|https]*?:\/\/pan\.baidu\.com\/[(?:s\/){0,1}|(share)]*(?:[0-9a-zA-Z?=&])+)(?:.+:(?:\s)*)?([a-zA-Z]{4})?/;
    console.log(reg.exec(string));
}