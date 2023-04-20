import { keys } from 'lodash-es';
import Accordion from 'react-bootstrap/Accordion';

function BaseAccordion({title, children, key}) {
  return (
    <Accordion defaultActiveKey={keys}>
      <Accordion.Item eventKey={key}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
            {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BaseAccordion;