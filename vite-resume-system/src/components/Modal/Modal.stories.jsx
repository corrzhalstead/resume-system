import React from "react";
import { Modal } from "./Modal";
import styles from "./Modal.module.css";
import classNames from "classnames";

export default {
  title: "components/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  // className: styles.example,
  children: (
    <div>
      <div>Example of added children</div>
      <div className={styles.btnDiv}>
        <button
          type="button"
          onClick={() => alert("Close modal")}
          className={classNames(styles.button, styles.btnClose)}
        >
          Close
        </button>
      </div>
    </div>
  ),
};
