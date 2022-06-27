const Movies = [
  {
    Title: "Avatar",
    Released: "18 Dec 2009",
    Trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    Description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora.",
    imdbRating: 7.9,
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    Title: "I Am Legend",
    Released: "14 Dec 2007",
    Trailer: "https://www.youtube.com/embed/dtKMEAXyPkg",
    Description:
      "It is set in New York City after a virus, which was originally created to cure cancer, has wiped out most of mankind, leaving Neville as the last human in New York, other than nocturnal mutants. Neville is immune to the virus, and he works to develop a cure while defending himself against the hostile mutants.",
    Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    imdbRating: 7.2,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
  },
  {
    Title: "300",
    Released: "09 Mar 2007",
    Trailer: "https://www.youtube.com/embed/UrIbxk7idYA",
    Description:
      "300 est un péplum américain coécrit et réalisé par Zack Snyder, sorti en 2006. Tiré du roman graphique 300 de Frank Miller et Lynn Varley, le film donne une vision fantastique de la bataille des Thermopyles en -480 et a été tourné en grande partie à l'aide de la technique d'incrustation afin de restituer l'imagerie de la bande dessinée de Frank Miller. ",
    Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    imdbRating: 7.7,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
  },
  {
    Title: "The Avengers",
    Released: "04 May 2012",
    Trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    Description:
      "In the film, S.H.I.E.L.D. director Nick Fury assembles Iron Man, Captain America, Hulk, Thor, Black Widow and Hawkeye to battle Thor's adoptive brother, Loki, who attempts to subjugate humanity by leading an invasion by the extraterrestrial race known as the Chitauri.",
    Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    imdbRating: 8.1,
    imdbVotes: "1,003,301",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  },
  {
    Title: "The Wolf of Wall Street",
    Released: "25 Dec 2013",
    Trailer: "https://www.youtube.com/embed/iszwuX1AK6A",
    Description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government. In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratton Oakmont.",
    Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    imdbRating: 8.2,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    Title: "Interstellar",
    Released: "07 Nov 2014",
    Trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    Description:
      "Interstellar, ou Interstellaire1 au Québec et au Nouveau-Brunswick, est un film de science-fiction britannico-américain produit, écrit et réalisé par Christopher Nolan, sorti en 2014.Il met en scène Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine, Casey Affleck et Matt Damon.Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne et conduisant à une autre galaxie, afin d'explorer un nouveau système stellaire et dans l'espoir de trouver une planète habitable et y établir une colonie spatiale pour sauver l'humanité. ",
    imdbRating: 8.6,
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    Title: "Game of Thrones",
    Released: "17 Apr 2011",
    Trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ",
    Description:
      "In the Game of Thrones, you either win or you die. In the mythical continent of Westeros, nine families of higher nobility (Targaryen, Lannisters, Starks, Tyrell, Martell, Greyjoys, Baratheons and Boltons) scramble bitterly to gain power over the seven kingdoms and the Iron throne.",
    Plot: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
    imdbRating: 9.5,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  },
  {
    Title: "Vikings",
    Released: "03 Mar 2013",
    Trailer: "https://www.youtube.com/embed/9GgxinPwAGc",
    Description:
      "The Vikings were a seafaring people from the late eighth to early 11th century who established a name for themselves as traders, explorers and warriors. They discovered the Americas long before Columbus and could be found as far east as the distant reaches of Russia.",
    Plot: "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
    imdbRating: 8.6,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
  },
  {
    Title: "Gotham",
    Released: "01 Aug 2014",
    Trailer: "https://www.youtube.com/embed/VwOPA2upeCA",
    Description:
      "Gotham is an American superhero crime drama television series developed by Bruno Heller, produced by Warner Bros. Television and based on characters from the Batman mythos in comic books published by DC Comics. The series originally aired on Fox from September 22, 2014, to April 25, 2019, over five seasons, comprising a total of 100 episodes. It features an ensemble cast that includes Ben McKenzie as James Gordon, Donal Logue as Harvey Bullock, and David Mazouz as Bruce Wayne. The show follows Gordon's early days at the Gotham City Police Department following the murder of Bruce's parents, as well as the origin stories of Batman's infamous rogues gallery.Development for a prequel series based on Batman began in September 2013, with Bruno Heller hired by Fox to serve as a writer and executive producer. In March 2014, Fox originally ordered 16 episodes for its first season before expanding it to 22. Filming primarily took place across New York City. In May 2018, Fox renewed the series for a fifth and final season, consisting of 12 episodes, which premiered on January 3, 2019, and concluded on April 25, 2019. From July 28, 2019, a prequel series, Pennyworth, starring Jack Bannon as a younger version of the iteration of Alfred Pennyworth portrayed by Sean Pertwee in Gotham, began airing on Epix.[2][3] From October 13, 2021, Victoria Cartagena reprised her role as Renee Montoya from the first season of Gotham as a series regular in the third season of The CW Arrowverse series Batwoman. ",
    Plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
    imdbRating: 8.0,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
  },
  {
    Title: "Power",
    Released: "02 jan 2011",
    Trailer: "https://www.youtube.com/embed/g9PBhyTHhRE",
    Description:
      "POWER observes the flux between inherent and added resources in a landscape. Images collide as power shifts from delivery to extraction - mirroring this real-world phenomenon.",
    Plot: 'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
    imdbRating: 8.0,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
  },
  {
    Title: "Narcos",
    Released: "28 Aug 2015",
    Trailer: "https://www.youtube.com/embed/xl8zdCY-abw",
    Description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    Plot: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
    imdbRating: 8.9,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    Title: "Breaking Bad",
    Released: "20 Jan 2008",
    Trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
    Description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    Plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
    imdbRating: 9.5,
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
  },
];

export default Movies;
