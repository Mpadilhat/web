import React from "react";
import Skeleton from "react-loading-skeleton";

const styles = {
  card: {
    width: 350,
    height: 200,
    borderRadius: 5,
    marginBottom: 25,
    boxSizing: "border-box",
  },
  row: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  bloco: {
    width: 275,
    marginLeft: 10,
    height: 60,
  },
  column: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  line: {
    flex: 1,
    height: 15,
  },
};

const LoadingSkeleton = () => {
  return (
    <div style={styles.card}>
      <div style={styles.row}>
        <Skeleton circle={true} height={65} width={65} />
        <Skeleton style={styles.bloco} />
      </div>
      <div style={styles.column}>
        <Skeleton style={styles.line} />
        <Skeleton style={styles.line} />
        <Skeleton style={styles.line} />
        <Skeleton style={styles.line} />
        <Skeleton style={styles.line} />
        <Skeleton style={styles.line} />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
