document.querySelector('.burger').addEventListener('click',function(){

    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('burger-active');
});


function changeMainImage(imageSrc) {
    const mainImage = document.querySelector('.bigimg')
    mainImage.src = imageSrc
}






document.querySelector('.korzinka').addEventListener('click',function(){
    document.querySelector('.card').classList.toggle('active');

})



const productNumber = document.querySelector('.sum')
let counter = 0;

document.querySelector('.minus').addEventListener('click',function(){
    if (counter > 0){
        counter--
        productNumber.textContent = counter
    }
})
document.querySelector('.plus').addEventListener('click',function(){
    counter ++
    productNumber.textContent = counter 
})

function addToCart(){
    const cardContent = document.querySelector('.card-content');
    document.querySelector('.remove').addEventListener('click',function(){
        cardContent.remove()
    })
    cardContent.innerHTML = ``;
    if (counter === 0 ){
        cardContent.innerHTML = `<p>your card is emty</p>`;
    }
    else {
        const price = 125;
        const total = price * counter 
        cardContent.innerHTML = `<p>Boots ${price} x ${counter}  </p>
        <h3>your toal ${total} </h3>`

    }
}


