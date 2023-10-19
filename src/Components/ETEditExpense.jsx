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

const EditExpense = ({ isOpen, isClose, allData }) => {
  const [datepPicker, setDatePicker] = useState("");
  const { SweetAlert: SweetSuccess } = SweetAlerts("#HomePage");

  function onDateChange(Date) {
    const day = Date.getDate().toString().padStart(2, "0");
    const month = (Date.getMonth() + 1).toString().padStart(2, "0");
    const year = Date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    setDatePicker(Date);
  }

  function expsenseSubmit() {
    SweetSuccess("success", "Expense updated successfully");
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
        headerText="Update Expense"
      >
        <TextField
          label="Name"
          placeholder="Name the Expense"
          value={allData[0]?.Name}
          maxLength={140}
        />
        <TextField label="Description" placeholder="Decribe the Expense" />
        <Dropdown
          label="Category"
          options={categoryOptions}
          placeholder="Select category"
          selectedKey={allData[0]?.Category}
        />
        <DatePicker
          label="Date of Expense"
          placeholder="Date of Expense"
          value={datepPicker}
          onSelectDate={onDateChange}
        />
        <TextField
          label="Expense Amount in INR"
          placeholder="Expense Amount in INR"
          type="number"
          value={allData[0]?.Amount}
        />
        <Stack
          horizontal
          style={{
            marginTop: "10px",
            gap: "10px",
          }}
        >
          <DefaultButton onClick={isClose} text="Cancel" />
          <PrimaryButton text="Update Expense" onClick={expsenseSubmit} />
        </Stack>
      </Panel>
    </>
  );
};

export default EditExpense;
