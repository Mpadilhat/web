import React, { useState } from "react";
import Modal from "react-modal";
import { icons, images } from "../../assets";
import * as s from "../modal-empresa/styled-modal";
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
    },
    overlay: {
      background: "#000",
      opacity: 0.99,
    },
  };

  const [um, setUm] = useState(true);
  const [dois, setDois] = useState(false);
  const [tres, setTres] = useState(false);
  const [quatro, setQuatro] = useState(false);

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <s.DivSair>
        <s.Sair src={icons.sair} onClick={closeModal} />
      </s.DivSair>
      <s.Content style={{ marginLeft: -10 }}>
        <s.Line
          line
          style={{ justifyContent: "center", margin: "-20px 0 10px 0" }}
        >
          <s.Name>Como sei quais são as minhas coordenadas geográficas?</s.Name>
        </s.Line>

        <s.Question center>
          Primeiro, é importante que você saiba que, sem as coordenadas, sua
          empresa não poderá ser encontrada no mapa do aplicativo{" "}
          <strong>Minha Van</strong>, então preenche direitinho o seu endereço
          no cadastro e presta bem a atenção nesse tutorial pra pegar certinho
          as suas coordenadas :)
        </s.Question>

        {um && (
          <s.Center>
            <s.Line>
              <s.Foto src={images.mapsLogo} big space right tutorial />

              <s.Center>
                <s.Subtitle>
                  <s.Position>1º)</s.Position> Você acessa o{" "}
                  <s.Link href={"https://www.google.com.br/maps"} big>
                    Google Maps.
                  </s.Link>{" "}
                  Se você estiver com a localização ativada, o navegador já vai
                  pegar as suas coordenadas e jogar lá na URL, isto é, lá
                  naquele link dentro da barra de pesquisa, conforme a próxima
                  imagem:
                </s.Subtitle>
                <s.Line>
                  <button
                    onClick={() => {
                      setUm(false);
                      setDois(true);
                    }}
                  >
                    Próximo
                  </button>
                </s.Line>
              </s.Center>
            </s.Line>
          </s.Center>
        )}

        {dois && (
          <s.Center>
            <s.Line>
              <s.Foto src={images.maps} big space right tutorial />

              <s.Center>
                <s.Subtitle>
                  <s.Position>2º)</s.Position> Os itens destacados, circulados
                  na imagem, são a latitude e a longitude, então se você sabe
                  que sua localização está ativada, pode copiar as coordenadas,
                  sem levar junto as vírgulas que aparecem, mas sem esquecer dos
                  sinais que podem aparecer (o de "menos", por exemplo).
                </s.Subtitle>
                <s.Line>
                  <button
                    onClick={() => {
                      setDois(false);
                      setUm(true);
                    }}
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => {
                      setDois(false);
                      setTres(true);
                    }}
                  >
                    Próximo
                  </button>
                </s.Line>
              </s.Center>
            </s.Line>
          </s.Center>
        )}

        {tres && (
          <s.Center>
            <s.Line>
              <s.Foto src={images.pesquisa} big space right tutorial />

              <s.Center>
                <s.Subtitle>
                  <s.Position>3º)</s.Position> Caso queira garantir que sua
                  localização esteja correta (o que recomendamos), digite seu
                  endereço na barra de pesquisa do Maps, que fica à esquerda.
                  Quando achar sua localização, com endereço correto, você pode
                  clicar. Note que provavelmente vai aparecer uma foto do local,
                  pra você não ter dúvida.
                </s.Subtitle>
                <s.Line>
                  <button
                    onClick={() => {
                      setTres(false);
                      setDois(true);
                    }}
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => {
                      setTres(false);
                      setQuatro(true);
                    }}
                  >
                    Próximo
                  </button>
                </s.Line>
              </s.Center>
            </s.Line>
          </s.Center>
        )}

        {quatro && (
          <s.Center>
            <s.Line>
              <s.Foto src={images.coordenadas} big space right tutorial />

              <s.Center>
                <s.Subtitle>
                  <s.Position>4º)</s.Position> Como você já aprendeu, vai
                  aparecer lá na barra de pesquisa de cima as suas coordenas,
                  então é só copiá-las direitinho e colar em cada campo
                  respectivo aqui no cadastro.
                </s.Subtitle>
                <s.Line>
                  <button
                    onClick={() => {
                      setQuatro(false);
                      setTres(true);
                    }}
                  >
                    Anterior
                  </button>
                </s.Line>
              </s.Center>
            </s.Line>
          </s.Center>
        )}
      </s.Content>
    </Modal>
  );
};
