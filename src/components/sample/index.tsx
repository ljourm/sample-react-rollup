import { infoLog } from "~/service/logger"
import styles from "./index.module.scss"

import { add } from "~/vendor/calculator"

export interface SampleProps {
  value1: number,
  value2: number,
}

export function Sample({ value1, value2 }: SampleProps) {
  infoLog("rendered")

  return (<div className={styles.sample}>
    <span>{value1} + {value2} = </span>
    <span>{add(value1, value2)}</span>
  </div>)
}