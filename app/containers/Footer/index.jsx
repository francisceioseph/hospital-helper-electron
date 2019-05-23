// @flow

import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import {
  Layout, Row, Col, Progress
} from 'antd';

import './index.less';

const { Footer } = Layout;

type Props = {
  status: string,
  progress: number,
  message: string,
  duration: string
};

const mapPageStateToStatus = (page) => {
  if (page.loading) {
    return 'active';
  }

  if (page.error) {
    return 'exception';
  }

  return 'success';
};

const composeMessage = (page) => {
  if (page.loading) {
    return 'Carregando...';
  }

  const durationText = moment(page.requestDuration).format('ss.SS');
  return page.error ? `Erro - ${durationText}s` : `Sucesso - ${durationText}s`;
};

const mapStateToProps = ({ page }) => ({
  progress : 100,
  message  : composeMessage(page),
  status   : mapPageStateToStatus(page)
});

const mapDispatchToProps = {};

function AppFooter(props: Props) {
  return (
    <Footer className="footer">
      <Row type="flex" align="middle" justify="end" gutter={8}>
        <Col>
          <p>{props.message}</p>
        </Col>
        <Col>
          <Progress className="progress" percent={props.progress} showInfo={false} status={props.status} />
        </Col>
      </Row>
    </Footer>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppFooter);
