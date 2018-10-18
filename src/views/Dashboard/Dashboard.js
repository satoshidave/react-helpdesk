import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal'
import Ticket from '../../components/Ticket/Ticket';
import { connect } from 'react-redux';
import { loadTickets, loadAllTickets } from '../../actions';
import './Dashboard.css';

class Dashboard extends Component {
  constructor () {
    super ();
    this.state = {
      actions: [],
      isAdmin: false
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
    this.props.loadTickets(this.props.user.id, this.state.isAdmin);
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
  componentWillMount () {
    const { role } = this.props.user;
    switch (role) {
      case 1:
        this.setState({
          isAdmin: true
        });
        break;
      case 2:
        this.setState({
          isAdmin: false
        });
        break;
      default:
      break;
    }
  }
  render () {
    console.log(this.props.user.role)
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
                tickets.map((item) => {
                  const {
                    id, name, user_id, subject, description,
                  } = item;
                  return (
                    <Ticket key={id} user={name} userId={user_id} subject={subject} description={description} identifier={id} administrable={this.state.isAdmin}/>
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
    loadTickets (user_id, isAdmin) {
      console.log(isAdmin);
      !isAdmin ? 
      dispatch(loadTickets(user_id)):dispatch(loadAllTickets());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);