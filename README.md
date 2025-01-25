# portfolio-kirubel


## Project description
This is the portfolio of a design and architecture graduate who is looking for his first job.

I decided to start by developing the mobile version, which I will then adapt for the desktop versions.

## Style Guide

## Color
**Yellow** : #ffe906
**White** : #f4f4f4
**Black**: #191919
Pour le noir et blanc, j'ai choisi de ne pas utiliser de couleurs pures afin d'éviter de fatiguer les yeux des utilisateurs.

## Font
**Google fonts** :  SPACE-MONO


*
.slider {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 100%; /* Assure que le slider ne dépasse pas la largeur de la fenêtre */
  margin: 0 auto; /* Centre le slider */
}

.slider__item {
  flex: 0 0 100%; /* Chaque élément prend 100% de la largeur du slider */
  transition: transform 0.5s ease;
  display: flex;
  justify-content: center; /* Centre les images horizontalement */
  align-items: center; /* Centre les images verticalement */
  margin: 0; /* Supprime les marges */
  padding: 0; /* Supprime les paddings */


    
  
}

.slider__item img{
  max-width: 100%; /* Les images ne dépassent pas la largeur du conteneur */
  max-height: 100%; /* Les images ne dépassent pas la hauteur du conteneur */
  object-fit: contain; /* Ajuste l'image pour qu'elle tienne dans le conteneur sans déformation */
  width: 100%;/* Permet à l'image de conserver son ratio */
  height: auto; /* Permet à l'image de conserver son ratio */




}

.slider__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  font-size: 2rem;
  padding: 10px;
  z-index: 10;
}

.slider__arrow--left {
  left: 10px;
}

.slider__arrow--right {
  right: 10px;
}
*/