<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;
use DB;
class LightModel extends Model
{
    //获取路灯列表
    public function list($data){
        $res = DB::table('light')->get();
        return [
            'list'=>$res
        ];
    }

    // 新建单个路灯
    public function create($data){
        $res = DB::table('light')->insertGetId($data);
        return $res;
    }

    // 新建单个路灯
    public function remove($data){
        $res = DB::table('light')->where('id', $data['id'])->delete();
        return $res;
    }
}
