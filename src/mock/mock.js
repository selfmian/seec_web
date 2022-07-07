let Mock = require("mockjs")
// /aa 拦截
let arr = ["zhangsan","lisi","wangwu"]
Mock.mock("/api/aa", "get", arr)