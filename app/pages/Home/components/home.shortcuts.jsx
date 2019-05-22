// @flow

import * as React from 'react';
import * as _ from 'lodash';

import { Row, Col, Divider } from 'antd';

import ShortcutCard from './shortcut-card.component';
import '../Home.scss';

type Props = {
  title: String,
  menus: Array<Object>,
  permissions: Array<Object>
};

type State = {
  menus: Array<Object>
};

export class HomeShortcuts extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      menus: this.getMenusForPermissions()
    };
  }

  getMenusForPermissions() {
    return _.filter(this.props.menus, (menuItem) => {
      if (!menuItem.menuParentCode) {
        return false;
      }

      const permission = menuItem.permission || {};

      const permissionsGranted = _.chain(permission.resources)
        .map(resource => this.props.permissions[resource])
        .filter(p => !!p && p.action_type === 'view')
        .size()
        .value();

      return permissionsGranted > 0;
    });
  }

  render() {
    return (
      <div>
        {this.state.menus.length > 0 && <Divider orientation="left">{this.props.title}</Divider>}
        <Row gutter={16}>
          {this.state.menus.map(item => (
            <Col className="col-shortcut" xs={12} sm={12} md={6} lg={6} xl={4} key={item.code}>
              <ShortcutCard name={item.name} icon={item.icon} route={item.route} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
