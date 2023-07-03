// 封装管理员相关接口
import request from "@/utils/http";

//aqi人员登录
export const login = ({ id, password }) => {
  return request({
    url: "/staff/login",
    method: "POST",
    data: {
      id,
      password,
    },
  });
};

// 获取委派给每个检测员的异常信息
export const listMyAssignedInfo = () => {
  return request({
    url: "/staff",
    method: "GET",
  });
};

//提交检测数据
export const postTesting = ({ taskNumber, date, PM, SO2, CO }) => {
  return request({
    url: "/staff/do",
    method: "POST",
    data: {
      ExmessageId,
      updateTime,
      PM,
      SO2,
      CO,
    },
  });
};

//获取自己已经完成的信息
export const listAllDo = () => {
  return request({
    url: "/staff/alldo",
    method: "GET",
  });
};

//获取aqi的信息
export const info = () => {
  return request({
    url: "/staff/info",
    method: "GET",
  });
};
