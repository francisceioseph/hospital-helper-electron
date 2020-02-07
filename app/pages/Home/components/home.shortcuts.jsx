// @flow

import * as React from 'react';
import * as _ from 'lodash';

import { Row, Col, Divider } from 'antd';

import ShortcutCard from './shortcut-card.component';
import '../Home.scss';

type Props = {
  title: String,
  menus: Array<Object>,
};

type State = {};

// eslint-disable-next-line react/prefer-stateless-function
export class HomeShortcuts extends React.Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.menus.length > 0 && (
          <Divider orientation="left">{this.props.title}</Divider>
        )}
        <Row gutter={16}>
          {this.props.menus.filter(m => !!m.breadParentCode).map(item => (
            <Col
              className="col-shortcut"
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              key={item.code}
            >
              <ShortcutCard
                name={item.name}
                icon={item.icon}
                route={item.route}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
