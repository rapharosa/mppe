const btn = document.querySelector("#send");

btn.addEventListener('click', function(e){
    e.preventDefault();

    const tensao = document.querySelector("#tensao");

    const value = tensao.value

    console.log(value);
});