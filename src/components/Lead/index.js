import React from 'react';
import { Container } from 'reactstrap';

import { InstallButton } from '../Title';
import './index.css';

export const leadDescription = 'Finish your code reviews faster';
const subDescription =
  'Enhanced git diffs with symbol lookup and code-aware navigation';

export class Lead extends React.Component {
  render() {
    return (
      <div className="lead-container">
        <Container>
          <h2>{leadDescription}</h2>
          <h4>{subDescription}</h4>
          <div className="lead-button">
            <InstallButton />
          </div>
        </Container>
      </div>
    );
  }
}
