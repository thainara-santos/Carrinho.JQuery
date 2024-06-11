
$(document).ready(function(){
    function enviar(){
        if($("#name").val() && $("#email").val() === "") {
            alert("Preencha seus Dados")
        }
        else{
            const nome = $("#name").val();
            $("#frase").text(`Olá ${nome}`);
            $("#name").hide();
            $("#email").hide();
            $("#saveButton").hide();
            $(".add-to-cart").attr("disabled", false)
        }
    }
   
    $("#saveButton").on("click", enviar);
    $("#saveButton").click(function(event){
        event.preventDefault();
    });
  
});

$(document).ready(function(){
    let cart = {};
    let total = 0;

    function adicionarAoCarrinho(item, price) {
        if (cart[item]) {
            cart[item].quantity += 1;
        } else {
            cart[item] = { price: price, quantity: 1 };
        }
        updateCart();
    }

    function updateCart() {
        let cartItems = $("#cartItems");
        cartItems.empty();
        total = 0;
        for (let item in cart) {
            let itemTotal = cart[item].price * cart[item].quantity;
            total += itemTotal;
            cartItems.append(`<li>${item} - Quantidade: ${cart[item].quantity} - Total: R$ ${itemTotal.toFixed(2)}</li>`);
        }
        $("#totalPrice").text(total.toFixed(2));
    }

    window.adicionarAoCarrinho = adicionarAoCarrinho;
});

