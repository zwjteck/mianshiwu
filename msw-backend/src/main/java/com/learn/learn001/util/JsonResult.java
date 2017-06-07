package com.learn.learn001.util;

import java.io.Serializable;

/**
 * Created by liujunbin on 17/6/7.
 */
public class JsonResult implements Serializable {

    private static final long serialVersionUID = 3L;

    private String code;

    private String message;

    private Object data;


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }


    public static JsonResult success(Object o) {

        JsonResult jsonResult = new JsonResult();
        jsonResult.setCode("0");
        jsonResult.setMessage("返回成功");
        jsonResult.setData(o);

        return jsonResult;
    }


    public static JsonResult failer() {
        JsonResult jsonResult = new JsonResult();
        jsonResult.setCode("-1");
        jsonResult.setMessage("异常");

        return jsonResult;
    }


    public static JsonResult successInstance(String code, String message, Object data) {
        JsonResult jsonResult = new JsonResult();
        jsonResult.setCode(code);
        jsonResult.setMessage(message);
        jsonResult.setData(data);
        return jsonResult;
    }


    public static JsonResult failerInstance(String code, String message) {
        JsonResult jsonResult = new JsonResult();
        jsonResult.setCode(code);
        jsonResult.setMessage(message);
        return jsonResult;
    }


}
