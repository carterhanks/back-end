const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["The Force is Strong With This One.", "A dubious friend may be an enemy in camouflage.", "An inch of time is an inch of gold.", "Believe it can be done.", "Courtesy is contageous", "Don't just spend time. Invest it." ]

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

});

app.get("/api/superhero", (req, res) => {
  const superheros = ["Iron Man", "Batman", "The Hulk", "Flash", "Capitain America", "Thor", "Hawkeye", "Spider Man", "Black Panther", "Deadpool", "Capitain Marvel", "Wolverine"]

  let randomIndex = Math.floor(Math.random() * superheros.length);
  let randomHero = superheros[randomIndex];

  res.status(200).send(randomHero);
});

app.get("/api/photo", (req, res) => {
  const photos = ["https://californiapuppiesforsale.com/wp-content/themes/mega-theme/images/australianshepherd2.jpg", "https://i.pinimg.com/originals/08/d5/91/08d5914376842a235093ee708b91c774.jpg", "https://i.pinimg.com/originals/0b/92/a1/0b92a1375e34e8bb48d8748267ec353d.jpg", "https://i.pinimg.com/originals/3c/63/f3/3c63f3db8a38dcd80f0e9ea353f2129f.png", "https://barkpost.com/wp-content/uploads/2016/05/Puppy-Sleeping.jpg", "https://barkpost.com/wp-content/uploads/2016/05/Aussie-pup.jpg", "https://barkpost.com/wp-content/uploads/2016/05/blue-merle.jpg"]

  let randomIndex = Math.floor(Math.random() * photos.length);
  let randomAussie = photos[randomIndex];

  res.status(200).send(randomAussie);
});

app.get("/api/restaurant", (req, res) => {
  const restaurants = ["https://g.page/donjoaquinstreettacos?share", "https://g.page/nachoslive?share", "https://g.page/bambamsbbq?share", "https://goo.gl/maps/niFnSojzeri5yiwb7", "https://goo.gl/maps/RKU2gBkdNtu2XeQAA", "https://goo.gl/maps/7PpPJV5fvtik5m5X7", "https://g.page/sevenbrothersutah?share"]

  let randomIndex = Math.floor(Math.random() *
  restaurants.length);
  let randomRestaurant = restaurants[randomIndex];

  res.status(200).send(randomRestaurant);
})

app.listen(4000, () => console.log("Server running on 4000"));
