import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal'
import { connect } from 'react-redux';
import './Dashboard.css';

class Dashboard extends Component {
  constructor () {
    super ();
    this.state = {
      actions: []
    }
    this.modal = React.createRef();
  }
  toggleModal = (event, action) => {
    event.preventDefault();
    this.modal.current.toggleModal(action);
  }
  componentDidMount () {
    this.setActions();
  }
  setActions = () => {
    switch (this.props.user.role) {
      case 1:
        this.setState({
          actions: [
            { name: 'Crear usuario', action: 'create-user' },
            { name: 'Eliminar Usuario', action: 'delete-user' }
          ]
        });
        break;
      case 2:
        this.setState({
          actions: [
            { name: 'Reportar Incidencia', action: 'incidence' }
          ]
        });
        break;
      default:
        break;
    }
  }
  render () {
    console.log(this.props.user)
    return (
      <>
      <Header />
        <Layout>
          <div className="nav--dashboard">
            {
              this.state.actions.map((item, index) => <Button value={item.name} onClick={event => this.toggleModal(event, item.action)} key={index} />)
            }
          </div>
        </Layout>
        <Modal ref={this.modal} />
      <Footer />
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard);