import React from 'react';
//Reactstrap contains stateless React Bootstrap 4 components that favor composition and control. 
//The library does not depend on jQuery or Bootstrap javascript.
import { Container, Row, Col } from 'reactstrap'; 
import { Button } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,	CardTitle, CardSubtitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Tooltip } from 'reactstrap';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import {Transition} from 'react-transition-group/Transition';
import { CSSTransition } from 'react-transition-group';

const Body = (props) => {
	
	return (
		<div className="container">
			<h1>Webpack 4 / Babel / React / Bootstrap / SASS Setup</h1>
		</div>
	);	
}

export default Body;