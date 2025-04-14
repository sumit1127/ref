import { useRef } from "react";

const Ref = () => {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert("you clicked " + ref.current + " times");
  };
  return (
    <div>
      <button onClick={handleClick}>click here</button>
    </div>
  );
};

export default Ref;
