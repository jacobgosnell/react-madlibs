import React, { Component }  from 'react';
import {
  Col,
  Row,
  Card
} from 'reactstrap';

class MadlibForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: '',
      pluralNoun: '',
      adjectiveOne: '',
      celebrityOne: ''
    }
  }

  handleChange = function(props) {
    return function(event) {
      // console.log(`value for input ${props.inputTitle} is: ${event.target.value}`);
      this.setState({
        [props.inputTitle]: event.target.value
      })
      console.log(`value for state ${props.inputTitle} is ${this.state[props.inputTitle]}`);
    }.bind(this);
  }

  render() {
    return (
      <div className="card-wrapper">
        <Card>
          <Row style={{textAlign: 'center'}}>
            <Col md="3" className="input-wrapper">
            <Row>
              <Col md="2">
                <label className="greenLabel">1</label>
              </Col>
              <Col md="10">
                <input placeholder='Color' type='text' onChange={this.handleChange({inputTitle: 'color'})} />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="input-description">Color</div>
              </Col>
            </Row>
          </Col>
          <Col md="3" className="input-wrapper">
            <Row>
              <Col md="2">
                <label className="greenLabel">1</label>
              </Col>
              <Col md="10">
                <input placeholder='Noun (Plural)' type='text' onChange={this.handleChange({inputTitle: 'pluralNoun'})} />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="input-description">Noun (Plural)</div>
              </Col>
            </Row>
          </Col>
          <Col md="3" className="input-wrapper">
            <Row>
              <Col md="2">
                <label className="greenLabel">1</label>
              </Col>
              <Col md="10">
                <input placeholder='Adjective' type='text' onChange={this.handleChange({inputTitle: 'AdjectiveOne'})} />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="input-description">Adjective</div>
              </Col>
            </Row>
          </Col>
          <Col md="3" className="input-wrapper">
            <Row>
              <Col md="2">
                <label className="greenLabel">1</label>
              </Col>
              <Col md="10">
                <input placeholder='Celebrity' type='text' onChange={this.handleChange({inputTitle: 'CelebrityOne'})} />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="input-description">Celebrity</div>
              </Col>
            </Row>
          </Col>
        </Row>
        </Card>
      </div>
    );
  }
}

export default MadlibForm;