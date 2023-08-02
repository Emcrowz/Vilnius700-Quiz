import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.highscoreForm}>
      <div className={styles.nameInput}>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className={styles.emailInput}>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <buttom type="submit" className={styles.formBtn}>
        Submit
      </buttom>
    </form>
  );
}

export default Form;
