
import React from "react";
import "./SideBar.css";
import LoginButton from "../shared/LoginButton"

const SideBarView = () => {
  return (
    <>
      {/* Barra Lateral Reduzida */}
      <nav className="barra-lateral-reduzida" id="barra-lateral-reduzida">
        <ul>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=000000" alt="Início" /><span>Início</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=bqOL9fT7XSdo&format=png&color=000000" alt="Shorts" /><span>Shorts</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=2L0CwKPmkE4S&format=png&color=000000" alt="Inscrições" /><span>Inscrições</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000" alt="Você" /><span>Você</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=mDMf4QY53cql&format=png&color=000000" alt="Histórico" /><span>Histórico</span></a></li>
        </ul>
      </nav>

      {/* Barra Lateral Grande */}
      <nav className="barra-lateral" id="barra-lateral-grande">
        <ul>
          <li className="home"><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=000000" alt="Início" /><span className="forte">Início</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=bqOL9fT7XSdo&format=png&color=000000" alt="Shorts" /><span>Shorts</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=2L0CwKPmkE4S&format=png&color=000000" alt="Inscrições" /><span>Inscrições</span></a></li>
          <hr />
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000" alt="Você" /><span>Você</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=mDMf4QY53cql&format=png&color=000000" alt="Histórico" /><span>Histórico</span></a></li>
          <hr />
            <LoginButton />
          <hr />
          <p className="destaque">Explorar</p>
          <li ><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=3104&format=png&color=000000" alt="Em alta" /><span>Em alta</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="Shopping" /><span>Shopping</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=381&format=png&color=000000" alt="Música" /><span>Música</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=9683&format=png&color=000000" alt="Filmes" /><span>Filmes</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=tjuIMOXXe1mT&format=png&color=000000" alt="Ao vivo" /><span>Ao vivo</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=cAi7tS2wPJ7v&format=png&color=000000" alt="Jogos" /><span>Jogos</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=532&format=png&color=000000" alt="Notícias" /><span>Notícias</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=6YtrB5VnlPqY&format=png&color=000000" alt="Esportes" /><span>Esportes</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=AvANlXOxUB6Z&format=png&color=000000" alt="Cursos" /><span>Cursos</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=eCiHxDXbcmBe&format=png&color=000000" alt="Podcasts" /><span>Podcasts</span></a></li>
          <hr />
          <p className="destaque">Mais do Youtube</p>
          <li><a href="#"><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/klEQVR4nO2YS2sTURiGn0a04iKlCtJNt90Udd9V3cdl/0C1RVToXyhU1KKb/oVoNwU3SlQoCl5XRRdewHYlit0UbzQUs8gjAxMIgZhJMkkmel54N4eZ870PzJzLB0FBQUFBQf+DhBPCGeGccEVYFe4IJeGV8EH4KnyLfSAY+6BuPHrmvfAyfve2cF24HM8d1TieRuCcsCA8Ecp1Yfrlclz7gjDSbvgjwqMBhLaJHwiH2wG4lYHQNng1afijwo8MBLbBP4VjSQBmMxDWJj6bBGA+A0Ft4oUkACsZCGrH/4Gw3lWRzU2dnu4VwN0kAE+7KhKpUtG1NR0bSxvgTRKA110D1LS3p0tLmsulBfAlCcDH1ABq2trSmZk0AH633JUjytQBIlWrurGhk5PdQoy2AvjeE4Ca9vd1eVlHRzutkW8FUOkpQE07Ozo310mNk9kA2N7WQqGTGuPD/AlVhUOD+4mLRZ2Y6Hxu+PXX8EOwjH7u70a2u6uLi2luZG/7e5TI59MKbuwXvT/MlUo6NZV2cGOvD/txemXYLzTzw36lnP33L/WRhJsZCGyDb9BmY+thBkIbu9RWYyuGGBHOD7i1+DheVNprLTYBGhdOCQXhonBVKAr3hGfRLil8qmvi1kOX68ajZ94Jz4X7cXP3mnApnvt0Ks3doKCgoKAghkB/AP70hTNI/HhQAAAAAElFTkSuQmCC" alt="youtube-play" /><span>Youtube Premium</span></a></li>
          <li><a href="#"><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeklEQVR4nO2Yf2iUdRzH3+/T2/bc89zudremIbZCZ40RSTbqj5SgJoZZ0YqivxbDJBErIULLEQRajQhXEYJiReRkiAhlwSqINFYtTd0m5pxtzgLd5tZ22226veO53Wztbr/u2dgR94bXH7sbn+/7/dz3+Xx/ACmllFJKKaU0dfkAPATgRZMszyKrFpLVOeSxBeSvNkGyMZs8HySb/eQVL9meQYYMsncE+2+TvBogL+SQNX6yygW8DuApAHcBcGMGdZub3OkjWyyy916yYzMZfgfQXkCHAVVHqQFUC+gUoPOAmgF1AOoEpCi90c9aAf0G6OtonVfJa2vJrlyyK40cCJBnMsk9AJ4FkJOI8UAm+altupQM/TTKxGwTAvQjoApAj5FdHrIvQO4H4J+q+eUmeWUTGR799OaKTkClZF8mWQ8gfTLzt5tk10FgaK6NawxryJ4M4LWJzM/zkY37ktC8ANUBssg2AK647l1AyUqye66NagJuIbuinSpWWWT9t0lgUhNQQnYDKI3nPyeTDA0mgUlNQAUwZJDl8QI8vpbscFJ8RUaGytLSIr1+tgIcAhQgj8S4TwPKtgPXEy08AMjjduvhoiLdalk6TM5KgJ8B+cmzsfOH/HK/g8JN9gvm96vh0iXtq6pSfm6u7rcs/TDDAf4AlElejgkQIJtqHRT+HtA9ubmRADZ1Fy/qrV27lJuTozVer36ZoQBtgAyyJyaAvem64KDwF4BWFxTcCDDCqeZmle3YoYVZWXrU643sf5wE6AM0n7weE8AgQ20OCtubsqL8/JgAIxxvbNSWrVuVZZp60jQjU0EJ4iKH7EX3PwHsVAMOitrrx6olS8YNMEJNQ4PWb9yobMtSeXr6tMcZ+jfAmC5EDvQ4CGC/rPctXjxpgBNNTXpl2zbdZFl62TCmPY79kOfFm0I+st3Jz3oW0B3B4LjG61tb9d7u3ZGX+kGPJ3JmUILvgJsciAmQTZ5z0oW6AWUbRlzzeysrdefSpSq0rEi3kgP+stcb8u9468CxIw6Le91unW5puWH8UHW1VhUWKs80ddBhbUU5DchH/hlvHTiwx2Hxmw1DR0+e1He1tXqmuFgLDEM7XS71z5B5RZtFNnkmJoCbfPsNYNBJ8TzL0iPr1ilomipLT49MK80wlYCC5NGYAPZNw3NkyEnxYo9HGwwjMk81S7w/vBf6PF6AJ1aTnbM18EyxnRxyk2/GC3B3AXl1rg1qEkrIEIAN8QIETDJ8LQlMagJWkB0AiuIFsDtRo9NWOpv0Du9E+8e96HIBTy8ie7uSwKzi8MnwaawOE8lLfpBH9pxLAsMaxe/D3ScM4AFMpvnAJg/Z8xIZbppj4x2A3gUGLTLsAZ7HNLTIS1YYZPcysvMFsv9DQN8AOhG9vG2LDjAeUzncD0b/174Irgf0FaCPAG0hQ8vJdvtB+sgDAJYhQdkHh5UuYHMW+ZmfPG4fP33kZftoN/bqfAR7z05S42F/b0Sv2m3sq/jo1XxNkPwYwHoAhQAyEjWeUkoppZTS/1//AA8fw5BkObx8AAAAAElFTkSuQmCC" alt="youtube-play--v2" /><span>Youtube Kids</span></a></li>
          <li><a href="#"><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADo0lEQVR4nO1ZW0tVQRReaDdCZc/WwPDSa1ehIi8UVFRP1VOJmmBBEfTYBYxTQU8qlL2omfTSS/VgaqRG0I+IxB66eK0or2+FBvLFd/bRTD2eNftsjwVnYMHmzMya75tZa82adUSSLdmSLe4GkVQYKYEjIRhpgyPvYGQSRn5FZBKO9Eb6QnClGCIpqw/cSB4cqYMjX2AEVuLIZxiphSu5iQeeJpvgSAuMTFsDXyzTcKQZaZKVGPBGzsDIRADAF8o4jJSvHHCRtXDk4QoAxwLTesC1ggW/WTbCkZcrDt7MkejmmkHufOLAmzkSryGyLn4CiTAbE5VEc7zgK1cNvJmTMn/g0yUTRsZ8LVq8HbhYCYQue8Jv/uaPwISvEBuJ8/qFstcDN68CfR+BwX6g9THQVO8Jv/kb+25c8cbakWiyA+9KrtUldbQIGBoAOtuBQ3uij2Mfx5AM5xg1AWLJt9n9OrXys6eB0RGg/IQeEMdyTtUpGxK1OvAiKZE8RbfzBHKgwN62OWd0RH8SzLdEUmMTYFaptXmajc3OL3USg/16n3ClUGM+IZUyOiPteam+V51AwRYdqK4OT5eO9HXNCbSrlH36EN1h2X7+AG5XA1mpy+s5vNfTpTOjVs0J9MZUxJjOo4/WP7/1vAGOFC6vb2gAKNqmIdGjOYHYqfKFCuDZEx0BtpkZ4FELkJ+x9Pi2p8D5cg2BMQ2B2PH/1jWg4Y6ewGz79hW4VLV4fONd7xKMTWAqGAJcjIv6IXCudPH4pnqtI08FZ0JMD2xNKC89ASbkKJy4ZEewTjw8GKgT68IoE7ODuwMKo+8DDaO6i4yO/KIt+uW0M08Hqvu5l3Jrxhqpjk2ARSeNsuwNXvwuO65dfLFUnAQG+vSpRKbs0yZzwyqFx4q9hGz/LnvwnDP6PbZ//JEhdTUvXDHTAmFYtE2nufP26XSNCrzvBw2jEm2fThltHPto8xyr33kw/sOVHDWBMAmW+2xMgnbMy4iJGX2Dqcb9e57wm6GSfXRY+ydlgxX4MIEMcX0/6hnTednNPur5XbjVXo8Jy7jvuilrlT4XDU5cKfUFfo4Ea5WrR6AxLvDz/rzoWAXwXRBZEzeBecXd7gSC7wysuLugyNucCLNBUDu/JBEjZb6j0/IyGrfDWtZNm8IXTPzApxjnGbYTAv4vIq7khNMObe40X7w5NdY37IoQYQLoSiHrNszZ+fCIvOymI8Lvt5G+amaV/8TfrMmWbPL/t98jjyY3X6sCVwAAAABJRU5ErkJggg==" alt="youtube-music" /><span>Youtube Music</span></a></li>
          <hr />
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=364&format=png&color=000000" alt="Configurações" /><span>Configurações</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=2754&format=png&color=000000" alt="Histórico de denún..." /><span>Histórico de denún...</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=646&format=png&color=000000" alt="Ajuda" /><span>Ajuda</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=52209&format=png&color=000000" alt="Enviar feedback" /><span>Enviar feedback</span></a></li>
          <hr />
        </ul>
        <div className="sidebar-footer">
          <div className="texto-sobre">
            <a href="#">Sobre</a>
            <a href="#">Imprensa</a>
            <a href="#">Direitos Autorais</a>
            <a href="#">Entre em Contato</a>
            <a href="#">Criadores de Conteúdo</a>
            <a href="#">Publicidade</a>
            <a href="#">Desenvolvedores</a>
          </div>
          <br />
          <div className="texto-sobre">
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
            <a href="#">Política e segurança</a>
            <a href="#">Como funciona o YouTube</a>
            <a href="#">Testar os novos recursos</a>
          </div>
          <br />
          <div className="copyright">© 2025 Google LLC</div>
        </div>
      </nav>
    </>
  );
};

export default SideBarView;
