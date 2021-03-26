import React, { useState } from "react";
import Modal from "react-modal";
import { icons, images } from "../../assets";
import * as s from "../modal-empresa/styled-modal";
import * as a from "./styled-carousel";
Modal.setAppElement("#root");

export default ({ isOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      maxWidth: "85%",
      maxHeight: 550,
    },
    overlay: {
      background: "#000",
      opacity: 0.99,
    },
  };

  const legendas = {
    um:
      "Se você estiver com a localização ativada, o navegador já vai pegar as suas coordenadas e jogar lá na URL, isto é, lá naquele link dentro da barra de pesquisa, conforme a próxima imagem:",
    dois:
      "Os itens destacados, circulados na imagem, são a latitude e a longitude, então se você sabe que sua localização está ativada, pode copiar as coordenadas, sem levar junto as vírgulas que aparecem, mas sem esquecer dos sinais que podem aparecer (o de menos, por exemplo).",
    tres:
      "Caso queira garantir que sua localização esteja correta (o que recomendamos), digite seu endereço na barra de pesquisa do Maps, que fica à esquerda. Quando achar sua localização, com endereço correto, você pode clicar. Note que provavelmente vai aparecer uma foto do local, pra você não ter dúvida.",
    quatro:
      "Como você já aprendeu, vai aparecer lá na barra de pesquisa de cima as suas coordenadas, então é só copiá-las direitinho e colar em cada campo respectivo aqui no cadastro.",
  };

  const [selected, setSelected] = useState({
    id: 1,
    img: images.mapsLogo,
    position: "1º)",
    text: legendas.um,
    link: true,
  });

  function next() {
    if (selected.id !== 4) {
      switch (selected.id) {
        case 3:
          setSelected({
            id: 4,
            img: images.coordenadas,
            position: "4º)",
            text: legendas.quatro,
            link: false,
          });
          break;
        case 2:
          setSelected({
            id: 3,
            img: images.pesquisa,
            position: "3º)",
            text: legendas.tres,
            link: false,
          });
          break;
        case 1:
          setSelected({
            id: 2,
            img: images.maps,
            position: "2º)",
            text: legendas.dois,
            link: false,
          });
          break;
        default:
      }
    }
  }

  function prev() {
    if (selected.id !== 1) {
      switch (selected.id) {
        case 2:
          setSelected({
            id: 1,
            img: images.mapsLogo,
            position: "1º)",
            text: legendas.um,
            link: true,
          });
          break;
        case 3:
          setSelected({
            id: 2,
            img: images.maps,
            position: "2º)",
            text: legendas.dois,
            link: false,
          });
          break;
        case 4:
          setSelected({
            id: 3,
            img: images.pesquisa,
            position: "3º)",
            text: legendas.tres,
            link: false,
          });
          break;
        default:
      }
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <s.DivSair>
        <s.Sair src={icons.sair} onClick={closeModal} />
      </s.DivSair>
      <s.Content style={{ marginLeft: -10 }}>
        <s.Line line style={{ justifyContent: "center", marginTop: "-20px" }}>
          <s.Name margin coord>
            Como sei quais são as minhas coordenadas geográficas?
          </s.Name>
        </s.Line>

        <s.Question center>
          Primeiro, é importante que você saiba que, sem as coordenadas
          geográficas, sua empresa não poderá ser encontrada no mapa do
          aplicativo <bold>Minha Van</bold>.{" "}
          <label style={{ color: "blue" }}>
            Neste cadastro, as coordenadas são preenchidas automaticamente com a
            localização atual,{" "}
          </label>
          então se você não está no local da empresa, preenche direitinho o seu
          endereço no cadastro e presta bem a atenção nesse tutorial pra pegar
          certinho as suas coordenadas :)
        </s.Question>

        <a.DivCarousel background={selected.img}>
          <a.DivButtonPrev>
            <a.PrevButton
              src={images.arrow}
              alt="prev"
              onClick={() => prev()}
            />
          </a.DivButtonPrev>
          <s.Center>
            <s.Line justify cover style={{ marginBottom: 15 }}>
              <s.Center text>
                <s.Subtitle>
                  <s.Position>{selected.position}</s.Position>{" "}
                  {selected.id === 1 && "Você acessa o"}
                  {selected.id === 1 && (
                    <s.Link href={"https://www.google.com.br/maps"} yellow>
                      Google Maps.{" "}
                    </s.Link>
                  )}
                  {selected.text}
                </s.Subtitle>
              </s.Center>
            </s.Line>
          </s.Center>
          <a.DivButtonNext>
            <a.NextButton
              src={images.arrow}
              alt="next"
              onClick={() => next()}
            />
          </a.DivButtonNext>
        </a.DivCarousel>
      </s.Content>
    </Modal>
  );
};
