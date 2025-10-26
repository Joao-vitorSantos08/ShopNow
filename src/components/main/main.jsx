import './main.css'
import maca from '../../assets/icons/Apple_gray_logo 1.png'
import seta_main from '../../assets/icons/icon-seta-main.png'
import iphone from '../../assets/image/img-Iphone.png'

const Main = () => {
    return (

        <main>
            <div className="nav-main">
                <nav>
                    <ul>
                        <li>Moda Feminina </li>
                        <li>Moda Masculina </li>
                        <li>Eletrônico</li>
                        <li>Casa e estilo de vida</li>
                        <li>Medicamento</li>
                        <li>Esportes e atividades ao ar livre</li>
                        <li>Bebês e Brinquedos</li>
                        <li>Mercearia e animais de estimação</li>
                        <li>Saúde e beleza</li>
                    </ul>
                </nav>
                <span></span>
            </div>

            <div className='destaque'>
                <div className='container-infor'>
                    <p><img src={maca} alt="logo da Apple" /> iPhone 14 Series</p>
                    <h1>Up to 10% off Voucher</h1>
                    <p><span>Shop Now </span><img src={seta_main} alt="" /></p>
                </div>
                <div>
                    <img src={iphone} alt="" />
                </div>
            </div>

        </main >

    )
}

export default Main