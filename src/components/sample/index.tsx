import { useEffect, useState } from "react"
import { infoLog } from "~/service/logger"
import { add } from "~/utils/vendorLoader"
import styles from "./index.module.scss"

export interface SampleProps {
  value1: number,
  value2: number,
}

export function Sample({ value1, value2 }: SampleProps) {
  const [result, setResult] = useState(0)

  useEffect(() => {
    infoLog("initializing")

    setResult(add(value1, value2))

    infoLog("initialized")
  }, [])

  return (<div className={styles.sample}>
    <span>{value1} + {value2} = </span>
    <span>{result}</span>
  </div>)
}