import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class SmurfForm extends React.Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      age,
      name,
      height,
      isUpdated,
      cancelForm
    } = this.props;
    return (
      <Form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: "0 auto" }}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>age</Label>
              <Input
                type="text"
                name="age"
                value={age}
                onChange={handleChange}
                placeholder="age"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>height</Label>
          <Input
            type="text"
            name="height"
            value={height}
            onChange={handleChange}
            placeholder="height"
          />
        </FormGroup>
        <Button type="submit">{isUpdated ? "Update" : "Submit"}</Button>
        <Button style={{ marginLeft: 10 }} color="danger" onClick={cancelForm}>
          Cancel
        </Button>
      </Form>
    );
  }
}

export default SmurfForm;
