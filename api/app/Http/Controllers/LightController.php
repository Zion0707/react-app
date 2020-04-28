<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\UtilsController;
use App\Http\Model\LightModel;

use Validator;
class LightController extends Controller
{
    public function __construct(){
        $this->lightModel = new LightModel();
        $this->utilsController = new UtilsController();
    }

    //路灯经纬度列表
    public function list(Request $request){
        $req = $request->all();
        $res = $this->lightModel->list($req);
        return $res ? $this->utilsController->responseMsg(0, 'success', $res) : $this->utilsController->responseMsg(-2, '获取失败', null);
    }

    // 新建单个路灯
    public function create(Request $request){
        $req = $request->all();
        $validator = Validator::make($req, [
            'lng'=>'required',
            'lat'=>'required',
        ],[
            'lng.required'=>'经度不能为空',
            'lat.required'=>'纬度不能为空',
        ]);
        if($validator->fails()){
            return $this->utilsController->responseMsg(-2, '参数错误', $validator->errors()->first());
        }
        
        $res = $this->lightModel->create($req);
        return $res ? $this->utilsController->responseMsg(0, 'success', $res) : $this->utilsController->responseMsg(-2, '添加失败！', null);
    }


    // 删除单个路灯
    public function remove(Request $request){
        $req = $request->all();
        $validator = Validator::make($req, [
            'id'=>'required|integer',
        ],[
            'id.required'=>'id是必须的',
            'id.required'=>'id必须是整数',
        ]);
        if($validator->fails()){
            return $this->utilsController->responseMsg(-2, '参数错误', $validator->errors()->first());
        }
        $res = $this->lightModel->remove($req);
        return $res ? $this->utilsController->responseMsg(0, 'success', null) : $this->utilsController->responseMsg(-2, '删除失败！', null);
    }
}
