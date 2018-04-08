import React from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './header.scss';
import logo from './logo-blue.svg';

const descriptors = ['Web', 'Mobile', 'Backend'];

class Header extends React.Component {
  state = {
    isOpen: false,
    descriptorIndex: 0,
    descriptor: descriptors[0],
  }

  constructor(props) {
    super(props);
    setTimeout(() => {
      this.handleWordChange();
    }, 3000);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  close = () => {
    this.setState({
      isOpen: false,
    });
  }

  removeLetter = (timeout) => {
    if (!this.state.descriptor || !this.state.descriptor.length) return;
    const descriptor = this.state.descriptor.slice(0, -1);
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState({
          descriptor,
        });
        resolve();
      }, timeout);
    });
  }

  deleteWord = async () => {
    const currentWord = this.state.descriptor;
    const timePerLetter = 750 / currentWord.length;
    for (let i = 0; i < currentWord.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await this.removeLetter(timePerLetter);
    }
  }

  addLetter = (timeout) => {
    if (this.state.descriptor === descriptors[this.state.descriptorIndex]) {
      return;
    }
    const currLength = this.state.descriptor.length;
    const descriptor = descriptors[this.state.descriptorIndex].substr(0, currLength + 1);
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState({ descriptor });
        resolve();
      }, timeout);
    });
  }

  addWord = async () => {
    let nextIndex = this.state.descriptorIndex + 1;
    if (nextIndex >= descriptors.length) {
      nextIndex = 0;
    }
    this.setState({ descriptorIndex: nextIndex });
    const nextWord = descriptors[nextIndex];
    const timePerLetter = 750 / nextWord.length;
    for (let i = 0; i < nextWord.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await this.addLetter(timePerLetter);
    }
  }

  handleWordChange = async () => {
    await this.deleteWord();
    await this.addWord();
    setTimeout(this.handleWordChange, 3000);
    // const currentWord = this.state.descriptor;
    // let index = this.state.descriptorIndex + 1;
    // if (index >= descriptors.length) {
    //   index = 0;
    // }
    // const nextWord = descriptors[index];
    // const timePerLetter = 2000 / nextWord.length;
    // setTimeout(() => {
    //
    // });
    // this.setState({ descriptorIndex: index, descriptor: descriptors[index] });
  }

  render() {
    const word = this.state.descriptor;
    return (
      <div>
        <Navbar className="page-navbar" color="white" light expand="md">
          <Link className="navbar-brand" to="/" onClick={this.close}>
            <div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
              <img className="site-logo" src={logo} alt="JW" />
              <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                <span>Justin Waite</span>
                <span style={{ fontSize: 14, display: 'flex', alignItems: 'center' }}>
                  <span>{word}</span>
                  <span className="cursor blink" />
                  &nbsp;Developer
                </span>
              </div>
            </div>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/showcase" onClick={this.close}>
                    Showcase
                </Link>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/jdeanwaite">Github</NavLink>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/lab" onClick={this.close}>
                    Lab
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/hire-me" onClick={this.close} style={{ color: '#000' }}>
                  <strong>Hire Me</strong>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
