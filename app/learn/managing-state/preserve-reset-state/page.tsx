"use client";
import DoubleCounter from "./DoubleCounter";
import FancyCounter from "./FancyCounter";
import ChildrenFancyCounter from "./ChildrenFancyCounter";
import KeepForm from "./KeepForm";
import ReverseInputOrder from "./ReverseInputOrder";
import ContactList from "./ContactList";
import "./index.scss";

export default function PreserveResetState() {
  return (
    <div>
      <h2>DoubleCounter</h2>
      <DoubleCounter />
      <hr />
      <h2>FancyCounter</h2>
      <FancyCounter />
      <hr />
      <h2>ChildrenFancyCounter</h2>
      <ChildrenFancyCounter />
      <hr />
      <h2>KeepForm</h2>
      <KeepForm />
      <hr />
      <h2>ReverseInputOrder</h2>
      <ReverseInputOrder />
      <hr />
      <h2>ContactList</h2>
      <ContactList />
    </div>
  );
}
