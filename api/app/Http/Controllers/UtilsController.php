<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Image;

class UtilsController extends Controller
{
    public function __construct(){
        
    }

    // 返回当前环境是否是 https 还是 http
    public function httpType(){
        return ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
    }

    // 文件上传
    public function upload(Request $request){
        // 判断是否有上传文件字段
        if ( $request->file() ){
            //定义一个空数组存放文件列表
            $files = []; 
            // 循环获取所有文件字段
            foreach ($request->allFiles() as $file){
                // 定义一个空数组，方便与储存其它字段
                $obj = [];
            
                //将文件存储到了 ../storage/app/public/product/ 路径下
                $path = $file->store('public/product/'.date('Y-m-d'));
                $path = str_replace('public','',$path);
                $obj['url']= asset('storage'.$path);
        
                // 只有是图片才返回小图
                if(strpos($file->getClientMimeType(), 'image')!==false){
                    // 生成100x100的小图
                    $thumbPath = explode('.', $path)[0].'-100x100.'.explode('.', $path)[1];
                    Image::make($obj['url'])->resize(100, 100)->save('../storage/app/public/'.$thumbPath);
                    $obj['thumbUrl']= asset('storage'.$thumbPath);
                }else{
                    $obj['thumbUrl']= '';
                }
                
                // 去除域名及端口号
                $obj['url'] = str_replace($this->httpType().$_SERVER['HTTP_HOST'], '', $obj['url']);
                $obj['thumbUrl'] = str_replace($this->httpType().$_SERVER['HTTP_HOST'], '', $obj['thumbUrl']);

                // 赋值给对象
                $files[] = $obj;
            }
            return $this->responseMsg( 0, 'success', $files);
        }else{
            return $this->responseMsg( -2, '请上传文件', null);
        }
    }

    // 通用的返回格式 
    public function responseMsg($code, $msg, $data){
        return response()->json([
            'code' => $code, // 0:成功，-1:未登录，-2:错误
            'msg'  => $msg,
            'data' => $data 
        ]);
    }
    /**
    * 下划线转驼峰
    * 思路:
    * step1.原字符串转小写,原字符串中的分隔符用空格替换,在字符串开头加上分隔符
    * step2.将字符串中每个单词的首字母转换为大写,再去空格,去字符串首部附加的分隔符.
    */
    public function camelize($uncamelized_words,$separator='_'){
        $uncamelized_words = $separator. str_replace($separator, " ", strtolower($uncamelized_words));
        return ltrim(str_replace(" ", "", ucwords($uncamelized_words)), $separator );
    }
    /**
    * 驼峰命名转下划线命名
    * 思路:
    * 小写和大写紧挨一起的地方,加上分隔符,然后全部转小写
    */
    public function uncamelize($camelCaps,$separator='_'){
        return strtolower(preg_replace('/([a-z])([A-Z])/', "$1" . $separator . "$2", $camelCaps));
    }

    /**
     * 数组key驼峰转下划线
     * */ 
    public function arrKeyToUnline($data){
        if(gettype($data)=='object'){
            if(get_object_vars($data)){
                $data = get_object_vars($data);
            }
        }
        $result = [];
        foreach ($data as $key => $item) {
            if (is_array($item) || is_object($item)) {
                $result[$this->uncamelize($key)] = $this->arrKeyToUnline((array)$item);
            } else {
                $result[$this->uncamelize($key)] = $item;
            }
        }
        return $result;
    }
    /**
     * 数组key下划线转驼峰
     * */ 
    public function arrKeyToHump($data){
        if(gettype($data)=='object'){
            if(get_object_vars($data)){
                $data = get_object_vars($data);
            }
        }
        $result = [];
        foreach ($data as $key => $item) {
            if (is_array($item) || is_object($item)) {
                $result[$this->camelize($key)] = $this->arrKeyToHump((array)$item);
            } else {
                $result[$this->camelize($key)] = $item;
            }
        }
        return $result;
    }

}
