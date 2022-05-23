const PrintFood = (container, data) => {
    container.innerHTML = '';
    data.forEach(food => {
        const {id, name, image, price, description, rate} = food;
        const containerCards = document.createElement('div');
        containerCards.classList.add('m-3', 'rounded-pill', 'border', 'border-dark', 'bg-light', 'p-3', 'card-light-theme');
        containerCards.style.width = '15rem';
        containerCards.innerHTML = `
                <div class="text-center my-3">
                    <div>
                        <img src="${image}" class="w-100 p-3 rounded-circle" alt"${name}">
                        <div class="d-flex justify-content-center">
                            <p class="price rounded-circle p-1" 
                            style="background-color: #FDC55E;
                            font-size: 1rempx;">
                                ${price}$
                            </p>
                        </div> 
                    </div>
                    <div class="card-body h-100">
                        <div class="d-flex justify-content-center">
                            <div class="d-flex flex-nowrap align-items-center">
                                <img src="../images/users.svg" alt="users"><img src="../images/star.svg" alt="favorite">
                                <p class="card-rate m-0" style="font-size: 15px;">(${rate})</p>
                            </div>
                        </div>
                        <h5 class="card-title pastel">${name}</h5>
                        <p class="card-description" style="font-size: 12px;">${description}</p>
                        <a class="btn d-block btn-danger" id="${id}"><i class="bi bi-star text-light">Order now</i></a>
                    </div>
                </div>
    `;
    container.appendChild(containerCards);
    })
}
export default PrintFood;