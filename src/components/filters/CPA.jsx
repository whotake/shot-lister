import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Col } from 'reactstrap';

class CPA extends React.Component {
  render() {
    const {
      onChange,
      cpaMin,
      cpaMax,
    } = this.props;

    return (
      <Form inline>
        <FormGroup row>
          <Col md={6}>
            <Input
              type="number"
              name="cpaMin"
              id="cpaMinimum"
              placeholder="от"
              value={cpaMin}
              onChange={e => onChange(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Input
              type="number"
              name="cpaMax"
              id="cpaMaximum"
              placeholder="до"
              value={cpaMax}
              onChange={e => onChange(e.target.value, true)}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

CPA.propTypes = {
  onChange: PropTypes.func.isRequired,
  cpaMin: PropTypes.string.isRequired,
  cpaMax: PropTypes.string.isRequired,
};

export default CPA;