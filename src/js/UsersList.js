import { UserCard } from './UserCard';

export class UserCardList {
  constructor() {
    this.cards = [];
    this.container = document.querySelector('.cards-container');
  }

  async fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  }

  createCards(users) {
    users.forEach((user) => {
      const card = new UserCard(user);
      this.cards.push(card);
    });
  }

  renderCards() {
    this.cards.forEach((card) => {
      this.container.appendChild(card.render());
    });
  }

  resetSearch() {
    this.cards.forEach((card) => {
      this.container.appendChild(card.render());
    });
  }

  filterCards(value) {
    const lowerCaseSearchTerm = value.toLowerCase();

    const filteredCards = this.cards.filter((item) => {
      // Save all the object keys for traversal at each level
      const stack = [item.userData];

      while (stack.length > 0) {
        const current = stack.pop();

        // Process each key in the current object
        for (let key in current) {
          if (typeof current[key] === 'object' && current[key] !== null) {
            // If the value is an object, we place it on the stack for further processing
            stack.push(current[key]);
          } else if (typeof current[key] === 'string') {
            // If the value is a string, check if it matches the search query
            if (current[key].toLowerCase().includes(lowerCaseSearchTerm)) {
              return true;
            }
          }
        }
      }
    });

    this.container.innerHTML = '';
    filteredCards.forEach((card) => {
      this.container.appendChild(card.render());
    });
  }

  async init() {
    const users = await this.fetchUsers();
    this.createCards(users);
    this.renderCards();
  }
}
