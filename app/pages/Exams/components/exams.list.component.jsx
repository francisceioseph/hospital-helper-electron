import React from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Divider, Button, Col } from 'antd';
import Agenda from '../../../components/Agenda';

class ExamComponent extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col>
            <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
          </Col>
          <Col>
            <Button type="primary" onClick={() => history.push('/exames/novo')}>
              Agendar Exame
            </Button>
          </Col>
        </Row>

        <Divider />

        <Row>
          <Agenda events={this.props.exams} />
        </Row>
      </div>
    );
  }
}

ExamComponent.propTypes = {
  specialties: PropTypes.instanceOf(Array)
};

ExamComponent.defaultProps = {
  specialties: []
};

export default ExamComponent;
