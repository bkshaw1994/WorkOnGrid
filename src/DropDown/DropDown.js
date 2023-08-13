import { Select } from "antd";
import React, { useState } from "react";

function DropDown() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const nums = [
    {
      label: 1,
      options: [
        { label: 11, value: 11 },
        { label: 12, value: 12 },
        { label: 13, value: 13 },
        { label: 14, value: 14 },
        { label: 15, value: 15 },
      ],
    },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
  ];
  return (
    <div style={{ display: "grid", gridGap: "50px" }}>
      <Select
        defaultValue={11}
        style={{
          width: 200,
        }}
        options={nums}
        showSearch
        onChange={setData1}
      />
      <Select
        defaultValue={11}
        style={{
          width: 200,
        }}
        mode="multiple"
        options={nums}
        showSearch
        onChange={setData2}
      ></Select>
    </div>
  );
}

export default DropDown;
