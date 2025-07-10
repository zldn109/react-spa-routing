import Container from "@/components/Container";
import styles from "@/styles/pages/NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.base}>
      <Container>
        <h1>404 Not found</h1>
      </Container>
    </div>
  );
}
