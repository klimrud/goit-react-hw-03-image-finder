import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
// import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  heandleChange = e => {
    console.log('e.currentTarget.value', e.currentTarget.value);
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('hi');
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label"><BiSearchAlt2 /></span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            value={this.state.value}
            onChange={this.heandleChange}
            placeholder="Search images and photos"
          />
        </form>

        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.heandleChange}
          />
          <button type="submit">
            <BiSearchAlt2 className={css.iconFilter} />
          </button>
        </form> */}
      </header>
    );
  }
}
