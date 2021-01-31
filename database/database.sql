-- CREATE DATABASE "saga_movies_weekend"


CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "poster"  VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL
);


CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL
);


-- JUNCTION TABLE
-- Movies can have multiple genres and each genre can be applied to multiple movies
-- This is many-to-many!
CREATE TABLE "movies_genres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" INT REFERENCES "movies" NOT NULL,
  "genre_id" INT REFERENCES "genres" NOT NULL
);

--------[ DATA! ]---------

-- starter movies
INSERT INTO "movies" ("title", "poster", "description")
VALUES 
('A Serious Man', 'images/a_serious_man.jpg', 'A Serious Man is a 2009 black comedy-drama film written, produced, edited and directed by Joel and Ethan Coen. Set in 1967, the film stars Michael Stuhlbarg as a Minnesota Jewish man whose life crumbles both professionally and personally, leading him to questions about his faith. The film attracted a positive critical response, including a Golden Globe Award nomination for Stuhlbarg, a place on both the American Film Institute''s and National Board of Review''s Top 10 Film Lists of 2009, and a nomination for the Academy Award for Best Picture.'),
('Adventures of Zatoichi', 'images/adventures_of_zatoichi.jpg', E'Adventures of Zatoichi (Zatōichi sekisho-yaburi) is a 1964 Japanese chambara film directed by Kimiyoshi Yasuda and starring Shintaro Katsu as the blind masseur Zatoichi. It was originally released by the Daiei Motion Picture Company (later acquired by Kadokawa Pictures). Adventures of Zatoichi is the ninth episode in the 26-part film series devoted to the character of Zatoichi. On his way to a village to celebrate the New Year festival, Zatoichi is asked by a man to deliver a message to a woman. Upon delivery, he rooms with a young women who is searching for her missing father.'),
('Branded to Kill', 'images/branded_to_kill.jpg', 'Branded to Kill (Koroshi no rakuin) is a 1967 Japanese yakuza film directed by Seijun Suzuki and starring Joe Shishido, Koji Nanbara and Annu Mari. It was a low budget, production line number for the Nikkatsu Company, originally released in a double bill with Shōgorō Nishimura''s Burning Nature. The story follows Goro Hanada in his life as a contract killer. He falls in love with a woman named Misako, who recruits him for a seemingly impossible mission. When the mission fails, he becomes hunted by the phantom Number One Killer, whose methods threaten his sanity as much as his life. The studio was unhappy with the original script and called in Suzuki to rewrite and direct it at the last minute. Suzuki came up with many of his ideas the night before or on the set while filming, and welcomed ideas from his collaborators. He gave the film a satirical, anarchic and visually eclectic bent which the studio had previously warned him away from. It was a commercial and critical disappointment and Suzuki was ostensibly fired for making "movies that make no sense and no money". Suzuki successfully sued Nikkatsu with support from student groups, like-minded filmmakers and the general public and caused a major controversy through the Japanese film industry. Suzuki was blacklisted and did not make another feature film for 10 years but became a counterculture hero. The film grew a strong following, which expanded overseas in the 1980s, and has established itself as a cult classic. Film critics and enthusiasts now regard it as an absurdist masterpiece. It has been cited as an influence by filmmakers such as Jim Jarmusch, John Woo, Chan-wook Park and Quentin Tarantino, and composer John Zorn. Thirty-four years after Branded to Kill, Suzuki filmed Pistol Opera (2001) with Nikkatsu, a loose sequel to the former. The company has also hosted two major retrospectives spotlighting his career.'),
('Death Wish 3', 'images/death_wish_3.jpg', 'Death Wish 3 is a 1985 American action thriller film directed and edited by Michael Winner. It is the third film and the last to be directed by Winner in the Death Wish film series. It stars Charles Bronson as vigilante killer Paul Kersey, and sees Kersey do battle with New York street punk gangs while receiving tacit support from a local NYPD lieutenant (Ed Lauter). Despite being set in New York City, some of the filming was shot in London to reduce production costs. It was succeeded by Death Wish 4: The Crackdown.'),
('Fitzcarraldo', 'images/fitzcarraldo.jpg', 'Fitzcarraldo is a 1982 West German epic adventure-drama film written and directed by Werner Herzog and starring Klaus Kinski as the title character. It portrays would-be rubber baron Brian Sweeney Fitzgerald, an Irishman known in Peru as Fitzcarraldo, who is determined to transport a steamship over a steep hill to access a rich rubber territory in the Amazon Basin. The film is derived from the historic events of Peruvian rubber baron Carlos Fitzcarrald and his real-life feat of transporting a disassembled steamboat over the Isthmus of Fitzcarrald. The film had a troubled production. Herzog forced his crew to manually haul the 320-ton steamship up a steep hill, leading to three injuries. The film''s original star Jason Robards became sick halfway through filming, so Herzog hired Kinski, with whom he had previously clashed violently during production of Aguirre, the Wrath of God, Nosferatu the Vampyre and Woyzeck. Their fourth partnership fared no better, and an extra even offered to kill Kinski. Herzog reluctantly declined.'),
('Spiderman: Into The Spider-verse', 'images/into_the_spider_verse.jpeg', 'Spider-Man: Into the Spider-Verse is a 2018 American computer-animated superhero film featuring the Marvel Comics character Miles Morales, produced by Columbia Pictures and Sony Pictures Animation in association with Marvel. Distributed by Sony Pictures Releasing, it is the first animated film in the Spider-Man franchise. Directed by Bob Persichetti, Peter Ramsey, and Rodney Rothman (in Persichetti and Rothman''s feature directorial debuts) from a screenplay by Phil Lord and Rothman, it stars Shameik Moore as Miles Morales / Spider-Man, alongside the voices of Jake Johnson, Hailee Steinfeld, Mahershala Ali, Brian Tyree Henry, Lily Tomlin, Luna Lauren Velez, John Mulaney, Kimiko Glenn, Nicolas Cage, and Liev Schreiber. Set in a shared multiverse called the "Spider-Verse", the film''s story follows Miles Morales of Earth-1610 as he becomes the new Spider-Man and joins other Spider-People from various dimensions to save New York City from the Kingpin.'),
('King Kong vs Godzilla', 'images/king_kong_vs_godzilla.jpg', 'King Kong vs. Godzilla (Kingu Kongu tai Gojira) is a 1962 Japanese kaiju film directed by Ishirō Honda, with special effects by Eiji Tsuburaya. Produced and distributed by Toho Studios, it is the third film in the Godzilla franchise, and the first of two Toho-produced films featuring King Kong. It is also the first time that both characters appeared on film in color and widescreen. The film stars Tadao Takashima, Kenji Sahara, Yū Fujiki, Ichirō Arishima, and Mie Hama, with Shoichi Hirose as King Kong and Haruo Nakajima as Godzilla. In the film, as Godzilla is reawakened by an American submarine, a pharmaceutical company captures King Kong for promotional uses, which culminates into a battle on Mount Fuji. The project began with a story outline devised by King Kong stop motion animator Willis H. O''Brien, in which Kong battles a giant Frankenstein Monster; O''Brien gave the outline to producer John Beck for development. Behind O''Brien''s back and without his knowledge, Beck gave the project to Toho to produce the film, replacing the giant Frankenstein Monster with Godzilla and scrapping O''Brien''s original story. King Kong vs. Godzilla was released theatrically in Japan on August 11, 1962. The film remains the most attended Godzilla film in Japan to date, and is credited with encouraging Toho to prioritize the continuation of the Godzilla series after seven years of dormancy. A heavily edited version was released by Universal International Inc. theatrically in the United States on June 26, 1963.'),
('My Dad is a Heel Wrestler', 'images/my_dad_is_a_heel_wrestler.jpg', 'Pro wrestling champion Hiroshi makes his debut as the gentle dad to nine-year-old Shota, whose understanding of goodies versus baddies is challenged when he discovers his father is actually the despicable heel wrestler Cockroach Mask.'),
('Parasite', 'images/parasite.jpg', 'Parasite (Korean: Gisaengchung) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won. It stars Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin, and Lee Jung-eun, and follows the members of a poor family who scheme to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.'),
('Paul Blart Mall Cop 2', 'images/paul_blart2.jpg', 'Paul Blart: Mall Cop 2 is a 2015 American action comedy film directed by Andy Fickman and written by Kevin James and Nick Bakay. It is the sequel to 2009''s Paul Blart: Mall Cop, and stars James as the eponymous mall cop, Paul Blart, along with Neal McDonough, David Henrie, and Daniella Alonso. Filming began in April 2014 at the Wynn Las Vegas casino resort. It was released the following year on April 17, 2015. Paul Blart: Mall Cop 2 was the first film shot on the Steve Wynn property. It was also the first film to receive Nevada''s film tax credit, which had been enacted in 2013. It receiving a $4.3 million break after spending $40.5 million in the state. The film grossed $108 million worldwide at the box office but was panned by critics, with a 5% approval rating at Rotten Tomatoes.'),
('Shin Godzilla', 'images/shin_godzilla.jpg', 'Shin Godzilla (Shin Gojira) is a 2016 Japanese kaiju film directed by Hideaki Anno and Shinji Higuchi, with a screenplay by Anno and special effects by Higuchi. Produced by Toho Pictures and Cine Bazar and distributed by Toho, it is the 31st installment in the Godzilla franchise, the 29th Godzilla film produced by Toho, Toho''s third reboot of the franchise, and the first film in the franchise''s Reiwa period. The film stars Hiroki Hasegawa, Yutaka Takenouchi, and Satomi Ishihara. In the film, politicians struggle with bureaucratic red tape in order to deal with the sudden appearance of a giant monster that evolves whenever it is attacked.'),
('Timecop', 'images/time_cop.jpg', 'Timecop is a 1994 American science fiction action film directed by Peter Hyams and co-written by Mike Richardson and Mark Verheiden. Richardson also served as executive producer. The film is based on Timecop, a story created by Richardson, written by Verheiden, and drawn by Ron Randall, which appeared in the anthology comic Dark Horse Comics, published by Dark Horse Comics. It is the first installment in the Timecop franchise. The film stars Jean-Claude Van Damme as Max Walker, a police officer in 1994 and later a U.S. federal agent in 2004, when time travel has been made possible. It also stars Ron Silver as a corrupt politician and Mia Sara as Melissa Walker, the agent''s wife. The story follows Walker''s life as he fights time-travel crime and investigates the politician''s plans. Timecop remains Van Damme''s highest-grossing film as a lead actor (his second to break the $100 million barrier worldwide), having become a cult classic with fans. Although met with mixed reviews, it is generally regarded by critics as one of Van Damme''s better films.'),
('Tokyo Drifter', 'images/tokyo_drifter.jpg', 'Tokyo Drifter (Tōkyō nagaremono) is a 1966 yakuza film directed by Seijun Suzuki. The story follows Tetsuya Watari as the reformed yakuza hitman "Phoenix" Tetsu who is forced to roam Japan avoiding execution by rival gangs.'),
('Total Recall', 'images/total_recall.jpg', 'Total Recall is a 1990 American science fiction action film directed by Paul Verhoeven and starring Arnold Schwarzenegger, Rachel Ticotin, Sharon Stone, Ronny Cox, and Michael Ironside. The film is loosely based on the 1966 Philip K. Dick short story "We Can Remember It for You Wholesale". The film tells the story of a construction worker who suddenly finds himself embroiled in espionage on Mars and unable to determine if the experiences are real or the result of memory implants. It was written by Ronald Shusett, Dan O''Bannon, Jon Povill, and Gary Goldman, and won a Special Achievement Academy Award for its visual effects. The original score, composed by Jerry Goldsmith, won the BMI Film Music Award. With a budget of $50–60 million, Total Recall was one of the most expensive films made at the time of its release, although estimates of its production budget vary and whether it ever actually held the record is not certain. The film grossed $261 million worldwide.');

-- starter genres
INSERT INTO "genres" ("name")
VALUES 
('Adventure'),        --1
('Animated'),         --2
('Biographical'),     --3
('Comedy'),           --4
('Disaster'),         --5
('Drama'),            --6
('Epic'),             --7
('Fantasy'),          --8
('Musical'),          --9
('Romantic'),         --10
('Science Fiction'),  --11
('Space-Opera'),      --12
('Superhero');        --13


-- starter movies and genres data
INSERT INTO "movies_genres" ("movie_id", "genre_id")
VALUES 
(1,4), (1,3), (1,5),        -- A Serious Man
(2,1), (2,6),               -- Zatoichi
(3,6),                      -- Branded
(4,6), (4,13), (4,4),       -- DW3
(5,7), (5,6),               -- Fitz
(6,1), (6,2), (6,4), (6,13),-- Spider
(7,1), (7,2), (7,5),        -- KK V G
(8,6), (8,13),              -- Heel
(9,6), (9,4),               -- Parasite
(10,4), (10,5),             -- PB
(11,6), (11,11), (11,5),    -- Shin Godzilla
(12,1), (12,11), (12,13),   -- Timecop
(13,1), (13,4),             -- Drifter
(14,1), (14,7), (14,11);    -- Total Recall
