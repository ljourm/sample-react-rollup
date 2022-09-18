import { infoLog } from "~/service/logger"
import styles from "./index.module.scss"

export interface SampleProps {
  value: string
}

export function Sample({value}: SampleProps) {
  infoLog("rendered")

  return <div className={styles.sample}>{value}</div>
}