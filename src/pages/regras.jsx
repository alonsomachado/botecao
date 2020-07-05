import React from "react";
import { Card, CardDeck, Button } from 'react-bootstrap';

export default function Regras() {
  

  return (
    
    <div>
        <h1>Regras</h1>
        <div>
          <span id="pontuacao">
            <h2>Sistema de Pontuação</h2>
            <br />
            <p>1 Cerveja AMBEV no Supermercado = 1 Ponto</p>
            <p>1 Cerveja AMBEV em um BAR participante do botecão = 5 Pontos</p>
            <p>1 Cerveja AMBEV no seu BAR preferido participante do botecão = 10 Pontos</p>
            <p>Para escolher um bar preferido você precisa ir ao seu perfil no aplicativo do BOTECÃO e escolher e não é permitido trocar o bar preferido por 30 dias</p>
          </span>
          <span>
            <img src="google-play-badge.png" alt="Teste Imagem Webp " width="220"/>
          </span>
        </div>
        <div id="assinatura">
          <h2>Sistema de Assinaturas</h2>
          <br />
          <p>Nosso aplicativo tem planos de assinatura com alguns benefícios como parceiros, pontos extras mensais.</p>
          <br />
          <div id="planosassinatura">
            <h4>Planos de assinatura</h4>
            <CardDeck>
            <Card className="text-center">
              <Card.Header>Assinatura Botecão</Card.Header>
              <Card.Body>
                <Card.Title>100 Pontos no Botecão</Card.Title>
                <Card.Text> Acesso aos Parceiros.</Card.Text>
                <Card.Text> Na primeira assinatura você ganha um abridor de garrafas. </Card.Text>
                <Button variant="primary">R$20 ao mês</Button>
              </Card.Body>
              <Card.Footer>
                  <small className="text-muted">R$20 ao mês</small>
              </Card.Footer>
            </Card>
            <Card className="text-center">
              <Card.Header>Assinatura Botecão Puro Malte</Card.Header>
              <Card.Body>
              <Card.Title>200 Pontos no Botecão</Card.Title>
                <Card.Text> Acesso aos Parceiros com mais descontos.</Card.Text>
                <Card.Text> Na primeira assinatura você ganha um abridor de garrafas. </Card.Text>
                <Card.Text> E todos os meses um brinde diferente. </Card.Text>
                <Card.Text> Ao completar um ano você ganha uma tábua de churrasco personalizada!</Card.Text>
                <Button variant="primary">R$35 ao mês</Button>
              </Card.Body>
              <Card.Footer>
                  <small className="text-muted">R$35 ao mês</small>
              </Card.Footer>
            </Card>
          </CardDeck>
          </div>
          <div id="parceiros">
            <h2>Sistema de Parceiros</h2>
            <br />
            <p>Possuímos diversos parceiros que oferecem descontos aos assinantes do aplicativo.</p>
            <p>Times de Futebol, lojas de artigos esportivos, sites, e muitos outros...</p>
          </div>
          <br />
        </div>
      
    </div>
      
    
  );
};