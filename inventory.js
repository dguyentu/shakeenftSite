const nftData = [
    {
      name: "SUN Neighbor",
      IDnumber: 1,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "SUN Neighbor",
      IDnumber: 2,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "SUN Neighbor",
      IDnumber: 3,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
      name: "SUN Neighbor",
      IDnumber: 4,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
      name: "SUN Neighbor",
      IDnumber: 5,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
      name: "SUN Neighbor",
      IDnumber: 6,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
      name: "SUN Neighbor",
      IDnumber: 7,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];
  
  
  
  
//   these generate the nft cards, can't figure out why the popups don't have the associated photos with them.
  function nftTemplate(nft) {
    return `
    
        <div class="productCard">
          
            
            <a href="#cardpopupContent"><img class="nft-photo" src="${nft.photo}"></a>       
            <h2 class="nft-name">${nft.name}</h2>
            <p class="nft-number">No. ${nft.IDnumber}</p>      
            <a class="openSeaLink" href="#"><img class="openSeaLogo" src="img/opeanSea.png"></a>
		       
        
        </div>
      `;
  }

//   this returns the footer
  
  document.getElementById("cards").innerHTML = `
      
      ${nftData.map(nftTemplate).join("")}
      <p class="footer">These ${nftData.length} avatars were added recently. Let's welcome them to the family!</p>
    `;
  
  


