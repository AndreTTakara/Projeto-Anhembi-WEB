var app = angular.module("carrinhoApp", [])

app.controller("CarrinhoController", function ($scope) {
    $scope.an = 15;
    $scope.items = [
        {nome: 'Red Dead Redemption 2', preco: 245.00, imagem: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"},
        {nome: 'Jujutsu Kaisen Cursed Clash', preco: 140.00, imagem: "https://static.bandainamcoent.eu/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/jjk-news-announcement-thumbnail.jpg"},
        {nome: 'Rakuen', preco: 46.00, imagem: "https://images.squarespace-cdn.com/content/v1/5d43c3cfc0b08b0001b92d2e/e819a89e-aee7-4602-8c09-6af74d2d1f48/Rakuen+Poster.jpg"},
        {nome: 'Metal Gear Solid', preco: 49.00, imagem: "https://store-images.s-microsoft.com/image/apps.59413.69545190943188987.bad7c420-51af-4579-8383-72696799c908.4c6a4319-7fad-41d0-af60-86a68930416a?q=90&w=480&h=270"}
    ];
    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
        vazio ();
        preco ();
        
    }

    var total = 0;
        for(i = 0; i < $scope.items.length; i++){
            total += $scope.items[i].preco;
    
        }
        document.getElementById('output').innerHTML = "Total estimado: " + total+".00";

    function preco() {
        var total = 0;
        for(i = 0; i < $scope.items.length; i++){
            total += $scope.items[i].preco;
    
        }
        document.getElementById('output').innerHTML = "Total estimado: " + total+".00";
        preco ();
    }
    function vazio() {
        if (i == 1) {
            document.getElementById('carrinho').innerHTML = "Seu Carrinho está vazio!"
        }
    }
}
 
);