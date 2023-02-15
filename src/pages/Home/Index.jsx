import About from '../../components/About/Index';
import Menu from '../../components/Menu/Index';
import Banner from './Banner/Index';
import Galeria from './Galeria/Index';
import style from './Home.module.scss';
import products from './products.json';


export default function Home(){
    return (
        <>
        <Menu/>
        <Banner/>
        <Galeria category="Star Wars" products={products}/>
        <Galeria category="Consoles" products={products}/>
        <Galeria category="Diversos" products={products}/>
        <About/>
        </>
        
    );
}
