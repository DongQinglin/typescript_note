export const variableTest= function() {

// 一、基础变量类型
    // 1、布尔类型
    let isDone: boolean = false;
    // 2、数值类型// decimal
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    // 3、字符串，字符串格式化
    let name: string = "pedro";
    name = "林青冬";
    let sentence: string = `I am ${name}.`;

// 二、集合类型
    // 4、数组
    let numberList: number[] = [1, 2, 3];
    let otherNumberList: Array<number> = [1, 2, 3];
    // 5、元组
    let mapTuple: [string, number];
    // Initialize it
    mapTuple = ['hello', 10]; // OK
    console.log(mapTuple);
    // 6、枚举
    enum Color {Red, Green, Blue}
    let green: Color = Color.Green;
    console.log(green);

// 三、特殊类型
    // 7、any
    let anyList: any[] = [1, true, "free"];
    anyList[1] = 100;
    // 8、void
    function warnUser(): void {
        console.log("This is my warning message");
    }
    // 9、null和undefined
    // 10、never类型表示的是那些永不存在的值的类型。
    // 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
    // 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
    // never类型是任何类型的子类型，也可以赋值给任何类型；
    // 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
    // 即使 any也不可以赋值给never。
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message);
    }

    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }

    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {
        }
    }

    // 11、object
    // object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
    // 使用object类型，就可以更好的表示像Object.create这样的API。例如：
    function create(o: object | null): void{
    };
    create({ prop: 0 }); // OK
    create(null); // OK
    create(undefined); // OK
    // create(42); // Error
    // create("string"); // Error
    // create(false); // Error

// 四、类型断言
    let someValue: any = "this is a string";
    // let strLength: number = (<string>someValue).length;
    let strLength: number = (someValue as string).length;

// 五、变量声明
    const JAVA_HOME: string = "D:/jdk/bin";
    let tom = "我是tom";
    {
        let tom = "是我tom";
        console.log(tom);// 是我tom
    }
    console.log(tom);//我是tom

    // 函数闭包解决

    //var声明变量的诡异之处
    for (var i = 0; i < 10; i++) {
        //异步时间片段
        setTimeout(function() { console.log(i); }, 100 * i);//10个10
    }
    for (var i = 10; i < 20; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function(i) {
            setTimeout(function() { console.log(i); }, 100 * i);
        })(i);
    }
    //使用let声明
    for (let i = 20; i < 30; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
        //时间函数 t(i) = 100 * i;//散点，越来越慢
    }
    
    //const变量可以修改内部状态 这个角度可以理解为const变量实际是指针，不是传统意义上值类型，内部空间的修改不影响指针。
    const numLivesForCat = 9;
    const kitty = {
        name: "Aurora",
        numLives: numLivesForCat,
    }
    // Error
    // kitty = {
    //     name: "Danielle",
    //     numLives: numLivesForCat
    // };

    // all "okay"
    kitty.name = "Rory";
    kitty.name = "Kitty";
    kitty.name = "Cat";
    kitty.numLives--;
    console.log(kitty);
//六、解构
    const input = [1, 2];
    input[0] = 3;
    console.log(input);
    let [first, second] = input;
    console.log(first, second);
    first = 5;
    console.log(first, second);
    //对象解构
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a, ...passthrough } = o;
    let total = passthrough.b + passthrough.c.length;
    // 展开
    let firstArray = [1, 2];
    let secondArray = [3, 4];
    let bothPlus = [0, ...firstArray, ...secondArray, 5];
}
