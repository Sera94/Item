/**
 * Created by Administrator on 2016/11/11 0011.
 */

class Hello {
    sayHello() {
        console.log("Hello");
    }
    sayHi(){
        console.log("Hi");
    }
}
class Hi {
    sayHi() {
        console.log("Hi 2");
    }
}

//导出
// export default Hello;
export {Hello, Hi};