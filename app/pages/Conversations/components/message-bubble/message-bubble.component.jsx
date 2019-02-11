// @flow

import * as React from 'react';
// import * as moment from 'moment';
import './message-bubble.less';

type Props = {
  data: Object,
  isMine: boolean,
  startsSequence: boolean,
  endsSequence: boolean
  // showTimestamp: boolean
};

export default function Message(props: Props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence // showTimestamp
  } = props;

  // const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  return (
    <div
      className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}
    >
      {/* {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        } */}

      <div className="bubble-container">
        <div className="bubble" title="">
          {data.content}
        </div>
      </div>
    </div>
  );
}
