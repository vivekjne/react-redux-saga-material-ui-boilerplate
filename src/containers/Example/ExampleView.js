import React from "react";
import Table from "../../components/Table";
import Container from "@material-ui/core/Container";
const ExampleView = ({ data, error, loading }) => {
  return (
    <>
      <Container fixed style={{ marginTop: 84 }}>
        {loading ? <h1>Loading...</h1> : <Table data={data} />}
      </Container>
      {error && <h4>Couldnt fetch data</h4>}
    </>
  );
};

export default ExampleView;
