import styles from "./FluidMenuAnimation.module.css";
import FluidMenuBtn from "./FluidMenuBtn";

function FluidMenuAnimation() {
  return (
    <div className={styles.container}>
      <header>
        <FluidMenuBtn />
      </header>
      <main>
        <h2>Open the menu in the top-left corner.</h2>
      </main>
    </div>
  );
}
export default FluidMenuAnimation;
