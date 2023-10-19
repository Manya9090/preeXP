import React, { useState } from "react";
import {
  DatePicker,
  DefaultButton,
  Dropdown,
  Panel,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import { SweetAlerts } from "./SweetAlerts";

const categoryOptions = [
  { key: "Health", text: "Health" },
  { key: "Electronics", text: "Electronics" },
  { key: "Travel", text: "Travel" },
  { key: "Education", text: "Education" },
  { key: "Books", text: "Books" },
  { key: "Others", text: "Others" },
];

const AddExpense = ({ isOpen, isClose, allData }) => {
  const [expenseName, setExpenseName] = useState("");
  const [category, setCategory] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setAmount] = useState("");
  const { SweetAlert: SweetSuccess } = SweetAlerts("#HomePage");

  function expsenseSubmit() {
    SweetSuccess("success", "Expense added successfully");
    isClose();
  }
  return (
    <>
      <Panel
        id="HomePage"
        isLightDismiss
        isOpen={isOpen}
        onDismiss={isClose}
        closeButtonAriaLabel="Close"
        headerText="Create New Expense"
      >
        <TextField
          label="Name"
          placeholder="Name the Expense"
          maxLength={140}
          onChange={(i) => setExpenseName(i.target.value)}
        />
        <TextField label="Description" placeholder="Decribe the Expense" />
        <Dropdown
          label="Category"
          options={categoryOptions}
          placeholder="Select category"
          onChange={(i) => setCategory(i)}
        />
        <DatePicker
          label="Date of Expense"
          placeholder="Date of Expense"
          onChange={(i) => setExpenseDate(i)}
        />
        <TextField
          label="Expense Amount in INR"
          placeholder="Expense Amount in INR"
          type="number"
          onChange={(i) => setAmount(i.target.value)}
        />
        <Stack
          horizontal
          style={{
            marginTop: "10px",
            gap: "10px",
          }}
        >
          <DefaultButton onClick={isClose} text="Cancel" />
          <PrimaryButton text="Create Expense" onClick={expsenseSubmit} />
        </Stack>
      </Panel>
    </>
  );
};

export default AddExpense;
