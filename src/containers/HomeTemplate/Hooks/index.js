import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import Child from "./child";
import CustomHooks from "./custom-hooks";

export default function HooksPage() {
  const preNumber = useRef(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(
      "useEffect - tương đương componentDidMount bên class khi tham số thứ 2 là mảng rỗng"
    );
  }, []);

  useEffect(() => {
    console.log(
      "useEffect - tương đương componentDidUpdate bên class khi tham số thứ 2 là mảng khác rỗng"
    );
  }, [number]);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Hello");
    }, 1000);

    return () => {
      //tương đương với componentWillUnMount ben class
      clearInterval(interval);
    };
  }, []);

  const showNumber = () => {
    console.log("showNumber");
  };

  const showNumberCallback = useCallback(showNumber, []);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  const numberUpMemo = useMemo(() => numberUp(), []);

  return (
    <div>
      <h3>HooksPage</h3>
      <h1>Pre Number: {preNumber.current}</h1>
      <h1>Number: {number}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
          preNumber.current = number;
        }}
      >
        Click
      </button>
      <h1>NumberUp: {numberUpMemo}</h1>
      <hr />
      <Child showNumber={showNumberCallback} />
      <hr />
      <CustomHooks />
    </div>
  );
}
