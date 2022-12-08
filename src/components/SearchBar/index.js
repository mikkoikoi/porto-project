import React, { useState } from "react";
import { Input, TreeSelect, Row, Col } from "antd";
const { Search } = Input;
const SearchBar = () => {
  const onSearch = (value) => console.log(value);
  const [value, setValue] = useState(undefined);
  const onChange = (newValue) => {
    setValue(newValue);
  };
  const treeData = [
    {
      value: "Jawa Barat",
      title: "Jawa Barat",
      children: [
        {
          value: "Bogor",
          title: "Bogor",
        },
      ],
    },
  ];

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[20, 20]}
      style={{
        width: "100%",
      }}
    >
      <Col
        style={{
          display: "flex",
          alignItems: "center",
        }}
        {...{ sm: 22, md: 18, lg: 4 }}
      >
        <Search
          placeholder="Cari"
          allowClear
          onSearch={onSearch}
          style={{
            width: "100%",
          }}
        />
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
        }}
        {...{ sm: 22, md: 18, lg: 4 }}
      >
        <TreeSelect
          showSearch
          style={{
            width: "100%",
          }}
          value={value}
          dropdownStyle={{
            maxHeight: 400,
            overflow: "auto",
          }}
          placeholder="Pilih Kotamu"
          allowClear
          treeDefaultExpandAll
          onChange={onChange}
          treeData={treeData}
        />
      </Col>
    </Row>
  );
};
export default SearchBar;
