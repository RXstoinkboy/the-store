import blackSneakers from '../../images/sneakers/blackSneakers.png';
import brownBag from '../../images/bags/brownBag.png';
import yellowBoots from '../../images/boots/yellowBoots.png';
import pinkShoes from '../../images/highHeels/pinkShoes.png';


const categories = {
    sneakers: {
        img: blackSneakers,
        name: 'sneakers',
        link: 'sneakers'
    },
    boots: {
        img: brownBag,
        name: 'bags',
        link: 'bags'
    },
    heels: {
        img: yellowBoots,
        name: 'boots',
        link: 'boots'
    },
    bags: {
        img: pinkShoes,
        name: `women's shoes`,
        link: 'womenshoes'
    },
}

export default categories;