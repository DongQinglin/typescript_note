export const interfaceTest = function () {
    interface LabelledValue {
        label: string;
    }

    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    // printLabel(myObj.size);//报错，没有size成员

    interface SquareConfig {
        color?: string;
        width?: number;
    }
    class Square{
        color: string;
        area: number;
        constructor(color: string, area: number){
            this.area = area;
            this.color = color;
        }
    }
    //  返回值类型
    function createSquare(config: SquareConfig): Square{

        let newSquare = new Square("white", 100);
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    // 不需要new，直接大括号

    let mySquare = createSquare(new class implements SquareConfig {
        color: string = "black";
        width: number;
    });
    console.log(mySquare);

    // 只读成员属性，一旦赋值不可更改
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = new class implements Point {
        readonly x: number = 6;
        readonly y: number = 7;
    }
    // p1.x = 5; // error!

    // 接口在这里的表现很是奇怪
    // 匿名方法只能有一个，以最后的为准
    // 方法的定义有点古怪。()括号内是参数列表，：冒号后是返回值类型



    interface SearchFunction{
        search(source: string, subString: string): boolean;
    }
    class SimpleSearch implements SearchFunction{
        search(source: string, subString: string): boolean {
            let result = source.search(subString);
            return result > -1;
        }
    }

    let mySearch: SearchFunction;
    mySearch = new SimpleSearch();
    const result: boolean = mySearch.search("hello","e");
    console.log(result);

}
