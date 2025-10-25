import './header.css'
import lupa from '../../assets/icons/icon-lupa.png'
import coracao from '../../assets/icons/icon-coracao.png'
import carrinho from '../../assets/icons/icon-carrinho.png'

const Header = () => {
    return (
        <header>
            <div className='liquidacao'>
                <p>Liquidação de verão para todos os trajes de banho e entrega expressa grátis - 50% de desconto! <strong>ShopNow</strong> </p>
                <div className='idioma'>
                    <select name="idioma">
                        <option value="pt">Português</option>
                        <option value="en">Inglês</option>
                        <option value="es">Espanhol</option>
                        <option value="fr">Francês</option>
                        <option value="de">Alemão</option>
                    </select>

                </div>
            </div>
            <div className="container">
                <nav className='nav-header'>
                    <h1>Exclusive</h1>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Inscrever-se</a></li>
                    </ul>

                </nav>

                <div className='imput'>
                    <input type="text" placeholder='O que você está procurando?' />
                    <img src={lupa} alt="Lupa" className="icon" />
                    
                    <div className="icon-header">
                        <img src={coracao} alt="items salvos" />
                        <img src={carrinho} alt="items salvos" />

                    </div>
                </div>


            </div>

            <div className='listra'></div>

        </header>
    )
}

export default Header;