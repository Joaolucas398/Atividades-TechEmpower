import { useEffect, useState } from "react";
import styles from "@/styles/count.module.css";

export default function Count() {
  const [count, setCount] = useState<number>(0);

  const handleCount = (): void => {
    setCount(count + 1);
  };

  useEffect(() => {}, [count]);

  return (
    <>
      <div className={styles["contador-container"]}>
        <h1 className={styles["contador-titulo"]}>UserEffect</h1>
        <p className={styles["contador-numero"]}>{count}</p>
        <button className={styles["contador-botao"]} onClick={handleCount}>
          Click
        </button>
      </div>
    </>
  );
}
