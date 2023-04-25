/* <div class="model-card">
  <img
    src="./img/6-buy-now/watch.jpg"
    srcset="./img/6-buy-now/watch.jpg 1x, ./img/6-buy-now/watch@2x.jpg 2x"
    width="276"
    height="325"
    alt="watch model S42"
  />
  <div class="model-info">
    <p class="model">Tube Watch S42 Date Steel With Black...</p>
    <span class="price">€395</span>
  </div>
</div>; */

const createElement = (tag, className, textContent) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
};

const addToStore = () => {
  const buttons = document.getElementsByClassName('button-heart');
  for (let item of buttons) {
    // console.log(item);
    item.addEventListener('click', () => {
      if (!item.children[0].classList.contains('like-heart')) {
        item.children[0].classList.toggle('like-heart');
        const src =
          item.previousElementSibling.children[0].children[0].getAttribute(
            'src'
          );
        const title = item.previousElementSibling.children[1].textContent;
        const price = item.previousElementSibling.children[2].textContent;

        const modelCard = createElement('div', 'model-card', null);
        productsList.append(modelCard);

        const img = createElement('img', null, null);
        img.src = src;
        modelCard.append(img);

        const modelInfo = createElement('div', 'model-info', null);
        modelCard.append(modelInfo);

        const model = createElement('p', 'model', title);
        modelInfo.append(model);

        const priceElement = createElement('span', 'price', price);
        modelInfo.append(priceElement);

        console.log(price);
      } else {
      }
    });
  }
};

const showDetails = () => {
  const products = document.getElementsByClassName('catalog-list-item');

  for (let item of products) {
    item.addEventListener('click', event => {
      event.preventDefault();

      item.children[0].children[0].children[1].classList.toggle('checked');

      if (!item.children[1].children[0].classList.contains('like-heart')) {
        item.children[1].children[0].classList.toggle('checked-heart');
      }
    });
  }
};

addToStore();
showDetails();
