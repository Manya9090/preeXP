import {
  Icon,
  PrimaryButton,
  SearchBox,
  SelectionMode,
  Stack,
  Link,
  DefaultButton,
} from "@fluentui/react";
import PaginationDetailList from "./ETPaginationDatailsList";
import AddExpense from "./ETAddExpense";
import EditExpense from "./ETEditExpense";
import { getTheme } from "@fluentui/react/lib/Styling";
import { useBoolean } from "@fluentui/react-hooks";
import { useEffect, useState } from "react";
import { SweetAlerts } from "./SweetAlerts";
import { useNavigate } from "react-router-dom";

const theme = getTheme();
let newID;
function ETHomePage() {
  const navigate = useNavigate();
  const DeatilListHeaderStylesWithoutFilters = {
    root: {
      overflowX: "auto",
      backgroundColor: theme.palette.themeLighterAlt,
    },
    headerWrapper: {
      selectors: {
        "& [role=presentation]": {
          selectors: {
            "& [role=row]": {
              backgroundColor: "darkgrey",
              borderBottom: "1px solid black",
              "&:hover": {
                backgroundColor: "darkgrey",
              },
            },
          },
        },
      },
    },
  };

  let DetailsListColumn = [
    {
      key: "column1",
      name: "Name",
      fieldName: "Name",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column2",
      name: "Category",
      fieldName: "Category",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column3",
      name: "Date of Expense",
      fieldName: "DateofExpense",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column4",
      name: "Amount",
      fieldName: "Amount",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column5",
      name: "Updated At",
      fieldName: "UpdatedAt",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column6",
      name: "Created by",
      fieldName: "Createdby",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column7",
      name: "Action",
      fieldName: "Action",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
  ];

  const [isTrueAdd, { toggle: isToggleAdd }] = useBoolean(false);
  const [isTrueEdit, { toggle: isToggleEdit }] = useBoolean(false);
  const [detailListItems, setDetailListItems] = useState([]);
  const { SweetAlert: SweetSuccess, SweetPrompt: SweetHomepage } =
    SweetAlerts("#HomePage");

  const EditIcon = (ID) => {
    return (
      <Link>
        <Icon
          style={{ marginRight: "15px", color: "black" }}
          title="Edit"
          iconName="EditSolid12"
          onClick={() => {
            newID = ID;
            isToggleEdit();
          }}
        />
      </Link>
    );
  };

  const DeleteIcon = (ID) => {
    return (
      <Link>
        <Icon
          style={{ color: "red" }}
          title="Delete"
          iconName="Delete"
          onClick={() => isDelete(ID)}
        />
      </Link>
    );
  };

  const allItems = [
    {
      ID: 1,
      Name: "Purcased Book",
      Category: "Books",
      DateofExpense: "19/10/2023",
      Amount: "100",
      UpdatedAt: "Just Know",
      Createdby: "Me",
      Action: [EditIcon(1), DeleteIcon(1)],
    },
    {
      ID: 2,
      Name: "CBT Test",
      Category: "Health",
      DateofExpense: "29/10/2023",
      Amount: "190",
      UpdatedAt: "Just Know",
      Createdby: "Me",
      Action: [EditIcon(2), DeleteIcon(2)],
    },
    {
      ID: 3,
      Name: "Fees",
      Category: "Education",
      DateofExpense: "19/11/2023",
      Amount: "10000",
      UpdatedAt: "Just Know",
      Createdby: "Me",
      Action: [EditIcon(3), DeleteIcon(3)],
    },
    {
      ID: 4,
      Name: "Bengaluru Bus",
      Category: "Travel",
      DateofExpense: "11/10/2023",
      Amount: "1200",
      UpdatedAt: "Just Know",
      Createdby: "Me",
      Action: [EditIcon(4), DeleteIcon(4)],
    },
    {
      ID: 5,
      Name: "Purcased Book",
      Category: "Books",
      DateofExpense: "15/10/2023",
      Amount: "100",
      UpdatedAt: "Just Know",
      Createdby: "Me",
      Action: [EditIcon(5), DeleteIcon(5)],
    },
    {
      ID: 6,
      Name: "Movie",
      Category: "Travel",
      DateofExpense: "9/10/2023",
      Amount: "170",
      UpdatedAt: "Just Know",
      Createdby: "Me",
      Action: [EditIcon(6), DeleteIcon(6)],
    },
  ];

  function onFilterDate(newValue) {
    if (newValue?.target.value) {
      setDetailListItems(
        allItems.filter((i) =>
          i.DateofExpense.toLowerCase().includes(
            newValue.target.value.toLowerCase()
          )
        )
      );
    } else {
      setDetailListItems(allItems);
    }
  }

  function onFilterName(newValue) {
    if (newValue?.target.value) {
      setDetailListItems(
        allItems.filter((i) =>
          i.Name.toLowerCase().includes(newValue.target.value.toLowerCase())
        )
      );
    } else {
      setDetailListItems(allItems);
    }
  }

  useEffect(() => {
    setDetailListItems(allItems);
  }, []);

  useEffect(() => {
    SweetSuccess("success", "You have successfully logged in!");
  }, []);

  function isDelete(ID) {
    SweetHomepage("warning", "Are u sure u want to delete this record?").then(
      (i) => {
        if (i.isConfirmed) {
          setDetailListItems(allItems.filter((i) => i.ID !== ID));
          SweetSuccess("success", "Expense Deleted Successfully!!!");
        }
      }
    );
  }

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "white",
        }}
        id="HomePage"
      >
        <Stack
          horizontal
          horizontalAlign="space-between"
          style={{
            backgroundColor: "#19d8b526",
            padding: "10px 20px",
            fontWeight: "bold",
            margin: "10px 0",
            fontSize: "xx-large",
            paddingTop: "10px",
          }}
        >
          <Stack>PeerXP</Stack>
          <Stack
            horizontal
            tokens={{ childrenGap: 10 }}
            style={{ padding: "5px 0" }}
          >
            <SearchBox
              placeholder="Filter by Date of Expense"
              onChange={onFilterDate}
            />
            <SearchBox
              placeholder="Search by Expense Name"
              onChange={onFilterName}
            />
            <PrimaryButton
              text="New Expense"
              iconProps={{ iconName: "Add" }}
              onClick={isToggleAdd}
            />
            <DefaultButton
              text="Go Back"
              iconProps={{ iconName: "ChromeBack" }}
              onClick={() => navigate("/")}
            />
          </Stack>
        </Stack>
      </div>

      <AddExpense
        isOpen={isTrueAdd}
        isClose={isToggleAdd}
        allData={allItems[allItems.length - 1]}
      />

      <EditExpense
        isOpen={isTrueEdit}
        isClose={isToggleEdit}
        allData={allItems.filter((i) => i.ID === newID)}
      />

      <Stack style={{ width: "90%", margin: "40px auto" }}>
        <PaginationDetailList
          items={detailListItems}
          DetailListProps={{
            columns: DetailsListColumn,
            styles: DeatilListHeaderStylesWithoutFilters,
            selectionMode: SelectionMode.none,
          }}
        />
      </Stack>
    </>
  );
}

export default ETHomePage;
