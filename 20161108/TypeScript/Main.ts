///<reference path="Hello.ts"/>
/**
 * Created by Administrator on 2016/11/8 0008.
 */

namespace ucai {
    export class Main {

        constructor() {
            var h = new ucai.Hello();
            h.sayHello();
        }
    }
}

new ucai.Main();