import "./App.css";
//import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
// import FunctionComponent from "./FunctionComponent";
//import Worm from "./Worm";
// import Test from "./test";
// import Test2 from "./test2";
import Foods from "./foods";
import Books from "./books";

function App() {
  return (
    <>
      {/* <Test></Test>
      <Test2></Test2> */}
      {/* <ClassComponent name="예인"></ClassComponent>
      <ClassComponent /> */}
      {/* <FunctionComponent name="kdt8" age={12}>
        Hello
      </FunctionComponent>
      <FunctionComponent></FunctionComponent> */}
      {/* <Foods food="소고기"></Foods>
      <Foods></Foods> */}
      <Books
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></Books>
    </>
  );
}

export default App;
