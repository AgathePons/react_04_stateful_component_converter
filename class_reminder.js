/* eslint-disable */

class Animal {
  constructor(cri, taille, poids) {
    console.log('je construis un animal');
    this.cri = cri;
    this.taille = taille;
    this.poids = poids;
  }

  crier() {
    console.log(this.cri + '!!!!');
  }
}

class Felin extends Animal {
  constructor(couleurPoil, cri, taille, poids) {
    console.log('je construis un félin');
    super(cri, taille, poids);

    this.couleurPoil = couleurPoil;
  }

  ronronner() {
    console.log('RrrrRRRrRrrrrrrr');
  }
}

const lion = new Felin('jaune', 'GRRRRRRRR', 1.50, 100);

lion.ronronner();
lion.crier();
