export class UserCard {
  constructor(userData) {
    this.userData = userData;
    this.cardElement = document.createElement('div');
    this.cardElement.classList.add('user-card');
  }

  render() {
    const { id, name, username, email, address, phone, website, company } =
      this.userData;

    this.cardElement.innerHTML = `
          <div class="user-card__id">ID: ${id}</div>
          <h3 class="user-card__name">${name}</h3>
          <div class="user-card__username">Username: ${username}</div>
          <div class="user-card__email">Email: ${email}</div>
          <div class="user-card__address">Address: ${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}</div>
          <div class="user-card__phone">Phone: <a class='user-card__phone-number' href='tel:${phone}' > ${phone} </a></div>
          <div class="user-card__website">
            Website:
              <a class='user-card__website-link' target="_blank" href='https://${website}'>${website}</a>
          </div>
    `;

    return this.cardElement;
  }
}
