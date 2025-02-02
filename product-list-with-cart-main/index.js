import drawDesserts from "./scripts/desserts.js"
import selectors from "./scripts/selectors.js"
import { getImageProp } from "./scripts/utils.js"


// window.addEventListener('resize', () => {

//   const imageProp = getImageProp()
//   // console.log(imageProp)
//   for (const dessert of desserts) {
//     const dessertImg = selectors.dessertImg(dessert.id)
//     // console.log(dessertImg.src)
//     if (!dessertImg.src.includes(imageProp)) {
//       console.log('changing image')
//       dessertImg.src = dessert.image[imageProp]
//     }
//   }
//   // console.log(selectors.dessertImg(1))
// })

function initialize() {
    fetch('./data.json').then(resp => {
        resp.json().then(json => {
          desserts = json.map((dessert, index) => ({
            id: index,
            qty: 0,
            ...dessert
          }))
        }).finally(() => {
          drawDesserts(desserts)
        })
    })
}

initialize()