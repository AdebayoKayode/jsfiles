/**
 * Created by joe on 4/13/17.
 */
 var container  = document.getElementById("container");
 2
var productArr = obj.products;
var outPut = "";
for (i = 0; i < productArr.length; i++) {
    outPut += `
        <div class="col-md-4">
            <div class="card">
                <div class="text-center thumbnail">
                    <img class="img-responsive" src="${productArr[i].img}"  >
                </div>
                <div class="contents">
                    <h3 class="name">
                        Product Name:${productArr[i].product}
                    </h3>
                    <p class="price">Product price ${productArr[i].price}</p>
                    <p class="desc">Product description: ${productArr[i].unit}</p>
                </div>
            </div>
        </div>
  `;


}
container.innerHTML = outPut;
