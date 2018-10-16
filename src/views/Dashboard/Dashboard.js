import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal'
import Ticket from '../../components/Ticket/Ticket';
import { connect } from 'react-redux';
import { loadTickets } from '../../actions';
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
    console.log(this.modal)
    this.modal.current.toggleModal(action);
  }
  componentDidMount () {
    this.setActions();
    this.props.loadTickets(this.props.user.id);
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
    const { tickets } = this.props;
    return (
      <>
      <Header />
        <Layout>
          <div className="nav--dashboard">
            {
              this.state.actions.map((item, index) => <Button value={item.name} onClick={event => this.toggleModal(event, item.action)} key={index} />)
            }
          </div>
          <div className="container">
            <div className="columns is-multiline">
              {
                tickets.map((item, index) => {
                  return (
                    <Ticket key={index} subject={item.subject} description={item.description} />
                  )
                })
              }
            </div>
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
    user: state.user,
    tickets: state.tickets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTickets (user_id) {
      dispatch(loadTickets(user_id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);