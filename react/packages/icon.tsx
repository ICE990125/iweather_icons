import React from 'react';
import 'virtual:svg-icons-register';

interface P {
  name: string;
  prefix: string;
  type: string;
  size: number;
}

type S = { value: string };

export default class Icon extends React.Component<P, S> {
  constructor(props: P | Readonly<P>) {
    super(props);
  }

  static defaultProps = {
    prefix: 'icon',
    type: 'qweather',
    size: 50,
  };

  render() {
    const { size, prefix, type, name } = this.props;
    const symbolId = `#${prefix}-${type}-${name}`;

    return (
      <svg
        aria-hidden="true"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}>
        <use href={symbolId} />
      </svg>
    );
  }
}
