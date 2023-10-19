import { DetailsList, Dropdown, Icon, Label } from "@fluentui/react";
import * as React from "react";

const option = [
  { key: 5, text: "5" },
  { key: 10, text: "10" },
  { key: 25, text: "25" },
  { key: 50, text: "50" },
];

const PaginationDetailList = ({ DetailListProps, items }) => {
  const [count, setCount] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPage = Math.ceil(items.length / count);

  const onButtonClick = React.useCallback(
    (type) => {
      if (type) {
        setCurrentPage((c) => (c >= totalPage ? totalPage : c + 1));
      } else {
        setCurrentPage((c) => (c <= 1 ? 1 : c - 1));
      }
    },
    [totalPage]
  );

  const paginationDropDown = React.useCallback((_event, item) => {
    setCount(item.key);
  }, []);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [items, count]);

  return (
    <>
      <DetailsList
        checkButtonAriaLabel={"select row"}
        setKey={"set" + count + currentPage + totalPage}
        {...DetailListProps}
        onShouldVirtualize={() => !(count > 25)}
        items={items.slice(count * (currentPage - 1), count * currentPage)}
      />

      <div>
        {items.length < 1 ? (
          <>
            <div style={{ textAlign: "center" }}>No Data Available</div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ padding: "7px 0" }}>
              <span>
                Page: {currentPage} of {totalPage}
              </span>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ display: "flex", gap: "10px", padding: "6px 0" }}>
                <Label>Show Entries</Label>
                <Dropdown
                  options={option}
                  onChange={paginationDropDown}
                  selectedKey={count}
                  placeholder={"10"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  padding: "10px 0",
                  cursor: "pointer",
                }}
              >
                <div>
                  <Icon
                    iconName="ChevronLeft"
                    onClick={() => onButtonClick(false)}
                  />
                </div>
                <div>{items.length ? currentPage : 0}</div>
                <div>
                  <Icon
                    iconName="ChevronRight"
                    onClick={() => onButtonClick(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PaginationDetailList;
