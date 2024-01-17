import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
//import images
import bacgroundSection1 from '../../assets/images/backgroud-section1.jpg'
import bacgroundSectionChefWords from '../../assets/images/background-chef-words.jpg'
import burgerIcons from '../../assets/images/burger-icons.png'
import burger1 from '../../assets/images/burger1.jpg'
import burger2 from '../../assets/images/burger2.jpg'
import coFounder1 from '../../assets/images/coFounder1.jpg'
import coFounder2 from '../../assets/images/coFounder2.jpg'
import founder from '../../assets/images/fundador.jpg'
//final import images
function Home() {
  return (
   <main>
     <div className="home-container">
            
    
         <div className="apresentation">
             <section className="apresentation-section">
                    <h1>Obtenha reembolso de até 50%</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugiat soluta, est expedita </p>
                    <Link to='/products' className="btn-apresentation">PEÇA AGORA </Link>
                </section>
         </div>
    

            <section className="about-chefs">
                <h2>Nosso Chef </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nulla quae eligendi <br/> numquam amet consectetur adipisicing elit. Omnis nulla quae eligendi nu</p>
                <div className="photo-chefs">
                    <div className="function-chefs">
                        <img src={founder} alt="Aiden"/>
                        <h3>AIDEN HUNTER</h3>
                        <p>Fundador</p>
                    </div>
                    <div className="function-chefs">
                        <img src={coFounder1} alt="ETHEL RAMSEY"/>
                        <h3>ETHEL RAMSEY</h3>
                        <p>Co-Fundador</p>
                    </div>
                    <div className="function-chefs">
                        <img src={coFounder2} alt="FANNIE STEWART"/>
                        <h3>FANNIE STEWART</h3>
                        <p>Co-Fundador</p>
                    </div>
                </div>
            </section>

            <section className="about-burguer">
                <img src={burger1} alt="burger"/>
                <div className="about-burger-container">
                    <h2>Melhor Burger</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum <br/> temporibus reprehenderit.dolor sit, amet <br/> consectetur adipisicing elit. Cum temporibus reprehenderit.</p>
                    <Link to='/product' className="btn-white">PEÇA AGORA</Link>
                </div>
            </section>

            <section className="big-burguer">
                <div className="big-burger-container">
                    <h2>Big Burger</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum <br/> temporibus reprehenderit.dolor sit, amet <br/> consectetur adipisicing elit. Cum temporibus reprehenderit.</p>
                    <Link to='/produt' className="btn-apresentation">PEÇA AGORA</Link>
                </div>
                <img src={burger2} alt="Burger"/>
                
            </section>
            
            <section className="section-statistics">
                <h2>Estatisticas</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br/> elit. Cum temporibus reprehenderit temporibus reprehenderit.</p>
                <div className="stats-number">
                    <div className="stats-number-info">
                        <p>7K</p>
                        <p>CLIENTES</p>
                    </div>
                    <div className="stats-number-info">
                        <p>109</p>
                        <p>LOJAS</p>
                    </div>
                    <div className="stats-number-info">
                        <p>35</p>
                        <p>PAÍSES</p>
                    </div>
                    
                </div>

            </section>

            <section className="package">
                <h2>Pacotes Populares</h2>
                <div className="package-inner">
                    <div className="package-banner">
                        PACOTE l
                        <img src={burgerIcons} alt=""/>
                        <span className="price">$10.00</span>
                        <p>Lorem ipsum dolor sit <br/> amet consectetur adipisicing elit. <br/> sequi, ea, <br/> dolor corrupti in excepturi rem labore nobis </p>
                        <a href="#" className="package-btn">PEÇA AGORA </a>
                    </div>
                    <div className="package-banner">
                        PACOTE ll
                        <img src={burgerIcons} alt=""/>
                        <span className="price">$30.00</span>
                        <p>Lorem ipsum dolor sit <br/> amet consectetur adipisicing elit. <br/> sequi, ea, <br/> dolor corrupti in excepturi rem labore nobis </p>
                        <a href="#" className="package-btn">PEÇA AGORA </a>
                    </div>
                    <div className="package-banner">
                        PACOTE lll
                        <img src={burgerIcons} alt=""/>
                        <span className="price">$50.00</span>
                        <p>Lorem ipsum dolor sit <br/> amet consectetur adipisicing elit. <br/> sequi, ea, <br/> dolor corrupti in excepturi rem labore nobis </p>
                        <a href="#" className="package-btn">PEÇA AGORA </a>
                    </div>
                </div>

            </section>

            <section className="chef-words">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor saepe accusamus corporis omnis. Corporis in doloremque provident quaerat repellendus quis, quidem illum dolores molestiae accusantium quos? Labore, exercitationem quam!</p>
                <h2>Barry Henderson</h2>
            </section>

            <section className="updates">
                <h2>Não perca nossas atualizações</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Et error eligendi dolor magnam.</p>
                <div className="input-updates">
                    <input type="email" name="email" id="email" placeholder="Seu Email"/>
                    <input type="submit" value="Inscreva-se"/>
                </div>
            </section>
            
        </div>
   </main>
  )
}

export default Home;
