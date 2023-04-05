import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  heandleChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createSearchTextImage(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={css['search-bar']}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <BiSearchAlt2
              className={css['icon-search']}
              width="24"
              height="24"
            />
          </button>

          <input
            className={css.input}
            type="text"
            // autocomplete="off"
            // autofocus
            value={this.state.value}
            onChange={this.heandleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
