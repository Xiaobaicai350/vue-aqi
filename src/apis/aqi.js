// 封装管理员相关接口
import request from "@/utils/http";
// 获取委派给每个检测员的异常信息
export const listMyAssignedInfo = () => {
  return request({
    url: "/staff",
    method: "GET",
  });
};

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

//提交检测数据
export const postTesting = ({ taskNumber, date, PM, SO2, CO }) => {
  return request({
    url: "/staff/do",
    method: "POST",
    data: {
      taskNumber,
      date,
      PM,
      SO2,
      CO,
    },
  });
};
