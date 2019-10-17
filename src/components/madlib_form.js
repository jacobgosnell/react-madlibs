import React, { Component }  from 'react';
import {
  Col,
  Row,
  Card
} from 'reactstrap';

import _ from 'lodash';

function MadlibInput(props) {
  return (
    <Col md="3" className="input-wrapper">
      <Row>
        <Col md="2">
          <label className="green-label">{props.index}</label>
        </Col>
        <Col md="10">
          <input placeholder={props.placeholder} value={props.state} type='text' onChange={props.onChange} />
        </Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="10">
          <div className="input-description">{props.placeholder}</div>
        </Col>
      </Row>
    </Col>
  );
}
class MadlibForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: '',
      pluralNoun: '',
      adjectiveOne: '',
      celebrityOne: '',
      celebrityOne: '',
      adjectiveTwo: '',
      nounOne: '',
      numberOne: '',
      numberTwo: ''
    }
  }

  handleChange = function(props) {
    return function(event) {
      this.setState({
        [props.inputTitle]: event.target.value
      })
      console.log(`value for state ${props.inputTitle} is ${this.state[props.inputTitle]}`);
    }.bind(this);
  }

  render() {

    this.inputData = [
      {placeholder: 'Color', prop: 'color', state: this.state.color},
      {placeholder: 'Noun (Plural)', prop: 'pluralNoun', state: this.state.pluralNoun},
      {placeholder: 'Adjective', prop: 'adjectiveOne', state: this.state.adjectiveOne},
      {placeholder: 'Celebrity', prop: 'celebrityOne', state: this.state.celebrityOne},

      {placeholder: 'Adjective', prop: 'adjectiveTwo', state: this.state.adjectiveTwo},
      {placeholder: 'Noun', prop: 'nounOne', state: this.state.nounOne},
      {placeholder: 'Number', prop: 'numberOne', state: this.state.numberOne},
      {placeholder: 'Number', prop: 'numberTwo', state: this.state.numberTwo},
    ] 

    return (
      <div className="card-wrapper">
        <Card>
          <Row style={{textAlign: 'center'}}>
          {
            _.map(this.inputData, (data, indexKey) => {
              return <MadlibInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
            })
          }
          </Row>
        </Card>
      </div>
    );
  }
}

export default MadlibForm;