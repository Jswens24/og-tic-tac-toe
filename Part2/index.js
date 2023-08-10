console.log('connected');

const cardId = document.querySelector('#card-id')
const cardStyle = document.querySelector('#style')

const setCard = () => {
    const idValue = document.querySelector(`#${cardId.value}`)
    console.log(idValue);
    idValue.style.color = cardStyle.value
}