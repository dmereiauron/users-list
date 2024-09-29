import '../styles/main.scss';
import { UserCardList } from './UsersList';

document.addEventListener('DOMContentLoaded', () => {
  const userList = new UserCardList();
  const searchForm = document.querySelector('.search__form');
  const searchInput = document.querySelector('.search__input');

  userList.init();

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchText = searchInput.value;

    if (!searchText) return;
    else {
      userList.filterCards(searchText);
    }

    console.log(searchText);
  });

  searchForm.addEventListener('reset', (event) => {
    event.preventDefault();
    userList.resetSearch();
    searchInput.value = '';
  });
});
