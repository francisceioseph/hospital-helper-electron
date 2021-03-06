import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';

import { compose, withHandlers } from 'recompose';
import { Modal } from 'antd';

import 'moment/locale/pt-br';

import CustomToolbar from './toolbar.component';
import './agenda.component.scss';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const withCalendarHandlers = withHandlers({
  onOkClick: () => () => {}
});

const Agenda = (props) => {
  const views = [BigCalendar.Views.WEEK, BigCalendar.Views.DAY];

  return (
    <div>
      <BigCalendar
        selectable
        events={props.events}
        showMultiDayTimes
        views={views}
        defaultView={BigCalendar.Views.WEEK}
        defaultDate={new Date()}
        culture="pt-BR"
        onSelectEvent={props.onSelectEvent}
        onSelectSlot={props.onSelectSlot}
        components={{
          toolbar: CustomToolbar
        }}
      />
    </div>
  );
};

Agenda.propTypes = {
  events        : PropTypes.instanceOf(Array),
  onSelectEvent : PropTypes.func.isRequired,
  onSelectSlot  : PropTypes.func.isRequired
};

Agenda.defaultProps = {
  events: []
};

export default compose(withCalendarHandlers)(Agenda);
