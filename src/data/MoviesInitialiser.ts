export class MoviesInitialiser {
    static initialiseMovies() {
      var movies = []; 
  
      movies.push("../../assets/imgs/john-wick-2.png");
      movies.push("../../assets/imgs/suits.png");
      movies.push("../../assets/imgs/black-lightning.png");
      movies.push("../../assets/imgs/blacklist.png");
      movies.push("../../assets/imgs/boss.png");
      movies.push("../../assets/imgs/brooklyn-99.png");
      movies.push("../../assets/imgs/cloverfield-paradox.png");
      movies.push("../../assets/imgs/crown.png");
      movies.push("../../assets/imgs/damnation.png");
      movies.push("../../assets/imgs/dirty-money.png");
      movies.push("../../assets/imgs/end-of-fucking-world.png");
      movies.push("../../assets/imgs/everything-sucks.png");
      movies.push("../../assets/imgs/first-team-juventus.png");
      movies.push("../../assets/imgs/frankenstein-chronicles.png");
      movies.push("../../assets/imgs/full-metal-alchemist.png");
      movies.push("../../assets/imgs/grimm.png");
      movies.push("../../assets/imgs/guardians-galaxy-2.png");
      movies.push("../../assets/imgs/huntsman.png");
      movies.push("../../assets/imgs/joel-mchale-show.png");
      movies.push("../../assets/imgs/lucifer.png");
      movies.push("../../assets/imgs/mindhunter.png");
      movies.push("../../assets/imgs/mute.png");
      movies.push("../../assets/imgs/people-vs-ojsimpson.png");
      movies.push("../../assets/imgs/pirates-carribean.png");
      movies.push("../../assets/imgs/rick-morty.png");
      movies.push("../../assets/imgs/seriously-funny.png");
      movies.push("../../assets/imgs/seven-seconds.png");
      movies.push("../../assets/imgs/sons-of-anarchy.png");
      movies.push("../../assets/imgs/star-trek.png");
      movies.push("../../assets/imgs/tamborine.png");
      movies.push("../../assets/imgs/vikings.png");
      movies.push("../../assets/imgs/where-we-first.png");
      movies.push("../../assets/imgs/wolf-wall-street.png");
  
      return movies;
    }
  
    static shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
}