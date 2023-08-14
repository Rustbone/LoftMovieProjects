// пригодится на 3-й неделе
// файл хранит мок данные, эмулирующие ответ с сервера
// замени пустые объекты на данные из сервера, чтобы их не перезапрашивать постоянно

export const searchResponse = {
  d: [
    {
      i: {
        height: 5122,
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        width: 3795
      },
      id: "nm0000129",
      l: "Tom Cruise",
      rank: 7,
      s: "Actor, Top Gun (1986)"
    },
    {
      i: {
        height: 3000,
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODU0MmZjYjktOGQ4MS00N2QwLTk5MzQtYTRkMGRiM2Q4ZjViXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        width: 2024
      },
      id: "tt5057054",
      l: "Tom Clancy's Jack Ryan",
      q: "TV series",
      qid: "tvSeries",
      rank: 8,
      s: "John Krasinski, Wendell Pierce",
      y: 2018,
      yr: "2018-2023"
    },
    {
      i: {
        height: 5472,
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg",
        width: 3648
      },
      id: "nm4043618",
      l: "Tom Holland",
      rank: 32,
      s: "Actor, Spider-Man: Homecoming (2017)"
    },
    {
      i: {
        height: 2048,
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg",
        width: 1417
      },
      id: "nm0000158",
      l: "Tom Hanks",
      rank: 88,
      s: "Producer, Cast Away (2000)"
    },
    {
      i: {
        height: 2048,
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_.jpg",
        width: 1366
      },
      id: "nm0362766",
      l: "Tom Hardy",
      rank: 89,
      s: "Actor, Inception (2010)"
    },
    {
      i: {
        height: 576,
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTMyMzY0M2QtYTVhMS00ZmRjLWJjNzUtYmZjMWY3ZjZhOTFmXkEyXkFqcGdeQXVyMTI3MDk3MzQ@._V1_.jpg",
        width: 1024
      },
      id: "nm0002018",
      l: "Tom Conti",
      rank: 123,
      s: "Actor, Merry Christmas Mr. Lawrence (1983)"
    },
    {
      id: "nm3943537",
      l: "Tom Ackerley",
      rank: 906,
      s: "Producer, Promising Young Woman (2020)"
    },
    {
      i: {
        height: 1008,
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BOTQ5MmUwNzctNGQwNi00MTdiLThlMmItNWFlMzNlOTQyOTViXkEyXkFqcGdeQXVyMjI4MDI0NTM@._V1_.jpg",
        width: 768
      },
      id: "nm5290643",
      l: "Tom Bateman",
      rank: 949,
      s: "Actor, Murder on the Orient Express (2017)"
    }
  ],
  q: "tom",
  v: 1
};

// https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000093
export const actorBioResponse = {
  "@type": "imdb.api.name.bio",
  akas: ["Weatherman"],
  id: "/name/nm0000093/",
  image: {
    height: 2048,
    id: "/name/nm0000093/images/rm864335360",
    url:
      "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
    width: 1363
  },
  legacyNameText: "Pitt, Brad",
  name: "Brad Pitt",
  birthDate: "1963-12-18",
  birthPlace: "Shawnee, Oklahoma, USA",
  gender: "male",
  heightCentimeters: 180.34,
  nicknames: ["Brad"],
  realName: "William Bradley Pitt",
  spouses: [
    {
      attributes: "(divorced) (6 children)",
      fromDate: "2014-08-23",
      id: "/name/nm0001401/",
      name: "Angelina Jolie",
      toDate: "2019-04-13"
    },
    {
      attributes: "(divorced)",
      fromDate: "2000-07-29",
      id: "/name/nm0000098/",
      name: "Jennifer Aniston",
      toDate: "2005-10-02"
    }
  ],
  trademarks: [
    "Chiseled good looks",
    "Strong jawline and bold blue eyes",
    "Frequently works with David Fincher"
  ],
  miniBios: [
    {
      author: "Anonymous and JJH",
      id: "/name/nm0000093/bio/mb0174672",
      language: "en",
      text:
        "William Bradley \"Brad\" Pitt was born on December 18, 1963 in Shawnee, Oklahoma and raised in Springfield, Missouri to Jane Etta Pitt (née Hillhouse), a school counselor & William Alvin \"Bill\" Pitt, a truck company manager. At Kickapoo High School, Pitt was involved in sports, debating, student government and school musicals. Pitt attended the University of Missouri, where he majored in journalism with a focus on advertising. He occasionally acted in fraternity shows. He left college two credits short of graduating to move to California. Before he became successful at acting, Pitt supported himself by driving strippers in limos, moving refrigerators and dressing as a giant chicken while working for El Pollo Loco.\n\nPitt's earliest credited roles were in television, starting on the daytime soap opera Another World (1964) before appearing in the recurring role of Randy on the legendary prime time soap opera Dallas (1978). Following a string of guest appearances on various television series through the 1980s, Pitt gained widespread attention with a small part in Thelma & Louise (1991), in which he played a sexy criminal who romanced and conned Geena Davis. This led to starring roles in badly received films such as Johnny Suede (1991) & Cool World (1992).\n\nBut Pitt's career hit an upswing with his casting in A River Runs Through It (1992), which cemented his status as an multi-layered actor as opposed to just a pretty face. Pitt's subsequent projects were as quirky and varied in tone as his performances, ranging from his unforgettably comic cameo as stoner roommate Floyd in True Romance (1993) to romantic roles in such visually lavish films as Interview with the Vampire: The Vampire Chronicles (1994) and Legends of the Fall (1994), to an emotionally tortured detective in the horror-thriller Se7en (1995). His portrayal of frenetic oddball Jeffrey Goines in 12 Monkeys (1995) won him a Globe for Best Performance by an Actor in a Supporting Role.\n\nPitt's portrayal of Achilles in the big-budget period drama Troy (2004) helped establish his appeal as an action star and was closely followed by a co-starring role in the stylish spy-versus-spy flick Mr. & Mrs. Smith (2005). It was on the set of Mr. & Mrs. Smith that Pitt, who married Jennifer Aniston in a highly publicized ceremony in 2000, met Angelina Jolie. Pitt left Aniston for Jolie in 2005, a break-up that continues to fuel tabloid stories years after its occurrence.\n\nHe continues to wildly vary his film choices, appearing in everything from high-concept popcorn flicks such as Megamind (2010) to adventurous critic-bait like Inglourious Basterds (2009) and The Tree of Life (2011). He has received two Best Actor Oscar nominations, for The Curious Case of Benjamin Button (2008) and Moneyball (2011). In 2014, he starred in the war film Fury (2014), opposite Shia LaBeouf, Logan Lerman, Jon Bernthal, and Michael Peña.\n\nPitt and Jolie have 6 children, 3 adopted & 3 biological."
    }
  ]
};

// https://online-movie-database.p.rapidapi.com/actors/get-all-filmography?nconst=nm0000093
export const actorFilmographyResponse = {
  id: "/name/nm0000093",
  base: {
    "@type": "imdb.api.name.base",
    akas: ["Weatherman"],
    id: "/name/nm0000093/",
    image: {
      height: 2048,
      id: "/name/nm0000093/images/rm864335360",
      url:
        "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
      width: 1363
    },
    legacyNameText: "Pitt, Brad",
    name: "Brad Pitt"
  },
  filmography: [
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt13891626/",
      image: {
        height: 1445,
        id: "/title/tt13891626/images/rm180865537",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDlmM2NkODEtN2E3ZS00N2MwLWEwZDMtMzNmMTFhN2E2MGQzXkEyXkFqcGdeQXVyNjEwOTIyNA@@._V1_.jpg",
        width: 2146
      },
      status: "post production",
      title: "Hollywood Celebrity",
      titleType: "movie"
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt11596192/",
      image: {
        height: 1898,
        id: "/title/tt11596192/images/rm1541919745",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDFmNDYwNjAtZGJmNC00MzkzLTg5NGEtNDYxZjg5MzhiZjAyXkEyXkFqcGdeQXVyMTAxMzY2NDc5._V1_.jpg",
        width: 1125
      },
      status: "completed",
      title: "Searching for America",
      titleType: "movie",
      year: 2026
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt14563132/",
      image: {
        height: 2304,
        id: "/title/tt14563132/images/rm1869135873",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjYyYjIzNDgtMzhjZi00ODQzLWIyODUtNTc1ZWZmZDQ2YzBkXkEyXkFqcGdeQXVyNjc0NTc4MTY@._V1_.jpg",
        width: 1728
      },
      status: "pre production",
      title: "The Chinese American Immigrant",
      titleType: "movie",
      year: 2023
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0081857",
      category: "archive_footage",
      characters: ["Self", "Self - Fury"],
      endYear: 2023,
      episodeCount: 299,
      roles: [
        {
          character: "Self",
          episodeCount: 297
        },
        {
          character: "Self - Fury",
          episodeCount: 2
        }
      ],
      startYear: 2005,
      id: "/title/tt0081857/",
      image: {
        height: 2160,
        id: "/title/tt0081857/images/rm3661228545",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDY0YzYxNTYtZmIyMC00ZjkxLWJkN2YtMWVmN2UyZjI5OTQyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        width: 1440
      },
      status: "released",
      title: "Entertainment Tonight",
      titleType: "tvSeries",
      year: 1981,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt28376619/",
          status: "released",
          title: "Episode #42.265",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 265,
          releaseDate: "2023-07-17",
          seasonNumber: 42
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt28246918/",
          status: "released",
          title: "Episode #42.264",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 264,
          releaseDate: "2023-07-15",
          seasonNumber: 42
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt28318173/",
          status: "released",
          title: "Episode #42.260",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 260,
          releaseDate: "2023-07-11",
          seasonNumber: 42
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt28246916/",
          status: "released",
          title: "Episode #42.258",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 258,
          releaseDate: "2023-07-08",
          seasonNumber: 42
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt28265446/",
          status: "released",
          title: "ET Vault Unlocked: Julia Roberts",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 254,
          releaseDate: "2023-07-04",
          seasonNumber: 42
        }
      ],
      seriesStartYear: 1981
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0482346",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt0482346/",
      image: {
        height: 1000,
        id: "/title/tt0482346/images/rm3689458945",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmI1ZmZiYTctODMzYS00ZjcxLWI2ZGItNTU3YTQ0M2Q5NWM1XkEyXkFqcGdeQXVyNjUxODQ1NDY@._V1_.jpg",
        width: 678
      },
      status: "released",
      title: "Entertainment Tonight Canada",
      titleType: "tvSeries",
      year: 2005,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt28232429/",
          status: "released",
          title: "Episode dated 26 June 2023",
          titleType: "tvEpisode",
          year: 2023,
          releaseDate: "2023-06-26"
        }
      ],
      seriesStartYear: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt13212110",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt13212110/",
      image: {
        height: 900,
        id: "/title/tt13212110/images/rm2647774209",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzdiZWNjNmUtZDM5NS00MzQ0LTljMTctMDdmNDQ5YmRhMmY5XkEyXkFqcGdeQXVyNzExMzc0MDg@._V1_.jpg",
        width: 900
      },
      status: "released",
      title: "Dr. Steve Turley",
      titleType: "tvSeries",
      year: 2014,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt28060353/",
          status: "released",
          title: "Why WOKE Hollywood Is IMPLODING!!!",
          titleType: "tvEpisode",
          year: 2023,
          releaseDate: "2023-06-08"
        }
      ],
      seriesStartYear: 2014
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt15054972",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2021,
      id: "/title/tt15054972/",
      image: {
        height: 1152,
        id: "/title/tt15054972/images/rm3012688129",
        url:
          "https://m.media-amazon.com/images/M/MV5BOGY0OGZmZDUtMDllYi00NWM4LWFhMGYtNzliZmZlN2ZiZDY3XkEyXkFqcGdeQXVyNTgzOTk3ODM@._V1_.jpg",
        width: 2048
      },
      status: "released",
      title: "Movie Night Extravaganza",
      titleType: "tvSeries",
      year: 2021,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt27235019/",
          image: {
            height: 1128,
            id: "/title/tt27235019/images/rm2407672577",
            url:
              "https://m.media-amazon.com/images/M/MV5BNTA1MjZlNmItMmU1Ni00YWEyLWJhNDEtNTQ3MmRiZGZiMDk2XkEyXkFqcGdeQXVyNTgzOTk3ODM@._V1_.jpg",
            width: 1968
          },
          status: "released",
          title: "Babylon!!",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 17,
          releaseDate: "2023-03-07",
          seasonNumber: 5
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt15149490/",
          image: {
            height: 1106,
            id: "/title/tt15149490/images/rm3785883393",
            url:
              "https://m.media-amazon.com/images/M/MV5BMmI5ODg5NDQtZTVhZS00MGNlLWE3MTYtYzUxNDM1ODQ4ODZiXkEyXkFqcGdeQXVyNTgzOTk3ODM@._V1_.jpg",
            width: 1968
          },
          status: "released",
          title: "Ad Astra",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 7,
          releaseDate: "2021-07-30",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0166442",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 8,
      roles: [
        {
          character: "Self",
          episodeCount: 8
        }
      ],
      startYear: 2014,
      id: "/title/tt0166442/",
      image: {
        height: 1763,
        id: "/title/tt0166442/images/rm1325808897",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDM5MWQwOGMtYTc0Zi00ZmRhLWFhNzQtODY1MGNiY2M4MWJlXkEyXkFqcGdeQXVyOTQ1MjE4OTE@._V1_.jpg",
        width: 1175
      },
      status: "released",
      title: "Inside Edition",
      titleType: "tvSeries",
      year: 1988,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt26230736/",
          status: "released",
          title: "Lisa Marie Presley Death Investigation",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 91,
          releaseDate: "2023-01-16",
          seasonNumber: 35
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6050410/",
          image: {
            height: 375,
            id: "/title/tt6050410/images/rm333743617",
            url:
              "https://m.media-amazon.com/images/M/MV5BZDBkODM3NTQtMzJmYi00NjAyLThlMWUtMjFmYzNkMjJkYjJmXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Episode #28.268",
          titleType: "tvEpisode",
          year: 2016,
          episodeNumber: 268,
          releaseDate: "2016-09-23",
          seasonNumber: 28
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4571454/",
          status: "released",
          title: "Episode #26.152",
          titleType: "tvEpisode",
          year: 2015,
          episodeNumber: 152,
          releaseDate: "2015-04-14",
          seasonNumber: 26
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4108546/",
          status: "released",
          title: "Episode #26.29",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 29,
          releaseDate: "2014-10-23",
          seasonNumber: 26
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4081168/",
          status: "released",
          title: "Episode #26.23",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 23,
          releaseDate: "2014-10-15",
          seasonNumber: 26
        }
      ],
      seriesStartYear: 1988
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt22037116",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt22037116/",
      image: {
        height: 701,
        id: "/title/tt22037116/images/rm895746561",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjY0NGQwY2UtYTMwOC00ZjNlLTg2M2UtZTU1ZGVjN2UyMzU3XkEyXkFqcGdeQXVyOTM3MTA1NTk@._V1_.jpg",
        width: 559
      },
      status: "released",
      title: "Proino mas",
      titleType: "tvSeries",
      year: 2022,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt25291002/",
          image: {
            height: 1243,
            id: "/title/tt25291002/images/rm4219550721",
            url:
              "https://m.media-amazon.com/images/M/MV5BNDNiNzRhZjUtNDljNC00NWI5LThjMmQtMzQwNmViNWYxNzVkXkEyXkFqcGdeQXVyOTM3MTA1NTk@._V1_.jpg",
            width: 1080
          },
          status: "released",
          title: "Episode 78: Ilenia Williams",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 78,
          releaseDate: "2023-01-05",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2022
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      id: "/title/tt28103727/",
      status: "released",
      title: "Doors",
      titleType: "movie",
      year: 2022
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0167515",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 9,
      roles: [
        {
          character: "Self",
          episodeCount: 9
        }
      ],
      startYear: 2016,
      id: "/title/tt0167515/",
      image: {
        height: 1136,
        id: "/title/tt0167515/images/rm2593953025",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzg1MjA0ODctM2I5Yi00NWFhLTlkZTUtNzBiMzM0MTQ5MjBkXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
        width: 852
      },
      status: "released",
      title: "Access Hollywood",
      titleType: "tvSeries",
      year: 1996,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt25135242/",
          status: "released",
          title: "Episode #27.93",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 93,
          releaseDate: "2022-12-28",
          seasonNumber: 27
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt13075880/",
          status: "released",
          title: "Episode #25.5",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 5,
          releaseDate: "2020-09-18",
          seasonNumber: 25
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10887194/",
          status: "released",
          title: "Episode #24.12",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 12,
          releaseDate: "2019-09-21",
          seasonNumber: 24
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt7144518/",
          status: "released",
          title: "Episode #21.276",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 276,
          releaseDate: "2017-07-22",
          seasonNumber: 21
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6889724/",
          status: "released",
          title: "Episode #21.222",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 222,
          releaseDate: "2017-05-20",
          seasonNumber: 21
        }
      ],
      seriesStartYear: 1996
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self - Portrait Subject & Interviewee"],
      roles: [
        {
          character: "Self - Portrait Subject & Interviewee"
        }
      ],
      id: "/title/tt22592434/",
      image: {
        height: 1500,
        id: "/title/tt22592434/images/rm3332636929",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzRlNmI1ZDQtMGE1ZS00MmEwLTkyZmEtYzQ4MmFmMDA2ZTMxXkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "Brad Pitt: More Than a Pretty Face",
      titleType: "tvMovie",
      year: 2022
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt19718182",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2022,
      id: "/title/tt19718182/",
      image: {
        height: 1016,
        id: "/title/tt19718182/images/rm683087105",
        url:
          "https://m.media-amazon.com/images/M/MV5BODg5ZWM0M2EtMWRiNS00MWU2LTkxM2QtMTMxODk3YTIyNDRiXkEyXkFqcGdeQXVyMTAwMjgyOTY4._V1_.jpg",
        width: 686
      },
      status: "released",
      title: "Sinatra Reviews",
      titleType: "tvSeries",
      year: 2021,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt22794226/",
          image: {
            height: 720,
            id: "/title/tt22794226/images/rm2331313665",
            url:
              "https://m.media-amazon.com/images/M/MV5BMjAyNzlmNGEtM2RjMC00N2I5LTgzYWEtYjY1NTU5YmIxYzlkXkEyXkFqcGdeQXVyMTAwMjgyOTY4._V1_.jpg",
            width: 1280
          },
          status: "released",
          title: "Bullet Train (2022)",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 20,
          releaseDate: "2022-10-08",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1973047",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 5,
      roles: [
        {
          character: "Self",
          episodeCount: 5
        }
      ],
      startYear: 2020,
      id: "/title/tt1973047/",
      image: {
        height: 1400,
        id: "/title/tt1973047/images/rm1186423296",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDI1NjZiOTQtZTgxOC00YzcxLTg4ZmQtYTNhNzNlNjJhZDk0XkEyXkFqcGdeQXVyNDYyMTE5NTM@._V1_.jpg",
        width: 1400
      },
      status: "released",
      title: "Dish Nation",
      titleType: "tvSeries",
      year: 2011,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt22248554/",
          status: "released",
          title: "Episode #11.17",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 17,
          releaseDate: "2022-09-27",
          seasonNumber: 11
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt22079906/",
          status: "released",
          title: "Episode #11.15",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 15,
          releaseDate: "2022-09-23",
          seasonNumber: 11
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21295368/",
          status: "released",
          title: "Episode #10.228",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 228,
          releaseDate: "2022-07-20",
          seasonNumber: 10
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt20854672/",
          status: "released",
          title: "Episode #10.197",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 197,
          releaseDate: "2022-06-07",
          seasonNumber: 10
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt12993046/",
          status: "released",
          title: "Episode #9.1",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 1,
          releaseDate: "2020-08-31",
          seasonNumber: 9
        }
      ],
      seriesStartYear: 2011
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt19638434",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2022,
      id: "/title/tt19638434/",
      image: {
        height: 1016,
        id: "/title/tt19638434/images/rm3099006209",
        url:
          "https://m.media-amazon.com/images/M/MV5BODhhMzc4YjUtOWI2NS00ZmEzLTgyY2QtMWYyZTdkMmIwNjFmXkEyXkFqcGdeQXVyMTAwMjgyOTY4._V1_.jpg",
        width: 686
      },
      status: "released",
      title: "FRO Thizzle Reviews",
      titleType: "tvSeries",
      year: 2022,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21285534/",
          image: {
            height: 630,
            id: "/title/tt21285534/images/rm385092353",
            url:
              "https://m.media-amazon.com/images/M/MV5BNDFiNThhOWEtYjEyYi00ZTg5LTgwNjYtNzJmODlkYTkwNTcwXkEyXkFqcGdeQXVyMTAwMjgyOTY4._V1_.jpg",
            width: 1200
          },
          status: "released",
          title: "Once Upon a Time... In Hollywood",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 60,
          releaseDate: "2022-07-15",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2022
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt15004156/",
      image: {
        height: 1138,
        id: "/title/tt15004156/images/rm3346200577",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWFkZDE0NjMtNzk2YS00OTZjLTgzYjgtNTZmOTRiMmUxMTI2XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
        width: 768
      },
      status: "released",
      title: "Woodstock 99: Peace Love and Rage",
      titleType: "movie",
      year: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt11465472",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2021,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2021,
      id: "/title/tt11465472/",
      image: {
        height: 900,
        id: "/title/tt11465472/images/rm1860272129",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzFkNGNhNjItMjAzYi00ZmFkLTg5NDQtNGRlN2I5OWUzM2NmXkEyXkFqcGdeQXVyNzExMzc0MDg@._V1_.jpg",
        width: 900
      },
      status: "released",
      title: "Josiah Rises",
      titleType: "tvSeries",
      year: 2018,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt14949078/",
          status: "released",
          title:
            "Quentin Tarantio SLAMS Hollywood's INSANE Agenda in Bill Maher Interview!",
          titleType: "tvEpisode",
          year: 2021,
          releaseDate: "2021-06-28"
        }
      ],
      seriesStartYear: 2018
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt14695214/",
      image: {
        height: 3508,
        id: "/title/tt14695214/images/rm3144544257",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWM5NTVmNmUtZjlmNi00MDA3LWE4ZmEtN2ZlNDNiZTYwNjU4XkEyXkFqcGdeQXVyNjk0OTg4Mg@@._V1_.jpg",
        width: 2480
      },
      status: "released",
      title: "Hannibal Hopkins & Sir Anthony",
      titleType: "tvMovie",
      year: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt14159412",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2021,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2021,
      id: "/title/tt14159412/",
      image: {
        height: 720,
        id: "/title/tt14159412/images/rm3559442433",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjc2NjQyMTUtZjg0MS00ZDE3LWFkYmItZTdiNzY5ZjM2YjE0XkEyXkFqcGdeQXVyMjIwNjIxNjc@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "Jenseits der Alpen",
      titleType: "tvSeries",
      year: 2021,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt14163238/",
          image: {
            height: 720,
            id: "/title/tt14163238/images/rm3559442433",
            url:
              "https://m.media-amazon.com/images/M/MV5BZjc2NjQyMTUtZjg0MS00ZDE3LWFkYmItZTdiNzY5ZjM2YjE0XkEyXkFqcGdeQXVyMjIwNjIxNjc@._V1_.jpg",
            width: 1280
          },
          status: "released",
          title: "Am Comer See",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 2,
          releaseDate: "2021-03-02",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt5323988",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt5323988/",
      image: {
        height: 1500,
        id: "/title/tt5323988/images/rm2538317569",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGU0NjgxYjgtY2IwZS00ODNjLTgyMDAtMjIzMzg3YzZlODQ4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        width: 1013
      },
      status: "released",
      title: "Full Frontal with Samantha Bee",
      titleType: "tvSeries",
      year: 2016,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt13298806/",
          image: {
            height: 539,
            id: "/title/tt13298806/images/rm1593432065",
            url:
              "https://m.media-amazon.com/images/M/MV5BMzNmMjJiOWItNGZlZC00YjI2LWJlMTUtYTY2MmZiODA4MWVmXkEyXkFqcGdeQXVyNTgzMTg5Ng@@._V1_.jpg",
            width: 959
          },
          status: "released",
          title: "Episode #5.26",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 26,
          releaseDate: "2020-10-21",
          seasonNumber: 5
        }
      ],
      seriesEndYear: 2022,
      seriesStartYear: 2016
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt13177242/",
      image: {
        height: 1600,
        id: "/title/tt13177242/images/rm242983937",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmU5ZWQzOTQtMDhhMC00YTIwLTk5MGEtMzVkNDdiNGEyZTVlXkEyXkFqcGdeQXVyMTIzNTI5NTM1._V1_.jpg",
        width: 1200
      },
      status: "released",
      title: "Tom Cruise: An Eternal Youth",
      titleType: "movie",
      year: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt13156238",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt13156238/",
      status: "released",
      title: "TPMP Elles refont la télé",
      titleType: "tvSeries",
      year: 2020,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt13156494/",
          status: "released",
          title: "Episode #1.1",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 1,
          releaseDate: "2020-09-25",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2020
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt12824834/",
      image: {
        height: 642,
        id: "/title/tt12824834/images/rm4022775041",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWFhNzFhYWEtMjJhNy00NjBlLTg2MDEtYzI1ODhmNzliYzU2XkEyXkFqcGdeQXVyMTA1NTIxMzA3._V1_.jpg",
        width: 429
      },
      status: "released",
      title: "Jennifer Aniston: More Than Friends",
      titleType: "movie",
      year: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0247094",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 32,
      roles: [
        {
          character: "Self",
          episodeCount: 32
        }
      ],
      startYear: 2014,
      id: "/title/tt0247094/",
      image: {
        height: 1440,
        id: "/title/tt0247094/images/rm3133966593",
        url:
          "https://m.media-amazon.com/images/M/MV5BODMzM2I1MjQtMjNhNS00NjU0LWE5MWUtZWRkZTdkOTU5NmI2XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Extra",
      titleType: "tvSeries",
      year: 1994,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt12251786/",
          status: "released",
          title: "Episode #26.263",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 263,
          releaseDate: "2020-07-10",
          seasonNumber: 26
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11553576/",
          status: "released",
          title: "Episode #26.106",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 106,
          releaseDate: "2020-01-09",
          seasonNumber: 26
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11358720/",
          status: "released",
          title: "Episode #26.84",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 84,
          releaseDate: "2019-12-14",
          seasonNumber: 26
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11183312/",
          status: "released",
          title: "Episode #26.54",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 54,
          releaseDate: "2019-11-09",
          seasonNumber: 26
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10394746/",
          status: "released",
          title: "Episode #25.234",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 234,
          releaseDate: "2019-06-01",
          seasonNumber: 25
        }
      ],
      seriesStartYear: 1994
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt11892640",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt11892640/",
      image: {
        height: 1642,
        id: "/title/tt11892640/images/rm3224287233",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDk3YTNkMzMtNzQ1MC00N2NmLWJlOWQtYjYxZmRkYjgzYTEyXkEyXkFqcGdeQXVyODYyNTM1Nzk@._V1_.jpg",
        width: 1024
      },
      status: "released",
      title: "Tales of Chinese Filmmakers",
      titleType: "tvMiniSeries",
      year: 2020,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11918404/",
          image: {
            height: 2052,
            id: "/title/tt11918404/images/rm3585849601",
            url:
              "https://m.media-amazon.com/images/M/MV5BOGQ4N2RlYTYtMDQ2YS00NDhiLWJjY2QtZGUxODFlYTA0MmY5XkEyXkFqcGdeQXVyODYyNTM1Nzk@._V1_.jpg",
            width: 1280
          },
          status: "released",
          title: "Te Xiao: Shi Jue Zao Meng Ren",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 3,
          releaseDate: "2020-03-06",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2020
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt11805284/",
      status: "released",
      title: "Im Reich der Filme",
      titleType: "movie",
      year: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3644198",
      category: "archive_footage",
      characters: ["Self", "Self - Winner, Best Supporting Actor"],
      endYear: 2020,
      episodeCount: 5,
      roles: [
        {
          character: "Self",
          episodeCount: 4
        },
        {
          character: "Self - Winner, Best Supporting Actor",
          episodeCount: 1
        }
      ],
      startYear: 2016,
      id: "/title/tt3644198/",
      image: {
        height: 1620,
        id: "/title/tt3644198/images/rm2371892481",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDI2ZmU2YmItMzVkMy00Mzg2LWI1NDktZWQyMTNiODYzYmMxXkEyXkFqcGdeQXVyNjcwMzExMzU@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Good Morning Britain",
      titleType: "tvSeries",
      year: 2014,
      episodes: [
        {
          attr: ["uncredited", "archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11707420/",
          status: "released",
          title: "Episode dated 14 February 2020",
          titleType: "tvEpisode",
          year: 2020,
          releaseDate: "2020-02-14"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self - Winner, Best Supporting Actor"],
          roles: [
            {
              character: "Self - Winner, Best Supporting Actor"
            }
          ],
          id: "/title/tt11707384/",
          image: {
            height: 576,
            id: "/title/tt11707384/images/rm3133913857",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzcxYzYxZDMtYTE1YS00YzVhLWEzZTUtZDBkODlhODRmOTc5XkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",
            width: 1023
          },
          status: "released",
          title: "Good Morning Britain Live from the Oscars 2020",
          titleType: "tvEpisode",
          year: 2020,
          releaseDate: "2020-02-10"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt7244470/",
          image: {
            height: 568,
            id: "/title/tt7244470/images/rm1599611392",
            url:
              "https://m.media-amazon.com/images/M/MV5BN2ViNTI2MzAtNzc5Ny00ZjRjLTk2YmQtZDM1NWI4Mjk0MjM2XkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",
            width: 1009
          },
          status: "released",
          title: "Episode dated 10 August 2017",
          titleType: "tvEpisode",
          year: 2017,
          releaseDate: "2017-08-10"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6862616/",
          status: "released",
          title: "Episode dated 4 May 2017",
          titleType: "tvEpisode",
          year: 2017,
          releaseDate: "2017-05-04"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6268632/",
          status: "released",
          title: "Episode dated 23 November 2016",
          titleType: "tvEpisode",
          year: 2016,
          releaseDate: "2016-11-23"
        }
      ],
      seriesStartYear: 2014
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3503424",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 10,
      roles: [
        {
          character: "Self",
          episodeCount: 10
        }
      ],
      startYear: 2017,
      id: "/title/tt3503424/",
      image: {
        height: 1440,
        id: "/title/tt3503424/images/rm471876864",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjQ1ZjYwNTktYjIyZC00ZTgyLWFkNWEtNDA4MjI1YWY1OWFiXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Celebrity Page",
      titleType: "tvSeries",
      year: 2013,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11749552/",
          status: "released",
          title: "Episode #5.117",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 117,
          releaseDate: "2020-02-11",
          seasonNumber: 5
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11678796/",
          status: "released",
          title: "Episode #5.106",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 106,
          releaseDate: "2020-01-27",
          seasonNumber: 5
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11629016/",
          status: "released",
          title: "Episode #5.104",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 104,
          releaseDate: "2020-01-23",
          seasonNumber: 5
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11629010/",
          status: "released",
          title: "Episode #5.101",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 101,
          releaseDate: "2020-01-20",
          seasonNumber: 5
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11253086/",
          status: "released",
          title: "Episode #5.55",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 55,
          releaseDate: "2019-11-15",
          seasonNumber: 5
        }
      ],
      seriesStartYear: 2013
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0959790",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt0959790/",
      image: {
        height: 995,
        id: "/title/tt0959790/images/rm3504780545",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDc1NDUxNGItYTZlYi00YTc0LTlhZTAtMDM0NzA2N2JmMDBiXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",
        width: 500
      },
      status: "released",
      title: "ITV Lunchtime News",
      titleType: "tvSeries",
      year: 1988,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11640432/",
          status: "released",
          title: "Episode dated 20 January 2020",
          titleType: "tvEpisode",
          year: 2020,
          releaseDate: "2020-01-20"
        }
      ],
      seriesStartYear: 1988
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt4329810/",
      image: {
        height: 2030,
        id: "/title/tt4329810/images/rm2559510529",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTQxMDQzNGUtOTBkNi00ZTA1LWI2OWItOThmNDM2N2I3N2FhXkEyXkFqcGdeQXVyMzg3NDQzMA@@._V1_.jpg",
        width: 1386
      },
      status: "released",
      title: "QT8: The First Eight",
      titleType: "movie",
      year: 2019
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt10747262/",
      image: {
        height: 1262,
        id: "/title/tt10747262/images/rm3890450433",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDBkNDYxODEtMGMzMy00ZTM0LTg0YmQtMWVjMjFhMDM4NWZmXkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_.jpg",
        width: 840
      },
      status: "released",
      title: "Robert Redford: The Golden Look",
      titleType: "tvMovie",
      year: 2019
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt7549864",
      category: "archive_footage",
      characters: ["Floyd (Dick's Roommate)"],
      endYear: 2019,
      episodeCount: 1,
      roles: [
        {
          character: "Floyd (Dick's Roommate)",
          episodeCount: 1
        }
      ],
      startYear: 2019,
      id: "/title/tt7549864/",
      image: {
        height: 1611,
        id: "/title/tt7549864/images/rm3268963840",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTkzNTYxNjUzNl5BMl5BanBnXkFtZTgwODI3NDYzNzM@._V1_.jpg",
        width: 1039
      },
      status: "released",
      title: "The IMDb Show",
      titleType: "tvSeries",
      year: 2017,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Floyd (Dick's Roommate)"],
          roles: [
            {
              character: "Floyd (Dick's Roommate)"
            }
          ],
          id: "/title/tt9863946/",
          image: {
            height: 596,
            id: "/title/tt9863946/images/rm1761831936",
            url:
              "https://m.media-amazon.com/images/M/MV5BODM2NDIyMzcxNV5BMl5BanBnXkFtZTgwNzk1MzQ1NzM@._V1_.jpg",
            width: 402
          },
          status: "released",
          title: "Take 5 With Jessica Szohr",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 8,
          releaseDate: "2019-03-04",
          seasonNumber: 3
        }
      ],
      seriesStartYear: 2017
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3626802",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2019,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2019,
      id: "/title/tt3626802/",
      image: {
        height: 900,
        id: "/title/tt3626802/images/rm3797033984",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDc5YmEyN2UtOWI1ZS00OTczLTkwZWQtYjJmMTQ1ZTRkMjRkXkEyXkFqcGdeQXVyNjc2NTQzMjU@._V1_.jpg",
        width: 1600
      },
      status: "released",
      title: "Sálvame Deluxe",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt9587582/",
          status: "released",
          title: "Terelu",
          titleType: "tvEpisode",
          year: 2019,
          releaseDate: "2019-01-12"
        }
      ],
      seriesEndYear: 2023,
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt8258576",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2018,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2018,
      id: "/title/tt8258576/",
      image: {
        height: 900,
        id: "/title/tt8258576/images/rm945983745",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjcyZmUzMzQtYTE2MC00OTM1LWI1NmQtNGU0NzE5MzJmYzk5XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg",
        width: 900
      },
      status: "released",
      title: "Internet Historian",
      titleType: "tvSeries",
      year: 2017,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt15461718/",
          image: {
            height: 188,
            id: "/title/tt15461718/images/rm341764353",
            url:
              "https://m.media-amazon.com/images/M/MV5BMzhlMWZhYmUtZGU3Yy00ZGNmLTg4NjQtZjdjZWE0YjIwNzRlXkEyXkFqcGdeQXVyMTQyMjc5NTE3._V1_.jpg",
            width: 336
          },
          status: "released",
          title: "The Story of Kony2012",
          titleType: "tvEpisode",
          year: 2018,
          releaseDate: "2018-10-11"
        }
      ],
      seriesStartYear: 2017
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt11635416",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2018,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2018,
      id: "/title/tt11635416/",
      image: {
        height: 1050,
        id: "/title/tt11635416/images/rm1607318273",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzQzNjZlMjgtYzkyNy00MzMyLTlmMzgtNTU4ZmE5NDQzMmU2XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 811
      },
      status: "released",
      title: "Les Chroniques du Mea",
      titleType: "tvSeries",
      year: 2012,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11745414/",
          status: "released",
          title: "Qui Veut la Peau de Roger Rabbit (1988)",
          titleType: "tvEpisode",
          year: 2018,
          releaseDate: "2018-05-13"
        }
      ],
      seriesStartYear: 2012
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt7860890/",
      image: {
        height: 1920,
        id: "/title/tt7860890/images/rm4019275776",
        url:
          "https://m.media-amazon.com/images/M/MV5BYWQxNTNlOGUtY2Q2ZS00NTgxLTk0OTctZmZhNjNmM2MyOGExXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        width: 1300
      },
      status: "released",
      title: "The Zen Diaries of Garry Shandling",
      titleType: "tvMovie",
      year: 2018
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt8219204/",
      image: {
        height: 1062,
        id: "/title/tt8219204/images/rm269568256",
        url:
          "https://m.media-amazon.com/images/M/MV5BY2NhOWQ0MjYtMWVmYS00MGJlLWI1ZjQtNzcwMWIxYmU5ZGU1XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Six Sides of Katharine Hepburn",
      titleType: "short",
      year: 2018
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt21284536/",
      status: "released",
      title: "The Art and Ethics of Digital De-Aging (Part 1 of 2)",
      titleType: "video",
      year: 2017
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0430836",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2017,
      episodeCount: 12,
      roles: [
        {
          character: "Self",
          episodeCount: 12
        }
      ],
      startYear: 2014,
      id: "/title/tt0430836/",
      image: {
        height: 1440,
        id: "/title/tt0430836/images/rm3161754881",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWFkZDg0NzUtYTA1Yy00N2RlLTllZjItNWMyYThmZjU0MzcyXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "The Insider",
      titleType: "tvSeries",
      year: 2004,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt7085182/",
          status: "released",
          title: "Episode #13.258",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 258,
          releaseDate: "2017-07-08",
          seasonNumber: 13
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6852642/",
          status: "released",
          title: "Episode #13.204",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 204,
          releaseDate: "2017-05-06",
          seasonNumber: 13
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6722864/",
          status: "released",
          title: "Episode #13.180",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 180,
          releaseDate: "2017-04-08",
          seasonNumber: 13
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6662486/",
          status: "released",
          title: "Episode #13.168",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 168,
          releaseDate: "2017-03-25",
          seasonNumber: 13
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6401204/",
          status: "released",
          title: "Episode #13.108",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 108,
          releaseDate: "2017-01-14",
          seasonNumber: 13
        }
      ],
      seriesEndYear: 2017,
      seriesStartYear: 2004
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt4384798",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2017,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2017,
      id: "/title/tt4384798/",
      image: {
        height: 270,
        id: "/title/tt4384798/images/rm1104364032",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzkwNWQzNjItMDk5My00MDk3LTk0MGUtOTEyMGNlNDVkMTIzXkEyXkFqcGdeQXVyODcxMDQ4NzM@._V1_.jpg",
        width: 618
      },
      status: "released",
      title: "Strange Inheritance",
      titleType: "tvSeries",
      year: 2015,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6557968/",
          status: "released",
          title: "Beauty and the Babes",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 17,
          releaseDate: "2017-03-20",
          seasonNumber: 3
        }
      ],
      seriesStartYear: 2015
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt6361726/",
      image: {
        height: 1418,
        id: "/title/tt6361726/images/rm2625647104",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWZhZjE1NDMtZjcwMi00ZjFlLTlmNDYtOTUyMmJhOGQyNzEzXkEyXkFqcGdeQXVyMTQxNDI4ODE@._V1_.jpg",
        width: 2502
      },
      status: "released",
      title: "TIME Presents: Celebrities on Trial",
      titleType: "tvMovie",
      year: 2017
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt6500070/",
      image: {
        height: 944,
        id: "/title/tt6500070/images/rm2678745856",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmIxODk5YzgtNDhjZC00YTUzLThjZmYtYmQ5NTViNzRhZWRjXkEyXkFqcGdeQXVyMjM0MzAyNTU@._V1_.jpg",
        width: 704
      },
      status: "released",
      title: "Brangelina - Wie Hollywoods berühmteste Liebe zerbrach",
      titleType: "tvMovie",
      year: 2017
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt6436780",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2017,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2017,
      id: "/title/tt6436780/",
      image: {
        height: 540,
        id: "/title/tt6436780/images/rm1072705280",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWIxYmY4MTktOTRmNy00ZTc2LWE4NmQtNDMxMjQ0OGM0YmJkXkEyXkFqcGdeQXVyNzMwODU1NDU@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Hoy nos toca",
      titleType: "tvSeries",
      year: 2017,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6488064/",
          status: "released",
          title: "Episode dated 30 January 2017",
          titleType: "tvEpisode",
          year: 2017,
          releaseDate: "2017-01-30"
        }
      ],
      seriesStartYear: 2017
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt16369126/",
      status: "released",
      title: "Raphaël Mezrahi - Les inédits mais pas que...",
      titleType: "video",
      year: 2016
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt4416750",
      category: "archive_footage",
      characters: ["Ben Rickert", "Westray"],
      endYear: 2016,
      episodeCount: 2,
      roles: [
        {
          character: "Ben Rickert",
          episodeCount: 1
        },
        {
          character: "Westray",
          episodeCount: 1
        }
      ],
      startYear: 2014,
      id: "/title/tt4416750/",
      image: {
        height: 540,
        id: "/title/tt4416750/images/rm2295954432",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTA3ZWJlZDctOGM3Yi00OWY3LTk1YmEtNzAxMjNmZDdiNGQ0XkEyXkFqcGdeQXVyMjU3NTc0NzQ@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Welcome to the Basement",
      titleType: "tvSeries",
      year: 2012,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Ben Rickert"],
          roles: [
            {
              character: "Ben Rickert"
            }
          ],
          id: "/title/tt7111638/",
          status: "released",
          title: "The Notebook",
          titleType: "tvEpisode",
          year: 2016,
          releaseDate: "2016-02-19"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Westray"],
          roles: [
            {
              character: "Westray"
            }
          ],
          id: "/title/tt4493414/",
          status: "released",
          title: "A Trip to the Moon/Charlie Chaplin",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-12-26"
        }
      ],
      seriesStartYear: 2012
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt4957700/",
      image: {
        height: 1000,
        id: "/title/tt4957700/images/rm3319403520",
        url:
          "https://m.media-amazon.com/images/M/MV5BY2Y4MGE4YmQtYjY2MC00OTQ0LWIzMjktOTE0ODhiNDRmMGM4XkEyXkFqcGdeQXVyMjA2MzcwMzU@._V1_.jpg",
        width: 674
      },
      status: "released",
      title: "Boots on the Ground in Haiti",
      titleType: "movie",
      year: 2016
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt5158164",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2015,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2015,
      id: "/title/tt5158164/",
      image: {
        height: 1763,
        id: "/title/tt5158164/images/rm4093785601",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDdkMGEzZGQtYTA4Yy00NTA5LWE1NjYtODNmZTlmMTc2MDJhXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
        width: 1175
      },
      status: "released",
      title: "Eamonn and Ruth: How the Other Half Lives",
      titleType: "tvSeries",
      year: 2015,
      episodes: [
        {
          attr: ["uncredited", "archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt5245046/",
          status: "released",
          title: "Episode #1.5",
          titleType: "tvEpisode",
          year: 2015,
          episodeNumber: 5,
          releaseDate: "2015-11-24",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2015
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt8210910",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2015,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2015,
      id: "/title/tt8210910/",
      image: {
        height: 482,
        id: "/title/tt8210910/images/rm2303019008",
        url:
          "https://m.media-amazon.com/images/M/MV5BNGRlMmViOTQtOWQ1Mi00OGNiLTgwNmQtMmE3MDdhZTY3ZjRkXkEyXkFqcGdeQXVyMjcyMzY4Ng@@._V1_.jpg",
        width: 349
      },
      status: "released",
      title: "Stretch Marks",
      titleType: "tvMiniSeries",
      year: 2015,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt8216004/",
          status: "released",
          title: "Reaching the Goal",
          titleType: "tvEpisode",
          year: 2015,
          episodeNumber: 2,
          releaseDate: "2015-05-03",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2015,
      seriesStartYear: 2015
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0780206",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2014,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2014,
      id: "/title/tt0780206/",
      image: {
        height: 1000,
        id: "/title/tt0780206/images/rm3319600640",
        url:
          "https://m.media-amazon.com/images/M/MV5BYWM4ODQ5MGUtOWFhYS00M2IyLTlmNWQtMzIwOGZkYjNkZDIyXkEyXkFqcGdeQXVyMjQ1NjEyNzE@._V1_.jpg",
        width: 680
      },
      status: "released",
      title: "Screenwipe",
      titleType: "tvSeries",
      year: 2006,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4307842/",
          image: {
            height: 390,
            id: "/title/tt4307842/images/rm4151261184",
            url:
              "https://m.media-amazon.com/images/M/MV5BODFmYTgzYjctNzc0Yi00YzlhLTg4NmEtYmVkMzgyZmEwNzkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjM3ODA2NDQ@._V1_.jpg",
            width: 700
          },
          status: "released",
          title: "2014 Wipe",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 7,
          releaseDate: "2014-12-30",
          seasonNumber: 9
        }
      ],
      seriesEndYear: 2020,
      seriesStartYear: 2006
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2070647/",
      image: {
        height: 500,
        id: "/title/tt2070647/images/rm4145282560",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzQyNDgyNzYwOF5BMl5BanBnXkFtZTgwNTMzNjQ4MzE@._V1_.jpg",
        width: 343
      },
      status: "released",
      title: "Mobilize",
      titleType: "movie",
      year: 2014
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0103569",
      category: "archive_footage",
      characters: ["Self - Chanel Commercial", "Self - Guest"],
      endYear: 2014,
      episodeCount: 3,
      roles: [
        {
          character: "Self - Chanel Commercial",
          episodeCount: 2
        },
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt0103569/",
      image: {
        height: 1176,
        id: "/title/tt0103569/images/rm2347503360",
        url:
          "https://m.media-amazon.com/images/M/MV5BODdiOTUwMGUtODRjNC00ZmFjLWJiYzQtOWY5ODc1Y2FhMmQ5XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg",
        width: 800
      },
      status: "released",
      title: "The Tonight Show with Jay Leno",
      titleType: "tvSeries",
      year: 1992,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt3483076/",
          status: "released",
          title: "Matthew McConaughey/Charles Barkley/Lyle Lovett",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 75,
          releaseDate: "2014-02-04",
          seasonNumber: 22
        },
        {
          attr: ["uncredited", "archiveFootage"],
          category: "archive_footage",
          characters: ["Self - Chanel Commercial"],
          roles: [
            {
              character: "Self - Chanel Commercial"
            }
          ],
          id: "/title/tt2495022/",
          status: "released",
          title: "Episode #21.35",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 35,
          releaseDate: "2012-11-12",
          seasonNumber: 21
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self - Chanel Commercial"],
          roles: [
            {
              character: "Self - Chanel Commercial"
            }
          ],
          id: "/title/tt2450090/",
          status: "released",
          title: "Episode #21.23",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 23,
          releaseDate: "2012-10-24",
          seasonNumber: 21
        }
      ],
      seriesEndYear: 2014,
      seriesStartYear: 1992
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt4095420/",
      status: "released",
      title: "Jennifer Aniston - Hollywoods einsame Traumfrau",
      titleType: "tvMovie",
      year: 2013
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0318251",
      category: "archive_footage",
      characters: ["Self - Actor", "Benjamin Button"],
      endYear: 2013,
      episodeCount: 2,
      roles: [
        {
          character: "Self - Actor",
          episodeCount: 2
        },
        {
          character: "Benjamin Button",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt0318251/",
      image: {
        height: 945,
        id: "/title/tt0318251/images/rm3077641216",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjc5YzNlMDYtM2ZmYS00MDg4LTg5N2YtN2I4ZGY1MGZlZTBhXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 681
      },
      status: "released",
      title: "Troldspejlet",
      titleType: "tvSeries",
      year: 1989,
      episodes: [
        {
          attr: ["uncredited", "archiveFootage"],
          category: "archive_footage",
          characters: ["Self - Actor"],
          roles: [
            {
              character: "Self - Actor"
            }
          ],
          id: "/title/tt3342152/",
          status: "released",
          title: "Episode #50.5",
          titleType: "tvEpisode",
          year: 2013,
          episodeNumber: 5,
          releaseDate: "2013-10-13",
          seasonNumber: 50
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self - Actor", "Benjamin Button"],
          roles: [
            {
              character: "Self - Actor"
            },
            {
              character: "Benjamin Button"
            }
          ],
          id: "/title/tt2813052/",
          status: "released",
          title: "Episode #41.3",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 3,
          releaseDate: "2009-01-24",
          seasonNumber: 41
        }
      ],
      seriesStartYear: 1989
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0355143",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2013,
      episodeCount: 3,
      roles: [
        {
          character: "Self",
          episodeCount: 3
        }
      ],
      startYear: 2004,
      id: "/title/tt0355143/",
      image: {
        height: 1214,
        id: "/title/tt0355143/images/rm458300673",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjJiZjU1YmQtZTQxYS00ODE2LTk1ZWMtYjQ3YTM2YjU3NmEzXkEyXkFqcGdeQXVyNjE1MjkwNw@@._V1_.jpg",
        width: 900
      },
      status: "released",
      title: "taff",
      titleType: "tvSeries",
      year: 1995,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10536712/",
          status: "released",
          title: "Episode dated 1 October 2013",
          titleType: "tvEpisode",
          year: 2013,
          releaseDate: "2013-10-01"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0765996/",
          status: "released",
          title: "Episode dated 11 January 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-01-11"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10560828/",
          status: "released",
          title: "Episode dated 26 April 2004",
          titleType: "tvEpisode",
          year: 2004,
          releaseDate: "2004-04-26"
        }
      ],
      seriesStartYear: 1995
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2890800/",
      image: {
        height: 792,
        id: "/title/tt2890800/images/rm2541059072",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDcwYjE5YjEtM2RjNy00N2U5LWEyOGYtNDA1ZWY3ZTRhZTFjXkEyXkFqcGdeQXVyMTQ1MzYwOQ@@._V1_.jpg",
        width: 480
      },
      status: "released",
      title: "People Magnet TV",
      titleType: "tvMovie",
      year: 2013
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0165001",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2013,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2013,
      id: "/title/tt0165001/",
      image: {
        height: 1763,
        id: "/title/tt0165001/images/rm3438425857",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGMzMmZhYTAtODU3Zi00ODlkLTg5ZjItYzZhMDliM2IwZDAyXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
        width: 1175
      },
      status: "released",
      title: "CBS News Sunday Morning",
      titleType: "tvSeries",
      year: 1979,
      episodes: [
        {
          attr: ["uncredited", "archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt2725388/",
          status: "released",
          title: "Episode dated 24 February 2013",
          titleType: "tvEpisode",
          year: 2013,
          releaseDate: "2013-02-24"
        }
      ],
      seriesStartYear: 1979
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self - Mr. & Mrs. Smith"],
      roles: [
        {
          character: "Self - Mr. & Mrs. Smith"
        }
      ],
      id: "/title/tt2894120/",
      image: {
        height: 910,
        id: "/title/tt2894120/images/rm3092040193",
        url:
          "https://m.media-amazon.com/images/M/MV5BNThhYTJkMWYtMzc1Ni00ZGYwLWEyYzAtZDM5ZjA0ZDllYmVkXkEyXkFqcGdeQXVyMTkxMDgxMw@@._V1_.jpg",
        width: 650
      },
      title: "Flirting with Danger",
      titleType: "movie",
      year: 2012
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1002838",
      category: "archive_footage",
      characters: ["Self - Chanel No. 5 Spokesman"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Chanel No. 5 Spokesman",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt1002838/",
      image: {
        height: 1733,
        id: "/title/tt1002838/images/rm3825935872",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDg5OTllOTUtNmY4OS00M2U5LThkZTItZDZmNzY5NjRiNDRlXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
        width: 1300
      },
      status: "released",
      title: "Chelsea Lately",
      titleType: "tvSeries",
      year: 2007,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self - Chanel No. 5 Spokesman"],
          roles: [
            {
              character: "Self - Chanel No. 5 Spokesman"
            }
          ],
          id: "/title/tt2436198/",
          status: "released",
          title: "Episode #6.155",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 155,
          releaseDate: "2012-10-16",
          seasonNumber: 6
        }
      ],
      seriesEndYear: 2014,
      seriesStartYear: 2007
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt8327706/",
      image: {
        height: 567,
        id: "/title/tt8327706/images/rm1393839872",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmQxYzc3Y2UtNzFmOS00ODAzLTlmNDAtY2E5YTNhOTFjNDY0XkEyXkFqcGdeQXVyNzI4MDMyMTU@._V1_.jpg",
        width: 426
      },
      status: "released",
      title: "Chanel N°5: Pour la première fois",
      titleType: "video",
      year: 2012
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt3984388/",
      image: {
        height: 2246,
        id: "/title/tt3984388/images/rm997086976",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTAxNDRmZDEtOGM1Yi00MTBlLWIwODgtNDk4NzNjNDY3ZTE3XkEyXkFqcGdeQXVyNTI1NjU1MTE@._V1_.jpg",
        width: 1588
      },
      status: "released",
      title: "Close Up",
      titleType: "movie",
      year: 2012
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2279306/",
      image: {
        height: 800,
        id: "/title/tt2279306/images/rm2939988992",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjMwNTMxMTQzMF5BMl5BanBnXkFtZTcwNzI3NjM4OA@@._V1_.jpg",
        width: 564
      },
      status: "released",
      title: "Propaganda",
      titleType: "movie",
      year: 2012
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      id: "/title/tt2243299/",
      image: {
        height: 879,
        id: "/title/tt2243299/images/rm2825656832",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjE0YjUxMjMtYjFiYy00YTU0LTgxZmEtODk0NzFiYWYxMmM5XkEyXkFqcGdeQXVyMjgxMTkzOQ@@._V1_.jpg",
        width: 621
      },
      status: "released",
      title: "Final Cut: Ladies and Gentlemen",
      titleType: "movie",
      year: 2012
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self - Producer", "Billy Beane"],
      roles: [
        {
          character: "Self - Producer"
        },
        {
          character: "Billy Beane"
        }
      ],
      id: "/title/tt2200957/",
      image: {
        height: 1440,
        id: "/title/tt2200957/images/rm4030752256",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTYyZTRhNjgtYjI2NC00ZGNmLTk2NzYtYWEwMTEyMjEzNzNkXkEyXkFqcGdeQXVyNzQwNzgwMDk@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "1st AACTA Awards",
      titleType: "tvSpecial",
      year: 2012
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt10626552/",
      image: {
        height: 694,
        id: "/title/tt10626552/images/rm2706021377",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTlhYzQ5YzEtYWUzMy00YzMyLWJiYzYtZGNjZGM3ZTg0YjQ5XkEyXkFqcGdeQXVyMzEwODUzNg@@._V1_.jpg",
        width: 1000
      },
      title: "Mineseeker: The Mike Kendrick interview",
      titleType: "short",
      year: 2011
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1231460",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2011,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2011,
      id: "/title/tt1231460/",
      image: {
        height: 399,
        id: "/title/tt1231460/images/rm3234736896",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzdjOTU2ZGYtNzU3Zi00ZDNmLThiNjEtNGZkNWM2NTIzYjAzXkEyXkFqcGdeQXVyNzMxMzYyOTI@._V1_.jpg",
        width: 266
      },
      status: "released",
      title: "Late Night with Jimmy Fallon",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          attr: ["uncredited", "archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1957258/",
          status: "released",
          title:
            "Jada Pinkett Smith/Simon Pegg/Call of Duty: Modern Warfare 3/Givers",
          titleType: "tvEpisode",
          year: 2011,
          releaseDate: "2011-06-13"
        }
      ],
      seriesEndYear: 2014,
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1819821",
      category: "archive_footage",
      characters: ["Rusty Ryan"],
      endYear: 2011,
      episodeCount: 1,
      roles: [
        {
          character: "Rusty Ryan",
          episodeCount: 1
        }
      ],
      startYear: 2011,
      id: "/title/tt1819821/",
      image: {
        height: 1433,
        id: "/title/tt1819821/images/rm4094917376",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDg4MWUwNDctNGEyYi00NTdlLWEwOTMtZGE1MTllOTQ1MjE2XkEyXkFqcGdeQXVyMTUxMzI3Mw@@._V1_.jpg",
        width: 1026
      },
      status: "released",
      title: "Basta",
      titleType: "tvSeries",
      year: 2011,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Rusty Ryan"],
          roles: [
            {
              character: "Rusty Ryan"
            }
          ],
          id: "/title/tt1837044/",
          image: {
            height: 240,
            id: "/title/tt1837044/images/rm2619144961",
            url:
              "https://m.media-amazon.com/images/M/MV5BNTE4NGRlZDctYmI5OC00MmRmLWExYWEtOGJmMjBhOGY0OWMzXkEyXkFqcGdeQXVyMTMyMDM4MTc3._V1_.jpg",
            width: 426
          },
          status: "released",
          title: "Episode #1.4",
          titleType: "tvEpisode",
          year: 2011,
          episodeNumber: 4,
          releaseDate: "2011-01-31",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2011
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1651079/",
      image: {
        height: 1074,
        id: "/title/tt1651079/images/rm4192737024",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTNjNmUyNzctMGY0NC00NWQ5LWIxZWYtZTM5NWQ5MzY3NzQzXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Gilles Jacob: Citizen Cannes",
      titleType: "tvMovie",
      year: 2010
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1510985/",
      image: {
        height: 5565,
        id: "/title/tt1510985/images/rm3874390528",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTU2MjEzMTExNV5BMl5BanBnXkFtZTcwMzcwODU0Mw@@._V1_.jpg",
        width: 3718
      },
      status: "released",
      title: "Never Sleep Again: The Elm Street Legacy",
      titleType: "video",
      year: 2010
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1692183/",
      image: {
        height: 1104,
        id: "/title/tt1692183/images/rm4108850944",
        url:
          "https://m.media-amazon.com/images/M/MV5BNGExYTc4Y2QtYjg2Yy00ZDc1LTk3NTMtYWU0OTgxMTg3NmQxXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Bad Boy Kummer",
      titleType: "movie",
      year: 2010
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1509653",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2010,
      episodeCount: 7,
      roles: [
        {
          character: "Self",
          episodeCount: 7
        }
      ],
      startYear: 2010,
      id: "/title/tt1509653/",
      image: {
        height: 398,
        id: "/title/tt1509653/images/rm3338147584",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmNkZWE3MWEtZmJiNy00ODdjLWIwYWEtNjU0OTNiY2ExYTUxXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Live from Studio Five",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1629851/",
          status: "released",
          title: "Episode #1.129",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 129,
          releaseDate: "2010-03-23",
          seasonNumber: 1
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1606460/",
          status: "released",
          title: "Episode #1.101",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 101,
          releaseDate: "2010-02-10",
          seasonNumber: 1
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1606472/",
          status: "released",
          title: "Episode #1.99",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 99,
          releaseDate: "2010-02-08",
          seasonNumber: 1
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1591305/",
          status: "released",
          title: "Episode #1.91",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 91,
          releaseDate: "2010-01-27",
          seasonNumber: 1
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1591304/",
          status: "released",
          title: "Episode #1.90",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 90,
          releaseDate: "2010-01-26",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2011,
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0800968",
      category: "archive_footage",
      characters: ["Self", "J.D."],
      endYear: 2010,
      episodeCount: 5,
      roles: [
        {
          character: "Self",
          episodeCount: 4
        },
        {
          character: "J.D.",
          episodeCount: 1
        }
      ],
      startYear: 2006,
      id: "/title/tt0800968/",
      image: {
        height: 1729,
        id: "/title/tt0800968/images/rm2239214081",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTlmM2Q0OTEtN2FlNi00MmVjLWE4ZjgtNTA1MzFhMjQ2YjI4XkEyXkFqcGdeQXVyMjIzMTQ5NjE@._V1_.jpg",
        width: 970
      },
      status: "released",
      title: "20 to 1",
      titleType: "tvSeries",
      year: 2005,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1626256/",
          image: {
            height: 900,
            id: "/title/tt1626256/images/rm406264064",
            url:
              "https://m.media-amazon.com/images/M/MV5BMzYxMWIyMjYtNzFmNy00MDRlLWJkNDgtMmVjYjQ4OTA0OGYxXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
            width: 1800
          },
          status: "released",
          title: "Adults Only 20 to 1: Sex on the Screen",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 1,
          releaseDate: "2010-02-11",
          seasonNumber: 9
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1558878/",
          status: "released",
          title: "Hollywood's Hot List",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 14,
          releaseDate: "2009-05-14",
          seasonNumber: 8
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1473856/",
          status: "released",
          title: "Adults Only 20 to 01: Hottest Stars on the Planet",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 7,
          releaseDate: "2009-03-26",
          seasonNumber: 8
        },
        {
          attr: ["uncredited", "archiveFootage"],
          category: "archive_footage",
          characters: ["J.D."],
          roles: [
            {
              character: "J.D."
            }
          ],
          id: "/title/tt1297987/",
          status: "released",
          title: "Sexiest Movie Moments",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 3,
          releaseDate: "2007-11-06",
          seasonNumber: 5
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1772436/",
          status: "released",
          title: "Sexiest People",
          titleType: "tvEpisode",
          year: 2006,
          episodeNumber: 12,
          releaseDate: "2006-11-21",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 2019,
      seriesStartYear: 2005
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1280015/",
      image: {
        height: 1440,
        id: "/title/tt1280015/images/rm2536932096",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjAxNTM1OTE0Nl5BMl5BanBnXkFtZTcwOTQyNTU2Mw@@._V1_.jpg",
        width: 972
      },
      status: "released",
      title: "Smash His Camera",
      titleType: "movie",
      year: 2010
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt25815226/",
      image: {
        height: 750,
        id: "/title/tt25815226/images/rm1126579201",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTdmOWM4MjgtODI2OS00YjIxLWE5Y2MtYjRmZDY4YjE2ZGE1XkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg",
        width: 538
      },
      status: "released",
      title: "This Film Is Not Yet Rated: Deleted Scenes",
      titleType: "video",
      year: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0899126",
      category: "archive_footage",
      characters: ["Lt. Aldo Raine"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Lt. Aldo Raine",
          characterId: "/character/ch0106963/",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt0899126/",
      image: {
        height: 1120,
        id: "/title/tt0899126/images/rm812889089",
        url:
          "https://m.media-amazon.com/images/M/MV5BOGQwMmRlYmItNjEwYS00NTJmLWFhMzAtYTk2NDlhYzhhZTgxXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg",
        width: 800
      },
      status: "released",
      title: "The Tonight Show with Conan O'Brien",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Lt. Aldo Raine"],
          roles: [
            {
              character: "Lt. Aldo Raine",
              characterId: "/character/ch0106963/"
            }
          ],
          id: "/title/tt1499884/",
          image: {
            height: 360,
            id: "/title/tt1499884/images/rm1375917057",
            url:
              "https://m.media-amazon.com/images/M/MV5BODE1YTBlYzgtZmRlMy00ZGJkLTlmZmEtZTg4NDcyMzdlOGQxXkEyXkFqcGdeQXVyMTI4ODc2NDY@._V1_.jpg",
            width: 638
          },
          status: "released",
          title: "Quentin Tarantino/Mark Feuerstein/Smokey Robinson",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 52,
          releaseDate: "2009-08-25",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0185103",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt0185103/",
      image: {
        height: 1200,
        id: "/title/tt0185103/images/rm2735641345",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjU2ZjBiZjgtMmNjZC00ZmYxLTg1MTgtNDYyMjViODI4YTVkXkEyXkFqcGdeQXVyOTQxNzM2MjY@._V1_.jpg",
        width: 848
      },
      status: "released",
      title: "WWE Raw",
      titleType: "tvSeries",
      year: 1993,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1368830/",
          image: {
            height: 640,
            id: "/title/tt1368830/images/rm2622513152",
            url:
              "https://m.media-amazon.com/images/M/MV5BZGExYTJlYjctZDE1Ny00MmU0LTkwNTctMGEyODU0YjU5ODJiXkEyXkFqcGdeQXVyOTA0NzE2MzA@._V1_.jpg",
            width: 640
          },
          status: "released",
          title: "Episode #17.6",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 6,
          releaseDate: "2009-02-09",
          seasonNumber: 17
        }
      ],
      seriesStartYear: 1993
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1341220/",
      image: {
        height: 648,
        id: "/title/tt1341220/images/rm3181294593",
        url:
          "https://m.media-amazon.com/images/M/MV5BZmZjNTliZjgtNjgwYy00MWIwLTlhOGItZTQ3ODk3MzhiN2NhXkEyXkFqcGdeQXVyMTQyNjAyODA@._V1_.jpg",
        width: 1153
      },
      status: "released",
      title: "Marlice - Eine Vision für Afrika",
      titleType: "tvMovie",
      year: 2008
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1833076/",
      image: {
        height: 800,
        id: "/title/tt1833076/images/rm3046584320",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGJkMTUyYTctNGQwNS00MWJiLTgyYWItMTNjZDI3NTNiY2ZhXkEyXkFqcGdeQXVyNDkwMzY5NjQ@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "Secrets of Body Language",
      titleType: "tvMovie",
      year: 2008
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Louis"],
      roles: [
        {
          character: "Louis",
          characterId: "/character/ch0005253/"
        }
      ],
      id: "/title/tt1296884/",
      image: {
        height: 487,
        id: "/title/tt1296884/images/rm1170242560",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmNkODVhMWYtZGY2Ni00ZTZmLWI5NjQtMmQ3MmVlZjkzOTgyXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg",
        width: 338
      },
      status: "released",
      title: "Premio Donostia a Antonio Banderas",
      titleType: "tvSpecial",
      year: 2008
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0373506",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2008,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2008,
      id: "/title/tt0373506/",
      image: {
        height: 583,
        id: "/title/tt0373506/images/rm3571521280",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjU5NWJlZDItZGQ2OS00ZWU0LWE1MzktM2MxMWZmZjM0MzU3XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Corazón, corazón",
      titleType: "tvSeries",
      year: 1993,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1258308/",
          status: "released",
          title: "Episode dated 6 July 2008",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-07-06"
        }
      ],
      seriesEndYear: 2011,
      seriesStartYear: 1993
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0284767",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2008,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2008,
      id: "/title/tt0284767/",
      image: {
        height: 1440,
        id: "/title/tt0284767/images/rm3391197697",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTIwMDY2MzEtZmMyMS00OTNiLTg0NmItZDBlNWYxYWU2ZjA4XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "The Factor",
      titleType: "tvSeries",
      year: 1996,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1201441/",
          status: "released",
          title: "Episode dated 11 March 2008",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-03-11"
        }
      ],
      seriesEndYear: 2017,
      seriesStartYear: 1996
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1401661/",
      status: "released",
      title: "Hillary! Uncensored: Banned by the Media",
      titleType: "video",
      year: 2008
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Self", "Richard"],
      roles: [
        {
          character: "Self"
        },
        {
          character: "Richard",
          characterId: "/character/ch0006351/"
        }
      ],
      id: "/title/tt1183149/",
      image: {
        height: 394,
        id: "/title/tt1183149/images/rm3454001665",
        url:
          "https://m.media-amazon.com/images/M/MV5BODFjMDUyYmQtMWE3Zi00YTExLWE1Y2MtMGNkNjZlODI5YzA2XkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 273
      },
      status: "released",
      title: "Oscar, que empiece el espectáculo",
      titleType: "tvMovie",
      year: 2008
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0092322",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 3,
      roles: [
        {
          character: "Self",
          episodeCount: 3
        }
      ],
      startYear: 2000,
      id: "/title/tt0092322/",
      image: {
        height: 475,
        id: "/title/tt0092322/images/rm3413943297",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTBlZTVmNjgtZTY1Mi00NDc4LWJhMTUtMmNiNjA1YTEyMTMwXkEyXkFqcGdeQXVyMTE1MTYxMzk2._V1_.jpg",
        width: 259
      },
      status: "released",
      title: "Biography",
      titleType: "tvSeries",
      year: 1987,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1509878/",
          status: "released",
          title: "Kristy McNichol",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0394388/",
          status: "released",
          title: "James Dean: Outside the Lines",
          titleType: "tvEpisode",
          year: 2002,
          releaseDate: "2002-10-14"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0798658/",
          status: "released",
          title: "Robert Redford: Hollywood Outlaw",
          titleType: "tvEpisode",
          year: 2000,
          episodeNumber: 32,
          releaseDate: "2000-10-29",
          seasonNumber: 12
        }
      ],
      seriesStartYear: 1987
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0445135",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt0445135/",
      image: {
        height: 680,
        id: "/title/tt0445135/images/rm3455588096",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWU4MTY1Y2EtZjNjZS00YTA1LTkyMTktNGIyZTg5OWQ1YzMyXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Quelli che... il calcio",
      titleType: "tvSeries",
      year: 1993,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1146789/",
          status: "released",
          title: "Episode #15.13",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 13,
          releaseDate: "2007-12-02",
          seasonNumber: 15
        }
      ],
      seriesStartYear: 1993
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1990302/",
      image: {
        height: 500,
        id: "/title/tt1990302/images/rm3790797568",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjIxODkyMDYxNV5BMl5BanBnXkFtZTgwMTk3NzAxMzE@._V1_.jpg",
        width: 354
      },
      status: "released",
      title: "Paris Hilton Inc.: The Selling of Celebrity",
      titleType: "tvMovie",
      year: 2007
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0391687",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2007,
      id: "/title/tt0391687/",
      image: {
        height: 294,
        id: "/title/tt0391687/images/rm749565184",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjRlYmE3NGYtMmM4YS00YzdhLThkZWItMDFjZGM2ZjU1YzMzXkEyXkFqcGdeQXVyMzA3NzI4MzQ@._V1_.jpg",
        width: 524
      },
      status: "released",
      title: "Shownieuws",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1109886/",
          status: "released",
          title: "Episode #5.109",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 109,
          releaseDate: "2007-09-21",
          seasonNumber: 5
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1091975/",
          status: "released",
          title: "Episode #5.63",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 63,
          releaseDate: "2007-08-22",
          seasonNumber: 5
        }
      ],
      seriesStartYear: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0458254",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt0458254/",
      image: {
        height: 3000,
        id: "/title/tt0458254/images/rm1003094528",
        url:
          "https://m.media-amazon.com/images/M/MV5BOGI1MTA4MGYtOThjMS00YzdjLTg3ZDItNjkwZTUzMzE4ZjlhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "The Colbert Report",
      titleType: "tvSeries",
      year: 2005,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1047729/",
          status: "released",
          title: "Ron Paul",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 79,
          releaseDate: "2007-06-13",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 2014,
      seriesStartYear: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3594262",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt3594262/",
      image: {
        height: 720,
        id: "/title/tt3594262/images/rm3750716160",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDI3ODY1ODAtZWFkZS00YTM3LTg3Y2UtYWRlMWZkYjRhODE5XkEyXkFqcGdeQXVyNjI3NTEyOA@@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "Fernsehkritik TV",
      titleType: "tvSeries",
      year: 2007,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4076612/",
          status: "released",
          title: "Folge 2",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 2,
          releaseDate: "2007-06-05",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2007
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Richard"],
      roles: [
        {
          character: "Richard",
          characterId: "/character/ch0006351/"
        }
      ],
      id: "/title/tt1018857/",
      status: "released",
      title: "51 premis Sant Jordi de cinematografia",
      titleType: "tvSpecial",
      year: 2007
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Richard"],
      roles: [
        {
          character: "Richard",
          characterId: "/character/ch0006351/"
        }
      ],
      id: "/title/tt0833875/",
      image: {
        height: 300,
        id: "/title/tt0833875/images/rm3140719104",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTY3ODA4ODE2MV5BMl5BanBnXkFtZTcwMzk2NTE0MQ@@._V1_.jpg",
        width: 203
      },
      status: "released",
      title: "The 79th Annual Academy Awards",
      titleType: "tvSpecial",
      year: 2007
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0969315/",
      status: "released",
      title: "Penélope, camino a los Oscar",
      titleType: "tvMovie",
      year: 2007
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0341708",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt0341708/",
      image: {
        height: 715,
        id: "/title/tt0341708/images/rm4069529088",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzIwYzdmOTQtYWQxOS00YjY2LWE0ZjUtOTViOGQxM2FmZTNjXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg",
        width: 500
      },
      status: "released",
      title: "Canada A.M.",
      titleType: "tvSeries",
      year: 1972,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0943581/",
          status: "released",
          title: "Episode dated 16 January 2007",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-01-16"
        }
      ],
      seriesEndYear: 2016,
      seriesStartYear: 1972
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0497150",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt0497150/",
      image: {
        height: 971,
        id: "/title/tt0497150/images/rm1437270016",
        url:
          "https://m.media-amazon.com/images/M/MV5BMGI5ZDY4ODYtZTZlYi00ZjdiLTkyN2QtZTBkY2VmMzI5YWJhXkEyXkFqcGdeQXVyMzM0NTc2MTE@._V1_.jpg",
        width: 750
      },
      status: "released",
      title: "Amor mío",
      titleType: "tvSeries",
      year: 2006,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0942921/",
          status: "released",
          title: "Lo barato sale caro",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 102,
          releaseDate: "2007-01-09",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2006
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2297922",
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2297922/",
      status: "released",
      title: "Kig Ind TV",
      titleType: "tvSeries",
      year: 2007,
      seriesStartYear: 2007
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2468168/",
      status: "released",
      title: "The Fame Review 2006",
      titleType: "tvMovie",
      year: 2006
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0976016",
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self - Accused"],
      roles: [
        {
          character: "Self - Accused"
        }
      ],
      id: "/title/tt0976016/",
      status: "released",
      title: "Headlines on Trial",
      titleType: "tvSeries",
      year: 2006,
      seriesStartYear: 2006
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0256555",
      category: "archive_footage",
      characters: ["Tyler Durden"],
      endYear: 2006,
      episodeCount: 1,
      roles: [
        {
          character: "Tyler Durden",
          characterId: "/character/ch0001854/",
          episodeCount: 1
        }
      ],
      startYear: 2006,
      id: "/title/tt0256555/",
      image: {
        height: 390,
        id: "/title/tt0256555/images/rm553195264",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTA3YmE4MjEtOWUyNi00OTZmLWFhNjItY2MwZGNmYmFlYjRkXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Headline News",
      titleType: "tvSeries",
      year: 1982,
      episodes: [
        {
          attr: ["uncredited", "archiveFootage"],
          category: "archive_footage",
          characters: ["Tyler Durden"],
          roles: [
            {
              character: "Tyler Durden",
              characterId: "/character/ch0001854/"
            }
          ],
          id: "/title/tt0831164/",
          status: "released",
          title: "Episode dated 13 July 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-07-13"
        }
      ],
      seriesStartYear: 1982
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0207934",
      category: "archive_footage",
      characters: ["John Smith"],
      endYear: 2006,
      episodeCount: 2,
      roles: [
        {
          character: "John Smith",
          episodeCount: 2
        }
      ],
      startYear: 2005,
      id: "/title/tt0207934/",
      image: {
        height: 1440,
        id: "/title/tt0207934/images/rm4080729345",
        url:
          "https://m.media-amazon.com/images/M/MV5BYWZjZDQxOTgtYTg3YS00ZTVjLWI4OWMtMzk4YzNjMmRjNjRiXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Getaway",
      titleType: "tvSeries",
      year: 1992,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["John Smith"],
          roles: [
            {
              character: "John Smith"
            }
          ],
          id: "/title/tt0950913/",
          status: "released",
          title: "Golden Getaway: The Platinum List",
          titleType: "tvEpisode",
          year: 2006,
          episodeNumber: 19,
          releaseDate: "2006-06-29",
          seasonNumber: 15
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["John Smith"],
          roles: [
            {
              character: "John Smith"
            }
          ],
          id: "/title/tt0587696/",
          status: "released",
          title: "Found",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 20,
          releaseDate: "2005-06-23",
          seasonNumber: 14
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 1992
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Richard"],
      roles: [
        {
          character: "Richard"
        }
      ],
      id: "/title/tt0812224/",
      image: {
        height: 710,
        id: "/title/tt0812224/images/rm1337726720",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTI0ODM5OTctNGYwNi00OWFhLWI0MjEtNWMwM2JkMTc3N2FiXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Cannes 2006: Crónica de Carlos Boyero",
      titleType: "tvMovie",
      year: 2006
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Rusty Ryan"],
      roles: [
        {
          character: "Rusty Ryan",
          characterId: "/character/ch0002236/"
        }
      ],
      id: "/title/tt0805497/",
      image: {
        height: 500,
        id: "/title/tt0805497/images/rm3211563520",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTcyMDAyOTMxNV5BMl5BanBnXkFtZTcwMzgwMzYzMQ@@._V1_.jpg",
        width: 325
      },
      status: "released",
      title: "Boffo! Tinseltown's Bombs and Blockbusters",
      titleType: "movie",
      year: 2006
    },
    {
      attr: ["archiveFootage", "archiveSound"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0818577/",
      image: {
        height: 500,
        id: "/title/tt0818577/images/rm377258240",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTM3OTcxNTMzMF5BMl5BanBnXkFtZTcwMDgyMzc4Mw@@._V1_.jpg",
        width: 347
      },
      status: "released",
      title: "Saturday Night Live: The Best of Saturday TV Funhouse",
      titleType: "tvSpecial",
      year: 2006
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0463397",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2006,
      episodeCount: 8,
      roles: [
        {
          character: "Self",
          episodeCount: 8
        }
      ],
      startYear: 2005,
      id: "/title/tt0463397/",
      image: {
        height: 674,
        id: "/title/tt0463397/images/rm3420526336",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTIzYmZkYjYtN2QzZS00YzQyLWFmMGMtY2ZhZjZlNTNlYTRiXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Corazón de...",
      titleType: "tvSeries",
      year: 1997,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0780700/",
          status: "released",
          title: "Episode dated 20 March 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-03-20"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0780699/",
          status: "released",
          title: "Episode dated 17 March 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-03-17"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0766605/",
          status: "released",
          title: "Episode dated 25 January 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-01-25"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0545994/",
          status: "released",
          title: "Episode dated 19 January 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-01-19"
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0545990/",
          status: "released",
          title: "Episode dated 12 January 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-01-12"
        }
      ],
      seriesStartYear: 1997
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0492561/",
      image: {
        height: 352,
        id: "/title/tt0492561/images/rm2889071617",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTk4ZDdkNDItZDFiNy00NzM0LThkNTYtNTc4NzNmYzkyMDgzXkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_.jpg",
        width: 626
      },
      status: "released",
      title: "The Big Fat Quiz of the Year",
      titleType: "tvSpecial",
      year: 2005
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Self - Accused"],
      roles: [
        {
          character: "Self - Accused"
        }
      ],
      id: "/title/tt0760500/",
      status: "released",
      title: "Stars on Trial",
      titleType: "tvSpecial",
      year: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0222560",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2005,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2005,
      id: "/title/tt0222560/",
      image: {
        height: 788,
        id: "/title/tt0222560/images/rm3593607936",
        url:
          "https://m.media-amazon.com/images/M/MV5BM2UwMjkzOTEtNTg5ZC00ZWViLThiZjktMjU2YWFhZGE5ZTUyXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg",
        width: 1400
      },
      status: "released",
      title: "GMTV",
      titleType: "tvSeries",
      year: 1993,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt13544714/",
          status: "released",
          title: "Episode dated 6 December 2005",
          titleType: "tvEpisode",
          year: 2005,
          releaseDate: "2005-12-06"
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 1993
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self - Place #4"],
      roles: [
        {
          character: "Self - Place #4"
        }
      ],
      id: "/title/tt0490768/",
      image: {
        height: 1080,
        id: "/title/tt0490768/images/rm2105345536",
        url:
          "https://m.media-amazon.com/images/M/MV5BODIyM2EyZjAtNzcwZS00M2Q5LWEwMWQtM2U0ZWY2MDE0MjkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM0NTc2MTE@._V1_.jpg",
        width: 750
      },
      status: "released",
      title: "101 Sexiest Celebrity Bodies",
      titleType: "tvMovie",
      year: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0090493",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2005,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2005,
      id: "/title/tt0090493/",
      image: {
        height: 500,
        id: "/title/tt0090493/images/rm2386306816",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDA0ZDI5MDctMmMxNi00NmVhLTlmN2MtNzIyMzM1YTc3YjBiXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
        width: 372
      },
      status: "released",
      title: "The Oprah Winfrey Show",
      titleType: "tvSeries",
      year: 1986,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0667127/",
          status: "released",
          title: "Episode dated 20 September 2005",
          titleType: "tvEpisode",
          year: 2005,
          releaseDate: "2005-09-20"
        }
      ],
      seriesEndYear: 2011,
      seriesStartYear: 1986
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt11719236",
      category: "archive_footage",
      endYear: 2005,
      episodeCount: 1,
      startYear: 2005,
      id: "/title/tt11719236/",
      image: {
        height: 445,
        id: "/title/tt11719236/images/rm2348921857",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDU2OTM2YzctYTM0Yy00MWMwLWIxYTQtOGEyMmVlZTY2OWQyXkEyXkFqcGdeQXVyMTIxMDUyOTI@._V1_.jpg",
        width: 314
      },
      status: "released",
      title: "Nudes in the News",
      titleType: "tvSeries",
      year: 2002,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          id: "/title/tt12138566/",
          status: "released",
          title: "Show #116",
          titleType: "tvEpisode",
          year: 2005,
          releaseDate: "2005-08-27"
        }
      ],
      seriesStartYear: 2002
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0470644",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2005,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2005,
      id: "/title/tt0470644/",
      image: {
        height: 385,
        id: "/title/tt0470644/images/rm3166731520",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmUxNWU2Y2YtNzgxMy00MDUxLWFiYWUtODdkNDY2NDA2YTJkXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Cinema mil",
      titleType: "tvSeries",
      year: 2005,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0541452/",
          status: "released",
          title: "Episode #1.2",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 2,
          releaseDate: "2005-07-23",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2005,
      seriesStartYear: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0403738",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2004,
      episodeCount: 6,
      roles: [
        {
          character: "Self",
          episodeCount: 6
        }
      ],
      startYear: 2003,
      id: "/title/tt0403738/",
      image: {
        height: 2743,
        id: "/title/tt0403738/images/rm3427339264",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDIyZDY4Y2ItYWQ0OS00NTRjLWI2NzAtMGY4MDBhYWU1ZWYxXkEyXkFqcGdeQXVyNjU4OTk5MzQ@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "Celebrities Uncensored",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0537896/",
          status: "released",
          title: "Episode #2.6",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 6,
          releaseDate: "2004-03-24",
          seasonNumber: 2
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0537894/",
          status: "released",
          title: "Episode #2.4",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 4,
          releaseDate: "2004-03-03",
          seasonNumber: 2
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0537892/",
          status: "released",
          title: "Episode #2.2",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 2,
          releaseDate: "2004-02-18",
          seasonNumber: 2
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0537889/",
          status: "released",
          title: "Episode #1.8",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 8,
          releaseDate: "2003-08-27",
          seasonNumber: 1
        },
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0537887/",
          status: "released",
          title: "Episode #1.6",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 6,
          releaseDate: "2003-07-30",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2004,
      seriesStartYear: 2003
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self - #53: Red Carpet Disasters: Corn Row Hair"],
      roles: [
        {
          character: "Self - #53: Red Carpet Disasters: Corn Row Hair"
        }
      ],
      id: "/title/tt0402720/",
      image: {
        height: 900,
        id: "/title/tt0402720/images/rm172180736",
        url:
          "https://m.media-amazon.com/images/M/MV5BM2I2MWE5YWMtNTBmZC00NGZhLWI3YjMtYWY2YmYwYjQxZDczXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 600
      },
      status: "released",
      title: "101 Biggest Celebrity Oops",
      titleType: "tvSpecial",
      year: 2004
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Chris"],
      roles: [
        {
          character: "Chris"
        }
      ],
      id: "/title/tt0458323/",
      image: {
        height: 273,
        id: "/title/tt0458323/images/rm3304862977",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTk2OTVkMWEtZDQ0YS00YTU2LWJmYjktODM4NjBjMjhmMTc2XkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 450
      },
      status: "released",
      title: "The Another World Reunion",
      titleType: "tvSpecial",
      year: 2003
    },
    {
      attr: ["uncredited", "archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0326145/",
      status: "released",
      title: "Shirtless: Hollywood's Sexiest Men",
      titleType: "tvMovie",
      year: 2002
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Mickey O'Neil (Snatch)"],
      roles: [
        {
          character: "Mickey O'Neil (Snatch)",
          characterId: "/character/ch0003626/"
        }
      ],
      id: "/title/tt0324355/",
      image: {
        height: 475,
        id: "/title/tt0324355/images/rm615095296",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjE0OTcxNTg3MV5BMl5BanBnXkFtZTcwMDA1NzkxMQ@@._V1_.jpg",
        width: 337
      },
      status: "released",
      title: "Ultimate Fights from the Movies",
      titleType: "video",
      year: 2002
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0463399",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2002,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2002,
      id: "/title/tt0463399/",
      image: {
        height: 1440,
        id: "/title/tt0463399/images/rm3690958081",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzZiNmZiMjItYjQ2ZS00MDlhLWJkYjAtNGVkYTkwOTI5MDdiXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "E! True Hollywood Story",
      titleType: "tvSeries",
      year: 1996,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0471669/",
          status: "released",
          title: "Winona Ryder",
          titleType: "tvEpisode",
          year: 2002,
          episodeNumber: 20,
          releaseDate: "2002-04-07",
          seasonNumber: 6
        }
      ],
      seriesStartYear: 1996
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self", "Louis"],
      roles: [
        {
          character: "Self"
        },
        {
          character: "Louis"
        }
      ],
      id: "/title/tt4624162/",
      status: "released",
      title: "Interview with the Vampire: In the Shadow of the Vampire",
      titleType: "video",
      year: 2001
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0783346",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 2000,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2000,
      id: "/title/tt0783346/",
      image: {
        height: 375,
        id: "/title/tt0783346/images/rm1715817984",
        url:
          "https://m.media-amazon.com/images/M/MV5BNThiNmYxOTEtMWYzMi00ZmI3LTg0MzUtOGNlZTdiMDQ2ODlhXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
        width: 500
      },
      status: "released",
      title: "Hollywood Couples",
      titleType: "tvSeries",
      year: 2000,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt8264260/",
          status: "released",
          title: "Brad Pitt & Jennifer Aniston",
          titleType: "tvEpisode",
          year: 2000,
          episodeNumber: 4,
          releaseDate: "2000",
          seasonNumber: 4
        }
      ],
      seriesStartYear: 2000
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0409688/",
      status: "released",
      title:
        "American Arts & Culture Presents John Horatio Malkovich 'Dance of Despair & Disillusionment'",
      titleType: "video",
      year: 2000
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0238807",
      category: "archive_footage",
      characters: ["Mills"],
      endYear: 1999,
      episodeCount: 1,
      roles: [
        {
          character: "Mills",
          characterId: "/character/ch0002284/",
          episodeCount: 1
        }
      ],
      startYear: 1999,
      id: "/title/tt0238807/",
      image: {
        height: 475,
        id: "/title/tt0238807/images/rm2607455232",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTkwOTU5NjQ3Ml5BMl5BanBnXkFtZTcwNTA4ODEyMQ@@._V1_.jpg",
        width: 335
      },
      status: "released",
      title: "Split Screen",
      titleType: "tvSeries",
      year: 1997,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Mills"],
          roles: [
            {
              character: "Mills",
              characterId: "/character/ch0002284/"
            }
          ],
          id: "/title/tt1066131/",
          status: "released",
          title: "Waiting for Star Wars",
          titleType: "tvEpisode",
          year: 1999,
          episodeNumber: 9,
          releaseDate: "1999-05-31",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 2000,
      seriesStartYear: 1997
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0090523",
      category: "archive_footage",
      characters: ["Self"],
      endYear: 1996,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 1996,
      id: "/title/tt0090523/",
      image: {
        height: 1000,
        id: "/title/tt0090523/images/rm189346817",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjM4NDE2MmItZjk5Ni00NjI1LWFhMTYtMDkxMDdhZDQ0NDczXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
        width: 989
      },
      status: "released",
      title: "Siskel & Ebert",
      titleType: "tvSeries",
      year: 1986,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt6154544/",
          image: {
            height: 240,
            id: "/title/tt6154544/images/rm3791802112",
            url:
              "https://m.media-amazon.com/images/M/MV5BODFhMzNlMjEtMjZhYi00YzBmLWE0MzYtODJlMmM0NzJjMDAxXkEyXkFqcGdeQXVyMTI4ODc2NDY@._V1_.jpg",
            width: 352
          },
          status: "released",
          title:
            "The Pallbearer/Barb Wire/Last Dance/The Great White Hype/The Craft",
          titleType: "tvEpisode",
          year: 1996,
          episodeNumber: 35,
          releaseDate: "1996-05-04",
          seasonNumber: 10
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 1986
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt8764282/",
      image: {
        height: 720,
        id: "/title/tt8764282/images/rm4252845312",
        url:
          "https://m.media-amazon.com/images/M/MV5BN2Y3MWZkNGMtODgzZi00MDg2LWIzODctMjhiYWZmMzAxN2MxXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 906
      },
      status: "released",
      title: "Celebrity First Loves",
      titleType: "tvMovie",
      year: 1995
    },
    {
      attr: ["archiveFootage"],
      category: "archive_footage",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0180300/",
      title: "Weddings of a Lifetime",
      titleType: "tvSpecial",
      year: 1995
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0296360",
      category: "archive_footage",
      characters: ["Early Grayce"],
      endYear: 1995,
      episodeCount: 1,
      roles: [
        {
          character: "Early Grayce",
          characterId: "/character/ch0014473/",
          episodeCount: 1
        }
      ],
      startYear: 1995,
      id: "/title/tt0296360/",
      image: {
        height: 1147,
        id: "/title/tt0296360/images/rm3976179713",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWQ4MmI1OTMtNDllYi00NDlmLWI5OTUtZGJiNjhlYjhhNjNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 780
      },
      status: "released",
      title: "Joe Bob's Drive-In Theater",
      titleType: "tvSeries",
      year: 1987,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Early Grayce"],
          roles: [
            {
              character: "Early Grayce",
              characterId: "/character/ch0014473/"
            }
          ],
          id: "/title/tt1113251/",
          status: "released",
          title: "Brain-Damage Night",
          titleType: "tvEpisode",
          year: 1995,
          releaseDate: "1995-11-11"
        }
      ],
      seriesEndYear: 1995,
      seriesStartYear: 1987
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0385427",
      category: "archive_footage",
      characters: ["Self"],
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      id: "/title/tt0385427/",
      image: {
        height: 2400,
        id: "/title/tt0385427/images/rm3416210432",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTMwN2MwYzgtMDIxOS00ZTcwLTk4NGMtMTljZmI2Yzc3YjNlXkEyXkFqcGdeQXVyMTE2MDY5MDY@._V1_.jpg",
        width: 3300
      },
      status: "released",
      title: "It's Good to Be...",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          attr: ["archiveFootage"],
          category: "archive_footage",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0612866/",
          title: "It's Good to Be Brad and Jen",
          titleType: "tvEpisode",
          episodeNumber: 1,
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2003
    },
    {
      category: "actor",
      id: "/title/tt5485494/",
      status: "script",
      title: "He Wanted the Moon",
      titleType: "movie"
    },
    {
      category: "actor",
      characters: ["Sonny Hayes"],
      roles: [
        {
          character: "Sonny Hayes"
        }
      ],
      id: "/title/tt16311594/",
      status: "pre production",
      title: "Untitled Formula One Racing Movie",
      titleType: "movie"
    },
    {
      category: "actor",
      id: "/title/tt14257582/",
      image: {
        height: 737,
        id: "/title/tt14257582/images/rm3638501889",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmQzMDE0NTAtMDc4OC00ZjVkLThiN2MtMGJiYjI2NTgyYWJjXkEyXkFqcGdeQXVyMTU5Mjk4MjUw._V1_.jpg",
        width: 1119
      },
      status: "filming",
      title: "Wolfs",
      titleType: "movie"
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt8531222",
      category: "actor",
      characters: ["Brad Pitt"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Brad Pitt",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt8531222/",
      image: {
        height: 1350,
        id: "/title/tt8531222/images/rm2923113217",
        url:
          "https://m.media-amazon.com/images/M/MV5BY2Y4ZjNhZDctZjA3YS00YjVjLWIzNjktMjdlOTZkYzMyNjYwXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Dave",
      titleType: "tvSeries",
      year: 2020,
      episodes: [
        {
          billing: 7,
          category: "actor",
          characters: ["Brad Pitt"],
          roles: [
            {
              character: "Brad Pitt"
            }
          ],
          id: "/title/tt27304947/",
          image: {
            height: 1472,
            id: "/title/tt27304947/images/rm1904484353",
            url:
              "https://m.media-amazon.com/images/M/MV5BYTcwNWFlNzgtNWM2OC00YTk0LTkxZjItZjJmYjk1ZTllNTU1XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
            width: 2618
          },
          status: "released",
          title: "Looking for Love",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 10,
          releaseDate: "2023-05-31",
          seasonNumber: 3
        }
      ],
      seriesStartYear: 2020
    },
    {
      billing: 16,
      category: "actor",
      characters: ["Jack Conrad"],
      roles: [
        {
          character: "Jack Conrad"
        }
      ],
      id: "/title/tt10640346/",
      image: {
        height: 3000,
        id: "/title/tt10640346/images/rm865155841",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        width: 2025
      },
      status: "released",
      title: "Babylon",
      titleType: "movie",
      year: 2022
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Ladybug"],
      roles: [
        {
          character: "Ladybug"
        }
      ],
      id: "/title/tt12593682/",
      image: {
        height: 1500,
        id: "/title/tt12593682/images/rm36704513",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        width: 1012
      },
      status: "released",
      title: "Bullet Train",
      titleType: "movie",
      year: 2022
    },
    {
      billing: 5,
      category: "actor",
      characters: ["Jack Trainer"],
      roles: [
        {
          character: "Jack Trainer"
        }
      ],
      id: "/title/tt13320622/",
      image: {
        height: 3000,
        id: "/title/tt13320622/images/rm3056854785",
        url:
          "https://m.media-amazon.com/images/M/MV5BMmIwYzFhODAtY2I1YS00ZDdmLTkyYWQtZjI5NDIwMDc2MjEyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        width: 2024
      },
      status: "released",
      title: "The Lost City",
      titleType: "movie",
      year: 2022
    },
    {
      category: "actor",
      characters: ["Brad Hamilton"],
      roles: [
        {
          character: "Brad Hamilton"
        }
      ],
      id: "/title/tt14067406/",
      image: {
        height: 1080,
        id: "/title/tt14067406/images/rm1986848001",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjQ4ZDA3MWEtMTc1Ni00YTc1LTliMGQtYTBjMmUyMTM4NzMwXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Fast Times at Ridgemont High Table Read",
      titleType: "video",
      year: 2020
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Roy McBride"],
      roles: [
        {
          character: "Roy McBride",
          characterId: "/character/ch0580873/"
        }
      ],
      id: "/title/tt2935510/",
      image: {
        height: 1000,
        id: "/title/tt2935510/images/rm871405057",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZTBmMi00MGQ5LWFjN2MtOGEyZTliNGY1MzFiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        width: 675
      },
      status: "released",
      title: "Ad Astra",
      titleType: "movie",
      year: 2019
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Cliff Booth"],
      roles: [
        {
          character: "Cliff Booth"
        }
      ],
      id: "/title/tt7131622/",
      image: {
        height: 9000,
        id: "/title/tt7131622/images/rm1947703297",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
        width: 6072
      },
      status: "released",
      title: "Once Upon a Time in Hollywood",
      titleType: "movie",
      year: 2019
    },
    {
      billing: 22,
      category: "actor",
      characters: ["Vanisher"],
      roles: [
        {
          character: "Vanisher"
        }
      ],
      id: "/title/tt5463162/",
      image: {
        height: 1607,
        id: "/title/tt5463162/images/rm1218472448",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDkzNmRhNTMtZDI4NC00Zjg1LTgxM2QtMjYxZDQ3OWJlMDRlXkEyXkFqcGdeQXVyNTU5MjkzMTU@._V1_.jpg",
        width: 1073
      },
      status: "released",
      title: "Deadpool 2",
      titleType: "movie",
      year: 2018
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Glen McMahon"],
      roles: [
        {
          character: "Glen McMahon"
        }
      ],
      id: "/title/tt4758646/",
      image: {
        height: 1000,
        id: "/title/tt4758646/images/rm3789368064",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTcyMzgwNDE1M15BMl5BanBnXkFtZTgwMDAzMDM0MjI@._V1_.jpg",
        width: 675
      },
      status: "released",
      title: "War Machine",
      titleType: "movie",
      year: 2017
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Max Vatan"],
      roles: [
        {
          character: "Max Vatan",
          characterId: "/character/ch0536425/"
        }
      ],
      id: "/title/tt3640424/",
      image: {
        height: 1377,
        id: "/title/tt3640424/images/rm1950023680",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWEyMzg4ZWUtYmZhMC00Yjk2LWEyYjktODVmN2M3YTA2ZmNjXkEyXkFqcGdeQXVyNjQ2Mjg3OTI@._V1_.jpg",
        width: 883
      },
      status: "released",
      title: "Allied",
      titleType: "movie",
      year: 2016
    },
    {
      attr: ["voice"],
      billing: 1,
      category: "actor",
      characters: ["Narrator"],
      roles: [
        {
          character: "Narrator"
        }
      ],
      id: "/title/tt6024606/",
      image: {
        height: 1778,
        id: "/title/tt6024606/images/rm2533496576",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjBiZjg0MjAtODgzNy00ZTZjLTkzMjctYmJmODhmNjY3NmFlXkEyXkFqcGdeQXVyNTkzMDA2ODI@._V1_.jpg",
        width: 1200
      },
      status: "released",
      title: "Voyage of Time",
      titleType: "movie",
      year: 2016
    },
    {
      billing: 41,
      category: "actor",
      characters: ["Ben Rickert"],
      roles: [
        {
          character: "Ben Rickert",
          characterId: "/character/ch0524487/"
        }
      ],
      id: "/title/tt1596363/",
      image: {
        height: 1171,
        id: "/title/tt1596363/images/rm3249474304",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        width: 750
      },
      status: "released",
      title: "The Big Short",
      titleType: "movie",
      year: 2015
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Roland"],
      roles: [
        {
          character: "Roland",
          characterId: "/character/ch0500045/"
        }
      ],
      id: "/title/tt3707106/",
      image: {
        height: 1500,
        id: "/title/tt3707106/images/rm3539987968",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTUyNDU2MDMxM15BMl5BanBnXkFtZTgwMzAzMTk1NjE@._V1_.jpg",
        width: 947
      },
      status: "released",
      title: "By the Sea",
      titleType: "movie",
      year: 2015
    },
    {
      billing: 3,
      category: "actor",
      characters: ["Brad Pitt"],
      roles: [
        {
          character: "Brad Pitt",
          characterId: "/character/ch0063557/"
        }
      ],
      id: "/title/tt4016250/",
      image: {
        height: 2736,
        id: "/title/tt4016250/images/rm2313628160",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjZlOTAzNTYtMTA5YS00NjU0LThiZTEtYTBjYmZkMGE1NDRlXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_.jpg",
        width: 1944
      },
      status: "released",
      title: "The Audition",
      titleType: "short",
      year: 2015
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Don 'Wardaddy' Collier"],
      roles: [
        {
          character: "Don 'Wardaddy' Collier",
          characterId: "/character/ch0401212/"
        }
      ],
      id: "/title/tt2713180/",
      image: {
        height: 2048,
        id: "/title/tt2713180/images/rm2847393024",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg",
        width: 1382
      },
      status: "released",
      title: "Fury",
      titleType: "movie",
      year: 2014
    },
    {
      billing: 11,
      category: "actor",
      characters: ["Westray"],
      roles: [
        {
          character: "Westray",
          characterId: "/character/ch0302520/"
        }
      ],
      id: "/title/tt2193215/",
      image: {
        height: 2048,
        id: "/title/tt2193215/images/rm781901568",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTc3ODk0MTY0N15BMl5BanBnXkFtZTgwOTU2MTEzMDE@._V1_.jpg",
        width: 1383
      },
      status: "released",
      title: "The Counselor",
      titleType: "movie",
      year: 2013
    },
    {
      billing: 53,
      category: "actor",
      characters: ["Bass"],
      roles: [
        {
          character: "Bass",
          characterId: "/character/ch0391317/"
        }
      ],
      id: "/title/tt2024544/",
      image: {
        height: 755,
        id: "/title/tt2024544/images/rm3711556096",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_.jpg",
        width: 509
      },
      status: "released",
      title: "12 Years a Slave",
      titleType: "movie",
      year: 2013
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Gerry Lane"],
      roles: [
        {
          character: "Gerry Lane",
          characterId: "/character/ch0252035/"
        }
      ],
      id: "/title/tt0816711/",
      image: {
        height: 1280,
        id: "/title/tt0816711/images/rm2831942144",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        width: 832
      },
      status: "released",
      title: "World War Z",
      titleType: "movie",
      year: 2013
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Jackie"],
      roles: [
        {
          character: "Jackie",
          characterId: "/character/ch0356276/"
        }
      ],
      id: "/title/tt1764234/",
      image: {
        height: 833,
        id: "/title/tt1764234/images/rm1445898240",
        url:
          "https://m.media-amazon.com/images/M/MV5BODk3MDg2NDk5M15BMl5BanBnXkFtZTcwMjcxMjMzOA@@._V1_.jpg",
        width: 570
      },
      status: "released",
      title: "Killing Them Softly",
      titleType: "movie",
      year: 2012
    },
    {
      category: "actor",
      characters: ["Chief Judge Vaughn R. Walker"],
      roles: [
        {
          character: "Chief Judge Vaughn R. Walker",
          characterId: "/character/ch0295430/"
        }
      ],
      id: "/title/tt2290075/",
      image: {
        height: 415,
        id: "/title/tt2290075/images/rm610605824",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDRlYWM3NjktZDQyMS00NTI1LWJkNGUtMGIwMjc3Y2YzNDJhXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_.jpg",
        width: 594
      },
      status: "released",
      title: "8",
      titleType: "tvMovie",
      year: 2012
    },
    {
      attr: ["voice"],
      billing: 16,
      category: "actor",
      characters: ["Will the Krill"],
      roles: [
        {
          character: "Will the Krill",
          characterId: "/character/ch0266878/"
        }
      ],
      id: "/title/tt1402488/",
      image: {
        height: 568,
        id: "/title/tt1402488/images/rm1448787712",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTg1MzU2Nzg2OV5BMl5BanBnXkFtZTcwNzE3MzAxNg@@._V1_.jpg",
        width: 384
      },
      status: "released",
      title: "Happy Feet Two",
      titleType: "movie",
      year: 2011
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Billy Beane"],
      roles: [
        {
          character: "Billy Beane",
          characterId: "/character/ch0134007/"
        }
      ],
      id: "/title/tt1210166/",
      image: {
        height: 2048,
        id: "/title/tt1210166/images/rm330480640",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_.jpg",
        width: 1383
      },
      status: "released",
      title: "Moneyball",
      titleType: "movie",
      year: 2011
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Mr. O'Brien"],
      roles: [
        {
          character: "Mr. O'Brien",
          characterId: "/character/ch0158518/"
        }
      ],
      id: "/title/tt0478304/",
      image: {
        height: 2048,
        id: "/title/tt0478304/images/rm4192437504",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_.jpg",
        width: 1394
      },
      status: "released",
      title: "The Tree of Life",
      titleType: "movie",
      year: 2011
    },
    {
      attr: ["voice"],
      billing: 2,
      category: "actor",
      characters: ["Metro Man"],
      roles: [
        {
          character: "Metro Man",
          characterId: "/character/ch0158315/"
        }
      ],
      id: "/title/tt1001526/",
      image: {
        height: 2048,
        id: "/title/tt1001526/images/rm2836562176",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_.jpg",
        width: 1311
      },
      status: "released",
      title: "Megamind",
      titleType: "movie",
      year: 2010
    },
    {
      attr: ["voice"],
      category: "actor",
      characters: [
        "Sgt. Bill Mauldin - Editorial Cartoonist Stars and Stripes"
      ],
      roles: [
        {
          character:
            "Sgt. Bill Mauldin - Editorial Cartoonist Stars and Stripes"
        }
      ],
      id: "/title/tt1448751/",
      image: {
        height: 2879,
        id: "/title/tt1448751/images/rm2222031360",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTQwNjU1NjE0NV5BMl5BanBnXkFtZTcwNTg4MzI1Mw@@._V1_.jpg",
        width: 1944
      },
      status: "released",
      title: "Beyond All Boundaries",
      titleType: "short",
      year: 2009
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Lt. Aldo Raine"],
      roles: [
        {
          character: "Lt. Aldo Raine",
          characterId: "/character/ch0106963/"
        }
      ],
      id: "/title/tt0361748/",
      image: {
        height: 3000,
        id: "/title/tt0361748/images/rm3163035648",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
        width: 2025
      },
      status: "released",
      title: "Inglourious Basterds",
      titleType: "movie",
      year: 2009
    },
    {
      category: "actor",
      characters: ["Man on Holiday"],
      roles: [
        {
          character: "Man on Holiday"
        }
      ],
      id: "/title/tt12753128/",
      image: {
        height: 638,
        id: "/title/tt12753128/images/rm4263779073",
        url:
          "https://m.media-amazon.com/images/M/MV5BYWIxODFiODUtZmE2ZS00ZWViLTg5MjQtYjY0ZGEyZjFkMTI1XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
        width: 448
      },
      status: "released",
      title: "SoftBank Commercial",
      titleType: "short",
      year: 2008
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Benjamin Button"],
      roles: [
        {
          character: "Benjamin Button",
          characterId: "/character/ch0032930/"
        }
      ],
      id: "/title/tt0421715/",
      image: {
        height: 1896,
        id: "/title/tt0421715/images/rm60623361",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzI4M2I1MTItYjdiYi00YTZhLTg0NDgtZWIzOGU5ZmM3NWZlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "The Curious Case of Benjamin Button",
      titleType: "movie",
      year: 2008
    },
    {
      billing: 3,
      category: "actor",
      characters: ["Chad Feldheimer"],
      roles: [
        {
          character: "Chad Feldheimer",
          characterId: "/character/ch0078154/"
        }
      ],
      id: "/title/tt0887883/",
      image: {
        height: 1600,
        id: "/title/tt0887883/images/rm4292760064",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzYwMjZhOGEtMGZlZS00Mjg1LTlkMDktYzJiZDU4MzAxZDRiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        width: 1083
      },
      status: "released",
      title: "Burn After Reading",
      titleType: "movie",
      year: 2008
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Jesse James"],
      roles: [
        {
          character: "Jesse James",
          characterId: "/character/ch0000001/"
        }
      ],
      id: "/title/tt0443680/",
      image: {
        height: 2048,
        id: "/title/tt0443680/images/rm1942260992",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_.jpg",
        width: 1386
      },
      status: "released",
      title: "The Assassination of Jesse James by the Coward Robert Ford",
      titleType: "movie",
      year: 2007
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Rusty Ryan"],
      roles: [
        {
          character: "Rusty Ryan",
          characterId: "/character/ch0002236/"
        }
      ],
      id: "/title/tt0496806/",
      image: {
        height: 2048,
        id: "/title/tt0496806/images/rm331713792",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTMyNTc1NzY5MV5BMl5BanBnXkFtZTcwNDM4NTQzMw@@._V1_.jpg",
        width: 1384
      },
      status: "released",
      title: "Ocean's Thirteen",
      titleType: "movie",
      year: 2007
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Richard"],
      roles: [
        {
          character: "Richard",
          characterId: "/character/ch0006351/"
        }
      ],
      id: "/title/tt0449467/",
      image: {
        height: 864,
        id: "/title/tt0449467/images/rm1692291584",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTJkZDljNGYtNjRiNC00ZmY2LTg1NmItYTI1MTllNDQzMWVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        width: 576
      },
      status: "released",
      title: "Babel",
      titleType: "movie",
      year: 2006
    },
    {
      billing: 1,
      category: "actor",
      characters: ["John Smith"],
      roles: [
        {
          character: "John Smith",
          characterId: "/character/ch0005693/"
        }
      ],
      id: "/title/tt0356910/",
      image: {
        height: 2048,
        id: "/title/tt0356910/images/rm2549451776",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_.jpg",
        width: 1390
      },
      status: "released",
      title: "Mr. & Mrs. Smith",
      titleType: "movie",
      year: 2005
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Rusty Ryan"],
      roles: [
        {
          character: "Rusty Ryan",
          characterId: "/character/ch0002236/"
        }
      ],
      id: "/title/tt0349903/",
      image: {
        height: 1184,
        id: "/title/tt0349903/images/rm1423394304",
        url:
          "https://m.media-amazon.com/images/M/MV5BMmJmYzBjNTktMTJjZS00ZGRhLWE1Y2QtOWQxZGU0Y2RmMjkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 800
      },
      status: "released",
      title: "Ocean's Twelve",
      titleType: "movie",
      year: 2004
    },
    {
      billing: 6,
      category: "actor",
      characters: ["Achilles"],
      roles: [
        {
          character: "Achilles",
          characterId: "/character/ch0004244/"
        }
      ],
      id: "/title/tt0332452/",
      image: {
        height: 2048,
        id: "/title/tt0332452/images/rm1089572096",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_.jpg",
        width: 1388
      },
      status: "released",
      title: "Troy",
      titleType: "movie",
      year: 2004
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0361185",
      category: "actor",
      characters: [
        "Albigence Waldo",
        "James K. Polk",
        "George Hewes",
        "John Russell Young",
        "William Lloyd Garrison"
      ],
      endYear: 2003,
      episodeCount: 5,
      roles: [
        {
          character: "Albigence Waldo",
          characterId: "/character/ch0499529/",
          episodeCount: 1
        },
        {
          character: "James K. Polk",
          characterId: "/character/ch0029438/",
          episodeCount: 1
        },
        {
          character: "George Hewes",
          episodeCount: 1
        },
        {
          character: "John Russell Young",
          episodeCount: 1
        },
        {
          character: "William Lloyd Garrison",
          episodeCount: 1
        }
      ],
      startYear: 2003,
      id: "/title/tt0361185/",
      image: {
        height: 298,
        id: "/title/tt0361185/images/rm4131429632",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjA3NDUyNjgxNl5BMl5BanBnXkFtZTcwMjkwNTkyMQ@@._V1_.jpg",
        width: 300
      },
      status: "released",
      title: "Freedom: A History of US",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          category: "actor",
          characters: ["Albigence Waldo"],
          roles: [
            {
              character: "Albigence Waldo",
              characterId: "/character/ch0499529/"
            }
          ],
          id: "/title/tt0901978/",
          status: "released",
          title: "Revolution",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 2,
          releaseDate: "2003",
          seasonNumber: 1
        },
        {
          category: "actor",
          characters: ["James K. Polk"],
          roles: [
            {
              character: "James K. Polk",
              characterId: "/character/ch0029438/"
            }
          ],
          id: "/title/tt0901977/",
          status: "released",
          title: "Liberty for All",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 3,
          releaseDate: "2003",
          seasonNumber: 1
        },
        {
          category: "actor",
          characters: ["George Hewes"],
          roles: [
            {
              character: "George Hewes"
            }
          ],
          id: "/title/tt0901976/",
          status: "released",
          title: "Independence",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 1,
          releaseDate: "2003",
          seasonNumber: 1
        },
        {
          category: "actor",
          characters: ["John Russell Young"],
          roles: [
            {
              character: "John Russell Young"
            }
          ],
          id: "/title/tt0901975/",
          status: "released",
          title: "A War to End Slavery",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 6,
          releaseDate: "2003",
          seasonNumber: 1
        },
        {
          category: "actor",
          characters: ["William Lloyd Garrison"],
          roles: [
            {
              character: "William Lloyd Garrison"
            }
          ],
          id: "/title/tt0901974/",
          status: "released",
          title: "A Fatal Contradiction",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 5,
          releaseDate: "2003",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2003,
      seriesStartYear: 2003
    },
    {
      attr: ["voice"],
      billing: 1,
      category: "actor",
      characters: ["Sinbad"],
      roles: [
        {
          character: "Sinbad",
          characterId: "/character/ch0022470/"
        }
      ],
      id: "/title/tt3419296/",
      image: {
        height: 680,
        id: "/title/tt3419296/images/rm2649760512",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTZjMjAxNTAtMjM4OS00MWU4LWE1OTAtZGMyMzQ3YjA2NDRlXkEyXkFqcGdeQXVyMjIzMTk0MzM@._V1_.jpg",
        width: 480
      },
      status: "released",
      title: "Sinbad and the Cyclops Island",
      titleType: "video",
      year: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0118375",
      category: "actor",
      characters: ["Patch Boomhauer"],
      endYear: 2003,
      episodeCount: 1,
      roles: [
        {
          character: "Patch Boomhauer",
          characterId: "/character/ch0488728/",
          episodeCount: 1
        }
      ],
      startYear: 2003,
      id: "/title/tt0118375/",
      image: {
        height: 1882,
        id: "/title/tt0118375/images/rm604583424",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzI5ODk5MTMtMDE4OC00ZWM5LTg0MzYtNTJmZTY3OWY3NzEzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "King of the Hill",
      titleType: "tvSeries",
      year: 1997,
      episodes: [
        {
          attr: ["voice"],
          billing: 9,
          category: "actor",
          characters: ["Patch Boomhauer"],
          roles: [
            {
              character: "Patch Boomhauer",
              characterId: "/character/ch0488728/"
            }
          ],
          id: "/title/tt0620279/",
          image: {
            height: 375,
            id: "/title/tt0620279/images/rm1330102528",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTk1NjQ3NDU1OF5BMl5BanBnXkFtZTgwNTYyODg0MjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Patch Boomhauer",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 1,
          releaseDate: "2003-11-02",
          seasonNumber: 8
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 1997
    },
    {
      attr: ["voice"],
      billing: 1,
      category: "actor",
      characters: ["Sinbad"],
      roles: [
        {
          character: "Sinbad",
          characterId: "/character/ch0022470/"
        }
      ],
      id: "/title/tt0165982/",
      image: {
        height: 715,
        id: "/title/tt0165982/images/rm3475216384",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTIyMzE1ODI3NF5BMl5BanBnXkFtZTYwMDE3NDc2._V1_.jpg",
        width: 485
      },
      status: "released",
      title: "Sinbad: Legend of the Seven Seas",
      titleType: "movie",
      year: 2003
    },
    {
      billing: 37,
      category: "actor",
      characters: ["Brad, Bachelor #1"],
      roles: [
        {
          character: "Brad, Bachelor #1"
        }
      ],
      id: "/title/tt0270288/",
      image: {
        height: 1500,
        id: "/title/tt0270288/images/rm11469312",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmFiMWVmMzUtZTUwMC00ZTVjLTgxMGItODEyNjFkMzNhN2ZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 1023
      },
      status: "released",
      title: "Confessions of a Dangerous Mind",
      titleType: "movie",
      year: 2002
    },
    {
      billing: 53,
      category: "actor",
      characters: ["Brad Pitt"],
      roles: [
        {
          character: "Brad Pitt",
          characterId: "/character/ch0063557/"
        }
      ],
      id: "/title/tt0290212/",
      image: {
        height: 2560,
        id: "/title/tt0290212/images/rm2601680897",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWY5YjJhYWMtYWMwOC00NjU3LThhMmMtYTg4YmE0Y2FhZDdhXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
        width: 1920
      },
      status: "released",
      title: "Full Frontal",
      titleType: "movie",
      year: 2002
    },
    {
      billing: 7,
      category: "actor",
      characters: ["Rusty Ryan"],
      roles: [
        {
          character: "Rusty Ryan",
          characterId: "/character/ch0002236/"
        }
      ],
      id: "/title/tt0240772/",
      image: {
        height: 1386,
        id: "/title/tt0240772/images/rm3370325760",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        width: 936
      },
      status: "released",
      title: "Ocean's Eleven",
      titleType: "movie",
      year: 2001
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0108778",
      category: "actor",
      characters: ["Will Colbert"],
      endYear: 2001,
      episodeCount: 1,
      roles: [
        {
          character: "Will Colbert",
          characterId: "/character/ch0007141/",
          episodeCount: 1
        }
      ],
      startYear: 2001,
      id: "/title/tt0108778/",
      image: {
        height: 1000,
        id: "/title/tt0108778/images/rm2513109504",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        width: 680
      },
      status: "released",
      title: "Friends",
      titleType: "tvSeries",
      year: 1994,
      episodes: [
        {
          attr: ["uncredited"],
          category: "actor",
          characters: ["Will Colbert"],
          roles: [
            {
              character: "Will Colbert",
              characterId: "/character/ch0007141/"
            }
          ],
          id: "/title/tt0583642/",
          image: {
            height: 1380,
            id: "/title/tt0583642/images/rm117103872",
            url:
              "https://m.media-amazon.com/images/M/MV5BNTcwNTkzNjcyMl5BMl5BanBnXkFtZTgwMjE5OTU0MDE@._V1_.jpg",
            width: 2048
          },
          status: "released",
          title: "The One with the Rumor",
          titleType: "tvEpisode",
          year: 2001,
          episodeNumber: 9,
          releaseDate: "2001-11-22",
          seasonNumber: 8
        }
      ],
      seriesEndYear: 2004,
      seriesStartYear: 1994
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Tom Bishop"],
      roles: [
        {
          character: "Tom Bishop",
          characterId: "/character/ch0010170/"
        }
      ],
      id: "/title/tt0266987/",
      image: {
        height: 1474,
        id: "/title/tt0266987/images/rm1474369280",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjNhOGZkNzktMGU3NC00ODk2LWE4NjctZTliN2JjZTQxZmIxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        width: 999
      },
      status: "released",
      title: "Spy Game",
      titleType: "movie",
      year: 2001
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Jerry Welbach"],
      roles: [
        {
          character: "Jerry Welbach",
          characterId: "/character/ch0010886/"
        }
      ],
      id: "/title/tt0236493/",
      image: {
        height: 1400,
        id: "/title/tt0236493/images/rm3922267136",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWIxZTExZjctZjA5ZC00NGQ2LTk4M2YtMWIyMGM2NzRlNWVkXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg",
        width: 946
      },
      status: "released",
      title: "The Mexican",
      titleType: "movie",
      year: 2001
    },
    {
      billing: 31,
      category: "actor",
      characters: ["Mickey O'Neil"],
      roles: [
        {
          character: "Mickey O'Neil",
          characterId: "/character/ch0003626/"
        }
      ],
      id: "/title/tt0208092/",
      image: {
        height: 1500,
        id: "/title/tt0208092/images/rm1248859904",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        width: 1026
      },
      status: "released",
      title: "Snatch",
      titleType: "movie",
      year: 2000
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Tyler Durden"],
      roles: [
        {
          character: "Tyler Durden",
          characterId: "/character/ch0001854/"
        }
      ],
      id: "/title/tt0137523/",
      image: {
        height: 1600,
        id: "/title/tt0137523/images/rm1412004864",
        url:
          "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        width: 1066
      },
      status: "released",
      title: "Fight Club",
      titleType: "movie",
      year: 1999
    },
    {
      attr: ["uncredited"],
      category: "actor",
      characters: ["Brad Pitt"],
      roles: [
        {
          character: "Brad Pitt",
          characterId: "/character/ch0063557/"
        }
      ],
      id: "/title/tt0120601/",
      image: {
        height: 2265,
        id: "/title/tt0120601/images/rm1838953985",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTFlYjgyMjUtNmJhZS00MDY2LTg0ZmMtNTVlNDA2NTUwYTRjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
        width: 1528
      },
      status: "released",
      title: "Being John Malkovich",
      titleType: "movie",
      year: 1999
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Joe Black", "Young Man in Coffee Shop"],
      roles: [
        {
          character: "Joe Black",
          characterId: "/character/ch0126162/"
        },
        {
          character: "Young Man in Coffee Shop"
        }
      ],
      id: "/title/tt0119643/",
      image: {
        height: 864,
        id: "/title/tt0119643/images/rm3166308096",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTc0MzRmMTgtMTk4OS00MzdkLWJjNWMtZWJmZjlkYTI0YWRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 580
      },
      status: "released",
      title: "Meet Joe Black",
      titleType: "movie",
      year: 1998
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Heinrich Harrer"],
      roles: [
        {
          character: "Heinrich Harrer",
          characterId: "/character/ch0013071/"
        }
      ],
      id: "/title/tt0120102/",
      image: {
        height: 2918,
        id: "/title/tt0120102/images/rm3729987073",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTNkMDMxMDMtMDlhNi00MzQxLTk4NTAtODc0YTFmNGVlNDAyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        width: 1968
      },
      status: "released",
      title: "Seven Years in Tibet",
      titleType: "movie",
      year: 1997
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Rory Devaney"],
      roles: [
        {
          character: "Rory Devaney",
          characterId: "/character/ch0014127/"
        }
      ],
      id: "/title/tt0118972/",
      image: {
        height: 2352,
        id: "/title/tt0118972/images/rm3878362881",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzYwOWExN2UtMzhiZC00ZWZmLTkwY2EtMDUxZGRmMzg0YTVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        width: 1589
      },
      status: "released",
      title: "The Devil's Own",
      titleType: "movie",
      year: 1997
    },
    {
      billing: 13,
      category: "actor",
      characters: ["Michael"],
      roles: [
        {
          character: "Michael",
          characterId: "/character/ch0009414/"
        }
      ],
      id: "/title/tt0117665/",
      image: {
        height: 1500,
        id: "/title/tt0117665/images/rm3704460545",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzk1MmI4NzAtOGRiNS00YjY1LTllNmEtZDhiZDM4MjU2NTMxXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
        width: 1061
      },
      status: "released",
      title: "Sleepers",
      titleType: "movie",
      year: 1996
    },
    {
      billing: 18,
      category: "actor",
      characters: ["Jeffrey Goines"],
      roles: [
        {
          character: "Jeffrey Goines",
          characterId: "/character/ch0003138/"
        }
      ],
      id: "/title/tt0114746/",
      image: {
        height: 1500,
        id: "/title/tt0114746/images/rm267521536",
        url:
          "https://m.media-amazon.com/images/M/MV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 1007
      },
      status: "released",
      title: "12 Monkeys",
      titleType: "movie",
      year: 1995
    },
    {
      billing: 4,
      category: "actor",
      characters: ["Mills"],
      roles: [
        {
          character: "Mills",
          characterId: "/character/ch0002284/"
        }
      ],
      id: "/title/tt0114369/",
      image: {
        height: 2815,
        id: "/title/tt0114369/images/rm3116368640",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        width: 1801
      },
      status: "released",
      title: "Se7en",
      titleType: "movie",
      year: 1995
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Tristan Ludlow"],
      roles: [
        {
          character: "Tristan Ludlow",
          characterId: "/character/ch0309792/"
        }
      ],
      id: "/title/tt0110322/",
      image: {
        height: 500,
        id: "/title/tt0110322/images/rm2132727040",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTYwMjYxNTAyN15BMl5BanBnXkFtZTgwMTc3MjkyMTE@._V1_.jpg",
        width: 336
      },
      status: "released",
      title: "Legends of the Fall",
      titleType: "movie",
      year: 1994
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Louis"],
      roles: [
        {
          character: "Louis",
          characterId: "/character/ch0005253/"
        }
      ],
      id: "/title/tt0110148/",
      image: {
        height: 1500,
        id: "/title/tt0110148/images/rm1724055552",
        url:
          "https://m.media-amazon.com/images/M/MV5BYThmYjJhMGItNjlmOC00ZDRiLWEzNjUtZjU4MjA3MzY0MzFmXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg",
        width: 1001
      },
      status: "released",
      title: "Interview with the Vampire: The Vampire Chronicles",
      titleType: "movie",
      year: 1994
    },
    {
      billing: 4,
      category: "actor",
      characters: ["Elliott Fowler"],
      roles: [
        {
          character: "Elliott Fowler",
          characterId: "/character/ch0276823/"
        }
      ],
      id: "/title/tt0109783/",
      image: {
        height: 843,
        id: "/title/tt0109783/images/rm54677504",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjMyYmQ1NWMtMzAyOC00MWFmLWI1ZTAtNmE0M2EzZjZlMmJiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 565
      },
      status: "released",
      title: "The Favor",
      titleType: "movie",
      year: 1994
    },
    {
      billing: 6,
      category: "actor",
      characters: ["Floyd (Dick's Roommate)"],
      roles: [
        {
          character: "Floyd (Dick's Roommate)",
          characterId: "/character/ch0034331/"
        }
      ],
      id: "/title/tt0108399/",
      image: {
        height: 2966,
        id: "/title/tt0108399/images/rm3132443904",
        url:
          "https://m.media-amazon.com/images/M/MV5BYWRhYWJjNGEtMjNhNi00NzFkLTk1ZGUtNjNmM2FlNTNhNWRjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        width: 1989
      },
      status: "released",
      title: "True Romance",
      titleType: "movie",
      year: 1993
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Early Grayce"],
      roles: [
        {
          character: "Early Grayce",
          characterId: "/character/ch0014473/"
        }
      ],
      id: "/title/tt0107302/",
      image: {
        height: 1500,
        id: "/title/tt0107302/images/rm769922816",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDE2ODZhYzUtMTBhYi00ODgxLWJlNTAtODljN2Q2NDhjZmVhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        width: 1009
      },
      status: "released",
      title: "Kalifornia",
      titleType: "movie",
      year: 1993
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Cox"],
      roles: [
        {
          character: "Cox",
          characterId: "/character/ch0033675/"
        }
      ],
      id: "/title/tt0104007/",
      image: {
        height: 750,
        id: "/title/tt0104007/images/rm2381523968",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTEwZmNiMWYtZDBhOC00NzdlLTliMDYtODQ4OGQzOTgyZjJlXkEyXkFqcGdeQXVyMzc5NTM0Mg@@._V1_.jpg",
        width: 563
      },
      status: "released",
      title: "Contact",
      titleType: "short",
      year: 1993
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Paul Maclean"],
      roles: [
        {
          character: "Paul Maclean",
          characterId: "/character/ch0014735/"
        }
      ],
      id: "/title/tt0105265/",
      image: {
        height: 1500,
        id: "/title/tt0105265/images/rm1562455296",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzE4YWZkOWMtOWZlNS00NzU4LTk5MDQtZjZkNDllMjM1NGI1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 1012
      },
      status: "released",
      title: "A River Runs Through It",
      titleType: "movie",
      year: 1992
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0096708",
      category: "actor",
      characters: ["Billy"],
      endYear: 1992,
      episodeCount: 1,
      roles: [
        {
          character: "Billy",
          characterId: "/character/ch0531211/",
          episodeCount: 1
        }
      ],
      startYear: 1992,
      id: "/title/tt0096708/",
      image: {
        height: 1440,
        id: "/title/tt0096708/images/rm3783198720",
        url:
          "https://m.media-amazon.com/images/M/MV5BM2M3YWRkN2MtZDg5OC00NmRmLTliNzctMTBkZjQzZTlkYmQ0XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Tales from the Crypt",
      titleType: "tvSeries",
      year: 1989,
      episodes: [
        {
          billing: 2,
          category: "actor",
          characters: ["Billy"],
          roles: [
            {
              character: "Billy",
              characterId: "/character/ch0531211/"
            }
          ],
          id: "/title/tt0716857/",
          image: {
            height: 480,
            id: "/title/tt0716857/images/rm1614402049",
            url:
              "https://m.media-amazon.com/images/M/MV5BY2E5NjgxYWEtMjkzZC00OWIyLTgxMDItZDQxZmM1MWVmYjM3XkEyXkFqcGdeQXVyNzQ1NjgzOTA@._V1_.jpg",
            width: 640
          },
          status: "released",
          title: "King of the Road",
          titleType: "tvEpisode",
          year: 1992,
          episodeNumber: 9,
          releaseDate: "1992-08-08",
          seasonNumber: 4
        }
      ],
      seriesEndYear: 1996,
      seriesStartYear: 1989
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Frank Harris"],
      roles: [
        {
          character: "Frank Harris"
        }
      ],
      id: "/title/tt0104009/",
      image: {
        height: 2920,
        id: "/title/tt0104009/images/rm2276446209",
        url:
          "https://m.media-amazon.com/images/M/MV5BODg1YWNjNjctOGJiYi00YzRjLWI2ZWYtMTAxZGM5ODY1Yzc4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
        width: 1971
      },
      status: "released",
      title: "Cool World",
      titleType: "movie",
      year: 1992
    },
    {
      billing: 12,
      category: "actor",
      characters: ['Billy (segment "King of the Road")'],
      roles: [
        {
          character: 'Billy (segment "King of the Road")'
        }
      ],
      id: "/title/tt0166002/",
      image: {
        height: 1363,
        id: "/title/tt0166002/images/rm2112152576",
        url:
          "https://m.media-amazon.com/images/M/MV5BZmViNTI3ZjMtYjkyZC00YzFlLWE1YjEtNWU3YmIzMjY3NDU2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "Two-Fisted Tales",
      titleType: "tvMovie",
      year: 1992
    },
    {
      billing: 1,
      category: "actor",
      characters: ["Johnny Suede"],
      roles: [
        {
          character: "Johnny Suede",
          characterId: "/character/ch0547256/"
        }
      ],
      id: "/title/tt0104567/",
      image: {
        height: 755,
        id: "/title/tt0104567/images/rm705638144",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWMxYTE3M2EtOWI3Yi00MWU2LWFmYjQtMmE0YTU3NDJiMGYxXkEyXkFqcGdeQXVyMTQ4NDY5OTc@._V1_.jpg",
        width: 495
      },
      status: "released",
      title: "Johnny Suede",
      titleType: "movie",
      year: 1991
    },
    {
      billing: 7,
      category: "actor",
      characters: ["J.D."],
      roles: [
        {
          character: "J.D.",
          characterId: "/character/ch0032905/"
        }
      ],
      id: "/title/tt0103074/",
      image: {
        height: 1023,
        id: "/title/tt0103074/images/rm133085952",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjIxNDgzMDE2MF5BMl5BanBnXkFtZTcwNzY5NTk1NA@@._V1_.jpg",
        width: 687
      },
      status: "released",
      title: "Thelma & Louise",
      titleType: "movie",
      year: 1991
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0098804",
      category: "actor",
      characters: ["Walker Lovejoy"],
      endYear: 1990,
      episodeCount: 6,
      roles: [
        {
          character: "Walker Lovejoy",
          episodeCount: 6
        }
      ],
      startYear: 1990,
      id: "/title/tt0098804/",
      status: "released",
      title: "Glory Days",
      titleType: "tvSeries",
      year: 1990,
      episodes: [
        {
          billing: 2,
          category: "actor",
          characters: ["Walker Lovejoy"],
          roles: [
            {
              character: "Walker Lovejoy"
            }
          ],
          id: "/title/tt0588956/",
          status: "released",
          title: "Precursed",
          titleType: "tvEpisode",
          year: 1990,
          episodeNumber: 6,
          releaseDate: "1990-09-13",
          seasonNumber: 1
        },
        {
          billing: 2,
          category: "actor",
          characters: ["Walker Lovejoy"],
          roles: [
            {
              character: "Walker Lovejoy"
            }
          ],
          id: "/title/tt0588957/",
          status: "released",
          title: "Tammy Tell Me True",
          titleType: "tvEpisode",
          year: 1990,
          episodeNumber: 5,
          releaseDate: "1990-09-06",
          seasonNumber: 1
        },
        {
          billing: 2,
          category: "actor",
          characters: ["Walker Lovejoy"],
          roles: [
            {
              character: "Walker Lovejoy"
            }
          ],
          id: "/title/tt0588958/",
          status: "released",
          title: "Triggs Mistaken Identity Crisis",
          titleType: "tvEpisode",
          year: 1990,
          episodeNumber: 4,
          releaseDate: "1990-08-30",
          seasonNumber: 1
        },
        {
          billing: 2,
          category: "actor",
          characters: ["Walker Lovejoy"],
          roles: [
            {
              character: "Walker Lovejoy"
            }
          ],
          id: "/title/tt1099428/",
          status: "released",
          title: "Whattya Wanna Do Tonight?",
          titleType: "tvEpisode",
          year: 1990,
          episodeNumber: 3,
          releaseDate: "1990-08-23",
          seasonNumber: 1
        },
        {
          billing: 2,
          category: "actor",
          characters: ["Walker Lovejoy"],
          roles: [
            {
              character: "Walker Lovejoy"
            }
          ],
          id: "/title/tt1099427/",
          status: "released",
          title: "Blastin' Away the Blues",
          titleType: "tvEpisode",
          year: 1990,
          episodeNumber: 2,
          releaseDate: "1990-08-01",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 1990
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Joe Maloney"],
      roles: [
        {
          character: "Joe Maloney"
        }
      ],
      id: "/title/tt0101268/",
      image: {
        height: 3300,
        id: "/title/tt0101268/images/rm4182928384",
        url:
          "https://m.media-amazon.com/images/M/MV5BYThjZWMzMzYtOTJiZS00YjA5LTlmNzAtNjZmNzMzNWJlZTcxXkEyXkFqcGdeQXVyMjg4NTk2OQ@@._V1_.jpg",
        width: 2250
      },
      status: "released",
      title: "Across the Tracks",
      titleType: "movie",
      year: 1990
    },
    {
      billing: 3,
      category: "actor",
      characters: ["Billy Canton"],
      roles: [
        {
          character: "Billy Canton",
          characterId: "/character/ch0577974/"
        }
      ],
      id: "/title/tt0100797/",
      image: {
        height: 734,
        id: "/title/tt0100797/images/rm655175424",
        url:
          "https://m.media-amazon.com/images/M/MV5BOGVmZTA1NzEtNmZlNy00MmMzLTk0NGYtZmI0NDBiYjg3ZDEwXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
        width: 500
      },
      status: "released",
      title: "Too Young to Die?",
      titleType: "tvMovie",
      year: 1990
    },
    {
      billing: 15,
      category: "actor",
      characters: ["Steve Black"],
      roles: [
        {
          character: "Steve Black"
        }
      ],
      id: "/title/tt0099829/",
      image: {
        height: 1302,
        id: "/title/tt0099829/images/rm709520384",
        url:
          "https://m.media-amazon.com/images/M/MV5BYWJkZmZkMmYtMjEwMC00NTU0LWEwMzEtNjlkZGFhM2JiNzZlXkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_.jpg",
        width: 892
      },
      status: "released",
      title: "The Image",
      titleType: "tvMovie",
      year: 1990
    },
    {
      billing: 8,
      category: "actor",
      characters: ["Brian"],
      roles: [
        {
          character: "Brian"
        }
      ],
      id: "/title/tt0097478/",
      image: {
        height: 500,
        id: "/title/tt0097478/images/rm2224153344",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjIzMDc2NjcyM15BMl5BanBnXkFtZTgwMTU5MTUyNzE@._V1_.jpg",
        width: 375
      },
      status: "released",
      title: "Happy Together",
      titleType: "movie",
      year: 1989
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0092492",
      category: "actor",
      characters: ["Bernard"],
      endYear: 1989,
      episodeCount: 1,
      roles: [
        {
          character: "Bernard",
          episodeCount: 1
        }
      ],
      startYear: 1989,
      id: "/title/tt0092492/",
      image: {
        height: 448,
        id: "/title/tt0092492/images/rm1318478592",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjgzM2IzMWYtMjBhZS00YmZhLWEzYjItYTFlODRhMjljZmIzXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_.jpg",
        width: 314
      },
      status: "released",
      title: "Thirtysomething",
      titleType: "tvSeries",
      year: 1987,
      episodes: [
        {
          billing: 11,
          category: "actor",
          characters: ["Bernard"],
          roles: [
            {
              character: "Bernard"
            }
          ],
          id: "/title/tt0755503/",
          image: {
            height: 375,
            id: "/title/tt0755503/images/rm857785088",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTkxMTQxMzgxNF5BMl5BanBnXkFtZTgwMTU1NDEzMjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Love and Sex",
          titleType: "tvEpisode",
          year: 1989,
          episodeNumber: 2,
          releaseDate: "1989-10-03",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 1991,
      seriesStartYear: 1987
    },
    {
      billing: 3,
      category: "actor",
      characters: ["Dwight Ingalls"],
      roles: [
        {
          character: "Dwight Ingalls",
          characterId: "/character/ch0296431/"
        }
      ],
      id: "/title/tt0097136/",
      image: {
        height: 1500,
        id: "/title/tt0097136/images/rm2011787520",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjk5ODY1ODgtNzE2OS00NDdlLWI3YTctOTdjN2Q0OGI2MmFiXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "Cutting Class",
      titleType: "movie",
      year: 1989
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0088527",
      category: "actor",
      characters: ["Jonathan Keith", "Jeff"],
      endYear: 1989,
      episodeCount: 2,
      roles: [
        {
          character: "Jonathan Keith",
          episodeCount: 1
        },
        {
          character: "Jeff",
          episodeCount: 1
        }
      ],
      startYear: 1987,
      id: "/title/tt0088527/",
      image: {
        height: 1000,
        id: "/title/tt0088527/images/rm4126476800",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjhiNDNkNTAtNTE4Yi00YWQ0LTlhMzItMThiYjNjMmFkZWIxXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_.jpg",
        width: 700
      },
      status: "released",
      title: "Growing Pains",
      titleType: "tvSeries",
      year: 1985,
      episodes: [
        {
          billing: 6,
          category: "actor",
          characters: ["Jonathan Keith"],
          roles: [
            {
              character: "Jonathan Keith"
            }
          ],
          id: "/title/tt0593257/",
          image: {
            height: 375,
            id: "/title/tt0593257/images/rm4244174336",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTUwMzUzNDM0MV5BMl5BanBnXkFtZTgwMTg5NTcyNTE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Feet of Clay",
          titleType: "tvEpisode",
          year: 1989,
          episodeNumber: 14,
          releaseDate: "1989-02-08",
          seasonNumber: 4
        },
        {
          billing: 7,
          category: "actor",
          characters: ["Jeff"],
          roles: [
            {
              character: "Jeff"
            }
          ],
          id: "/title/tt0593355/",
          image: {
            height: 375,
            id: "/title/tt0593355/images/rm3921397504",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTc2MTc1OTk5M15BMl5BanBnXkFtZTgwNjE5MzQ2MjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Who's Zoomin' Who?",
          titleType: "tvEpisode",
          year: 1987,
          episodeNumber: 9,
          releaseDate: "1987-11-10",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 1992,
      seriesStartYear: 1985
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0094466",
      category: "actor",
      characters: ["Rick"],
      endYear: 1989,
      episodeCount: 1,
      roles: [
        {
          character: "Rick",
          episodeCount: 1
        }
      ],
      startYear: 1989,
      id: "/title/tt0094466/",
      image: {
        height: 1007,
        id: "/title/tt0094466/images/rm3339011328",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWFiZTcxNGYtZDM3ZC00ZWIxLTg1YTctMzM4ZThkZmVjY2ZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 710
      },
      status: "released",
      title: "Freddy's Nightmares",
      titleType: "tvSeries",
      year: 1988,
      episodes: [
        {
          billing: 2,
          category: "actor",
          characters: ["Rick"],
          roles: [
            {
              character: "Rick"
            }
          ],
          id: "/title/tt0582734/",
          image: {
            height: 528,
            id: "/title/tt0582734/images/rm1294043393",
            url:
              "https://m.media-amazon.com/images/M/MV5BOGUyZmI5NjItOWY0My00YjZkLTkzNDUtYWRiNzcyOWMyMDgwXkEyXkFqcGdeQXVyNzQ1NjgzOTA@._V1_.jpg",
            width: 720
          },
          status: "released",
          title: "Black Tickets",
          titleType: "tvEpisode",
          year: 1989,
          episodeNumber: 14,
          releaseDate: "1989-02-05",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 1990,
      seriesStartYear: 1988
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0090444",
      category: "actor",
      characters: ["Chuck"],
      endYear: 1989,
      episodeCount: 1,
      roles: [
        {
          character: "Chuck",
          episodeCount: 1
        }
      ],
      startYear: 1989,
      id: "/title/tt0090444/",
      image: {
        height: 1000,
        id: "/title/tt0090444/images/rm2684830464",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDU0NDNmODItODBjMi00NDhlLWExODktZTYzNmNlZmMxYTg0XkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_.jpg",
        width: 680
      },
      status: "released",
      title: "Head of the Class",
      titleType: "tvSeries",
      year: 1986,
      episodes: [
        {
          billing: 14,
          category: "actor",
          characters: ["Chuck"],
          roles: [
            {
              character: "Chuck"
            }
          ],
          id: "/title/tt0598636/",
          image: {
            height: 477,
            id: "/title/tt0598636/images/rm2258985472",
            url:
              "https://m.media-amazon.com/images/M/MV5BZWIwZGUwMjgtMDg1Ny00YTZjLWJjYzAtNzdmYWY4NzI0NzM0XkEyXkFqcGdeQXVyNDUyMzI4MQ@@._V1_.jpg",
            width: 624
          },
          status: "released",
          title: "Partners",
          titleType: "tvEpisode",
          year: 1989,
          episodeNumber: 10,
          releaseDate: "1989-01-25",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 1991,
      seriesStartYear: 1986
    },
    {
      billing: 2,
      category: "actor",
      characters: ["Rick"],
      roles: [
        {
          character: "Rick"
        }
      ],
      id: "/title/tt0118930/",
      image: {
        height: 1200,
        id: "/title/tt0118930/images/rm2360139776",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTZjZmJkYWMtOTYzZi00ODY1LTg4N2YtNjhmYzYzNDBkMzYzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 800
      },
      status: "released",
      title: "The Dark Side of the Sun",
      titleType: "movie",
      year: 1988
    },
    {
      billing: 12,
      category: "actor",
      characters: ["Teddy Johnson"],
      roles: [
        {
          character: "Teddy Johnson"
        }
      ],
      id: "/title/tt0096179/",
      image: {
        height: 375,
        id: "/title/tt0096179/images/rm3029975296",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTY3MDE0OTY5OV5BMl5BanBnXkFtZTgwMDEwODY0MjE@._V1_.jpg",
        width: 500
      },
      status: "released",
      title: "A Stoning in Fulham County",
      titleType: "tvMovie",
      year: 1988
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0092312",
      category: "actor",
      characters: ["Peter"],
      endYear: 1988,
      episodeCount: 1,
      roles: [
        {
          character: "Peter",
          episodeCount: 1
        }
      ],
      startYear: 1988,
      id: "/title/tt0092312/",
      image: {
        height: 1422,
        id: "/title/tt0092312/images/rm3554122753",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzNiODUyYTQtNDg1Ni00OGQ5LWI5YWMtYWFhMTI1MjYyNmJjXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
        width: 958
      },
      status: "released",
      title: "21 Jump Street",
      titleType: "tvSeries",
      year: 1987,
      episodes: [
        {
          billing: 8,
          category: "actor",
          characters: ["Peter"],
          roles: [
            {
              character: "Peter"
            }
          ],
          id: "/title/tt0501965/",
          image: {
            height: 1600,
            id: "/title/tt0501965/images/rm1093450241",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzc4ZGZmZDktOTFhMS00Y2RkLWEyZWUtNzYxNjljOTZiNTcwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
            width: 2560
          },
          status: "released",
          title: "Best Years of Your Life",
          titleType: "tvEpisode",
          year: 1988,
          episodeNumber: 20,
          releaseDate: "1988-05-01",
          seasonNumber: 2
        }
      ],
      seriesEndYear: 1991,
      seriesStartYear: 1987
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0077000",
      category: "actor",
      characters: ["Randy"],
      endYear: 1988,
      episodeCount: 4,
      roles: [
        {
          character: "Randy",
          episodeCount: 4
        }
      ],
      startYear: 1987,
      id: "/title/tt0077000/",
      image: {
        height: 1000,
        id: "/title/tt0077000/images/rm2715915265",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTg3ZDY1OWEtYjRkYy00NzQ4LWFjMjMtMDc0YzcxNzU5NmFhXkEyXkFqcGdeQXVyMTkxODQ4MDg@._V1_.jpg",
        width: 680
      },
      status: "released",
      title: "Dallas",
      titleType: "tvSeries",
      year: 1978,
      episodes: [
        {
          category: "actor",
          characters: ["Randy"],
          roles: [
            {
              character: "Randy"
            }
          ],
          id: "/title/tt0553315/",
          image: {
            height: 1600,
            id: "/title/tt0553315/images/rm4009147137",
            url:
              "https://m.media-amazon.com/images/M/MV5BMmM0ODkwMTktODU3Ny00ODZmLTlkODAtYzY0NjA4YzAzZDRlXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
            width: 2560
          },
          status: "released",
          title: "Farlow's Follies",
          titleType: "tvEpisode",
          year: 1988,
          episodeNumber: 20,
          releaseDate: "1988-02-19",
          seasonNumber: 11
        },
        {
          category: "actor",
          characters: ["Randy"],
          roles: [
            {
              character: "Randy"
            }
          ],
          id: "/title/tt0553337/",
          image: {
            height: 375,
            id: "/title/tt0553337/images/rm2975252992",
            url:
              "https://m.media-amazon.com/images/M/MV5BNTM3MjIzMzE5NF5BMl5BanBnXkFtZTgwNjk4ODEyMjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "It's Me Again",
          titleType: "tvEpisode",
          year: 1988,
          episodeNumber: 15,
          releaseDate: "1988-01-08",
          seasonNumber: 11
        },
        {
          category: "actor",
          characters: ["Randy"],
          roles: [
            {
              character: "Randy"
            }
          ],
          id: "/title/tt0965948/",
          image: {
            height: 375,
            id: "/title/tt0965948/images/rm4231184896",
            url:
              "https://m.media-amazon.com/images/M/MV5BMzUzODM3OTExOF5BMl5BanBnXkFtZTgwODMzNjIyMjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Daddy's Little Darlin'",
          titleType: "tvEpisode",
          year: 1987,
          episodeNumber: 14,
          releaseDate: "1987-12-18",
          seasonNumber: 11
        },
        {
          billing: 23,
          category: "actor",
          characters: ["Randy"],
          roles: [
            {
              character: "Randy"
            }
          ],
          id: "/title/tt0553275/",
          image: {
            height: 375,
            id: "/title/tt0553275/images/rm3609772544",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTYwOTAyMzQxNF5BMl5BanBnXkFtZTgwNDM1OTEyMjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Brother, Can You Spare a Child?",
          titleType: "tvEpisode",
          year: 1987,
          episodeNumber: 13,
          releaseDate: "1987-12-11",
          seasonNumber: 11
        }
      ],
      seriesEndYear: 1991,
      seriesStartYear: 1978
    },
    {
      attr: ["uncredited"],
      category: "actor",
      characters: ["Partygoer", "Preppie Kid at Fight"],
      roles: [
        {
          character: "Partygoer"
        },
        {
          character: "Preppie Kid at Fight"
        }
      ],
      id: "/title/tt0093407/",
      image: {
        height: 2182,
        id: "/title/tt0093407/images/rm337773057",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzJhNGRkMjYtNTdmZS00NTE0LWJkM2EtZTFjYTFiNGM2YjYyXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
        width: 1466
      },
      status: "released",
      title: "Less Than Zero",
      titleType: "movie",
      year: 1987
    },
    {
      attr: ["uncredited"],
      category: "actor",
      characters: ["Waiter"],
      roles: [
        {
          character: "Waiter"
        }
      ],
      id: "/title/tt0093638/",
      image: {
        height: 1175,
        id: "/title/tt0093638/images/rm1952463361",
        url:
          "https://m.media-amazon.com/images/M/MV5BZThmNGIwMWItNjc5Yy00MTNiLWIzZGYtOWYyYjlmNjRiNzE1XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
        width: 797
      },
      status: "released",
      title: "No Man's Land",
      titleType: "movie",
      year: 1987
    },
    {
      attr: ["uncredited"],
      category: "actor",
      characters: ["Party Guest"],
      roles: [
        {
          character: "Party Guest"
        }
      ],
      id: "/title/tt0093640/",
      image: {
        height: 2871,
        id: "/title/tt0093640/images/rm173226240",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzliYmFjZmYtMTQ4OS00MmM1LWI2NDItYWNkMTBhZWY2M2QwL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        width: 1860
      },
      status: "released",
      title: "No Way Out",
      titleType: "movie",
      year: 1987
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0057731",
      category: "actor",
      characters: ["Chris"],
      endYear: 1987,
      episodeCount: 2,
      roles: [
        {
          character: "Chris",
          episodeCount: 2
        }
      ],
      startYear: 1987,
      id: "/title/tt0057731/",
      image: {
        height: 475,
        id: "/title/tt0057731/images/rm3171345152",
        url:
          "https://m.media-amazon.com/images/M/MV5BODAwNTEyNDYwNV5BMl5BanBnXkFtZTgwODc3NDAzNzE@._V1_.jpg",
        width: 361
      },
      status: "released",
      title: "Another World",
      titleType: "tvSeries",
      year: 1964,
      episodes: [
        {
          category: "actor",
          characters: ["Chris"],
          roles: [
            {
              character: "Chris"
            }
          ],
          id: "/title/tt2486686/",
          status: "released",
          title: "Episode #1.5821",
          titleType: "tvEpisode",
          year: 1987,
          episodeNumber: 5821,
          releaseDate: "1987-05-15",
          seasonNumber: 1
        },
        {
          category: "actor",
          characters: ["Chris"],
          roles: [
            {
              character: "Chris"
            }
          ],
          id: "/title/tt2486772/",
          status: "released",
          title: "Episode #1.5820",
          titleType: "tvEpisode",
          year: 1987,
          episodeNumber: 5820,
          releaseDate: "1987-05-14",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 1999,
      seriesStartYear: 1964
    },
    {
      attr: ["uncredited"],
      category: "actor",
      characters: ["Boy at the Beach"],
      roles: [
        {
          character: "Boy at the Beach"
        }
      ],
      id: "/title/tt0093231/",
      image: {
        height: 907,
        id: "/title/tt0093231/images/rm1050882304",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjI4Y2EyMWEtOGJkNS00YjNmLWJiYTItOWNmNmFlNjgwYzhjXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_.jpg",
        width: 580
      },
      status: "released",
      title: "Hunk",
      titleType: "movie",
      year: 1987
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt10832454/",
      image: {
        height: 534,
        id: "/title/tt10832454/images/rm910923265",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTY3NWQxMDUtNjM4NC00MDY1LTk1NjgtZGFlMjQwZWRiZDdjXkEyXkFqcGdeQXVyMTA2MTE3NTI4._V1_.jpg",
        width: 984
      },
      status: "completed",
      title: "Baywatch: The Documentary",
      titleType: "movie"
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt14255760/",
      image: {
        height: 3300,
        id: "/title/tt14255760/images/rm258199041",
        url:
          "https://m.media-amazon.com/images/M/MV5BYWNhNjM1N2ItNWY2YS00MTg1LTk4Y2YtYjY0OGQwZDYzNTRjXkEyXkFqcGdeQXVyNDU1NzM4Mw@@._V1_.jpg",
        width: 2260
      },
      status: "completed",
      title: "Directed By",
      titleType: "movie"
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0081857",
      category: "self",
      characters: ["Self", "Self - Fury"],
      endYear: 2023,
      episodeCount: 95,
      roles: [
        {
          character: "Self",
          episodeCount: 91
        },
        {
          character: "Self - Fury",
          episodeCount: 4
        }
      ],
      startYear: 2003,
      id: "/title/tt0081857/",
      image: {
        height: 2160,
        id: "/title/tt0081857/images/rm3661228545",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDY0YzYxNTYtZmIyMC00ZjkxLWJkN2YtMWVmN2UyZjI5OTQyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        width: 1440
      },
      status: "released",
      title: "Entertainment Tonight",
      titleType: "tvSeries",
      year: 1981,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt27173513/",
          status: "released",
          title: "Episode #42.164",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 164,
          releaseDate: "2023-03-21",
          seasonNumber: 42
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt26242122/",
          status: "released",
          title: "Episode #42.112",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 112,
          releaseDate: "2023-01-19",
          seasonNumber: 42
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt25813112/",
          status: "released",
          title: "Episode #42.105",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 105,
          releaseDate: "2023-01-11",
          seasonNumber: 42
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt24639866/",
          status: "released",
          title: "Holiday Movie Guide",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 87,
          releaseDate: "2022-12-21",
          seasonNumber: 42
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt24228120/",
          status: "released",
          title: "Episode #42.83",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 83,
          releaseDate: "2022-12-16",
          seasonNumber: 42
        }
      ],
      seriesStartYear: 1981
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt21841986",
      category: "self",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt21841986/",
      image: {
        height: 1280,
        id: "/title/tt21841986/images/rm4246876161",
        url:
          "https://m.media-amazon.com/images/M/MV5BMGI2OWM5ODgtODk3OC00YmI4LWE5NzAtZTQxZWJiMDcyODY1XkEyXkFqcGdeQXVyNjE1MjkwNw@@._V1_.jpg",
        width: 1024
      },
      status: "released",
      title: "Volles Haus",
      titleType: "tvSeries",
      year: 2023,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt26220236/",
          image: {
            height: 510,
            id: "/title/tt26220236/images/rm3623499265",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzI0MjRiYjgtYzBjYi00MGViLWEyNzQtYjM0OTRhMTU2NGMyXkEyXkFqcGdeQXVyNjE1MjkwNw@@._V1_.jpg",
            width: 1200
          },
          status: "released",
          title: "S1E4",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 4,
          releaseDate: "2023-03-02",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2023
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0341901",
      category: "self",
      characters: ["Self - Presenter"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Presenter",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt0341901/",
      image: {
        height: 854,
        id: "/title/tt0341901/images/rm2534436352",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzNkYTkzNTEtNzkwNS00NDI1LTgxMDMtNmQ0OTdmNjQ0ZDc4XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg",
        width: 640
      },
      status: "released",
      title: "La nuit des Césars",
      titleType: "tvSeries",
      year: 1976,
      episodes: [
        {
          category: "self",
          characters: ["Self - Presenter"],
          roles: [
            {
              character: "Self - Presenter"
            }
          ],
          id: "/title/tt26815151/",
          image: {
            height: 960,
            id: "/title/tt26815151/images/rm548550401",
            url:
              "https://m.media-amazon.com/images/M/MV5BYTg4ZGU1MTYtZTQwMC00ODIyLTk1ZmEtNDQ0YzU1YmZiYzk5XkEyXkFqcGdeQXVyMDYyNTk1OA@@._V1_.jpg",
            width: 851
          },
          status: "released",
          title: "48e cérémonie des César",
          titleType: "tvEpisode",
          year: 2023,
          releaseDate: "2023-02-24"
        }
      ],
      seriesStartYear: 1976
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt9261452",
      category: "self",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt9261452/",
      image: {
        height: 630,
        id: "/title/tt9261452/images/rm3972864769",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzJhNmFmMDgtY2Q3Zi00MzM4LTlmOWQtMTY2MDdkYWZlYzg5XkEyXkFqcGdeQXVyNTk4NTU3MDI@._V1_.jpg",
        width: 1200
      },
      status: "released",
      title: "Sekai Kurabete Mitara",
      titleType: "tvSeries",
      year: 2017,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt27639469/",
          status: "released",
          title: "2-Jikan Special Brad Pitt & Korea vs Taiwan",
          titleType: "tvEpisode",
          year: 2023,
          releaseDate: "2023-02-08"
        }
      ],
      seriesStartYear: 2017
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt26424559",
      category: "self",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt26424559/",
      image: {
        height: 588,
        id: "/title/tt26424559/images/rm2878486017",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjRhYzMxZDItYjViYS00Y2IzLWI0OGEtY2M1YTg0YWZkZmFjXkEyXkFqcGdeQXVyMzcxNjkzOTM@._V1_.jpg",
        width: 446
      },
      status: "released",
      title: "Beau geste",
      titleType: "tvSeries",
      year: 2023,
      episodes: [
        {
          billing: 17,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt26452865/",
          status: "released",
          title: "Episode dated 22 January 2023",
          titleType: "tvEpisode",
          year: 2023,
          releaseDate: "2023-01-22"
        }
      ],
      seriesStartYear: 2023
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt7878748",
      category: "self",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt7878748/",
      image: {
        height: 2202,
        id: "/title/tt7878748/images/rm1074201345",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjkxNjdlNjYtM2ZiNi00ZTQ1LThkMjctZGQ4ZDczNDI4MTRkXkEyXkFqcGdeQXVyMTAyMDU2MTU@._V1_.jpg",
        width: 1500
      },
      status: "released",
      title: "Jornal das 8",
      titleType: "tvSeries",
      year: 2010,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt26218448/",
          status: "released",
          title: "Episode dated 21 January 2023",
          titleType: "tvEpisode",
          year: 2023,
          releaseDate: "2023-01-21"
        }
      ],
      seriesStartYear: 2010
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0247094",
      category: "self",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 21,
      roles: [
        {
          character: "Self",
          episodeCount: 21
        }
      ],
      startYear: 2003,
      id: "/title/tt0247094/",
      image: {
        height: 1440,
        id: "/title/tt0247094/images/rm3133966593",
        url:
          "https://m.media-amazon.com/images/M/MV5BODMzM2I1MjQtMjNhNS00NjU0LWE5MWUtZWRkZTdkOTU5NmI2XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Extra",
      titleType: "tvSeries",
      year: 1994,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt26240550/",
          status: "released",
          title: "Episode #29.117",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 117,
          releaseDate: "2023-01-18",
          seasonNumber: 29
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt25812952/",
          status: "released",
          title: "Episode #29.111",
          titleType: "tvEpisode",
          year: 2023,
          episodeNumber: 111,
          releaseDate: "2023-01-11",
          seasonNumber: 29
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt24226476/",
          status: "released",
          title: "Episode #29.89",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 89,
          releaseDate: "2022-12-16",
          seasonNumber: 29
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21974078/",
          status: "released",
          title: "Episode #29.4",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 4,
          releaseDate: "2022-09-08",
          seasonNumber: 29
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21410652/",
          status: "released",
          title: "Episode #28.287",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 287,
          releaseDate: "2022-08-05",
          seasonNumber: 28
        }
      ],
      seriesStartYear: 1994
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0805412",
      category: "self",
      characters: ["Self"],
      endYear: 2023,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2023,
      id: "/title/tt0805412/",
      image: {
        height: 426,
        id: "/title/tt0805412/images/rm2239458048",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjk4ZDg2NTAtZDk3Ni00ZWQ5LTg2ZWMtNDlhOTgwMmRjZjkwXkEyXkFqcGdeQXVyNzI4MDMyMTU@._V1_.jpg",
        width: 638
      },
      status: "released",
      title: "Le journal de 20 heures",
      titleType: "tvSeries",
      year: 1956,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt26241100/",
          status: "released",
          title: "Episode dated 15 January 2023",
          titleType: "tvEpisode",
          year: 2023,
          releaseDate: "2023-01-15"
        }
      ],
      seriesStartYear: 1956
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt22176310/",
      image: {
        height: 1000,
        id: "/title/tt22176310/images/rm2637708801",
        url:
          "https://m.media-amazon.com/images/M/MV5BZmZkN2FkNzQtYjY4Zi00MmRlLWFjMDYtOWY0ZTZlZjA1NzZjXkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_.jpg",
        width: 675
      },
      status: "released",
      title: "80th Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2023
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt15059482",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2022,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2022,
      id: "/title/tt15059482/",
      image: {
        height: 1000,
        id: "/title/tt15059482/images/rm1514860289",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDA3MmM4MDEtM2YwYS00NzliLWFlNzctYTBmZGE1NjFiM2U1XkEyXkFqcGdeQXVyODQ4Mjc2NDM@._V1_.jpg",
        width: 675
      },
      status: "released",
      title: "Burning Questions",
      titleType: "tvSeries",
      year: 2021,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt24479426/",
          image: {
            height: 1192,
            id: "/title/tt24479426/images/rm4012194049",
            url:
              "https://m.media-amazon.com/images/M/MV5BYzQzZDJlZGQtNjUyZi00ZGZiLThjODEtZDVmZWZhMDBjODIwXkEyXkFqcGdeQXVyMzk0NzQ5MjU@._V1_.jpg",
            width: 804
          },
          status: "released",
          title: "Burning Questions With 'Babylon'",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 54,
          releaseDate: "2022-12-19",
          seasonNumber: 2
        }
      ],
      seriesStartYear: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0167515",
      category: "self",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 9,
      roles: [
        {
          character: "Self",
          episodeCount: 9
        }
      ],
      startYear: 2008,
      id: "/title/tt0167515/",
      image: {
        height: 1136,
        id: "/title/tt0167515/images/rm2593953025",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzg1MjA0ODctM2I5Yi00NWFhLTlkZTUtNzBiMzM0MTQ5MjBkXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
        width: 852
      },
      status: "released",
      title: "Access Hollywood",
      titleType: "tvSeries",
      year: 1996,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt24226950/",
          status: "released",
          title: "Episode #27.83",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 83,
          releaseDate: "2022-12-16",
          seasonNumber: 27
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21974138/",
          status: "released",
          title: "Episode #26.310",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 310,
          releaseDate: "2022-09-08",
          seasonNumber: 26
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21412416/",
          status: "released",
          title: "Episode #26.278",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 278,
          releaseDate: "2022-08-02",
          seasonNumber: 26
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11633100/",
          status: "released",
          title: "Episode #24.118",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 118,
          releaseDate: "2020-01-23",
          seasonNumber: 24
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11586564/",
          status: "released",
          title: "Episode #24.110",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 110,
          releaseDate: "2020-01-14",
          seasonNumber: 24
        }
      ],
      seriesStartYear: 1996
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1973047",
      category: "self",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 5,
      roles: [
        {
          character: "Self",
          episodeCount: 5
        }
      ],
      startYear: 2019,
      id: "/title/tt1973047/",
      image: {
        height: 1400,
        id: "/title/tt1973047/images/rm1186423296",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDI1NjZiOTQtZTgxOC00YzcxLTg4ZmQtYTNhNzNlNjJhZDk0XkEyXkFqcGdeQXVyNDYyMTE5NTM@._V1_.jpg",
        width: 1400
      },
      status: "released",
      title: "Dish Nation",
      titleType: "tvSeries",
      year: 2011,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt23639904/",
          status: "released",
          title: "Episode #11.53",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 53,
          releaseDate: "2022-11-16",
          seasonNumber: 11
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt17296928/",
          status: "released",
          title: "Episode #10.104",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 104,
          releaseDate: "2022-01-27",
          seasonNumber: 10
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt12890364/",
          status: "released",
          title: "Episode #8.254",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 254,
          releaseDate: "2020-08-20",
          seasonNumber: 8
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11443300/",
          status: "released",
          title: "Episode #8.76",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 76,
          releaseDate: "2019-12-16",
          seasonNumber: 8
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11176438/",
          status: "released",
          title: "Episode #8.55",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 55,
          releaseDate: "2019-11-15",
          seasonNumber: 8
        }
      ],
      seriesStartYear: 2011
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0911896",
      category: "self",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2020,
      id: "/title/tt0911896/",
      image: {
        height: 2048,
        id: "/title/tt0911896/images/rm603173376",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTQ4NjE1MDU3Nl5BMl5BanBnXkFtZTcwODU5NzE5Ng@@._V1_.jpg",
        width: 1316
      },
      status: "released",
      title: "Made in Hollywood",
      titleType: "tvSeries",
      year: 2005,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt22900348/",
          status: "released",
          title: "Black Adam/Ticket to Paradise",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 7,
          releaseDate: "2022-10-22",
          seasonNumber: 18
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11615746/",
          status: "released",
          title:
            "A Fall from Grace + Awards Spotlight: Once Upon a Time... in Hollywood",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 18,
          releaseDate: "2020-01-18",
          seasonNumber: 15
        }
      ],
      seriesStartYear: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt9615014",
      category: "self",
      characters: ["Self - Producer"],
      endYear: 2022,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Producer",
          episodeCount: 1
        }
      ],
      startYear: 2022,
      id: "/title/tt9615014/",
      image: {
        height: 1350,
        id: "/title/tt9615014/images/rm1321209345",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmExOTRkNjMtZTk5OS00ZDk3LTk0ZDktMzE2ZWQ0ZjBmNDY3XkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Lego Masters",
      titleType: "tvSeries",
      year: 2020,
      episodes: [
        {
          attr: ["voice"],
          category: "self",
          characters: ["Self - Producer"],
          roles: [
            {
              character: "Self - Producer"
            }
          ],
          id: "/title/tt16310110/",
          image: {
            height: 1133,
            id: "/title/tt16310110/images/rm4072816129",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTZmZDNjYTMtYTNmMi00NTFlLThmYzEtNTI4MGQ2MGY1ZGY3XkEyXkFqcGdeQXVyMzkyOTQ0NzY@._V1_.jpg",
            width: 1700
          },
          status: "released",
          title: "Ready to Launch",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 1,
          releaseDate: "2022-09-21",
          seasonNumber: 3
        }
      ],
      seriesStartYear: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt15275848",
      category: "self",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2022,
      id: "/title/tt15275848/",
      image: {
        height: 1055,
        id: "/title/tt15275848/images/rm2285892097",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTU2MTU2OWYtOWY0Ny00NjU1LTg4MWItNDQ2MDVjNzUyMjkyXkEyXkFqcGdeQXVyNjE1MjkwNw@@._V1_.jpg",
        width: 697
      },
      status: "released",
      title: "BILD LIVE",
      titleType: "tvSeries",
      year: 2021,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21608468/",
          status: "released",
          title: "S2E10",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 10,
          releaseDate: "2022-08-12",
          seasonNumber: 2
        }
      ],
      seriesStartYear: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt6587354",
      category: "self",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2022,
      id: "/title/tt6587354/",
      image: {
        height: 2098,
        id: "/title/tt6587354/images/rm2370751489",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWVhYTI3YTItMDNhMy00MDRiLTkxN2QtZWEyN2ZiZDVmYWQ1XkEyXkFqcGdeQXVyMTI3MDM5MzE5._V1_.jpg",
        width: 1508
      },
      status: "released",
      title: "Hollywood First Look",
      titleType: "tvSeries",
      year: 2017,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt22053474/",
          status: "released",
          title: "Episode #4.63",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 63,
          releaseDate: "2022-08-06",
          seasonNumber: 4
        }
      ],
      seriesStartYear: 2017
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0390699",
      category: "self",
      characters: ["Self - Interviewee"],
      endYear: 2022,
      episodeCount: 6,
      roles: [
        {
          character: "Self - Interviewee",
          episodeCount: 6
        }
      ],
      startYear: 2009,
      id: "/title/tt0390699/",
      image: {
        height: 804,
        id: "/title/tt0390699/images/rm2073648640",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDE3NzY4M2YtN2E4Zi00ZWViLWEwZDgtMjllOTYyYzlhZjUxXkEyXkFqcGdeQXVyNjk1NTQ2NzI@._V1_.jpg",
        width: 564
      },
      status: "released",
      title: "Días de cine",
      titleType: "tvSeries",
      year: 1991,
      episodes: [
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt23146752/",
          status: "released",
          title: "Episode dated 5 August 2022",
          titleType: "tvEpisode",
          year: 2022,
          releaseDate: "2022-08-05"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt10959398/",
          status: "released",
          title: "Episode dated 16 August 2019",
          titleType: "tvEpisode",
          year: 2019,
          releaseDate: "2019-08-16"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt6323826/",
          status: "released",
          title: "Episode dated 24 November 2016",
          titleType: "tvEpisode",
          year: 2016,
          releaseDate: "2016-11-24"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt4340134/",
          status: "released",
          title: "Episode dated 8 January 2015",
          titleType: "tvEpisode",
          year: 2015,
          releaseDate: "2015-01-08"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt2216441/",
          status: "released",
          title: "Episode dated 2 February 2012",
          titleType: "tvEpisode",
          year: 2012,
          releaseDate: "2012-02-02"
        }
      ],
      seriesStartYear: 1991
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0072506",
      category: "self",
      characters: ["Self - Guest", "Self"],
      endYear: 2022,
      episodeCount: 7,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 6
        },
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt0072506/",
      image: {
        height: 1600,
        id: "/title/tt0072506/images/rm531576577",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWRkN2ViYjYtNTg3YS00NTA2LWI1M2YtZWViNGIyMzRlMjcwXkEyXkFqcGdeQXVyODk4Nzg5NjE@._V1_.jpg",
        width: 1200
      },
      status: "released",
      title: "Good Morning America",
      titleType: "tvSeries",
      year: 1975,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt21406036/",
          status: "released",
          title: "Episode dated 4 August 2022",
          titleType: "tvEpisode",
          year: 2022,
          releaseDate: "2022-08-04"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21363046/",
          status: "released",
          title: "Episode dated 28 July 2022",
          titleType: "tvEpisode",
          year: 2022,
          releaseDate: "2022-07-28"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt11697974/",
          status: "released",
          title: "Episode dated 10 February 2020",
          titleType: "tvEpisode",
          year: 2020,
          releaseDate: "2020-02-10"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt10933304/",
          status: "released",
          title: "Episode dated 9 September 2019",
          titleType: "tvEpisode",
          year: 2019,
          releaseDate: "2019-09-09"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt4086476/",
          status: "released",
          title: "Episode dated 17 October 2014",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-10-17"
        }
      ],
      seriesStartYear: 1975
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt21480862",
      category: "self",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2022,
      id: "/title/tt21480862/",
      image: {
        height: 1015,
        id: "/title/tt21480862/images/rm3742305793",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTA1ZDEzMGQtNmU4NC00MmM4LTgwYzgtNWRjNWNiYWIyZGYyXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 983
      },
      status: "released",
      title: "La boîte à questions",
      titleType: "tvSeries",
      year: 2004,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21481158/",
          status: "released",
          title: "Episode dated 31 July 2022",
          titleType: "tvEpisode",
          year: 2022,
          releaseDate: "2022-07-31"
        }
      ],
      seriesStartYear: 2004
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt8638066",
      category: "self",
      characters: ["Self"],
      endYear: 2022,
      episodeCount: 32,
      roles: [
        {
          character: "Self",
          episodeCount: 32
        }
      ],
      startYear: 2019,
      id: "/title/tt8638066/",
      image: {
        height: 2202,
        id: "/title/tt8638066/images/rm3578152448",
        url:
          "https://m.media-amazon.com/images/M/MV5BZmMyNThjYmItNTFhNi00ZWNiLTgzNTctOGQ0M2FiMmJjNjMzXkEyXkFqcGdeQXVyNjk3ODkyODQ@._V1_.jpg",
        width: 1624
      },
      status: "released",
      title: "Hollywood Insider",
      titleType: "tvSeries",
      year: 2018,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt23743354/",
          status: "released",
          title:
            "Our Obsession With WWII & Crazy Dictators in Media - War Movies & TV - Putin and Before",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 23,
          releaseDate: "2022-05-19",
          seasonNumber: 16
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt23140670/",
          status: "released",
          title:
            "A Tribute to Gwyneth Paltrow: Award-Winning Actress and 'Sex, Love & Goop' Executive Producer",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 88,
          releaseDate: "2022-03-03",
          seasonNumber: 14
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt22496212/",
          status: "released",
          title:
            "The Few Times Humorists Have Scored Academy Gold: A Short List of Comedic Oscar-Winners",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 6,
          releaseDate: "2022-01-06",
          seasonNumber: 14
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt22496002/",
          status: "released",
          title: "The Rise and Journey of Jonah Hill - Actor, Writer, Director",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 3,
          releaseDate: "2022-01-04",
          seasonNumber: 14
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt22475874/",
          status: "released",
          title:
            "A Tribute to Sir Roger Deakins: How the British Cinematographer Became the Greatest Eye in Hollywood",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 59,
          releaseDate: "2021-10-14",
          seasonNumber: 13
        }
      ],
      seriesStartYear: 2018
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt7105720/",
      image: {
        height: 1333,
        id: "/title/tt7105720/images/rm4049766401",
        url:
          "https://m.media-amazon.com/images/M/MV5BN2U2ZWNkYWYtZDBjMi00Yjc3LWI4ZTEtZWUyMDAzNjM0OGQ3XkEyXkFqcGdeQXVyMzY4MDA4MA@@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "Answers to Questions You Didn't Know to Ask About Climate Change",
      titleType: "movie",
      year: 2021
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt15012326/",
      image: {
        height: 3000,
        id: "/title/tt15012326/images/rm2046228737",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTlmZDJiOTAtNjBiYy00ZDY4LWExYmQtNDgwOTk5N2MwMjhhXkEyXkFqcGdeQXVyNjc1OTk4NjA@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "Brangelina: The Inside Story",
      titleType: "movie",
      year: 2021
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt15012312/",
      image: {
        height: 3000,
        id: "/title/tt15012312/images/rm1375140097",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzAyMDRjYmUtNWNjOC00NDhjLTkwMjgtZjI5YmE3OWY4ZTU5XkEyXkFqcGdeQXVyNjc1OTk4NjA@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "Brad Pitt: Breaking Hollywood",
      titleType: "movie",
      year: 2021
    },
    {
      billing: 3,
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt10471902/",
      image: {
        height: 1350,
        id: "/title/tt10471902/images/rm755353857",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjM4NGEzOTYtYmY1Mi00ZjZiLWE3M2UtN2Y0NGRiOWRkODRjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "The Oscars",
      titleType: "tvSpecial",
      year: 2021
    },
    {
      attr: ["voice"],
      category: "self",
      characters: ["Self - Narrator"],
      roles: [
        {
          character: "Self - Narrator"
        }
      ],
      id: "/title/tt11600990/",
      image: {
        height: 1280,
        id: "/title/tt11600990/images/rm1517082369",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGE0MThhYjQtZTcwNy00YWFjLWI5ZTQtOGYyMGRhZTg1OWJiXkEyXkFqcGdeQXVyNzkyMDA5MTc@._V1_.jpg",
        width: 986
      },
      status: "released",
      title: "Super Bowl LV",
      titleType: "tvSpecial",
      year: 2021
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt16220616/",
      image: {
        height: 3240,
        id: "/title/tt16220616/images/rm914623745",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTI3NWM1ODAtMDNhNC00MjgwLWFkYzItZGViNWQzOTdjMDhkXkEyXkFqcGdeQXVyNjU2ODg3MTE@._V1_.jpg",
        width: 2288
      },
      status: "released",
      title: "Success Formula",
      titleType: "movie",
      year: 2021
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt12824902/",
      image: {
        height: 766,
        id: "/title/tt12824902/images/rm631961857",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDY5ZjMwOWQtZjUwNS00MDliLWI0NWUtOWZkOWMzNjNkYzlmXkEyXkFqcGdeQXVyNjAzNjYxOTU@._V1_.jpg",
        width: 1360
      },
      status: "released",
      title: "John Lewis: Celebrating a Hero",
      titleType: "tvSpecial",
      year: 2020
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt12567114/",
      status: "released",
      title: "United We Sing: A Grammy Tribute to the Unsung Heroes",
      titleType: "tvSpecial",
      year: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3444938",
      category: "self",
      characters: ["Self - Guest", "Self"],
      endYear: 2020,
      episodeCount: 3,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 2
        },
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2014,
      id: "/title/tt3444938/",
      image: {
        height: 1000,
        id: "/title/tt3444938/images/rm2439443969",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjAyMDJhZjMtNTkzOS00ZjYzLTlkNjktOTNhMWU4Njg5ZTIyXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
        width: 675
      },
      status: "released",
      title: "The Tonight Show Starring Jimmy Fallon",
      titleType: "tvSeries",
      year: 2014,
      episodes: [
        {
          billing: 4,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt12374454/",
          status: "released",
          title:
            "At Home Edition: Staff Favorites - Jennifer Lopez/Michelle Obama/Brad Pitt",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 165,
          releaseDate: "2020-05-26",
          seasonNumber: 7
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt10957220/",
          image: {
            height: 2813,
            id: "/title/tt10957220/images/rm1606718721",
            url:
              "https://m.media-amazon.com/images/M/MV5BNGI5MzIzYjYtNTJkYy00OWMzLTg4Y2MtOTRlNzcwZTAxOTIwXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_.jpg",
            width: 5000
          },
          status: "released",
          title: "Sylvester Stallone/Cedric the Entertainer/Mark Normand",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 13,
          releaseDate: "2019-09-19",
          seasonNumber: 7
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt4107386/",
          status: "released",
          title: "Shailene Woodley/Michael Shannon/Eric Church",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 32,
          releaseDate: "2014-10-15",
          seasonNumber: 2
        }
      ],
      seriesStartYear: 2014
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0072562",
      category: "self",
      characters: ["Self", "Self - Host"],
      endYear: 2020,
      episodeCount: 3,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        },
        {
          character: "Self - Host",
          episodeCount: 1
        }
      ],
      startYear: 1998,
      id: "/title/tt0072562/",
      image: {
        height: 1000,
        id: "/title/tt0072562/images/rm3198717185",
        url:
          "https://m.media-amazon.com/images/M/MV5BY2YxODFmOGUtMjY1OC00YTk5LTlkNWEtMzU5MWYxNTgwNzkxXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
        width: 675
      },
      status: "released",
      title: "Saturday Night Live",
      titleType: "tvSeries",
      year: 1975,
      episodes: [
        {
          category: "self",
          characters: ["Self - Host"],
          roles: [
            {
              character: "Self - Host"
            }
          ],
          id: "/title/tt11992262/",
          image: {
            height: 709,
            id: "/title/tt11992262/images/rm2567418625",
            url:
              "https://m.media-amazon.com/images/M/MV5BOThiYWYzOGEtYjA0MS00MjYzLWIxODctMDdlMzY4OWYwNmMxXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
            width: 1260
          },
          status: "released",
          title: "SNL At Home: Brad Pitt/Miley Cyrus",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 17,
          releaseDate: "2020-04-25",
          seasonNumber: 45
        },
        {
          attr: ["voice"],
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0694845/",
          image: {
            height: 762,
            id: "/title/tt0694845/images/rm945455873",
            url:
              "https://m.media-amazon.com/images/M/MV5BODgzMjFlMjctZTFhZi00MThlLTg1NTUtMDBjZjRhYzdiMjYzXkEyXkFqcGdeQXVyMjM2ODYwMQ@@._V1_.jpg",
            width: 1000
          },
          status: "released",
          title: "Al Gore/Phish",
          titleType: "tvEpisode",
          year: 2002,
          episodeNumber: 8,
          releaseDate: "2002-12-14",
          seasonNumber: 28
        },
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0694762/",
          image: {
            height: 756,
            id: "/title/tt0694762/images/rm3016655617",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzU3N2JjZjUtMjI0NS00NjI3LWJmNzUtZTNiYTRiYWRlZTc4XkEyXkFqcGdeQXVyMjM2ODYwMQ@@._V1_.jpg",
            width: 1000
          },
          status: "released",
          title: "David Spade/Eagle-Eye Cherry",
          titleType: "tvEpisode",
          year: 1998,
          episodeNumber: 5,
          releaseDate: "1998-11-07",
          seasonNumber: 24
        }
      ],
      seriesStartYear: 1975
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt12054924",
      category: "self",
      characters: ["Self - SGN Meteorologist"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self - SGN Meteorologist",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt12054924/",
      image: {
        height: 600,
        id: "/title/tt12054924/images/rm1503244545",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTU5M2ZjNWItMjgwYi00ZmMwLWIyNmItMWJhOGI5Y2Y4OTFjXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg",
        width: 400
      },
      status: "released",
      title: "Some Good News",
      titleType: "tvSeries",
      year: 2020,
      episodes: [
        {
          category: "self",
          characters: ["Self - SGN Meteorologist"],
          roles: [
            {
              character: "Self - SGN Meteorologist"
            }
          ],
          id: "/title/tt12176006/",
          image: {
            height: 720,
            id: "/title/tt12176006/images/rm1038725889",
            url:
              "https://m.media-amazon.com/images/M/MV5BOGQyZTllNDctMTI1Mi00ZGVlLTgyNmUtM2MxNzAyNDRlYTA3XkEyXkFqcGdeQXVyMTE2NjAxNDAy._V1_.jpg",
            width: 1279
          },
          status: "released",
          title: "SGN Prom",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 4,
          releaseDate: "2020-04-19",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2020,
      seriesStartYear: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt12138676",
      category: "self",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt12138676/",
      image: {
        height: 1000,
        id: "/title/tt12138676/images/rm2382803457",
        url:
          "https://m.media-amazon.com/images/M/MV5BODI3ZGFjMmYtZDA4NS00MmY5LTgyNWQtOTg4NzM3Yjk0YjA5XkEyXkFqcGdeQXVyMjIzMTQ5NjE@._V1_.jpg",
        width: 680
      },
      status: "released",
      title: "Celebrity IOU",
      titleType: "tvSeries",
      year: 2020,
      episodes: [
        {
          billing: 3,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt12139144/",
          image: {
            height: 720,
            id: "/title/tt12139144/images/rm3104223745",
            url:
              "https://m.media-amazon.com/images/M/MV5BY2JhN2IxOGEtOTBmMi00YjQ3LWFhNzctN2QyYjI0ZjZkNTk1XkEyXkFqcGdeQXVyMjIzMTQ5NjE@._V1_.jpg",
            width: 1280
          },
          status: "released",
          title: "Brad Pitt's Gifting a Backyard Pad",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 1,
          releaseDate: "2020-04-13",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt12205920",
      category: "self",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt12205920/",
      image: {
        height: 1920,
        id: "/title/tt12205920/images/rm2792534785",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjdjNjZkNzUtNzFjMi00MGM5LTlmNTktNzE5OGJiM2E0M2Q3XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "AFI Movie Club",
      titleType: "tvSeries",
      year: 2020,
      episodes: [
        {
          billing: 1,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt12208924/",
          image: {
            height: 1080,
            id: "/title/tt12208924/images/rm3578508033",
            url:
              "https://m.media-amazon.com/images/M/MV5BMjI1NzYwNWUtMjVhOS00MzczLTkwNTgtZTgwMWJmNDNkZjRhXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
            width: 2220
          },
          status: "released",
          title: "Brad Pitt announces Butch Cassidy and the Sundance Kid",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 5,
          releaseDate: "2020-04-06",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1322807",
      category: "self",
      characters: ["Self - Interview"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Interview",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt1322807/",
      image: {
        height: 694,
        id: "/title/tt1322807/images/rm3721055233",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjMwMmZiYzktYTE2ZS00MGQ0LThmMWEtMzhjODdjMGRmNDZhXkEyXkFqcGdeQXVyMTMwODk5ODQz._V1_.jpg",
        width: 1236
      },
      status: "released",
      title: "Red! - Stars, Lifestyle & More",
      titleType: "tvSeries",
      year: 2008,
      episodes: [
        {
          category: "self",
          characters: ["Self - Interview"],
          roles: [
            {
              character: "Self - Interview"
            }
          ],
          id: "/title/tt11786794/",
          status: "released",
          title: "Oscar 2020 red. Carpet Live",
          titleType: "tvEpisode",
          year: 2020,
          releaseDate: "2020-02-10"
        }
      ],
      seriesStartYear: 2008
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0096636",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2020,
      episodeCount: 3,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 3
        }
      ],
      startYear: 2007,
      id: "/title/tt0096636/",
      image: {
        height: 1080,
        id: "/title/tt0096636/images/rm63647233",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzJmYWQ3YWYtZjZjOC00NTBiLWIwZTktNTYxMDM3MzU5ZjNmXkEyXkFqcGdeQXVyMDAwMDAwMw@@._V1_.jpg",
        width: 828
      },
      status: "released",
      title: "Live with Kelly and Mark",
      titleType: "tvSeries",
      year: 1988,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt11739962/",
          status: "released",
          title: "Live's After Oscar Show - 2020",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 108,
          releaseDate: "2020-02-10",
          seasonNumber: 32
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt3562952/",
          status: "released",
          title: "Academy Awards Recap/Indie-Rock Group American Authors",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 129,
          releaseDate: "2014-03-03",
          seasonNumber: 26
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1158455/",
          status: "released",
          title: "Episode dated 24 December 2007",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-12-24"
        }
      ],
      seriesStartYear: 1988
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0320037",
      category: "self",
      characters: [
        "Self",
        "Self - Guest",
        "Self - Delivery Man",
        "Self - Ocean's 13 Premiere"
      ],
      endYear: 2020,
      episodeCount: 4,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        },
        {
          character: "Self - Guest",
          episodeCount: 1
        },
        {
          character: "Self - Delivery Man",
          episodeCount: 1
        },
        {
          character: "Self - Ocean's 13 Premiere",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt0320037/",
      image: {
        height: 3000,
        id: "/title/tt0320037/images/rm2024633344",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTFhOWQwMTktYTJlOS00ZGExLWIzMDYtNGU2NTFiOTZjNDZjXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg",
        width: 2250
      },
      status: "released",
      title: "Jimmy Kimmel Live!",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11585800/",
          status: "released",
          title:
            'Harrison Ford/"Science Bob" Pflugfelder/Wiz Khalifa/Ty Dolla Sign/Lil Yachty/Sueco the Child',
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 11,
          releaseDate: "2020-02-10",
          seasonNumber: 18
        },
        {
          billing: 2,
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt10661660/",
          image: {
            height: 750,
            id: "/title/tt10661660/images/rm706583809",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzUyMmJhMzUtMDhhMC00OGVkLTk2M2MtYzY5ZWRiZTJlZmI0XkEyXkFqcGdeQXVyNDg1MzczOA@@._V1_.jpg",
            width: 1334
          },
          status: "released",
          title:
            "Brad Pitt/Leonardo DiCaprio/Margot Robbie/Quentin Tarantino/Keith L. Williams/Tal Wilkerfeld",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 98,
          releaseDate: "2019-07-22",
          seasonNumber: 17
        },
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self - Delivery Man"],
          roles: [
            {
              character: "Self - Delivery Man"
            }
          ],
          id: "/title/tt1191489/",
          status: "released",
          title: "Ben Affleck/Mary J. Blige/Cleto Escobedo III",
          titleType: "tvEpisode",
          year: 2008,
          episodeNumber: 30,
          releaseDate: "2008-02-24",
          seasonNumber: 6
        },
        {
          category: "self",
          characters: ["Self - Ocean's 13 Premiere"],
          roles: [
            {
              character: "Self - Ocean's 13 Premiere"
            }
          ],
          id: "/title/tt1048570/",
          status: "released",
          title: "Episode #5.1",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 1,
          releaseDate: "2007-06-05",
          seasonNumber: 5
        }
      ],
      seriesStartYear: 2003
    },
    {
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt10305932/",
      image: {
        height: 512,
        id: "/title/tt10305932/images/rm4075928065",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjQ0M2Q4YmQtNTRkNS00ZjFkLWI4ZWMtZjc2Njg3MzEwZGY4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
        width: 364
      },
      status: "released",
      title: "The Oscars",
      titleType: "tvSpecial",
      year: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3503424",
      category: "self",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt3503424/",
      image: {
        height: 1440,
        id: "/title/tt3503424/images/rm471876864",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjQ1ZjYwNTktYjIyZC00ZTgyLWFkNWEtNDA4MjI1YWY1OWFiXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Celebrity Page",
      titleType: "tvSeries",
      year: 2013,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11708810/",
          status: "released",
          title: "Episode #5.115",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 115,
          releaseDate: "2020-02-07",
          seasonNumber: 5
        }
      ],
      seriesStartYear: 2013
    },
    {
      attr: ["creditOnly"],
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt11338406/",
      image: {
        height: 3600,
        id: "/title/tt11338406/images/rm1623950593",
        url:
          "https://m.media-amazon.com/images/M/MV5BZmI5NGJmMTEtN2M1OS00NWIzLTg0Y2QtZmI2MjBmZDc3MTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        width: 2400
      },
      status: "released",
      title: "EE British Academy Film Awards",
      titleType: "tvSpecial",
      year: 2020
    },
    {
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt10751088/",
      image: {
        height: 450,
        id: "/title/tt10751088/images/rm1458930689",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjFhZGFkZjEtMGFiOS00ZjI3LWFlMDYtMTc4ZWM5ZDhiMzU0XkEyXkFqcGdeQXVyNjc1MjU4MjE@._V1_.jpg",
        width: 790
      },
      status: "released",
      title: "The 26th Annual Screen Actors Guild Awards",
      titleType: "tvSpecial",
      year: 2020
    },
    {
      attr: ["creditOnly"],
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt10150518/",
      image: {
        height: 900,
        id: "/title/tt10150518/images/rm778929665",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWQ1YTU2YjEtODg4MC00MDJlLWE2Y2EtYzBlNjRmYmRjMTc4XkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 600
      },
      status: "released",
      title: "The 25th Annual Critics' Choice Awards",
      titleType: "tvSpecial",
      year: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt12058860",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt12058860/",
      image: {
        height: 1000,
        id: "/title/tt12058860/images/rm1971436545",
        url:
          "https://m.media-amazon.com/images/M/MV5BMWFhZjczMjMtNzM0ZS00MjAwLWEyMGQtYTdkZjRjMGIwOGU4XkEyXkFqcGdeQXVyMzc0MjM5OQ@@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "WTF with Marc Maron",
      titleType: "podcastSeries",
      year: 2009,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt14994068/",
          status: "released",
          title: "Brad Pitt & Leonardo DiCaprio",
          titleType: "podcastEpisode",
          year: 2020,
          episodeNumber: 1086,
          releaseDate: "2020-01-06",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2009
    },
    {
      billing: 63,
      category: "self",
      characters: ["Self - Presenter & Winner"],
      roles: [
        {
          character: "Self - Presenter & Winner"
        }
      ],
      id: "/title/tt10821190/",
      image: {
        height: 960,
        id: "/title/tt10821190/images/rm800948225",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmZiMWE1MjgtMDY0Mi00ZTc1LWIyMDAtMjA1NGU0OTQ5MjFkXkEyXkFqcGdeQXVyNzA2NjE1NjA@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "2020 Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt4267324",
      category: "self",
      characters: ["Self"],
      endYear: 2020,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2020,
      id: "/title/tt4267324/",
      image: {
        height: 3000,
        id: "/title/tt4267324/images/rm2200969473",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTFiNzIxNTEtOTk0NC00YWJjLWE2YWEtZWY1MzI3MTU1Zjc5XkEyXkFqcGdeQXVyNjM2MTk3MjQ@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "Variety Studio: Actors on Actors",
      titleType: "tvSeries",
      year: 2014,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt14372406/",
          status: "released",
          title: "Episode #11.1",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 1,
          releaseDate: "2020-01-02",
          seasonNumber: 11
        }
      ],
      seriesStartYear: 2014
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt12106190/",
      image: {
        height: 875,
        id: "/title/tt12106190/images/rm3818913537",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTc4YWRmMDEtM2I1Ny00Y2VkLTgxYzYtMWM0YTBjY2M4M2Y2XkEyXkFqcGdeQXVyNjAyNDgxMjY@._V1_.jpg",
        width: 2000
      },
      title: "Boursorama Banque: Brad Pitt",
      titleType: "video",
      year: 2019
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt10525658",
      category: "self",
      characters: ["Self"],
      endYear: 2019,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2019,
      id: "/title/tt10525658/",
      image: {
        height: 1800,
        id: "/title/tt10525658/images/rm2849641985",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjNiNDk2ZjQtMDhiYi00ODhjLTk3M2QtMTVkNDI4MzMxZjgzXkEyXkFqcGdeQXVyMTk2NDkyOQ@@._V1_.jpg",
        width: 1215
      },
      status: "released",
      title: "Front Row Flynn",
      titleType: "tvSeries",
      year: 2018,
      episodes: [
        {
          billing: 3,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt21099932/",
          status: "released",
          title:
            "ONCE UPON A TIME IN HOLLYWOOD: Leonardo DiCaprio, Brad Pitt, Julia Butters, Margaret Qualley, Mike Moh, moderator Marc Malkin",
          titleType: "tvEpisode",
          year: 2019,
          releaseDate: "2019-12-20"
        }
      ],
      seriesStartYear: 2018
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt21942610/",
      status: "released",
      title: "Once Upon a Time in Hollywood Live Q&A",
      titleType: "tvSpecial",
      year: 2019
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0379623",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2019,
      episodeCount: 3,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 3
        }
      ],
      startYear: 2008,
      id: "/title/tt0379623/",
      image: {
        height: 1473,
        id: "/title/tt0379623/images/rm3709881600",
        url:
          "https://m.media-amazon.com/images/M/MV5BODA5ZDQyMzYtZWQwMy00MDQ1LWE2OGUtNGYyNTk0Y2NhZGM4XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "The Ellen DeGeneres Show",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          billing: 2,
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt10509478/",
          status: "released",
          title: "Brad Pitt/Sean Hayes/Naomi Osaka",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 5,
          releaseDate: "2019-09-13",
          seasonNumber: 17
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2052453/",
          status: "released",
          title: "Episode #9.9",
          titleType: "tvEpisode",
          year: 2011,
          episodeNumber: 9,
          releaseDate: "2011-09-22",
          seasonNumber: 9
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1336716/",
          status: "released",
          title: "Episode #6.62",
          titleType: "tvEpisode",
          year: 2008,
          episodeNumber: 62,
          releaseDate: "2008-12-03",
          seasonNumber: 6
        }
      ],
      seriesEndYear: 2023,
      seriesStartYear: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0428108",
      category: "self",
      characters: ["Self"],
      endYear: 2019,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2019,
      id: "/title/tt0428108/",
      image: {
        height: 3300,
        id: "/title/tt0428108/images/rm3882238720",
        url:
          "https://m.media-amazon.com/images/M/MV5BMWFlM2IwNmItZjRhMS00NDk2LTlhNzgtZjczNDFlN2MzYzEzXkEyXkFqcGdeQXVyMzk3NDAxMzk@._V1_.jpg",
        width: 2550
      },
      status: "released",
      title: "Entertainers with Byron Allen",
      titleType: "tvSeries",
      year: 2000,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10821470/",
          status: "released",
          title: "Episode #25.44",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 44,
          releaseDate: "2019-08-16",
          seasonNumber: 25
        }
      ],
      seriesStartYear: 2000
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt16069652",
      category: "self",
      characters: ["Self"],
      endYear: 2019,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2019,
      id: "/title/tt16069652/",
      image: {
        height: 720,
        id: "/title/tt16069652/images/rm4034061057",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTZhMTYyMzUtOGEzNS00ZWM0LTk1MWItOWIzNjk0OWE4ZTYyXkEyXkFqcGdeQXVyNzgxNDk0NTI@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "Celebrity Interviews",
      titleType: "tvSeries",
      year: 2018,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt11273218/",
          image: {
            height: 720,
            id: "/title/tt11273218/images/rm2351727105",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzU2ODc2ZWUtNGExOC00MzYxLThjYmQtNDA2N2Y2MTIxZjE1XkEyXkFqcGdeQXVyNzgxNDk0NTI@._V1_.jpg",
            width: 1280
          },
          status: "released",
          title: "Brad Pitt and Margot Robbie Made Me NERVOUS!",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 5,
          releaseDate: "2019-08-07",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2018
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3644198",
      category: "self",
      characters: ["Self"],
      endYear: 2019,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2019,
      id: "/title/tt3644198/",
      image: {
        height: 1620,
        id: "/title/tt3644198/images/rm2371892481",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDI2ZmU2YmItMzVkMy00Mzg2LWI1NDktZWQyMTNiODYzYmMxXkEyXkFqcGdeQXVyNjcwMzExMzU@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Good Morning Britain",
      titleType: "tvSeries",
      year: 2014,
      episodes: [
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10726528/",
          status: "released",
          title: "Episode dated 31 July 2019",
          titleType: "tvEpisode",
          year: 2019,
          releaseDate: "2019-07-31"
        }
      ],
      seriesStartYear: 2014
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt5139360",
      category: "self",
      characters: ["Self"],
      endYear: 2019,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2019,
      id: "/title/tt5139360/",
      image: {
        height: 1440,
        id: "/title/tt5139360/images/rm277526017",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDY2Y2IxNjctZjU0Ny00NTlmLWJiNTQtYzViZTA0YzI2MmI0XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "WGN Morning News",
      titleType: "tvSeries",
      year: 1994,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10680576/",
          status: "released",
          title: "Episode dated 22 July 2019",
          titleType: "tvEpisode",
          year: 2019,
          releaseDate: "2019-07-22"
        }
      ],
      seriesStartYear: 1994
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0044298",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2019,
      episodeCount: 4,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 4
        }
      ],
      startYear: 1995,
      id: "/title/tt0044298/",
      image: {
        height: 1440,
        id: "/title/tt0044298/images/rm1756198656",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGUxMTc3ZWQtMWNhZS00YjgxLWFjNGEtOTk0ZDcxN2UwNGNjXkEyXkFqcGdeQXVyNjE4MDA0Mjg@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Today",
      titleType: "tvSeries",
      year: 1952,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt10602092/",
          status: "released",
          title: "Episode dated 15 July 2019",
          titleType: "tvEpisode",
          year: 2019,
          releaseDate: "2019-07-15"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt5137398/",
          status: "released",
          title: "Episode dated 2 November 2015",
          titleType: "tvEpisode",
          year: 2015,
          releaseDate: "2015-11-02"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2194187/",
          status: "released",
          title: "Episode dated 24 January 2012",
          titleType: "tvEpisode",
          year: 2012,
          releaseDate: "2012-01-24"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2402057/",
          status: "released",
          title: "Episode dated 21 February 1995",
          titleType: "tvEpisode",
          year: 1995,
          releaseDate: "1995-02-21"
        }
      ],
      seriesStartYear: 1952
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0482346",
      category: "self",
      characters: ["Self"],
      endYear: 2019,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2019,
      id: "/title/tt0482346/",
      image: {
        height: 1000,
        id: "/title/tt0482346/images/rm3689458945",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmI1ZmZiYTctODMzYS00ZjcxLWI2ZGItNTU3YTQ0M2Q5NWM1XkEyXkFqcGdeQXVyNjUxODQ1NDY@._V1_.jpg",
        width: 678
      },
      status: "released",
      title: "Entertainment Tonight Canada",
      titleType: "tvSeries",
      year: 2005,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10560500/",
          status: "released",
          title: "ET Canada's Summer Blockbusters",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 631,
          releaseDate: "2019-06-28",
          seasonNumber: 14
        }
      ],
      seriesStartYear: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt6987966",
      as: "Weatherman",
      category: "self",
      characters: ["Weatherman"],
      endYear: 2018,
      episodeCount: 7,
      roles: [
        {
          character: "Weatherman",
          characterId: "/character/ch0576924/",
          episodeCount: 7
        }
      ],
      startYear: 2017,
      id: "/title/tt6987966/",
      image: {
        height: 1600,
        id: "/title/tt6987966/images/rm3903138048",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjEwNjc2NDI1M15BMl5BanBnXkFtZTgwODEyOTQ2MjI@._V1_.jpg",
        width: 1200
      },
      status: "released",
      title: "The Jim Jefferies Show",
      titleType: "tvSeries",
      year: 2017,
      episodes: [
        {
          billing: 4,
          category: "self",
          characters: ["Weatherman"],
          roles: [
            {
              character: "Weatherman",
              characterId: "/character/ch0576924/"
            }
          ],
          id: "/title/tt9313702/",
          status: "released",
          title: "Jim Becomes a U.S. Citizen",
          titleType: "tvEpisode",
          year: 2018,
          episodeNumber: 30,
          releaseDate: "2018-11-20",
          seasonNumber: 2
        },
        {
          billing: 4,
          category: "self",
          characters: ["Weatherman"],
          roles: [
            {
              character: "Weatherman",
              characterId: "/character/ch0576924/"
            }
          ],
          id: "/title/tt8205418/",
          image: {
            height: 322,
            id: "/title/tt8205418/images/rm2491761664",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTI2OGQyOTctMWY0YS00NzU4LTk0MDgtMmE1MzQ0OGRlMDlhXkEyXkFqcGdeQXVyNTgzMTg5Ng@@._V1_.jpg",
            width: 640
          },
          status: "released",
          title: "Questioning Trump's North Korea Strategy",
          titleType: "tvEpisode",
          year: 2018,
          episodeNumber: 6,
          releaseDate: "2018-05-01",
          seasonNumber: 2
        },
        {
          as: "Weatherman",
          billing: 2,
          category: "self",
          characters: ["Weatherman"],
          roles: [
            {
              character: "Weatherman",
              characterId: "/character/ch0576924/"
            }
          ],
          id: "/title/tt7122930/",
          status: "released",
          title: "America's Age of Unenlightenment",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 6,
          releaseDate: "2017-07-18",
          seasonNumber: 1
        },
        {
          as: "Weatherman",
          billing: 2,
          category: "self",
          characters: ["Weatherman"],
          roles: [
            {
              character: "Weatherman",
              characterId: "/character/ch0576924/"
            }
          ],
          id: "/title/tt7076558/",
          status: "released",
          title: "Understanding the First Amendment",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 5,
          releaseDate: "2017-07-11",
          seasonNumber: 1
        },
        {
          as: "Weatherman",
          billing: 2,
          category: "self",
          characters: ["Weatherman"],
          roles: [
            {
              character: "Weatherman",
              characterId: "/character/ch0576924/"
            }
          ],
          id: "/title/tt6996002/",
          status: "released",
          title: "Criminal Injustice",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 3,
          releaseDate: "2017-06-20",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2019,
      seriesStartYear: 2017
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt7002460",
      category: "self",
      characters: ["Self - Spectator"],
      endYear: 2017,
      episodeCount: 2,
      roles: [
        {
          character: "Self - Spectator",
          episodeCount: 2
        }
      ],
      startYear: 2017,
      id: "/title/tt7002460/",
      image: {
        height: 405,
        id: "/title/tt7002460/images/rm3649579264",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzI1NzU4NmEtZDNjOS00Y2Y2LThkNDQtYmY1YWYzMmRkNDQwXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Glastonbury 2017",
      titleType: "tvMiniSeries",
      year: 2017,
      episodes: [
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self - Spectator"],
          roles: [
            {
              character: "Self - Spectator"
            }
          ],
          id: "/title/tt7030560/",
          image: {
            height: 675,
            id: "/title/tt7030560/images/rm1480958977",
            url:
              "https://m.media-amazon.com/images/M/MV5BN2UzYTBmNTYtOTM1ZC00ODVlLWJiNTUtOWE1YzY5MjM0OTNlXkEyXkFqcGdeQXVyNzI4MDMyMTU@._V1_.jpg",
            width: 1200
          },
          status: "released",
          title: "Kris Kristofferson and Royal Blood",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 3,
          releaseDate: "2017-06-23",
          seasonNumber: 1
        },
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self - Spectator"],
          roles: [
            {
              character: "Self - Spectator"
            }
          ],
          id: "/title/tt7030554/",
          image: {
            height: 2208,
            id: "/title/tt7030554/images/rm2242712321",
            url:
              "https://m.media-amazon.com/images/M/MV5BZjNlN2JmNzUtNjkwMC00YTAwLTliMTUtYzRlNTU2ZmI5ZTUxXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_.jpg",
            width: 1242
          },
          status: "released",
          title: "Day 1, Part 1",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 2,
          releaseDate: "2017-06-23",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2017,
      seriesStartYear: 2017
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3697842",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2017,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2017,
      id: "/title/tt3697842/",
      image: {
        height: 1440,
        id: "/title/tt3697842/images/rm632694272",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWU2MDU1ZjEtMDFhZC00NDQ4LTg5NzQtYjQ0Njg2NWI0MDI4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "The Late Show with Stephen Colbert",
      titleType: "tvSeries",
      year: 2015,
      episodes: [
        {
          billing: 2,
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt6870118/",
          status: "released",
          title: "Brad Pitt/Gina Rodriguez/Ben Falcone/Jesus and Mary Chain",
          titleType: "tvEpisode",
          year: 2017,
          episodeNumber: 150,
          releaseDate: "2017-05-16",
          seasonNumber: 2
        }
      ],
      seriesStartYear: 2015
    },
    {
      billing: 159,
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt5824900/",
      image: {
        height: 626,
        id: "/title/tt5824900/images/rm313853184",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzg5NTQ0ODM5NF5BMl5BanBnXkFtZTgwMzM0Mjk3MDI@._V1_.jpg",
        width: 424
      },
      status: "released",
      title: "The 74th Annual Golden Globe Awards 2017",
      titleType: "tvSpecial",
      year: 2017
    },
    {
      billing: 298,
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt4991632/",
      image: {
        height: 1116,
        id: "/title/tt4991632/images/rm1758127872",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjk3Nzg2OTgwOV5BMl5BanBnXkFtZTgwMzI0NDk2NzE@._V1_.jpg",
        width: 762
      },
      status: "released",
      title: "The Oscars",
      titleType: "tvSpecial",
      year: 2016
    },
    {
      billing: 79,
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt4399942/",
      image: {
        height: 1079,
        id: "/title/tt4399942/images/rm3319160064",
        url:
          "https://m.media-amazon.com/images/M/MV5BM2M1MjdkNWYtOGUwOS00MzQ4LWFhODEtODBkYTVmMDk1ZWQwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        width: 800
      },
      status: "released",
      title: "73rd Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2016
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0430836",
      category: "self",
      characters: ["Self", "Self - Fury"],
      endYear: 2015,
      episodeCount: 6,
      roles: [
        {
          character: "Self",
          episodeCount: 3
        },
        {
          character: "Self - Fury",
          episodeCount: 3
        }
      ],
      startYear: 2008,
      id: "/title/tt0430836/",
      image: {
        height: 1440,
        id: "/title/tt0430836/images/rm3161754881",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWFkZDg0NzUtYTA1Yy00N2RlLTllZjItNWMyYThmZjU0MzcyXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "The Insider",
      titleType: "tvSeries",
      year: 2004,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt5170690/",
          status: "released",
          title: "Episode #12.45",
          titleType: "tvEpisode",
          year: 2015,
          episodeNumber: 45,
          releaseDate: "2015-11-06",
          seasonNumber: 12
        },
        {
          category: "self",
          characters: ["Self - Fury"],
          roles: [
            {
              character: "Self - Fury"
            }
          ],
          id: "/title/tt4107944/",
          status: "released",
          title: "Episode dated 20 October 2014",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-10-20"
        },
        {
          category: "self",
          characters: ["Self - Fury"],
          roles: [
            {
              character: "Self - Fury"
            }
          ],
          id: "/title/tt4107936/",
          status: "released",
          title: "Episode dated 16 October 2014",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-10-16"
        },
        {
          category: "self",
          characters: ["Self - Fury"],
          roles: [
            {
              character: "Self - Fury"
            }
          ],
          id: "/title/tt3994466/",
          status: "released",
          title: "Episode dated 2 September 2014",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-09-02"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1239769/",
          status: "released",
          title: "Episode dated 15 April 2008",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-04-15"
        }
      ],
      seriesEndYear: 2017,
      seriesStartYear: 2004
    },
    {
      attr: ["voice"],
      billing: 1,
      category: "self",
      characters: ["Narrator"],
      roles: [
        {
          character: "Narrator"
        }
      ],
      id: "/title/tt4973112/",
      image: {
        height: 500,
        id: "/title/tt4973112/images/rm490663424",
        url:
          "https://m.media-amazon.com/images/M/MV5BODQ3Nzc3NzYxNF5BMl5BanBnXkFtZTgwMTIyOTg2NjE@._V1_.jpg",
        width: 333
      },
      status: "released",
      title: "Hitting the Apex",
      titleType: "movie",
      year: 2015
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5273460/",
      status: "released",
      title: "No Guts, No Glory: The Horrors of Combat",
      titleType: "video",
      year: 2015
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5272494/",
      status: "released",
      title:
        "Taming the Beasts: How to Drive, Fire and Shoot Inside a 30-Ton Tank",
      titleType: "video",
      year: 2015
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5272162/",
      status: "released",
      title: "Fury: Director's Combat Journal",
      titleType: "video",
      year: 2015
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5272060/",
      status: "released",
      title: "Fury: Blood Brothers",
      titleType: "video",
      year: 2015
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0166442",
      category: "self",
      characters: ["Self"],
      endYear: 2014,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2014,
      id: "/title/tt0166442/",
      image: {
        height: 1763,
        id: "/title/tt0166442/images/rm1325808897",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDM5MWQwOGMtYTc0Zi00ZmRhLWFhNzQtODY1MGNiY2M4MWJlXkEyXkFqcGdeQXVyOTQ1MjE4OTE@._V1_.jpg",
        width: 1175
      },
      status: "released",
      title: "Inside Edition",
      titleType: "tvSeries",
      year: 1988,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4249770/",
          status: "released",
          title: "Episode #26.67",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 67,
          releaseDate: "2014-12-16",
          seasonNumber: 26
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt3545562/",
          status: "released",
          title: "Inside the Oscars",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-03-03"
        }
      ],
      seriesStartYear: 1988
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1535002",
      category: "self",
      characters: ["Self"],
      endYear: 2014,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2014,
      id: "/title/tt1535002/",
      image: {
        height: 586,
        id: "/title/tt1535002/images/rm1257648128",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzc4MmNiYTUtNDJmNy00NjdhLTgxMjEtMjcyZWQ5NTA2ZGI3XkEyXkFqcGdeQXVyNTYyNDI4MzY@._V1_.jpg",
        width: 391
      },
      status: "released",
      title: "Between Two Ferns with Zach Galifianakis",
      titleType: "tvSeries",
      year: 2008,
      episodes: [
        {
          billing: 2,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4209906/",
          image: {
            height: 375,
            id: "/title/tt4209906/images/rm471083520",
            url:
              "https://m.media-amazon.com/images/M/MV5BM2UxMzI0MWUtNGM0Zi00OGFjLWI2OGQtOTU1MTE3NWUxNGQzXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Brad Pitt",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 20,
          releaseDate: "2014-10-22",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2008
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0426701",
      category: "self",
      characters: ["Self", "Self (Duplex)"],
      endYear: 2014,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        },
        {
          character: "Self (Duplex)",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt0426701/",
      image: {
        height: 441,
        id: "/title/tt0426701/images/rm3899660032",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTIwMmNlYTctM2Q2YS00MTBmLWEzZWUtNjkwYmZhMmIzZjZiXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Le grand journal de Canal+",
      titleType: "tvSeries",
      year: 2004,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4942572/",
          status: "released",
          title: "Episode dated 20 October 2014",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-10-20"
        },
        {
          category: "self",
          characters: ["Self (Duplex)"],
          roles: [
            {
              character: "Self (Duplex)"
            }
          ],
          id: "/title/tt21606940/",
          status: "released",
          title: "Episode dated 3 September 2007",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-09-03"
        }
      ],
      seriesStartYear: 2004
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0461732",
      category: "self",
      characters: ["Self"],
      endYear: 2014,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2014,
      id: "/title/tt0461732/",
      image: {
        height: 588,
        id: "/title/tt0461732/images/rm3579166465",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjMyYWU0YjAtMWJjOS00MTk5LWExM2YtZWQ5NTc5MDU4YTA1XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_.jpg",
        width: 446
      },
      status: "released",
      title: "Vivement dimanche prochain",
      titleType: "tvSeries",
      year: 1998,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4534282/",
          status: "released",
          title: "Episode dated 12 October 2014",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-10-12"
        }
      ],
      seriesStartYear: 1998
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0266134",
      category: "self",
      characters: ["Self"],
      endYear: 2014,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2014,
      id: "/title/tt0266134/",
      image: {
        height: 864,
        id: "/title/tt0266134/images/rm899008000",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTg5OTgzNzc0Ml5BMl5BanBnXkFtZTgwMzQ3MzY1MjE@._V1_.jpg",
        width: 583
      },
      status: "released",
      title: "E! News",
      titleType: "tvSeries",
      year: 1991,
      episodes: [
        {
          billing: 33,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt3916498/",
          image: {
            height: 375,
            id: "/title/tt3916498/images/rm570395905",
            url:
              "https://m.media-amazon.com/images/M/MV5BZjNkMjA3YWUtODIyZC00YjNlLTlkMzgtMTc4NmY3NTcyNTk0XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Episode dated 26 July 2014",
          titleType: "tvEpisode",
          year: 2014,
          releaseDate: "2014-07-26"
        }
      ],
      seriesStartYear: 1991
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5347586/",
      image: {
        height: 1500,
        id: "/title/tt5347586/images/rm2692880897",
        url:
          "https://m.media-amazon.com/images/M/MV5BNGVjOWJhODMtZmU5ZC00ZjBmLTk4OTQtNzBiMGRhYzI1Yzg3XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg",
        width: 1176
      },
      status: "released",
      title: "Pros and Cons: Inside Ocean's Outfit",
      titleType: "video",
      year: 2014
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1430587",
      category: "self",
      characters: ["Self"],
      endYear: 2014,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2014,
      id: "/title/tt1430587/",
      image: {
        height: 1440,
        id: "/title/tt1430587/images/rm2583805441",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWY4MWIzNDItMmM3MS00MjZkLTg0MzUtMjI2M2Y2ODI3NDRkXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Tosh.0",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt3470322/",
          image: {
            height: 375,
            id: "/title/tt3470322/images/rm716293888",
            url:
              "https://m.media-amazon.com/images/M/MV5BMjEyMDE2NTQyMl5BMl5BanBnXkFtZTgwODIzNTQ2MjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Ben's Video Resume",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 4,
          releaseDate: "2014-03-11",
          seasonNumber: 6
        }
      ],
      seriesEndYear: 2020,
      seriesStartYear: 2009
    },
    {
      billing: 143,
      category: "self",
      characters: ["Self - Winner & Presenter"],
      roles: [
        {
          character: "Self - Winner & Presenter"
        }
      ],
      id: "/title/tt2796782/",
      image: {
        height: 2844,
        id: "/title/tt2796782/images/rm1970997248",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGZhMzQ4MmMtYjQ4Zi00NTg2LTkwNDItY2I4NzRlNmU3NjM5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        width: 1920
      },
      status: "released",
      title: "The Oscars",
      titleType: "tvSpecial",
      year: 2014
    },
    {
      billing: 85,
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt3410698/",
      image: {
        height: 468,
        id: "/title/tt3410698/images/rm2141443328",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTU1NDMyODQ5OF5BMl5BanBnXkFtZTgwMzgxMjMyMTE@._V1_.jpg",
        width: 350
      },
      status: "released",
      title: "The 2014 Film Independent Spirit Awards",
      titleType: "tvSpecial",
      year: 2014
    },
    {
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt3453002/",
      image: {
        height: 1435,
        id: "/title/tt3453002/images/rm3939582976",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzI4YTBkM2EtYzRlOC00Mjk2LWFmNDItYWY0MmY3MzZhNGMwXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 1732
      },
      status: "released",
      title: "The EE British Academy Film Awards",
      titleType: "tvSpecial",
      year: 2014
    },
    {
      attr: ["creditOnly"],
      billing: 22,
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt3427762/",
      image: {
        height: 720,
        id: "/title/tt3427762/images/rm2826187521",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzc3ZDkxMzYtODEwOC00MGQ3LWIzNWUtMmNlYzQyYjQwMmUxXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "19th Annual Critics' Choice Movie Awards",
      titleType: "tvSpecial",
      year: 2014
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2502490",
      category: "self",
      characters: ["Self"],
      endYear: 2013,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2012,
      id: "/title/tt2502490/",
      image: {
        height: 500,
        id: "/title/tt2502490/images/rm3348996352",
        url:
          "https://m.media-amazon.com/images/M/MV5BODUxNjU2MjU4N15BMl5BanBnXkFtZTcwNjUyNjQzOQ@@._V1_.jpg",
        width: 353
      },
      status: "released",
      title: "Profiles in Philanthropy",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          billing: 3,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt4128280/",
          status: "released",
          title: "The Changing Times of Philanthropy",
          titleType: "tvEpisode",
          year: 2013,
          episodeNumber: 6,
          releaseDate: "2013-12-23",
          seasonNumber: 6
        },
        {
          billing: 3,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt2690434/",
          status: "released",
          title: "Athletes for Charity",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 8,
          releaseDate: "2012-09-19",
          seasonNumber: 5
        }
      ],
      seriesEndYear: 2014,
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0318220",
      category: "self",
      characters: ["Self", "Westray"],
      endYear: 2013,
      episodeCount: 8,
      roles: [
        {
          character: "Self",
          episodeCount: 7
        },
        {
          character: "Westray",
          episodeCount: 1
        }
      ],
      startYear: 2001,
      id: "/title/tt0318220/",
      image: {
        height: 780,
        id: "/title/tt0318220/images/rm95557376",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjg5ZDE3NTUtMjQ2Ni00MzgwLWI3ZjMtYTY3NDI0YjFjNjgyXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 576
      },
      status: "released",
      title: "HBO First Look",
      titleType: "tvSeries",
      year: 1992,
      episodes: [
        {
          category: "self",
          characters: ["Westray"],
          roles: [
            {
              character: "Westray"
            }
          ],
          id: "/title/tt3549968/",
          status: "released",
          title: "The Counselor",
          titleType: "tvEpisode",
          year: 2013,
          releaseDate: "2013-10-10"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1004457/",
          status: "released",
          title: "The Making of 'Ocean's Thirteen'",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 11,
          releaseDate: "2007-05-28",
          seasonNumber: 14
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0594872/",
          status: "released",
          title: "Mr. & Mrs. Smith",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 13,
          releaseDate: "2005-06-02",
          seasonNumber: 12
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0594876/",
          status: "released",
          title: "The Making of 'Ocean's Twelve'",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 23,
          releaseDate: "2004-12-02",
          seasonNumber: 11
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0408387/",
          status: "released",
          title: "Troy",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 8,
          releaseDate: "2004-05-05",
          seasonNumber: 11
        }
      ],
      seriesStartYear: 1992
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt6750992/",
      status: "released",
      title: "A Look at the Creation of World War Z's Zombies",
      titleType: "video",
      year: 2013
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt16304336/",
      image: {
        height: 640,
        id: "/title/tt16304336/images/rm1270017793",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjY5NTE5ZTgtNjY3OS00ODRlLTkyZTQtN2U0NmM1OWVjOTUzXkEyXkFqcGdeQXVyMjA3NzQyMA@@._V1_.jpg",
        width: 502
      },
      status: "released",
      title: "The Making of World War Z",
      titleType: "video",
      year: 2013
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt4264964",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2013,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2013,
      id: "/title/tt4264964/",
      image: {
        height: 648,
        id: "/title/tt4264964/images/rm2446009601",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDEyNWRlODEtYjA4Ny00ZGRmLThiOGQtMTI2ZGZkZGQ0OWUxXkEyXkFqcGdeQXVyMTY3NTY5OTcx._V1_.jpg",
        width: 489
      },
      status: "released",
      title: "Evening Urgant",
      titleType: "tvSeries",
      year: 2012,
      episodes: [
        {
          billing: 3,
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt5538020/",
          status: "released",
          title: "Brad Pitt/Candy King",
          titleType: "tvEpisode",
          year: 2013,
          episodeNumber: 152,
          releaseDate: "2013-06-25",
          seasonNumber: 2
        }
      ],
      seriesStartYear: 2012
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt3003906/",
      image: {
        height: 960,
        id: "/title/tt3003906/images/rm2311185408",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWZmYTEzNzgtZjY3Ni00YjJhLWE3YzYtYjBkNDU4NDg3NmVmXkEyXkFqcGdeQXVyNjMwOTA1MDM@._V1_.jpg",
        width: 1500
      },
      status: "released",
      title: "35-y Moskovskiy mezhdunarodnyy kinofestival",
      titleType: "tvSpecial",
      year: 2013
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1231460",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2013,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2013,
      id: "/title/tt1231460/",
      image: {
        height: 399,
        id: "/title/tt1231460/images/rm3234736896",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzdjOTU2ZGYtNzU3Zi00ZDNmLThiNjEtNGZkNWM2NTIzYjAzXkEyXkFqcGdeQXVyNzMxMzYyOTI@._V1_.jpg",
        width: 266
      },
      status: "released",
      title: "Late Night with Jimmy Fallon",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2976792/",
          status: "released",
          title: "Episode dated 18 June 2013",
          titleType: "tvEpisode",
          year: 2013,
          releaseDate: "2013-06-18"
        }
      ],
      seriesEndYear: 2014,
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0355143",
      category: "self",
      characters: ["Self"],
      endYear: 2013,
      episodeCount: 4,
      roles: [
        {
          character: "Self",
          episodeCount: 4
        }
      ],
      startYear: 2001,
      id: "/title/tt0355143/",
      image: {
        height: 1214,
        id: "/title/tt0355143/images/rm458300673",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjJiZjU1YmQtZTQxYS00ODE2LTk1ZWMtYjQ3YTM2YjU3NmEzXkEyXkFqcGdeQXVyNjE1MjkwNw@@._V1_.jpg",
        width: 900
      },
      status: "released",
      title: "taff",
      titleType: "tvSeries",
      year: 1995,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10176304/",
          status: "released",
          title: "Episode dated 5 June 2013",
          titleType: "tvEpisode",
          year: 2013,
          releaseDate: "2013-06-05"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10528722/",
          status: "released",
          title: "Episode dated 20 December 2007",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-12-20"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0931257/",
          status: "released",
          title: "Episode dated 28 December 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-12-28"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt10204518/",
          status: "released",
          title: "Episode dated 15 August 2001",
          titleType: "tvEpisode",
          year: 2001,
          releaseDate: "2001-08-15"
        }
      ],
      seriesStartYear: 1995
    },
    {
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt2806252/",
      image: {
        height: 2048,
        id: "/title/tt2806252/images/rm3526467840",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTY5MDk5Mjg3Ml5BMl5BanBnXkFtZTcwMzU1ODgzOQ@@._V1_.jpg",
        width: 1363
      },
      status: "released",
      title: "2013 MTV Movie Awards",
      titleType: "tvSpecial",
      year: 2013
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2816106/",
      status: "released",
      title: "The Making of 'Killing Them Softly'",
      titleType: "video",
      year: 2013
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2576350",
      category: "self",
      characters: ["Self"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt2576350/",
      image: {
        height: 1080,
        id: "/title/tt2576350/images/rm229836288",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGU1OTAzNTItNmQ5MS00MzFkLThlMzQtZTU3MWQ4N2YwYjhmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjM5OTEwNTU@._V1_.jpg",
        width: 1920
      },
      status: "released",
      title: "Celebrity Style Story",
      titleType: "tvSeries",
      year: 2012,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt5241252/",
          status: "released",
          title: "Brad Pitt",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 23,
          releaseDate: "2012-11-25",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2012
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt8333260/",
      status: "released",
      title: "Chanel No. 5: There You Are",
      titleType: "video",
      year: 2012
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt8333226/",
      status: "released",
      title: "Chanel No. 5: Wherever I Go",
      titleType: "video",
      year: 2012
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2936414/",
      image: {
        height: 1289,
        id: "/title/tt2936414/images/rm236370433",
        url:
          "https://m.media-amazon.com/images/M/MV5BY2Q1NWE0MGItZjM2Ny00MTM3LWFkN2YtM2EwZTA5MDNlMGFkXkEyXkFqcGdeQXVyNzgwMDY3MQ@@._V1_.jpg",
        width: 950
      },
      status: "released",
      title: "La classe américaine",
      titleType: "tvMovie",
      year: 2012
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0466518",
      category: "self",
      characters: ["Self"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt0466518/",
      image: {
        height: 1454,
        id: "/title/tt0466518/images/rm994263808",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDFmMDM1MzYtMzk3MS00ZDMyLWFkMjgtNjRlOTNjNGZlNjJiXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "Pânico na TV",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt2379108/",
          status: "released",
          title: "Episode dated 8 April 2012",
          titleType: "tvEpisode",
          year: 2012,
          releaseDate: "2012-04-08"
        }
      ],
      seriesEndYear: 2017,
      seriesStartYear: 2003
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt2089826/",
      image: {
        height: 1241,
        id: "/title/tt2089826/images/rm94416896",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTczMjk1NTAyNV5BMl5BanBnXkFtZTcwOTAwMTAyNw@@._V1_.jpg",
        width: 840
      },
      status: "released",
      title: "The 84th Annual Academy Awards",
      titleType: "tvSpecial",
      year: 2012
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2226599/",
      status: "released",
      title: "The Orange British Academy Film Awards: Red Carpet",
      titleType: "tvSpecial",
      year: 2012
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt2217975/",
      image: {
        height: 1075,
        id: "/title/tt2217975/images/rm3618138880",
        url:
          "https://m.media-amazon.com/images/M/MV5BOGRmNDU0MzgtZWY5NC00MWMzLWIwN2MtZmY0ZjhmZDhiOTg1XkEyXkFqcGdeQXVyMDc0ODU0NA@@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "The Orange British Academy Film Awards",
      titleType: "tvSpecial",
      year: 2012
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0169455",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt0169455/",
      image: {
        height: 1440,
        id: "/title/tt0169455/images/rm3599266816",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjQ1ODRkMjAtOTdjZi00MjZhLWFkMzYtN2IzN2Y5ZmY5OTRlXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Inside the Actors Studio",
      titleType: "tvSeries",
      year: 1994,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2216925/",
          image: {
            height: 375,
            id: "/title/tt2216925/images/rm2058377728",
            url:
              "https://m.media-amazon.com/images/M/MV5BZjNmYmM4MzYtYWRiYS00NzYxLThlMmEtMTdjNzZkOTNmZGM3XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Brad Pitt",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 2,
          releaseDate: "2012-02-10",
          seasonNumber: 18
        }
      ],
      seriesStartYear: 1994
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2163227",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt2163227/",
      image: {
        height: 1440,
        id: "/title/tt2163227/images/rm268432129",
        url:
          "https://m.media-amazon.com/images/M/MV5BMzJhN2IyNTktOTI1NC00MDI5LThlZTctYjdmOTBjZDE3YmI1XkEyXkFqcGdeQXVyMTMwMTg1ODQw._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "CBS This Morning",
      titleType: "tvSeries",
      year: 1992,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2400603/",
          status: "released",
          title: "Episode #1.18",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 18,
          releaseDate: "2012-02-01",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 1992
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0115147",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt0115147/",
      image: {
        height: 1500,
        id: "/title/tt0115147/images/rm3254661633",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzczM2ZmODgtYjFkNC00MjZjLTk1ZmMtYmI0YThmZmI5YTA1XkEyXkFqcGdeQXVyNTUxODQyNQ@@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "The Daily Show",
      titleType: "tvSeries",
      year: 1996,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2194083/",
          status: "released",
          title: "Brad Pitt",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 54,
          releaseDate: "2012-02-01",
          seasonNumber: 17
        }
      ],
      seriesStartYear: 1996
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2224007/",
      image: {
        height: 1853,
        id: "/title/tt2224007/images/rm1130465281",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDJjN2JmZGYtNGJhYy00Mjg1LThiMDUtMTNjOTBiNGVhMDU4XkEyXkFqcGdeQXVyMjIzMTQ5NjE@._V1_.jpg",
        width: 1125
      },
      status: "released",
      title: "18th Annual Screen Actors Guild Awards",
      titleType: "tvSpecial",
      year: 2012
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0165001",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt0165001/",
      image: {
        height: 1763,
        id: "/title/tt0165001/images/rm3438425857",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGMzMmZhYTAtODU3Zi00ODlkLTg5ZjItYzZhMDliM2IwZDAyXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
        width: 1175
      },
      status: "released",
      title: "CBS News Sunday Morning",
      titleType: "tvSeries",
      year: 1979,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2205999/",
          image: {
            height: 375,
            id: "/title/tt2205999/images/rm1897239553",
            url:
              "https://m.media-amazon.com/images/M/MV5BODZiYWU2YzEtZWYxZS00Yzg0LTg3ODktZDgzYjhkZGMxNmZhXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Episode dated 29 January 2012",
          titleType: "tvEpisode",
          year: 2012,
          releaseDate: "2012-01-29"
        }
      ],
      seriesStartYear: 1979
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2344864",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt2344864/",
      image: {
        height: 2880,
        id: "/title/tt2344864/images/rm3892703489",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmFhMGVjOTctZmEyZS00YmE0LWI1YjktNDliMmVhNzczNWY5XkEyXkFqcGdeQXVyMTMwMTg1ODQw._V1_.jpg",
        width: 1920
      },
      status: "released",
      title: "CBS Saturday Morning",
      titleType: "tvSeries",
      year: 2012,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2398391/",
          status: "released",
          title: "Episode #1.3",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 3,
          releaseDate: "2012-01-28",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2012
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1612376",
      category: "self",
      characters: ["Self"],
      endYear: 2012,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2012,
      id: "/title/tt1612376/",
      image: {
        height: 1068,
        id: "/title/tt1612376/images/rm2753566720",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTk1ZGY5NTEtOGZiZi00NWJjLWFlYzktMzU1ZjA3NzdhMzhjXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg",
        width: 2013
      },
      status: "released",
      title: "Janela Indiscreta",
      titleType: "tvSeries",
      year: 2010,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt2176545/",
          status: "released",
          title: "Episode #1.98",
          titleType: "tvEpisode",
          year: 2012,
          episodeNumber: 98,
          releaseDate: "2012-01-15",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2010
    },
    {
      category: "self",
      characters: ["Self - Nominee & Presenter"],
      roles: [
        {
          character: "Self - Nominee & Presenter"
        }
      ],
      id: "/title/tt2125640/",
      image: {
        height: 674,
        id: "/title/tt2125640/images/rm2711182592",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWM3YWUyNzEtZDBlYS00YzAyLTk4YWEtODMyNmY3YmFmYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        width: 481
      },
      status: "released",
      title: "The 69th Annual Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2012
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt2184093/",
      image: {
        height: 345,
        id: "/title/tt2184093/images/rm412774656",
        url:
          "https://m.media-amazon.com/images/M/MV5BZThlNzVjZjItNzg2My00Y2I2LWFmMDItOTA3ODdjZDdlMzFlXkEyXkFqcGdeQXVyMTg1MjA1Mjk@._V1_.jpg",
        width: 559
      },
      status: "released",
      title: "17th Annual Critics' Choice Movie Awards",
      titleType: "tvSpecial",
      year: 2012
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5337336/",
      status: "released",
      title: "Moneyball: Drafting the Team",
      titleType: "video",
      year: 2012
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5337326/",
      image: {
        height: 500,
        id: "/title/tt5337326/images/rm4217025280",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjU5MzQzMDY2MF5BMl5BanBnXkFtZTcwNzIzODIxNw@@._V1_.jpg",
        width: 390
      },
      status: "released",
      title: "Moneyball: Playing the Game",
      titleType: "video",
      year: 2012
    },
    {
      category: "self",
      characters: ["The Madman"],
      roles: [
        {
          character: "The Madman"
        }
      ],
      id: "/title/tt2167961/",
      image: {
        height: 540,
        id: "/title/tt2167961/images/rm3412793344",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWNjNDQxNjMtMDQyYy00Y2I1LWFiYjMtYmFkNmFlYTE0OWQ3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_.jpg",
        width: 332
      },
      status: "released",
      title: "Touch of Evil",
      titleType: "short",
      year: 2011
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0270116",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2011,
      episodeCount: 2,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 2
        }
      ],
      startYear: 2008,
      id: "/title/tt0270116/",
      image: {
        height: 1440,
        id: "/title/tt0270116/images/rm2069467137",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDc2ZDlkNTctOTdkOC00ZGM3LWFhYmItMTMwOTY4ODBiY2YyXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Charlie Rose",
      titleType: "tvSeries",
      year: 1991,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt2119903/",
          image: {
            height: 1080,
            id: "/title/tt2119903/images/rm882348801",
            url:
              "https://m.media-amazon.com/images/M/MV5BMzk1ZTA1OWMtM2Q3Ny00ODhlLTk0NzUtMDg1MmRkOWViOTk3XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg",
            width: 1920
          },
          status: "released",
          title: "Episode dated 6 December 2011",
          titleType: "tvEpisode",
          year: 2011,
          releaseDate: "2011-12-06"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1365148/",
          image: {
            height: 375,
            id: "/title/tt1365148/images/rm3499083264",
            url:
              "https://m.media-amazon.com/images/M/MV5BNDcwNDU5ODA3N15BMl5BanBnXkFtZTgwMjM5NzU1MjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Episode dated 25 December 2008",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-12-25"
        }
      ],
      seriesEndYear: 2017,
      seriesStartYear: 1991
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2712092",
      category: "self",
      characters: ["Self"],
      endYear: 2011,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2011,
      id: "/title/tt2712092/",
      status: "released",
      title: "Studio 42 with Bob Costas",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt5342948/",
          status: "released",
          title: "Moneyball",
          titleType: "tvEpisode",
          year: 2011,
          episodeNumber: 7,
          releaseDate: "2011-09-24",
          seasonNumber: 3
        }
      ],
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0421288",
      category: "self",
      characters: ["Self"],
      endYear: 2011,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2011,
      id: "/title/tt0421288/",
      image: {
        height: 215,
        id: "/title/tt0421288/images/rm1909168129",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDgwYzQ1ZTMtYzMwZC00NWFiLWI5ZWEtNjMxOWJkZGExMGMyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
        width: 215
      },
      status: "released",
      title: "At the Movies",
      titleType: "tvSeries",
      year: 2004,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt3096754/",
          image: {
            height: 619,
            id: "/title/tt3096754/images/rm85469952",
            url:
              "https://m.media-amazon.com/images/M/MV5BNGViODBhOWQtODAzMy00ZmMxLWFmMjItYzJjMTY1MGYwZjFhXkEyXkFqcGdeQXVyMTM0NzY5ODY@._V1_.jpg",
            width: 921
          },
          status: "released",
          title: "Cannes Film Festival 2011",
          titleType: "tvEpisode",
          year: 2011,
          episodeNumber: 16,
          releaseDate: "2011-05-25",
          seasonNumber: 8
        }
      ],
      seriesEndYear: 2014,
      seriesStartYear: 2004
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0111920",
      category: "self",
      characters: ["Self - Interviewee"],
      endYear: 2011,
      episodeCount: 5,
      roles: [
        {
          character: "Self - Interviewee",
          episodeCount: 5
        }
      ],
      startYear: 1996,
      id: "/title/tt0111920/",
      image: {
        height: 670,
        id: "/title/tt0111920/images/rm3474987008",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmFiNDg5NjktMjRhOS00MjNhLTg3MGYtMzk1NTZjNzJkYThkXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg",
        width: 747
      },
      status: "released",
      title: "Cinema 3",
      titleType: "tvSeries",
      year: 1984,
      episodes: [
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt1937732/",
          status: "released",
          title: "Episode dated 19 May 2011",
          titleType: "tvEpisode",
          year: 2011,
          releaseDate: "2011-05-19"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt1518916/",
          status: "released",
          title: "Episode dated 26 September 2009",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-09-26"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt1450167/",
          status: "released",
          title: "Episode dated 23 May 2009",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-05-23"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt1655708/",
          status: "released",
          title: "Episode dated 5 December 1997",
          titleType: "tvEpisode",
          year: 1997,
          releaseDate: "1997-12-05"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt1058171/",
          status: "released",
          title: "Episode dated 11 January 1996",
          titleType: "tvEpisode",
          year: 1996,
          releaseDate: "1996-01-11"
        }
      ],
      seriesEndYear: 2016,
      seriesStartYear: 1984
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0391687",
      category: "self",
      characters: ["Self"],
      endYear: 2011,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2011,
      id: "/title/tt0391687/",
      image: {
        height: 294,
        id: "/title/tt0391687/images/rm749565184",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjRlYmE3NGYtMmM4YS00YzdhLThkZWItMDFjZGM2ZjU1YzMzXkEyXkFqcGdeQXVyMzA3NzI4MzQ@._V1_.jpg",
        width: 524
      },
      status: "released",
      title: "Shownieuws",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt2136131/",
          status: "released",
          title: "Amsterdam Heavy in Cannes",
          titleType: "tvEpisode",
          year: 2011,
          releaseDate: "2011-05-16"
        }
      ],
      seriesStartYear: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt6581590",
      category: "self",
      characters: ["Self - Interviewee"],
      endYear: 2011,
      episodeCount: 2,
      roles: [
        {
          character: "Self - Interviewee",
          episodeCount: 2
        }
      ],
      startYear: 2009,
      id: "/title/tt6581590/",
      image: {
        height: 2048,
        id: "/title/tt6581590/images/rm2261929472",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjc5Njg2MzU0N15BMl5BanBnXkFtZTgwNTM2OTYyNTM@._V1_.jpg",
        width: 1501
      },
      status: "released",
      title: "Cannes Film Festival",
      titleType: "tvSeries",
      year: 1952,
      episodes: [
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt2372393/",
          status: "released",
          title: "Cannes Film Festival 2011",
          titleType: "tvEpisode",
          year: 2011,
          releaseDate: "2011-05-11"
        },
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt2363405/",
          status: "released",
          title: "Cannes Film Festival 2009",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-05-13"
        }
      ],
      seriesStartYear: 1952
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2132638",
      category: "self",
      characters: ["Self - Interviewee"],
      endYear: 2011,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Interviewee",
          episodeCount: 1
        }
      ],
      startYear: 2011,
      id: "/title/tt2132638/",
      image: {
        height: 4134,
        id: "/title/tt2132638/images/rm316936705",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjYxZjE4OTItNGEyZi00ZWY4LTlhN2ItN2E2MzdmOWJjYWViXkEyXkFqcGdeQXVyMTEyNjQ5MTkz._V1_.jpg",
        width: 2717
      },
      status: "released",
      title: "Close Up",
      titleType: "tvSeries",
      year: 2011,
      episodes: [
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt2137661/",
          status: "released",
          title: "Brad Pitt",
          titleType: "tvEpisode",
          year: 2011,
          episodeNumber: 1,
          releaseDate: "2011-04-01",
          seasonNumber: 2
        }
      ],
      seriesStartYear: 2011
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1833708/",
      image: {
        height: 2048,
        id: "/title/tt1833708/images/rm3340024576",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjA3NTY4ODY1N15BMl5BanBnXkFtZTcwNDQ3MjM4NA@@._V1_.jpg",
        width: 1506
      },
      status: "released",
      title: "His Way",
      titleType: "tvMovie",
      year: 2011
    },
    {
      attr: ["uncredited"],
      category: "self",
      characters: ["Self - Audience Member"],
      roles: [
        {
          character: "Self - Audience Member"
        }
      ],
      id: "/title/tt1810776/",
      image: {
        height: 604,
        id: "/title/tt1810776/images/rm3063504128",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDZlOWI4YmEtNmY3Zi00NmM1LTljZGYtNmRkMTA0ZTU5YmEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        width: 425
      },
      status: "released",
      title: "The 68th Annual Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2011
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0092322",
      category: "self",
      characters: ["Self", "Self - Ex-Husband"],
      endYear: 2010,
      episodeCount: 4,
      roles: [
        {
          character: "Self",
          episodeCount: 3
        },
        {
          character: "Self - Ex-Husband",
          episodeCount: 1
        }
      ],
      startYear: 2004,
      id: "/title/tt0092322/",
      image: {
        height: 475,
        id: "/title/tt0092322/images/rm3413943297",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTBlZTVmNjgtZTY1Mi00NDc4LWJhMTUtMmNiNjA1YTEyMTMwXkEyXkFqcGdeQXVyMTE1MTYxMzk2._V1_.jpg",
        width: 259
      },
      status: "released",
      title: "Biography",
      titleType: "tvSeries",
      year: 1987,
      episodes: [
        {
          category: "self",
          characters: ["Self - Ex-Husband"],
          roles: [
            {
              character: "Self - Ex-Husband"
            }
          ],
          id: "/title/tt2159708/",
          status: "released",
          title: "Jennifer Aniston",
          titleType: "tvEpisode",
          year: 2010,
          releaseDate: "2010"
        },
        {
          billing: 2,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0842320/",
          status: "released",
          title: "Anthony Hopkins",
          titleType: "tvEpisode",
          year: 2007,
          episodeNumber: 5,
          releaseDate: "2007-07-11",
          seasonNumber: 6
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0458301/",
          status: "released",
          title: "Bruce Willis",
          titleType: "tvEpisode",
          year: 2005,
          releaseDate: "2005-02-23"
        },
        {
          billing: 1,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0437779/",
          status: "released",
          title: "Brad Pitt",
          titleType: "tvEpisode",
          year: 2004,
          releaseDate: "2004-12-07"
        }
      ],
      seriesStartYear: 1987
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1509653",
      category: "self",
      characters: ["Self"],
      endYear: 2010,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2010,
      id: "/title/tt1509653/",
      image: {
        height: 398,
        id: "/title/tt1509653/images/rm3338147584",
        url:
          "https://m.media-amazon.com/images/M/MV5BNmNkZWE3MWEtZmJiNy00ODdjLWIwYWEtNjU0OTNiY2ExYTUxXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Live from Studio Five",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1786049/",
          status: "released",
          title: "Episode dated 30 November 2010",
          titleType: "tvEpisode",
          year: 2010,
          releaseDate: "2010-11-30"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1629850/",
          status: "released",
          title: "Episode #1.128",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 128,
          releaseDate: "2010-03-22",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2011,
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1213209",
      category: "self",
      characters: ["Narrator"],
      endYear: 2010,
      episodeCount: 1,
      roles: [
        {
          character: "Narrator",
          episodeCount: 1
        }
      ],
      startYear: 2010,
      id: "/title/tt1213209/",
      image: {
        height: 900,
        id: "/title/tt1213209/images/rm4260278273",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWJhYjVmZGMtZGNhMy00ZDUzLWIwYTctOWI1YWE1OGUyOGM4XkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 600
      },
      status: "released",
      title: "America's Game: The Super Bowl Champions",
      titleType: "tvSeries",
      year: 2006,
      episodes: [
        {
          attr: ["voice"],
          category: "self",
          characters: ["Narrator"],
          roles: [
            {
              character: "Narrator"
            }
          ],
          id: "/title/tt1717240/",
          image: {
            height: 375,
            id: "/title/tt1717240/images/rm643915008",
            url:
              "https://m.media-amazon.com/images/M/MV5BYTIzZmE1YzQtMjM1Ny00Y2MyLWE2MmYtNWQyYjI1YWQzYWM2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "2009 New Orleans Saints",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 9,
          releaseDate: "2010-09-08",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 2021,
      seriesStartYear: 2006
    },
    {
      attr: ["voice"],
      billing: 3,
      category: "self",
      characters: ["Self - Narration"],
      roles: [
        {
          character: "Self - Narration"
        }
      ],
      id: "/title/tt1702441/",
      image: {
        height: 960,
        id: "/title/tt1702441/images/rm3850156288",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTUwMTU4ODI5OV5BMl5BanBnXkFtZTcwNDUzMTAzNQ@@._V1_.jpg",
        width: 648
      },
      status: "released",
      title: "The Big Uneasy",
      titleType: "movie",
      year: 2010
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1587373",
      category: "self",
      characters: ["Self"],
      endYear: 2010,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2010,
      id: "/title/tt1587373/",
      image: {
        height: 1362,
        id: "/title/tt1587373/images/rm3158736896",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE5MDU4N15BMl5BanBnXkFtZTcwNzg2NDM3Mw@@._V1_.jpg",
        width: 2048
      },
      status: "released",
      title: "If God Is Willing and da Creek Don't Rise",
      titleType: "tvMiniSeries",
      year: 2010,
      episodes: [
        {
          billing: 87,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1714999/",
          status: "released",
          title: "Episode #1.2",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 2,
          releaseDate: "2010-08-24",
          seasonNumber: 1
        },
        {
          billing: 53,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1714998/",
          image: {
            height: 374,
            id: "/title/tt1714998/images/rm1787084800",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTgzNTgwMzkxOF5BMl5BanBnXkFtZTgwOTY5NDczMjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Episode #1.1",
          titleType: "tvEpisode",
          year: 2010,
          episodeNumber: 1,
          releaseDate: "2010-08-23",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 2010
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2294989",
      category: "self",
      characters: ["Self"],
      endYear: 2010,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2010,
      id: "/title/tt2294989/",
      image: {
        height: 378,
        id: "/title/tt2294989/images/rm943010560",
        url:
          "https://m.media-amazon.com/images/M/MV5BODQ2ZWI1OWYtNDQ0MS00Mzg0LThjNTgtYmMyZDU2YWI4MGRhXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg",
        width: 296
      },
      status: "released",
      title: "30 minuts",
      titleType: "tvSeries",
      year: 1984,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt2306915/",
          status: "released",
          title: "La catifa indiscreta",
          titleType: "tvEpisode",
          year: 2010,
          releaseDate: "2010-01-24"
        }
      ],
      seriesStartYear: 1984
    },
    {
      attr: ["uncredited"],
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1587707/",
      image: {
        height: 1032,
        id: "/title/tt1587707/images/rm3664743424",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjE2NTg1NDM4Ml5BMl5BanBnXkFtZTcwMzMxOTkyMw@@._V1_.jpg",
        width: 697
      },
      status: "released",
      title: "Exit Through the Gift Shop",
      titleType: "movie",
      year: 2010
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1587308/",
      image: {
        height: 862,
        id: "/title/tt1587308/images/rm1236215297",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjhlNTE1Y2UtZjdkOC00OWU1LTk0NDQtYmUyNTNkYTg1MmIxXkEyXkFqcGdeQXVyMTI4NDQ1Mw@@._V1_.jpg",
        width: 574
      },
      status: "released",
      title: "Hope for Haiti Now: A Global Benefit for Earthquake Relief",
      titleType: "tvSpecial",
      year: 2010
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2026572",
      category: "self",
      characters: ["Self"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt2026572/",
      status: "released",
      title: "The Jeffrey Henderson Show",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt2122887/",
          status: "released",
          title: "The 21st Annual ASCAP Awards",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009"
        }
      ],
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1694515",
      category: "self",
      characters: ["Self"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt1694515/",
      status: "released",
      title: "De schuld van VTM",
      titleType: "tvSeries",
      year: 2009,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt2012227/",
          status: "released",
          title: "De wereld",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 6,
          releaseDate: "2009",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0305109",
      category: "self",
      characters: ["Self"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt0305109/",
      image: {
        height: 748,
        id: "/title/tt0305109/images/rm263015936",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjAwNDE0MGItY2NhYS00ZjJlLWJlM2EtMDM5MzMzYmQ4YmEzXkEyXkFqcGdeQXVyNjk5NzY4OTk@._V1_.jpg",
        width: 764
      },
      status: "released",
      title: "Smap×Smap",
      titleType: "tvSeries",
      year: 1996,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1545259/",
          image: {
            height: 359,
            id: "/title/tt1545259/images/rm2967945216",
            url:
              "https://m.media-amazon.com/images/M/MV5BYWU2NzEzMzEtOWMxNS00OGJhLTg2NzAtZmI4MTcxMGE5NDhjXkEyXkFqcGdeQXVyNjk5NzY4OTk@._V1_.jpg",
            width: 638
          },
          status: "released",
          title: "Quentin Tarantino & Brad Pitt",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-11-16"
        }
      ],
      seriesEndYear: 2016,
      seriesStartYear: 1996
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1095213",
      category: "self",
      characters: ["Self"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt1095213/",
      image: {
        height: 1440,
        id: "/title/tt1095213/images/rm1220449537",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTBmOGNkNzAtZjk0Yi00ZTQwLWI3MTgtNzg3MzU0ZjczMGE1XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "TMZ on TV",
      titleType: "tvSeries",
      year: 2007,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1517413/",
          status: "released",
          title: "Episode dated 25 September 2009",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-09-25"
        }
      ],
      seriesStartYear: 2007
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0480279",
      category: "self",
      characters: ["Self - Interviewee", "Self"],
      endYear: 2009,
      episodeCount: 2,
      roles: [
        {
          character: "Self - Interviewee",
          episodeCount: 1
        },
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt0480279/",
      image: {
        height: 532,
        id: "/title/tt0480279/images/rm2275480576",
        url:
          "https://m.media-amazon.com/images/M/MV5BNGRhMjE0NTctN2U4Zi00MmJiLWI0MWQtYWZkMDQ5MTFkNDdmXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "20 heures le journal",
      titleType: "tvSeries",
      year: 1981,
      episodes: [
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt19115336/",
          status: "released",
          title: "Episode dated 16 August 2009",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-08-16"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1035742/",
          status: "released",
          title: "Episode dated 21 May 2007",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-05-21"
        }
      ],
      seriesStartYear: 1981
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0350448",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt0350448/",
      image: {
        height: 401,
        id: "/title/tt0350448/images/rm253706496",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzljNGViOTctMjVhMi00MjY5LWI2MjQtMWQ2MDUzNmQ3YjhjXkEyXkFqcGdeQXVyNDQxMzgyOA@@._V1_.jpg",
        width: 283
      },
      status: "released",
      title: "Real Time with Bill Maher",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1491378/",
          status: "released",
          title: "Episode #7.23",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 23,
          releaseDate: "2009-08-14",
          seasonNumber: 7
        }
      ],
      seriesStartYear: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0343294",
      category: "self",
      characters: ["Self"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt0343294/",
      image: {
        height: 3736,
        id: "/title/tt0343294/images/rm4217773825",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzljNjIxNGMtZWQ0MS00ZDY5LWE1ODEtMDA0MjdlM2YzN2Y5XkEyXkFqcGdeQXVyNjE1MjkwNw@@._V1_.jpg",
        width: 2856
      },
      status: "released",
      title: "Punkt 12",
      titleType: "tvSeries",
      year: 1992,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1465188/",
          status: "released",
          title: "Episode dated 30 June 2009",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-06-30"
        }
      ],
      seriesStartYear: 1992
    },
    {
      billing: 18,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1447796/",
      status: "released",
      title: "Spike's Guys Choice",
      titleType: "tvSpecial",
      year: 2009
    },
    {
      billing: 6,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1430122/",
      image: {
        height: 1069,
        id: "/title/tt1430122/images/rm3959108096",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzMzZTU2MjgtZjI1OS00NjdhLTgzNmItNGUzODVlMTg4NTcyXkEyXkFqcGdeQXVyMjc1NjIzOA@@._V1_.jpg",
        width: 825
      },
      status: "released",
      title: "The Curious Birth of Benjamin Button",
      titleType: "video",
      year: 2009
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt1219288/",
      image: {
        height: 583,
        id: "/title/tt1219288/images/rm1982237184",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTI0NzAyNTg0N15BMl5BanBnXkFtZTcwMTM3MTgyMg@@._V1_.jpg",
        width: 400
      },
      status: "released",
      title: "The 81st Annual Academy Awards",
      titleType: "tvSpecial",
      year: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0420393",
      category: "self",
      characters: ["Self"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt0420393/",
      image: {
        height: 500,
        id: "/title/tt0420393/images/rm223463425",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWFiMzIxNjItODdkNS00N2VhLTgyMWMtMWY5OWM1ZjhlMWY3XkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 355
      },
      status: "released",
      title: "Eigo de shabera-night",
      titleType: "tvSeries",
      year: 2001,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1381174/",
          status: "released",
          title: "Episode dated 20 February 2009",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-02-20"
        }
      ],
      seriesStartYear: 2001
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0181261",
      category: "self",
      characters: ["Self - Interviewee"],
      endYear: 2009,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Interviewee",
          episodeCount: 1
        }
      ],
      startYear: 2009,
      id: "/title/tt0181261/",
      image: {
        height: 1620,
        id: "/title/tt0181261/images/rm3395236865",
        url:
          "https://m.media-amazon.com/images/M/MV5BN2UzYjc4YzItNDE2Yi00OTVlLWFmOGEtZjEwM2IwZmY0MTg4XkEyXkFqcGdeQXVyNjcwMzExMzU@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "This Morning",
      titleType: "tvSeries",
      year: 1988,
      episodes: [
        {
          category: "self",
          characters: ["Self - Interviewee"],
          roles: [
            {
              character: "Self - Interviewee"
            }
          ],
          id: "/title/tt1373051/",
          status: "released",
          title: "Episode dated 9 February 2009",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-02-09"
        }
      ],
      seriesStartYear: 1988
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1366329/",
      image: {
        height: 1297,
        id: "/title/tt1366329/images/rm505725185",
        url:
          "https://m.media-amazon.com/images/M/MV5BMGQ3OTEzNzYtMTE2OS00MTEzLWFkNjAtZmZmNDhiNDdiMTFiXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 922
      },
      status: "released",
      title: "The Orange British Academy Film Awards: Red Carpet",
      titleType: "tvSpecial",
      year: 2009
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt1366328/",
      image: {
        height: 230,
        id: "/title/tt1366328/images/rm2715752192",
        url:
          "https://m.media-amazon.com/images/M/MV5BOGI3NTEyZGEtYWQ3Mi00YTVjLTk2NTgtMzI4OWFmNDE0NmM5XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "The Orange British Academy Film Awards",
      titleType: "tvSpecial",
      year: 2009
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt1360095/",
      image: {
        height: 336,
        id: "/title/tt1360095/images/rm851373057",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzE2YTk0OGQtMGMyNS00ZGNkLWFmM2UtZjBlNzA3NzU5Mzg4XkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 358
      },
      status: "released",
      title: "15th Annual Screen Actors Guild Awards",
      titleType: "tvSpecial",
      year: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0806877",
      category: "self",
      characters: ["Self - Narrator"],
      endYear: 2009,
      episodeCount: 24,
      roles: [
        {
          character: "Self - Narrator",
          episodeCount: 24
        }
      ],
      startYear: 2006,
      id: "/title/tt0806877/",
      image: {
        height: 441,
        id: "/title/tt0806877/images/rm2649821953",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTUzMGRlMDItNTczNC00ZDVlLWJlMTctNDJiOGU5YjRjOWNiXkEyXkFqcGdeQXVyNzI4MDMyMTU@._V1_.jpg",
        width: 300
      },
      status: "released",
      title: "e2: The Economies of Being Environmentally Conscious",
      titleType: "tvSeries",
      year: 2006,
      episodes: [
        {
          category: "self",
          characters: ["Self - Narrator"],
          roles: [
            {
              character: "Self - Narrator"
            }
          ],
          id: "/title/tt1390807/",
          status: "released",
          title: "Aviation: The Limited Sky",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 6,
          releaseDate: "2009-01-13",
          seasonNumber: 4
        },
        {
          category: "self",
          characters: ["Self - Narrator"],
          roles: [
            {
              character: "Self - Narrator"
            }
          ],
          id: "/title/tt1390811/",
          status: "released",
          title: "Portland: A Sense of Place",
          titleType: "tvEpisode",
          year: 2009,
          episodeNumber: 5,
          releaseDate: "2009-01-06",
          seasonNumber: 4
        },
        {
          category: "self",
          characters: ["Self - Narrator"],
          roles: [
            {
              character: "Self - Narrator"
            }
          ],
          id: "/title/tt1390812/",
          status: "released",
          title: "Seoul: The Stream of Consciousness",
          titleType: "tvEpisode",
          year: 2008,
          episodeNumber: 4,
          releaseDate: "2008-12-16",
          seasonNumber: 4
        },
        {
          category: "self",
          characters: ["Self - Narrator"],
          roles: [
            {
              character: "Self - Narrator"
            }
          ],
          id: "/title/tt1390808/",
          image: {
            height: 1080,
            id: "/title/tt1390808/images/rm1345532416",
            url:
              "https://m.media-amazon.com/images/M/MV5BZjgzNTRjYjMtOTkwNS00OGUyLWIzMDItOGE0NDQzOTAwYmZlXkEyXkFqcGdeQXVyMjYxMzY2NDk@._V1_.jpg",
            width: 1920
          },
          status: "released",
          title: "Food Miles",
          titleType: "tvEpisode",
          year: 2008,
          episodeNumber: 3,
          releaseDate: "2008-12-09",
          seasonNumber: 4
        },
        {
          category: "self",
          characters: ["Self - Narrator"],
          roles: [
            {
              character: "Self - Narrator"
            }
          ],
          id: "/title/tt1390810/",
          status: "released",
          title: "Paris: Velo Liberte",
          titleType: "tvEpisode",
          year: 2008,
          episodeNumber: 2,
          releaseDate: "2008-12-02",
          seasonNumber: 4
        }
      ],
      seriesStartYear: 2006
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt1222814/",
      image: {
        height: 204,
        id: "/title/tt1222814/images/rm1601145344",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTA0NjM3MzExNF5BMl5BanBnXkFtZTcwODM0NTMyMg@@._V1_.jpg",
        width: 138
      },
      status: "released",
      title: "Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2009
    },
    {
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt1349447/",
      image: {
        height: 500,
        id: "/title/tt1349447/images/rm1918259200",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTQwYzY3NzctNTMzOC00YjYzLWFiZGMtM2MyOTkzOWZkMDFlXkEyXkFqcGdeQXVyNTY3NTQ4NzY@._V1_.jpg",
        width: 638
      },
      status: "released",
      title: "The 35th Annual People's Choice Awards",
      titleType: "tvSpecial",
      year: 2009
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0088550",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2009,
      episodeCount: 5,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 5
        }
      ],
      startYear: 2007,
      id: "/title/tt0088550/",
      image: {
        height: 720,
        id: "/title/tt0088550/images/rm1775670529",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzlmOWNiOWYtN2NhMC00OGJkLWEzY2UtYjIwZWJmNThhZTE2XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 480
      },
      status: "released",
      title: "Larry King Live",
      titleType: "tvSeries",
      year: 1985,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1349584/",
          status: "released",
          title: "Brad Pitt & Jim Carrey",
          titleType: "tvEpisode",
          year: 2009,
          releaseDate: "2009-01-02"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1349586/",
          status: "released",
          title: "Jim Carrey! The 'Yes Man'",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-12-30"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1340976/",
          status: "released",
          title: "McCarthy & Somers",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-12-20"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1347464/",
          status: "released",
          title: "Episode dated 3 December 2008",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-12-03"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1150654/",
          status: "released",
          title: "Brad Pitt",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-12-05"
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 1985
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0090493",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2008,
      episodeCount: 3,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 3
        }
      ],
      startYear: 1998,
      id: "/title/tt0090493/",
      image: {
        height: 500,
        id: "/title/tt0090493/images/rm2386306816",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDA0ZDI5MDctMmMxNi00NmVhLTlmN2MtNzIyMzM1YTc3YjBiXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
        width: 372
      },
      status: "released",
      title: "The Oprah Winfrey Show",
      titleType: "tvSeries",
      year: 1986,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1329032/",
          status: "released",
          title: "Episode dated 19 November 2008",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-11-19"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt0667043/",
          status: "released",
          title: "Episode dated 3 May 2004",
          titleType: "tvEpisode",
          year: 2004,
          releaseDate: "2004-05-03"
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt0666937/",
          status: "released",
          title: "Episode dated 9 November 1998",
          titleType: "tvEpisode",
          year: 1998,
          releaseDate: "1998-11-09"
        }
      ],
      seriesEndYear: 2011,
      seriesStartYear: 1986
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1305625",
      category: "self",
      characters: ["Self"],
      endYear: 2008,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2008,
      id: "/title/tt1305625/",
      image: {
        height: 1534,
        id: "/title/tt1305625/images/rm61641729",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTc2ZDJlZTAtYzFiZi00NjBlLWFlZTEtYTMwZmI5ZmI5ZTBhXkEyXkFqcGdeQXVyMTA2NDEwMDY5._V1_.jpg",
        width: 1118
      },
      status: "released",
      title: "Kinotipp",
      titleType: "tvSeries",
      year: 2007,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1309165/",
          image: {
            height: 3024,
            id: "/title/tt1309165/images/rm1583083009",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzJlNDQ5ZmItMmY2Mi00YzAxLWI1MmYtM2YyNjM0NGQxZjg5XkEyXkFqcGdeQXVyMzg2NTY1NTY@._V1_.jpg",
            width: 4032
          },
          status: "released",
          title: "Burn After Reading",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-10-16"
        }
      ],
      seriesStartYear: 2007
    },
    {
      attr: ["uncredited"],
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1309559/",
      status: "released",
      title: "His Highness Hollywood",
      titleType: "video",
      year: 2008
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1324757",
      category: "self",
      characters: ["Self"],
      endYear: 2008,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2008,
      id: "/title/tt1324757/",
      image: {
        height: 333,
        id: "/title/tt1324757/images/rm2965518593",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGQwNmI4ZTYtYzRjNC00YTFkLWI1OGYtNjQzMzZlOTM0MzE5XkEyXkFqcGdeQXVyNzI4MDMyMTU@._V1_.jpg",
        width: 443
      },
      status: "released",
      title: "Tellement People",
      titleType: "tvSeries",
      year: 2007,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1624785/",
          status: "released",
          title: "Episode #2.5",
          titleType: "tvEpisode",
          year: 2008,
          episodeNumber: 5,
          releaseDate: "2008-06-12",
          seasonNumber: 2
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 2007
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0319931",
      category: "self",
      characters: ["Self"],
      endYear: 2008,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2008,
      id: "/title/tt0319931/",
      image: {
        height: 3000,
        id: "/title/tt0319931/images/rm3966907905",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjQyZjU4OTYtNjEyYy00YjBiLThlNDMtZmU1ZWU0OTEzZDM0XkEyXkFqcGdeQXVyMTY2Nzk0NDY@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "American Idol",
      titleType: "tvSeries",
      year: 2002,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1171397/",
          status: "released",
          title: "Live Results Show: One Contestant Eliminated",
          titleType: "tvEpisode",
          year: 2008,
          episodeNumber: 30,
          releaseDate: "2008-04-10",
          seasonNumber: 7
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1171395/",
          status: "released",
          title: "Idol Gives Back",
          titleType: "tvEpisode",
          year: 2008,
          episodeNumber: 29,
          releaseDate: "2008-04-09",
          seasonNumber: 7
        }
      ],
      seriesStartYear: 2002
    },
    {
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt1388320/",
      image: {
        height: 903,
        id: "/title/tt1388320/images/rm3825782785",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTQwN2UxNTUtMTZjNC00ZGUyLThhZjItZTA3YTZlMzA5MDJjXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 722
      },
      status: "released",
      title: "2008 Film Independent's Spirit Awards",
      titleType: "tvSpecial",
      year: 2008
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1201984/",
      status: "released",
      title: "The Assassination of Jesse James: Death of an Outlaw",
      titleType: "video",
      year: 2008
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt4346344",
      category: "self",
      characters: ["Self"],
      endYear: 2008,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2007,
      id: "/title/tt4346344/",
      image: {
        height: 864,
        id: "/title/tt4346344/images/rm1213788672",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTU2MTE4MDE0NV5BMl5BanBnXkFtZTgwMzA0MDQ1NDE@._V1_.jpg",
        width: 583
      },
      status: "released",
      title: "E! Live from the Red Carpet",
      titleType: "tvSeries",
      year: 1995,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1179274/",
          status: "released",
          title: "The 2008 Screen Actors Guild Awards",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-01-27"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0951286/",
          status: "released",
          title: "The 2007 Golden Globe Awards",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-01-15"
        }
      ],
      seriesStartYear: 1995
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0241090",
      category: "self",
      characters: ["Self"],
      endYear: 2008,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2008,
      id: "/title/tt0241090/",
      image: {
        height: 912,
        id: "/title/tt0241090/images/rm1929977344",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTVhMzJjNDctYzFjZi00NGRhLTliMTktMzVkNGEwNGQ2YmI1XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg",
        width: 645
      },
      status: "released",
      title: "Caiga quien caiga",
      titleType: "tvSeries",
      year: 1996,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1173043/",
          status: "released",
          title: "Episode dated 16 January 2008",
          titleType: "tvEpisode",
          year: 2008,
          releaseDate: "2008-01-16"
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 1996
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1185338/",
      status: "released",
      title: "13th Annual Critics' Choice Awards Red Carpet Premiere",
      titleType: "tvSpecial",
      year: 2008
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1171215/",
      status: "released",
      title: "13th Annual Critics' Choice Awards",
      titleType: "tvSpecial",
      year: 2008
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1111353/",
      status: "released",
      title: "Julia Roberts: An American Cinematheque Tribute",
      titleType: "tvMovie",
      year: 2007
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1221131/",
      image: {
        height: 1056,
        id: "/title/tt1221131/images/rm703436544",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjAyNjY4Mjc0OF5BMl5BanBnXkFtZTcwNjcxMTA3MQ@@._V1_.jpg",
        width: 816
      },
      status: "released",
      title: "Don't Tell My Booker!!!",
      titleType: "movie",
      year: 2007
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5490316/",
      status: "released",
      title: "Attacking Troy",
      titleType: "video",
      year: 2007
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5490300/",
      status: "released",
      title: "Troy in Focus",
      titleType: "video",
      year: 2007
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1098241",
      category: "self",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt1098241/",
      status: "released",
      title: "Extérieur jour",
      titleType: "tvSeries",
      year: 2007,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1101173/",
          status: "released",
          title: "Episode dated 8 September 2007",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-09-08"
        }
      ],
      seriesStartYear: 2007
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt5575156",
      category: "self",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2007,
      id: "/title/tt5575156/",
      image: {
        height: 768,
        id: "/title/tt5575156/images/rm3255308800",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjI2NTEzNDA2M15BMl5BanBnXkFtZTgwMTIyMjA4ODE@._V1_.jpg",
        width: 553
      },
      status: "released",
      title: "Buzz: at&T Original Documentaries",
      titleType: "tvSeries",
      year: 2007,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt5630786/",
          status: "released",
          title: 'Inside the "Ocean\'s 13" Premiere Las Vegas',
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-07-15"
        }
      ],
      seriesEndYear: 2016,
      seriesStartYear: 2007
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt0914790/",
      image: {
        height: 319,
        id: "/title/tt0914790/images/rm225515264",
        url:
          "https://m.media-amazon.com/images/M/MV5BNGJlYTNiMTQtMWM2ZC00Yjg4LTk1Y2ItM2E5YTU0MTRlYjU4XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 511
      },
      status: "released",
      title: "The 64th Annual Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2007
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0463397",
      category: "self",
      characters: ["Self"],
      endYear: 2007,
      episodeCount: 7,
      roles: [
        {
          character: "Self",
          episodeCount: 7
        }
      ],
      startYear: 2005,
      id: "/title/tt0463397/",
      image: {
        height: 674,
        id: "/title/tt0463397/images/rm3420526336",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTIzYmZkYjYtN2QzZS00YzQyLWFmMGMtY2ZhZjZlNTNlYTRiXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Corazón de...",
      titleType: "tvSeries",
      year: 1997,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0938969/",
          status: "released",
          title: "Episode dated 10 January 2007",
          titleType: "tvEpisode",
          year: 2007,
          releaseDate: "2007-01-10"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0774800/",
          status: "released",
          title: "Episode dated 9 March 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-03-09"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0766606/",
          status: "released",
          title: "Episode dated 26 January 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-01-26"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0545992/",
          status: "released",
          title: "Episode dated 16 January 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-01-16"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0545975/",
          status: "released",
          title: "Episode dated 29 November 2005",
          titleType: "tvEpisode",
          year: 2005,
          releaseDate: "2005-11-29"
        }
      ],
      seriesStartYear: 1997
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0326459",
      category: "self",
      characters: ["Self"],
      endYear: 2006,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2006,
      id: "/title/tt0326459/",
      image: {
        height: 1162,
        id: "/title/tt0326459/images/rm1663156481",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmQzM2QyNWQtNDg5ZC00ZDM4LTgwMjctOWEyMTA1MWNkYjQ1XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 824
      },
      status: "released",
      title: "The Barbara Walters Summer Special",
      titleType: "tvSeries",
      year: 1976,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0928209/",
          status: "released",
          title: "The 10 Most Fascinating People of 2006",
          titleType: "tvEpisode",
          year: 2006,
          episodeNumber: 2,
          releaseDate: "2006-12-12",
          seasonNumber: 31
        }
      ],
      seriesEndYear: 2015,
      seriesStartYear: 1976
    },
    {
      category: "self",
      characters: ["Richard"],
      roles: [
        {
          character: "Richard"
        }
      ],
      id: "/title/tt0876536/",
      status: "released",
      title: "San Sebastián 2006: Crónica de Carlos Boyero",
      titleType: "tvMovie",
      year: 2006
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0192897",
      category: "self",
      characters: ["Self"],
      endYear: 2006,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2006,
      id: "/title/tt0192897/",
      image: {
        height: 381,
        id: "/title/tt0192897/images/rm2461538048",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjVkNDEwNTktYmZiMi00NzMwLWJhOGQtZjYyMTBhY2JmN2U0XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 546
      },
      status: "released",
      title: "Film '72",
      titleType: "tvSeries",
      year: 1971,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0884558/",
          status: "released",
          title: "Episode dated 18 September 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-09-18"
        }
      ],
      seriesEndYear: 2018,
      seriesStartYear: 1971
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0840321/",
      image: {
        height: 450,
        id: "/title/tt0840321/images/rm1210879233",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDhlYzkwZmYtYWY4Yi00MmE1LTgzZmItM2UxN2ZjNTVhZmYzXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 300
      },
      status: "released",
      title: "Forbes Celebrity 100: Who Made Bank?",
      titleType: "tvMovie",
      year: 2006
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0923665/",
      status: "released",
      title: "Domestic Violence: Shooting Mr. & Mrs. Smith",
      titleType: "video",
      year: 2006
    },
    {
      billing: 1,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0827764/",
      image: {
        height: 494,
        id: "/title/tt0827764/images/rm2906558976",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTI1NjIzMjAzMl5BMl5BanBnXkFtZTcwMjExMjE0MQ@@._V1_.jpg",
        width: 300
      },
      status: "released",
      title: "Brad Pitt Video Portrait",
      titleType: "short",
      year: 2006
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0286348",
      category: "self",
      characters: ["Self"],
      endYear: 2006,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2006,
      id: "/title/tt0286348/",
      image: {
        height: 540,
        id: "/title/tt0286348/images/rm24290561",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmU3MjM3NjktM2ViNi00YjliLTllZDUtNDJmYjA4MjQ2MGY1XkEyXkFqcGdeQXVyMzA3Njg4MzY@._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Brisant",
      titleType: "tvSeries",
      year: 1994,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0782213/",
          status: "released",
          title: "Episode dated 21 March 2006",
          titleType: "tvEpisode",
          year: 2006,
          releaseDate: "2006-03-21"
        }
      ],
      seriesStartYear: 1994
    },
    {
      category: "self",
      characters: ["Self - Winner & Nominee"],
      roles: [
        {
          character: "Self - Winner & Nominee"
        }
      ],
      id: "/title/tt0770705/",
      image: {
        height: 1000,
        id: "/title/tt0770705/images/rm2972073473",
        url:
          "https://m.media-amazon.com/images/M/MV5BNGJlYTBjOWQtODg0MS00NTdkLWIzMTMtMTQwYTdjYzc2MDYxXkEyXkFqcGdeQXVyNDA1OTM4MjM@._V1_.jpg",
        width: 461
      },
      status: "released",
      title: "The 32nd Annual People's Choice Awards",
      titleType: "tvSpecial",
      year: 2006
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1346700/",
      title: "Primetime Live: Brad Pitt's Journey to Africa",
      titleType: "tvMovie",
      year: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0472972",
      category: "self",
      characters: ["Narrator"],
      endYear: 2005,
      episodeCount: 7,
      roles: [
        {
          character: "Narrator",
          episodeCount: 7
        }
      ],
      startYear: 2005,
      id: "/title/tt0472972/",
      image: {
        height: 500,
        id: "/title/tt0472972/images/rm686526976",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTA1NDEwMTY2NzJeQTJeQWpwZ15BbWU3MDI2MzQxMzE@._V1_.jpg",
        width: 369
      },
      status: "released",
      title: "Rx for Survival: A Global Health Challenge",
      titleType: "tvMiniSeries",
      year: 2005,
      episodes: [
        {
          attr: ["voice"],
          billing: 1,
          category: "self",
          characters: ["Narrator"],
          roles: [
            {
              character: "Narrator"
            }
          ],
          id: "/title/tt1597559/",
          status: "released",
          title: "Delivering the Goods",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 3,
          releaseDate: "2005-11-03",
          seasonNumber: 1
        },
        {
          attr: ["voice"],
          billing: 1,
          category: "self",
          characters: ["Narrator"],
          roles: [
            {
              character: "Narrator"
            }
          ],
          id: "/title/tt1597460/",
          status: "released",
          title: "Disease Warriors",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 1,
          releaseDate: "2005-11-03",
          seasonNumber: 1
        },
        {
          attr: ["voice"],
          billing: 1,
          category: "self",
          characters: ["Narrator"],
          roles: [
            {
              character: "Narrator"
            }
          ],
          id: "/title/tt1597458/",
          status: "released",
          title: "Back to Basics",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 5,
          releaseDate: "2005-11-03",
          seasonNumber: 1
        },
        {
          attr: ["voice"],
          billing: 1,
          category: "self",
          characters: ["Narrator"],
          roles: [
            {
              character: "Narrator"
            }
          ],
          id: "/title/tt1558070/",
          status: "released",
          title: "Rise of the Superbugs",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 2,
          releaseDate: "2005-11-03",
          seasonNumber: 1
        },
        {
          attr: ["voice"],
          billing: 1,
          category: "self",
          characters: ["Narrator"],
          roles: [
            {
              character: "Narrator"
            }
          ],
          id: "/title/tt1261321/",
          image: {
            height: 1435,
            id: "/title/tt1261321/images/rm3863942913",
            url:
              "https://m.media-amazon.com/images/M/MV5BNWNmMTI5MjgtNmY4ZS00NmM5LWFjOTQtNzJkMTExMTA0MGU3XkEyXkFqcGdeQXVyODU2NjU0NjA@._V1_.jpg",
            width: 995
          },
          status: "released",
          title: "How Safe Are We?",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 6,
          releaseDate: "2005-11-03",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2005,
      seriesStartYear: 2005
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0462403/",
      image: {
        height: 500,
        id: "/title/tt0462403/images/rm1759678976",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTA5Mjg2MzI0NDReQTJeQWpwZ15BbWU3MDg2ODYxMzE@._V1_.jpg",
        width: 376
      },
      status: "released",
      title: "Live 8",
      titleType: "tvSpecial",
      year: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0222560",
      category: "self",
      characters: ["Self"],
      endYear: 2005,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2005,
      id: "/title/tt0222560/",
      image: {
        height: 788,
        id: "/title/tt0222560/images/rm3593607936",
        url:
          "https://m.media-amazon.com/images/M/MV5BM2UwMjkzOTEtNTg5ZC00ZWViLThiZjktMjU2YWFhZGE5ZTUyXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg",
        width: 1400
      },
      status: "released",
      title: "GMTV",
      titleType: "tvSeries",
      year: 1993,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0585351/",
          status: "released",
          title: "Episode dated 7 June 2005",
          titleType: "tvEpisode",
          year: 2005,
          releaseDate: "2005-06-07"
        }
      ],
      seriesEndYear: 2010,
      seriesStartYear: 1993
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0457483/",
      image: {
        height: 1014,
        id: "/title/tt0457483/images/rm250550016",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWY5ZWVmZGItN2U4Zi00ZWFiLTg3MTctYjA2NDFkOGYwN2Q5XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Special Thanks to Roy London",
      titleType: "movie",
      year: 2005
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0413616",
      category: "self",
      characters: ["Self"],
      endYear: 2005,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2005,
      id: "/title/tt0413616/",
      image: {
        height: 660,
        id: "/title/tt0413616/images/rm2812189952",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTgyNjkzODk3NF5BMl5BanBnXkFtZTcwNjQwNzcyMQ@@._V1_.jpg",
        width: 450
      },
      status: "released",
      title: "Unscripted",
      titleType: "tvSeries",
      year: 2005,
      episodes: [
        {
          billing: 21,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0737301/",
          status: "released",
          title: "Episode #1.3",
          titleType: "tvEpisode",
          year: 2005,
          episodeNumber: 3,
          releaseDate: "2005-01-16",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2005,
      seriesStartYear: 2005
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0445772/",
      image: {
        height: 1275,
        id: "/title/tt0445772/images/rm3516314113",
        url:
          "https://m.media-amazon.com/images/M/MV5BMmZkNWJiYzctMjc0ZC00ZDUxLTllMmItODM1MzEwOGU1NWFhXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 1275
      },
      status: "released",
      title: "Tsunami Aid: A Concert of Hope",
      titleType: "tvSpecial",
      year: 2005
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0439022/",
      status: "released",
      title: "Troy: In the Thick of Battle",
      titleType: "video",
      year: 2005
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0439021/",
      status: "released",
      title: "Troy: From Ruins to Reality",
      titleType: "video",
      year: 2005
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt11084704/",
      image: {
        height: 1080,
        id: "/title/tt11084704/images/rm2682227457",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWM5OGIyNzgtMTFkYi00YTI3LWFlM2QtYTFiZDJkNGFhYTViXkEyXkFqcGdeQXVyNzg0ODMwNDg@._V1_.jpg",
        width: 1920
      },
      status: "released",
      title: "Beer Run",
      titleType: "short",
      year: 2005
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1584925/",
      image: {
        height: 1024,
        id: "/title/tt1584925/images/rm2367591169",
        url:
          "https://m.media-amazon.com/images/M/MV5BOGU2YTllMTktZDllZS00NjBlLTgxY2ItNjQwNDI0NzEzM2IwXkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg",
        width: 696
      },
      status: "released",
      title: "Los Angeles",
      titleType: "short",
      year: 2004
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0320991",
      category: "self",
      characters: ["Self"],
      endYear: 2004,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2004,
      id: "/title/tt0320991/",
      image: {
        height: 2800,
        id: "/title/tt0320991/images/rm70008577",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDQ4YjRmNTMtMWU1My00OGRjLTgwYWMtMmQ2M2YxZjRiNjZkXkEyXkFqcGdeQXVyMTM2OTQxOTg1._V1_.jpg",
        width: 1864
      },
      status: "released",
      title: "Tout le monde en parle",
      titleType: "tvSeries",
      year: 1998,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0732478/",
          status: "released",
          title: "Episode dated 18 December 2004",
          titleType: "tvEpisode",
          year: 2004,
          releaseDate: "2004-12-18"
        }
      ],
      seriesEndYear: 2006,
      seriesStartYear: 1998
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0410966",
      category: "self",
      characters: ["Self"],
      endYear: 2004,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2004,
      id: "/title/tt0410966/",
      image: {
        height: 647,
        id: "/title/tt0410966/images/rm2074174720",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTg0ZDc0YjctOGViNi00YjJiLWI3NzktMzU4NWRjNTlkMDQyXkEyXkFqcGdeQXVyNzU5MjczMzE@._V1_.jpg",
        width: 500
      },
      status: "released",
      title: "Blue Collar TV",
      titleType: "tvSeries",
      year: 2004,
      episodes: [
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0527294/",
          status: "released",
          title: "Human Body",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 16,
          releaseDate: "2004-11-19",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2006,
      seriesStartYear: 2004
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0418450/",
      image: {
        height: 2500,
        id: "/title/tt0418450/images/rm997918720",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDg1OTA0MjgtY2Q2OS00YjVlLWEzNmEtNjRmMjdkNTk1YTUwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        width: 3623
      },
      status: "released",
      title: "The 56th Annual Primetime Emmy Awards",
      titleType: "tvSpecial",
      year: 2004
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0770821/",
      status: "released",
      title: "Troy: The Passion of Helen",
      titleType: "tvMovie",
      year: 2004
    },
    {
      billing: 6,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0422707/",
      status: "released",
      title: "The Making of 'Troy'",
      titleType: "tvMovie",
      year: 2004
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0357350",
      category: "self",
      characters: ["Self"],
      endYear: 2004,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2004,
      id: "/title/tt0357350/",
      image: {
        height: 389,
        id: "/title/tt0357350/images/rm4289730304",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjliNjNjNmUtY2Q0NC00MDQ2LThlZWUtYzQwZTk3OTM1MDE0XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 530
      },
      status: "released",
      title: "4Pop",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0502832/",
          status: "released",
          title: "Hollywoodin kierrätysbuumi",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 36,
          releaseDate: "2004-05-09",
          seasonNumber: 2
        }
      ],
      seriesEndYear: 2004,
      seriesStartYear: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0106052",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2004,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 2004,
      id: "/title/tt0106052/",
      image: {
        height: 720,
        id: "/title/tt0106052/images/rm139220480",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjlmMmIyZjEtOThmZC00YjE5LTlhMWMtM2M5YzNmNjZhZjRiXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
        width: 480
      },
      status: "released",
      title: "Late Night with Conan O'Brien",
      titleType: "tvSeries",
      year: 1993,
      episodes: [
        {
          billing: 2,
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt0627538/",
          image: {
            height: 720,
            id: "/title/tt0627538/images/rm3395297537",
            url:
              "https://m.media-amazon.com/images/M/MV5BMGJhY2RiMzAtN2RjOS00Mjg0LWJjMTItNmI4MGU0ODRiMjZhXkEyXkFqcGdeQXVyMTI4ODc2NDY@._V1_.jpg",
            width: 960
          },
          status: "released",
          title: "Brad Pitt/Janet Jackson",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 108,
          releaseDate: "2004-05-06",
          seasonNumber: 11
        }
      ],
      seriesEndYear: 2009,
      seriesStartYear: 1993
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0167735",
      category: "self",
      characters: ["Self"],
      endYear: 2004,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2004,
      id: "/title/tt0167735/",
      image: {
        height: 1170,
        id: "/title/tt0167735/images/rm768244480",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDQ2ZDI5MjQtNjdiZi00YTczLWI3MzktMjMxNGQ5NDcxMDc5XkEyXkFqcGdeQXVyOTAzNDU0NzU@._V1_.jpg",
        width: 780
      },
      status: "released",
      title: "Total Request Live",
      titleType: "tvSeries",
      year: 1998,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0731700/",
          status: "released",
          title: "Episode dated 3 May 2004",
          titleType: "tvEpisode",
          year: 2004,
          releaseDate: "2004-05-03"
        }
      ],
      seriesEndYear: 2019,
      seriesStartYear: 1998
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0261475",
      category: "self",
      characters: ["Self"],
      endYear: 2004,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2004,
      id: "/title/tt0261475/",
      image: {
        height: 1920,
        id: "/title/tt0261475/images/rm3338538496",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDVjZGI4OWYtNjcyOC00ZWMyLWI0MWQtZDEzYzkyZTZjOTM3XkEyXkFqcGdeQXVyNjM0NjM0MjU@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "Hollywood Greats",
      titleType: "tvSeries",
      year: 1977,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0602892/",
          status: "released",
          title: "Anthony Hopkins",
          titleType: "tvEpisode",
          year: 2004,
          episodeNumber: 4,
          releaseDate: "2004-03-29",
          seasonNumber: 10
        }
      ],
      seriesStartYear: 1977
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0426682",
      category: "self",
      characters: ["Self"],
      endYear: 2003,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2003,
      id: "/title/tt0426682/",
      image: {
        height: 900,
        id: "/title/tt0426682/images/rm2612623360",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWQxNWQ3MGQtNjA2ZS00YjAzLWI4ZDEtMmRmMDFjMTViNjJmXkEyXkFqcGdeQXVyODQ1NTk5OQ@@._V1_.jpg",
        width: 600
      },
      status: "released",
      title: "The Fabulous Life of",
      titleType: "tvSeries",
      year: 2003,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0575255/",
          status: "released",
          title: "Brad and Jen",
          titleType: "tvEpisode",
          year: 2003,
          releaseDate: "2003"
        }
      ],
      seriesStartYear: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0224861",
      category: "self",
      characters: ["Self"],
      endYear: 2003,
      episodeCount: 3,
      roles: [
        {
          character: "Self",
          episodeCount: 3
        }
      ],
      startYear: 1999,
      id: "/title/tt0224861/",
      image: {
        height: 378,
        id: "/title/tt0224861/images/rm2432081408",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTUzODk4MzE4Nl5BMl5BanBnXkFtZTYwMzc3NzE5._V1_.jpg",
        width: 475
      },
      status: "released",
      title: "The Directors",
      titleType: "tvSeries",
      year: 1997,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0560792/",
          status: "released",
          title: "The Films of Ridley Scott",
          titleType: "tvEpisode",
          year: 2003,
          episodeNumber: 32,
          releaseDate: "2003",
          seasonNumber: 2
        },
        {
          billing: 4,
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0297859/",
          image: {
            height: 475,
            id: "/title/tt0297859/images/rm1087020288",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTcxOTkyMTEzNV5BMl5BanBnXkFtZTcwOTkzNTQyMQ@@._V1_.jpg",
            width: 336
          },
          status: "released",
          title: "The Films of Terry Gilliam",
          titleType: "tvEpisode",
          year: 2000,
          episodeNumber: 2,
          releaseDate: "2000-05-23",
          seasonNumber: 1
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0560806/",
          status: "released",
          title: "The Films of Tony Scott",
          titleType: "tvEpisode",
          year: 1999,
          episodeNumber: 12,
          releaseDate: "1999",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2008,
      seriesStartYear: 1997
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0488577/",
      image: {
        height: 800,
        id: "/title/tt0488577/images/rm695737088",
        url:
          "https://m.media-amazon.com/images/M/MV5BODUxMTQ4OGMtZjNkOS00YWY2LTk0ZGMtZWQ0Y2M3NzBjYmIzXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg",
        width: 1321
      },
      status: "released",
      title: "The Making of 'Sinbad: Legend of the Seven Seas'",
      titleType: "video",
      year: 2003
    },
    {
      billing: 51,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0384792/",
      image: {
        height: 643,
        id: "/title/tt0384792/images/rm1588826112",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTI0MTIwNDg1OV5BMl5BanBnXkFtZTcwOTg0MzU1MQ@@._V1_.jpg",
        width: 450
      },
      status: "released",
      title: "Abby Singer",
      titleType: "movie",
      year: 2003
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0450062/",
      image: {
        height: 394,
        id: "/title/tt0450062/images/rm1796681473",
        url:
          "https://m.media-amazon.com/images/M/MV5BOWI3NTI2MTktNDkzNi00MjZlLTljMzUtNWI1NjhmNWM5NDFkXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 551
      },
      status: "released",
      title: "Nickelodeon Kids' Choice Awards '03",
      titleType: "tvSpecial",
      year: 2003
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0349050/",
      status: "released",
      title: "The 2003 IFP Independent Spirit Awards",
      titleType: "tvSpecial",
      year: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0395334",
      billing: 32,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0395334/",
      image: {
        height: 700,
        id: "/title/tt0395334/images/rm555614720",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWEzYzAxN2ItNTM5Ny00YmEwLWFlOGEtOTRjNmViNDUxY2U2XkEyXkFqcGdeQXVyNDg5MjMyMTM@._V1_.jpg",
        width: 500
      },
      status: "released",
      title: "Cartaz Cultural",
      titleType: "tvSeries",
      year: 2003,
      seriesStartYear: 2003
    },
    {
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt0349057/",
      image: {
        height: 771,
        id: "/title/tt0349057/images/rm1522976257",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTMzZTgxYTMtYmI5NC00NjQ4LWE1MzItN2U2ZmI1MmY0MmZmXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "The 60th Annual Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2003
    },
    {
      billing: 20,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0313160/",
      image: {
        height: 598,
        id: "/title/tt0313160/images/rm1156463104",
        url:
          "https://m.media-amazon.com/images/M/MV5BZmIyMjlkOWItNmU4MS00YzI3LWEwNGUtODlkYjIzNDJmODdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
        width: 461
      },
      status: "released",
      title: "The 54th Annual Primetime Emmy Awards",
      titleType: "tvSpecial",
      year: 2002
    },
    {
      billing: 2,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0351127/",
      image: {
        height: 423,
        id: "/title/tt0351127/images/rm1216855297",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTU2MjdhOWYtZWRiOS00ODdjLWJjOTktYjZkOGY2OGJhODY4XkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 322
      },
      status: "released",
      title: "Jeff Buckley: Everybody Here Wants You",
      titleType: "tvMovie",
      year: 2002
    },
    {
      billing: 11,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0369017/",
      status: "released",
      title: "Thelma & Louise: The Last Journey",
      titleType: "video",
      year: 2002
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0340474",
      category: "self",
      characters: ["Self"],
      endYear: 2002,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        }
      ],
      startYear: 2002,
      id: "/title/tt0340474/",
      status: "released",
      title: "Rank",
      titleType: "tvSeries",
      year: 2001,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0682728/",
          status: "released",
          title: "25 Sexiest Movie Moments",
          titleType: "tvEpisode",
          year: 2002,
          releaseDate: "2002-05-26"
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0326844/",
          status: "released",
          title: "25 Toughest Stars",
          titleType: "tvEpisode",
          year: 2002,
          releaseDate: "2002-04-24"
        }
      ],
      seriesEndYear: 2004,
      seriesStartYear: 2001
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0499177/",
      image: {
        height: 500,
        id: "/title/tt0499177/images/rm1921128961",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTcwYmRiNTYtOTY2OC00MzU2LTgwNmYtMjM3ZDVlZjAzZjcwXkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg",
        width: 348
      },
      status: "released",
      title: "'Ocean's Eleven': The Look of the Con",
      titleType: "video",
      year: 2002
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0264263",
      category: "self",
      characters: ["Self", "Self - In Night Monkey Suit"],
      endYear: 2002,
      episodeCount: 3,
      roles: [
        {
          character: "Self",
          episodeCount: 2
        },
        {
          character: "Self - In Night Monkey Suit",
          episodeCount: 1
        }
      ],
      startYear: 2002,
      id: "/title/tt0264263/",
      image: {
        height: 1440,
        id: "/title/tt0264263/images/rm2233601793",
        url:
          "https://m.media-amazon.com/images/M/MV5BMGViZGEzZWUtY2JjZC00MjRlLWI2NDktM2VlZTA2NzcwMzE2XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Jackass",
      titleType: "tvSeries",
      year: 2000,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0613909/",
          image: {
            height: 335,
            id: "/title/tt0613909/images/rm3645120513",
            url:
              "https://m.media-amazon.com/images/M/MV5BYjBjMDEzZGYtMTU3Mi00YzA3LTgxNWItYWJkYWZmZDJmYTlhXkEyXkFqcGdeQXVyODUyMTkwOTg@._V1_.jpg",
            width: 230
          },
          status: "released",
          title: "Gumball Rally 3000",
          titleType: "tvEpisode",
          year: 2002,
          episodeNumber: 9,
          releaseDate: "2002-02-17",
          seasonNumber: 3
        },
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self - In Night Monkey Suit"],
          roles: [
            {
              character: "Self - In Night Monkey Suit"
            }
          ],
          id: "/title/tt0613908/",
          image: {
            height: 719,
            id: "/title/tt0613908/images/rm1244405761",
            url:
              "https://m.media-amazon.com/images/M/MV5BMWZiNjM2OGUtZTFlYy00Y2ViLTk3MzktMjNmMjZhYzhiN2EyXkEyXkFqcGdeQXVyODUyMTkwOTg@._V1_.jpg",
            width: 488
          },
          status: "released",
          title: "The Bed Wetter",
          titleType: "tvEpisode",
          year: 2002,
          episodeNumber: 8,
          releaseDate: "2002-02-10",
          seasonNumber: 3
        },
        {
          attr: ["uncredited"],
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0613907/",
          image: {
            height: 292,
            id: "/title/tt0613907/images/rm3745783809",
            url:
              "https://m.media-amazon.com/images/M/MV5BYWNhODkwYmMtZjYxNy00YjY2LWFmOTktYzU3ZjMxZDgxZjVlXkEyXkFqcGdeQXVyODUyMTkwOTg@._V1_.jpg",
            width: 398
          },
          status: "released",
          title: "Bloody Carpet",
          titleType: "tvEpisode",
          year: 2002,
          episodeNumber: 7,
          releaseDate: "2002-02-03",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 2007,
      seriesStartYear: 2000
    },
    {
      category: "self",
      characters: ["Self - Audience Member"],
      roles: [
        {
          character: "Self - Audience Member"
        }
      ],
      id: "/title/tt0364916/",
      image: {
        height: 981,
        id: "/title/tt0364916/images/rm3254781184",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTlmYjZhOTgtYjQwYy00ODYyLWI0NDUtNWIyMmE3MjAyMDNiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
        width: 640
      },
      status: "released",
      title: "The 59th Annual Golden Globe Awards",
      titleType: "tvSpecial",
      year: 2002
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0288347",
      category: "self",
      characters: ["Self"],
      endYear: 2001,
      episodeCount: 2,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2001,
      id: "/title/tt0288347/",
      image: {
        height: 318,
        id: "/title/tt0288347/images/rm2911310592",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWIwMjE0N2YtNjFhMC00Nzg0LWEzNDMtYTFmOGIzODEwMjJlXkEyXkFqcGdeQXVyMjcyMDU4NA@@._V1_.jpg",
        width: 360
      },
      status: "released",
      title: "Bravo Profiles",
      titleType: "tvSeries",
      year: 1998,
      episodes: [
        {
          category: "self",
          id: "/title/tt1436075/",
          status: "released",
          title: "Anthony Hopkins",
          titleType: "tvEpisode",
          year: 2001,
          episodeNumber: 5,
          releaseDate: "2001",
          seasonNumber: 1
        },
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0531356/",
          status: "released",
          title: "Robert Redford",
          titleType: "tvEpisode",
          year: 2001,
          releaseDate: "2001"
        }
      ],
      seriesEndYear: 2004,
      seriesStartYear: 1998
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0395905",
      category: "self",
      characters: ["Self"],
      endYear: 2001,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2001,
      id: "/title/tt0395905/",
      image: {
        height: 1440,
        id: "/title/tt0395905/images/rm4028904961",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTdmZTgyYjktZWMwZi00MDUxLWI0MWYtZGFjZGEwZmY4ZWIxXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
        width: 960
      },
      status: "released",
      title: "Travel Sick",
      titleType: "tvSeries",
      year: 2001,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0733307/",
          status: "released",
          title: "Los Angeles",
          titleType: "tvEpisode",
          year: 2001,
          releaseDate: "2001"
        }
      ],
      seriesEndYear: 2003,
      seriesStartYear: 2001
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0452318/",
      status: "released",
      title: "The Making of 'Spy Game'",
      titleType: "video",
      year: 2001
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0103569",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 2001,
      episodeCount: 3,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 3
        }
      ],
      startYear: 2001,
      id: "/title/tt0103569/",
      image: {
        height: 1176,
        id: "/title/tt0103569/images/rm2347503360",
        url:
          "https://m.media-amazon.com/images/M/MV5BODdiOTUwMGUtODRjNC00ZmFjLWJiYzQtOWY5ODc1Y2FhMmQ5XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg",
        width: 800
      },
      status: "released",
      title: "The Tonight Show with Jay Leno",
      titleType: "tvSeries",
      year: 1992,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt0832803/",
          status: "released",
          title: "Episode #9.204",
          titleType: "tvEpisode",
          year: 2001,
          episodeNumber: 204,
          releaseDate: "2001-12-04",
          seasonNumber: 9
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt0728446/",
          status: "released",
          title: "Episode #9.195",
          titleType: "tvEpisode",
          year: 2001,
          episodeNumber: 195,
          releaseDate: "2001-11-21",
          seasonNumber: 9
        },
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt1154783/",
          status: "released",
          title: "Episode #9.22",
          titleType: "tvEpisode",
          year: 2001,
          episodeNumber: 22,
          releaseDate: "2001-02-01",
          seasonNumber: 9
        }
      ],
      seriesEndYear: 2014,
      seriesStartYear: 1992
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0296503/",
      image: {
        height: 475,
        id: "/title/tt0296503/images/rm635214848",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTIzNDg1MjIxOF5BMl5BanBnXkFtZTcwODAxMzkxMQ@@._V1_.jpg",
        width: 352
      },
      status: "released",
      title: "America: A Tribute to Heroes",
      titleType: "tvSpecial",
      year: 2001
    },
    {
      billing: 1,
      category: "self",
      characters: ["Host", "Narrator"],
      roles: [
        {
          character: "Host"
        },
        {
          character: "Narrator"
        }
      ],
      id: "/title/tt0301369/",
      status: "released",
      title: "Growing Up Grizzly",
      titleType: "tvMovie",
      year: 2001
    },
    {
      billing: 6,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt1388353/",
      image: {
        height: 1192,
        id: "/title/tt1388353/images/rm3136005633",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTY5OTM0M2UtMGVkZC00OTQxLWI1OTEtN2M3NDhiNWM4NmNjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_.jpg",
        width: 795
      },
      status: "released",
      title: "Making 'Snatch'",
      titleType: "video",
      year: 2001
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1521185",
      category: "self",
      characters: ["Self (2001)"],
      roles: [
        {
          character: "Self (2001)"
        }
      ],
      id: "/title/tt1521185/",
      status: "released",
      title: "Lux",
      titleType: "tvSeries",
      year: 2000,
      seriesEndYear: 2004,
      seriesStartYear: 2000
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt15441582",
      category: "self",
      characters: ["Self"],
      endYear: 2000,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 2000,
      id: "/title/tt15441582/",
      image: {
        height: 1275,
        id: "/title/tt15441582/images/rm3199265793",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjBjOWVhZDQtNWVhMi00Mzk2LThlYmMtZTA3MDM1ZDg4MmE4XkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
        width: 1275
      },
      status: "released",
      title: "AFI Life Achievement Award",
      titleType: "tvSeries",
      year: 1973,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0934367/",
          image: {
            height: 379,
            id: "/title/tt0934367/images/rm782178048",
            url:
              "https://m.media-amazon.com/images/M/MV5BMDU0MjQwYTYtMTZiMC00Yzg5LWE4OGUtMjU0NjJkY2RiZmM2XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
            width: 506
          },
          status: "released",
          title: "AFI Life Achievement Award: A Tribute to Harrison Ford",
          titleType: "tvEpisode",
          year: 2000,
          episodeNumber: 28,
          releaseDate: "2000",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 1973
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0373207/",
      title: "On Location: Fight Club",
      titleType: "video",
      year: 2000
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5270994/",
      status: "released",
      title: "Flogging 'Fight Club'",
      titleType: "video",
      year: 2000
    },
    {
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt0266222/",
      image: {
        height: 1334,
        id: "/title/tt0266222/images/rm2164460032",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTRmMDhhNzktOWY5MC00NWJlLTkzOGMtZDJkN2YzZTNmZTFjXkEyXkFqcGdeQXVyODA1NzQ4OA@@._V1_.jpg",
        width: 750
      },
      status: "released",
      title: "The 72nd Annual Academy Awards",
      titleType: "tvSpecial",
      year: 2000
    },
    {
      category: "self",
      id: "/title/tt12179456/",
      image: {
        height: 1600,
        id: "/title/tt12179456/images/rm131118081",
        url:
          "https://m.media-amazon.com/images/M/MV5BMmE4OGMzN2MtZGMzNC00ZWIyLTllNTMtMWFkNzRmNWIxYWJjXkEyXkFqcGdeQXVyMTk5MjAyMjM@._V1_.jpg",
        width: 1200
      },
      status: "released",
      title: "Brad Pitt & Jennifer Aniston: Hollywood's Couple of the Year",
      titleType: "movie",
      year: 2000
    },
    {
      category: "self",
      characters: ["Self - Audience Member"],
      roles: [
        {
          character: "Self - Audience Member"
        }
      ],
      id: "/title/tt0266217/",
      image: {
        height: 512,
        id: "/title/tt0266217/images/rm2266451968",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTY0MTgzMzctZDM1NC00OWNlLWIwYmUtZWZjNTY5YWZjODRjXkEyXkFqcGdeQXVyNTY3NTQ4NzY@._V1_.jpg",
        width: 512
      },
      status: "released",
      title: "The 51st Annual Primetime Emmy Awards",
      titleType: "tvSpecial",
      year: 1999
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt7617962",
      category: "self",
      characters: ["Self"],
      endYear: 1999,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 1999,
      id: "/title/tt7617962/",
      status: "released",
      title: "Sagas",
      titleType: "tvSeries",
      year: 1998,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt12908034/",
          status: "released",
          title: "Episode dated 25 August 1999",
          titleType: "tvEpisode",
          year: 1999,
          releaseDate: "1999-08-25"
        }
      ],
      seriesEndYear: 2013,
      seriesStartYear: 1998
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0165319",
      category: "self",
      characters: ["Self - Guest"],
      endYear: 1999,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Guest",
          episodeCount: 1
        }
      ],
      startYear: 1999,
      id: "/title/tt0165319/",
      image: {
        height: 262,
        id: "/title/tt0165319/images/rm268832768",
        url:
          "https://m.media-amazon.com/images/M/MV5BNGFhNThiMmEtZjg1ZS00ZmQ1LTg5MjMtY2E2YjEwZDNlMjNlXkEyXkFqcGdeQXVyMjcyMDU4NA@@._V1_.jpg",
        width: 432
      },
      status: "released",
      title: "The Howard Stern Radio Show",
      titleType: "tvSeries",
      year: 1998,
      episodes: [
        {
          category: "self",
          characters: ["Self - Guest"],
          roles: [
            {
              character: "Self - Guest"
            }
          ],
          id: "/title/tt0606233/",
          status: "released",
          title: "Episode dated 20 March 1999",
          titleType: "tvEpisode",
          year: 1999,
          releaseDate: "1999-03-20"
        }
      ],
      seriesEndYear: 2001,
      seriesStartYear: 1998
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0896232",
      category: "self",
      characters: ["Self"],
      endYear: 1999,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 1999,
      id: "/title/tt0896232/",
      image: {
        height: 1966,
        id: "/title/tt0896232/images/rm3506725376",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjE2NWEzYmUtNDkxNi00YWZhLTk4NGItODdmNTg2NzFlYmUyXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 1051
      },
      status: "released",
      title: "Intimate Portrait",
      titleType: "tvSeries",
      year: 1990,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt0443549/",
          status: "released",
          title: "Melissa Etheridge",
          titleType: "tvEpisode",
          year: 1999,
          releaseDate: "1999-01-18"
        }
      ],
      seriesEndYear: 2005,
      seriesStartYear: 1990
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0773260",
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0773260/",
      image: {
        height: 700,
        id: "/title/tt0773260/images/rm589436928",
        url:
          "https://m.media-amazon.com/images/M/MV5BN2ZlMTIxMzYtNmYzNC00OGJhLWI4ZWQtZDM0ZDZkOWQ3YjkyXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg",
        width: 777
      },
      status: "released",
      title: "Bravo Profiles: The Entertainment Business",
      titleType: "tvMiniSeries",
      year: 1998,
      seriesEndYear: 1998,
      seriesStartYear: 1998
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0196277",
      category: "self",
      characters: ["Self"],
      endYear: 1997,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 1997,
      id: "/title/tt0196277/",
      image: {
        height: 516,
        id: "/title/tt0196277/images/rm3555596032",
        url:
          "https://m.media-amazon.com/images/M/MV5BMmI1YjRlZTMtNTQ3ZS00ODJhLTk5ODktNjZhNmQ4MWY3ODJiXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Nulle part ailleurs",
      titleType: "tvSeries",
      year: 1987,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt17517902/",
          status: "released",
          title: "Episode dated 21 November 1997",
          titleType: "tvEpisode",
          year: 1997,
          releaseDate: "1997-11-21"
        }
      ],
      seriesEndYear: 2001,
      seriesStartYear: 1987
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt9898330/",
      status: "released",
      title: "Kalifornia: Interview with Juliette Lewis and Brad Pitt",
      titleType: "video",
      year: 1997
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt5326420/",
      status: "released",
      title: "The Making of 'Kalifornia'",
      titleType: "video",
      year: 1997
    },
    {
      billing: 4,
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0326300/",
      status: "released",
      title: "Town Meeting with Diane Sawyer: Celebrities vs. the Press",
      titleType: "tvSpecial",
      year: 1997
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0373506",
      category: "self",
      characters: ["Self"],
      endYear: 1997,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 1997,
      id: "/title/tt0373506/",
      image: {
        height: 583,
        id: "/title/tt0373506/images/rm3571521280",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjU5NWJlZDItZGQ2OS00ZWU0LWE1MzktM2MxMWZmZjM0MzU3XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "Corazón, corazón",
      titleType: "tvSeries",
      year: 1993,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt1905338/",
          status: "released",
          title: "Episode dated 15 March 1997",
          titleType: "tvEpisode",
          year: 1997,
          releaseDate: "1997-03-15"
        }
      ],
      seriesEndYear: 2011,
      seriesStartYear: 1993
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt1172112",
      category: "self",
      characters: ["Self"],
      endYear: 1996,
      episodeCount: 1,
      roles: [
        {
          character: "Self",
          episodeCount: 1
        }
      ],
      startYear: 1996,
      id: "/title/tt1172112/",
      image: {
        height: 1080,
        id: "/title/tt1172112/images/rm3605531649",
        url:
          "https://m.media-amazon.com/images/M/MV5BM2I5ZDI0YTctZTczYy00MjAzLThkZDctMThhMGJiMTEyM2ZlXkEyXkFqcGdeQXVyMTQ4MjU0NzYz._V1_.jpg",
        width: 1920
      },
      status: "released",
      title: "Mezamashi TV",
      titleType: "tvSeries",
      year: 1994,
      episodes: [
        {
          category: "self",
          characters: ["Self"],
          roles: [
            {
              character: "Self"
            }
          ],
          id: "/title/tt3258672/",
          status: "released",
          title: "Episode dated 12 December 1996",
          titleType: "tvEpisode",
          year: 1996,
          releaseDate: "1996-12-12"
        }
      ],
      seriesStartYear: 1994
    },
    {
      attr: ["uncredited"],
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0116479/",
      image: {
        height: 1500,
        id: "/title/tt0116479/images/rm4071818241",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzFmZjhjYjctNWJmMS00NDNiLTljN2YtNTZlZDI2NzBmYmM5XkEyXkFqcGdeQXVyNDUzNzgxODE@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "The Hamster Factor and Other Tales of Twelve Monkeys",
      titleType: "video",
      year: 1996
    },
    {
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt0275881/",
      image: {
        height: 953,
        id: "/title/tt0275881/images/rm443881728",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTI5MWYyZTctNzg2Mi00ZjczLTg3NzMtMDFlZDc0NGM3NzRlXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
        width: 1484
      },
      status: "released",
      title: "1996 MTV Movie Awards",
      titleType: "tvSpecial",
      year: 1996
    },
    {
      category: "self",
      characters: ["Self - Nominee"],
      roles: [
        {
          character: "Self - Nominee"
        }
      ],
      id: "/title/tt0283830/",
      image: {
        height: 1088,
        id: "/title/tt0283830/images/rm3232831232",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjc5YzNjY2UtMTQ3MC00ZTc5LWEzMWItYjQ3NTEzZmZjYjZjXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 690
      },
      status: "released",
      title: "The 68th Annual Academy Awards",
      titleType: "tvSpecial",
      year: 1996
    },
    {
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt1800745/",
      image: {
        height: 787,
        id: "/title/tt1800745/images/rm1120323073",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzUxNGZjMjMtNzAxNi00Mzk3LWEyYzgtZmFiNTVlZDVlODk1XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 1062
      },
      status: "released",
      title: "53rd Annual Golden Globe Awards",
      titleType: "tvSpecial",
      year: 1996
    },
    {
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt0275880/",
      image: {
        height: 476,
        id: "/title/tt0275880/images/rm176559872",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjZkYWEwNjEtNWQ5Mi00MDgyLWE2MmMtZDAzN2QyM2EwMGM3XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "1995 MTV Movie Awards",
      titleType: "tvSpecial",
      year: 1995
    },
    {
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt0268875/",
      image: {
        height: 998,
        id: "/title/tt0268875/images/rm3618707200",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzc4NTNmMGYtMGM3Zi00Y2ZiLTk5M2UtMjA3NTRmYTIwNTQ0XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "The 67th Annual Academy Awards",
      titleType: "tvSpecial",
      year: 1995
    },
    {
      category: "self",
      characters: ["Self - Winner"],
      roles: [
        {
          character: "Self - Winner"
        }
      ],
      id: "/title/tt0482447/",
      image: {
        height: 388,
        id: "/title/tt0482447/images/rm3882948352",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDkxMTA5YTEtNDUxZC00NTEzLWJlMDgtZjc1ZDI5MGQzNWE3XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 532
      },
      status: "released",
      title: "The 52nd Annual Golden Globe Awards",
      titleType: "tvSpecial",
      year: 1995
    },
    {
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt1355231/",
      status: "released",
      title: "VH1 Honors",
      titleType: "tvSpecial",
      year: 1994
    },
    {
      category: "self",
      characters: ["Self - Audience Member"],
      roles: [
        {
          character: "Self - Audience Member"
        }
      ],
      id: "/title/tt0266219/",
      image: {
        height: 1083,
        id: "/title/tt0266219/images/rm783423232",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDFjMGJmZjMtMDk2MC00NjBiLTlmYmMtMmE2ZTE1ZjZkODNkXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg",
        width: 720
      },
      status: "released",
      title: "The 64th Annual Academy Awards",
      titleType: "tvSpecial",
      year: 1992
    },
    {
      category: "self",
      characters: ["Self - Presenter"],
      roles: [
        {
          character: "Self - Presenter"
        }
      ],
      id: "/title/tt11574716/",
      image: {
        height: 878,
        id: "/title/tt11574716/images/rm471201537",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjRhM2FiOTEtYjkzZS00N2IyLWFmNWUtMjIyNGEyM2JkZmNlXkEyXkFqcGdeQXVyMTkwODYwMQ@@._V1_.jpg",
        width: 466
      },
      status: "released",
      title: "7th Annual Independent Spirit Awards",
      titleType: "tvSpecial",
      year: 1992
    },
    {
      category: "self",
      characters: ["Self"],
      roles: [
        {
          character: "Self"
        }
      ],
      id: "/title/tt0289655/",
      image: {
        height: 1134,
        id: "/title/tt0289655/images/rm3407298304",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzQxNWRhZDMtZmZhZC00MTVhLTgxYzQtMzhkM2Q3NWZkMjQyL2ltYWdlXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_.jpg",
        width: 837
      },
      status: "released",
      title: "1990 MTV Video Music Awards",
      titleType: "tvSpecial",
      year: 1990
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0090452",
      category: "self",
      characters: ["Self - Panelist"],
      endYear: 1988,
      episodeCount: 1,
      roles: [
        {
          character: "Self - Panelist",
          episodeCount: 1
        }
      ],
      startYear: 1988,
      id: "/title/tt0090452/",
      image: {
        height: 1064,
        id: "/title/tt0090452/images/rm2773738752",
        url:
          "https://m.media-amazon.com/images/M/MV5BZjlkODI1YjEtMzY4OC00YjJiLWFlYjktYzhmYmVhYTg2OGExXkEyXkFqcGdeQXVyMjg0Mjg1MDM@._V1_.jpg",
        width: 1104
      },
      status: "released",
      title: "The New Hollywood Squares",
      titleType: "tvSeries",
      year: 1986,
      episodes: [
        {
          category: "self",
          characters: ["Self - Panelist"],
          roles: [
            {
              character: "Self - Panelist"
            }
          ],
          id: "/title/tt1301588/",
          status: "released",
          title: "Episode dated 31 October 1988",
          titleType: "tvEpisode",
          year: 1988,
          releaseDate: "1988-10-31"
        }
      ],
      seriesEndYear: 1989,
      seriesStartYear: 1986
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt4216790/",
      status: "optioned property",
      title: "Alpha",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt3643406/",
      status: "optioned property",
      title: "Anonymous vs. Steubenville",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt5516150/",
      status: "optioned property",
      title: "Dr. Q",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt5216096/",
      status: "optioned property",
      title: "Illuminae",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt9893218/",
      status: "optioned property",
      title: "The Silent Patient",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt13530730/",
      status: "optioned property",
      title: "The Water Dancer",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt14271978/",
      status: "optioned property",
      title: "The World According to Fannie Davis",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt7334754/",
      status: "optioned property",
      title: "Untitled Ryan Wash Project",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt4769814/",
      status: "optioned property",
      title: "Whiskey Tango Foxtrot",
      titleType: "tvMovie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt6987596/",
      status: "optioned property",
      title: "Wrong Answer",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1319700/",
      status: "script",
      title: "Battling Boy",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt5485494/",
      status: "script",
      title: "He Wanted the Moon",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt2395102/",
      status: "script",
      title: "The Salesman",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt4503998/",
      status: "script",
      title: "Untitled Yann Demange Project",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0775433/",
      status: "pre production",
      title: "Black Hole",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt9281458/",
      status: "pre production",
      title: "The Curious Incident of the Dog in the Night-Time",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1654526/",
      status: "pre production",
      title: "The Tiger",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt16311594/",
      status: "pre production",
      title: "Untitled Formula One Racing Movie",
      titleType: "movie"
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt7539168",
      category: "producer",
      job: "executive producer",
      id: "/title/tt7539168/",
      status: "pre production",
      title: "Wytches",
      titleType: "tvSeries"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt14257582/",
      image: {
        height: 737,
        id: "/title/tt14257582/images/rm3638501889",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmQzMDE0NTAtMDc4OC00ZjVkLThiN2MtMGJiYjI2NTgyYWJjXkEyXkFqcGdeQXVyMTU5Mjk4MjUw._V1_.jpg",
        width: 1119
      },
      status: "filming",
      title: "Wolfs",
      titleType: "movie"
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt13016388",
      category: "producer",
      endYear: 2024,
      episodeCount: 8,
      episodeJobs: [
        {
          endYear: 2024,
          episodes: 8,
          job: "executive producer",
          startYear: 2024
        }
      ],
      job: "executive producer",
      startYear: 2024,
      id: "/title/tt13016388/",
      image: {
        height: 630,
        id: "/title/tt13016388/images/rm1169630721",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTc5MzQ2MTQtMmI5My00NzI1LTg2YzAtZDUxMGI4N2VhZDNiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        width: 450
      },
      status: "post production",
      title: "3 Body Problem",
      titleType: "tvSeries",
      year: 2024,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt18347118/",
          title: "Episode #1.8",
          titleType: "tvEpisode",
          year: 2024,
          episodeNumber: 8,
          releaseDate: "2024-01",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt18347112/",
          title: "Episode #1.7",
          titleType: "tvEpisode",
          year: 2024,
          episodeNumber: 7,
          releaseDate: "2024-01",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt18246722/",
          title: "Episode #1.6",
          titleType: "tvEpisode",
          year: 2024,
          episodeNumber: 6,
          releaseDate: "2024-01",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt18246720/",
          title: "Episode #1.5",
          titleType: "tvEpisode",
          year: 2024,
          episodeNumber: 5,
          releaseDate: "2024-01",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt16971524/",
          title: "Episode #1.4",
          titleType: "tvEpisode",
          year: 2024,
          episodeNumber: 4,
          releaseDate: "2024-01",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2024
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt8521778/",
      image: {
        height: 755,
        id: "/title/tt8521778/images/rm4048233473",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTNiMmI2YWQtMzMyYS00MGI4LTk3ZDEtNzc1M2VkNDA2ZTk2XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg",
        width: 510
      },
      status: "post production",
      title: "Bob Marley: One Love",
      titleType: "movie",
      year: 2024
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt7645334/",
      image: {
        height: 4096,
        id: "/title/tt7645334/images/rm2000560385",
        url:
          "https://m.media-amazon.com/images/M/MV5BYzdmN2U5MmMtNDk5Mi00NzFmLWI5N2QtOWY5ODQwODk2NzYzXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_.jpg",
        width: 2765
      },
      status: "released",
      title: "Landscape with Invisible Hand",
      titleType: "movie",
      year: 2023
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt13314510",
      category: "producer",
      endYear: 2022,
      episodeCount: 8,
      episodeJobs: [
        {
          endYear: 2022,
          episodes: 8,
          job: "executive producer",
          startYear: 2022
        }
      ],
      startYear: 2022,
      id: "/title/tt13314510/",
      image: {
        height: 3000,
        id: "/title/tt13314510/images/rm3073114369",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTYzZmU2YzktZWYxOS00MTI0LTg0ZjYtNGU2YzAwMTE0MWRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "High School",
      titleType: "tvSeries",
      year: 2022,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt21092542/",
          status: "released",
          title: "The Con",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 8,
          releaseDate: "2022-10-28",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt21092538/",
          status: "released",
          title: "Fix You Up",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 7,
          releaseDate: "2022-10-28",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt21092530/",
          status: "released",
          title: "Hello, I'm Right Here",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 6,
          releaseDate: "2022-10-21",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt21092524/",
          status: "released",
          title: "Freedom",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 5,
          releaseDate: "2022-10-21",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt21092518/",
          status: "released",
          title: "Welcome Home",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 4,
          releaseDate: "2022-10-14",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2022
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt11198810/",
      image: {
        height: 8800,
        id: "/title/tt11198810/images/rm1117796865",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDg3OTA2NDQtZWUyZS00MjMyLThkMzktYWIyMzBkZWJhOWVmXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
        width: 5942
      },
      status: "released",
      title: "She Said",
      titleType: "movie",
      year: 2022
    },
    {
      category: "producer",
      freeTextAttributes: ["produced by", "p.g.a."],
      job: "producer",
      id: "/title/tt1655389/",
      image: {
        height: 1200,
        id: "/title/tt1655389/images/rm2535589889",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDk2YTA1MGYtMGNjMi00YTJlLWI1YjItMjBjOGJlZGIwZmYzXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_.jpg",
        width: 810
      },
      status: "released",
      title: "Blonde",
      titleType: "movie",
      year: 2022
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt13669038/",
      image: {
        height: 4096,
        id: "/title/tt13669038/images/rm863451393",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTZmMmQ4OWYtM2JmNC00NzY0LWJhODUtOTRmMWMyOTU4OWQ4XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        width: 2765
      },
      status: "released",
      title: "Women Talking",
      titleType: "movie",
      year: 2022
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt10623646",
      category: "producer",
      endYear: 2022,
      episodeCount: 8,
      episodeJobs: [
        {
          endYear: 2022,
          episodes: 8,
          job: "executive producer",
          startYear: 2022
        }
      ],
      startYear: 2022,
      id: "/title/tt10623646/",
      image: {
        height: 608,
        id: "/title/tt10623646/images/rm637667329",
        url:
          "https://m.media-amazon.com/images/M/MV5BODE5ZjMwZmQtYTcxZS00MzVjLWEzOTQtMzBhMTFkODQ3MGVmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        width: 404
      },
      status: "released",
      title: "Paper Girls",
      titleType: "tvSeries",
      year: 2022,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14707072/",
          image: {
            height: 563,
            id: "/title/tt14707072/images/rm1891764481",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzJkNDFiMTAtNGFlNi00ZWVjLThmZDYtZjg3OGViMzE3MmY3XkEyXkFqcGdeQXVyMzMyMzUzODU@._V1_.jpg",
            width: 1000
          },
          status: "released",
          title: "It B Over",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 8,
          releaseDate: "2022-07-29",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14707068/",
          image: {
            height: 640,
            id: "/title/tt14707068/images/rm1791101185",
            url:
              "https://m.media-amazon.com/images/M/MV5BOTJkOTMxM2EtZjcwNy00ZWRjLThlMmYtN2M0OGQ3MTVkYTBiXkEyXkFqcGdeQXVyMzMyMzUzODU@._V1_.jpg",
            width: 1200
          },
          status: "released",
          title: "Some Kind of Burping Trash Hole",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 7,
          releaseDate: "2022-07-29",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14707066/",
          image: {
            height: 640,
            id: "/title/tt14707066/images/rm1690437889",
            url:
              "https://m.media-amazon.com/images/M/MV5BYzE3ODhlYWUtN2FlYy00NzUwLWIwYjgtNTU2MTM5ZDNjYmYxXkEyXkFqcGdeQXVyMzMyMzUzODU@._V1_.jpg",
            width: 1200
          },
          status: "released",
          title: "Matinee",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 6,
          releaseDate: "2022-07-29",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14707064/",
          image: {
            height: 640,
            id: "/title/tt14707064/images/rm331483393",
            url:
              "https://m.media-amazon.com/images/M/MV5BYmFjOTUxN2ItN2U4My00NzZjLWJmZjgtZWEzNDI0MDRiMDBlXkEyXkFqcGdeQXVyMzMyMzUzODU@._V1_.jpg",
            width: 1200
          },
          status: "released",
          title: "A New Period",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 5,
          releaseDate: "2022-07-29",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14707060/",
          image: {
            height: 640,
            id: "/title/tt14707060/images/rm935463169",
            url:
              "https://m.media-amazon.com/images/M/MV5BM2Y2MmE5ZTUtNTcyMy00ZjczLTlhMjgtMjM1YjA2ZTg1MzdjXkEyXkFqcGdeQXVyMzMyMzUzODU@._V1_.jpg",
            width: 1200
          },
          status: "released",
          title: "It Was Never About the Corn",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 4,
          releaseDate: "2022-07-29",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2022,
      seriesStartYear: 2022
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt13249596/",
      image: {
        height: 4096,
        id: "/title/tt13249596/images/rm2823623169",
        url:
          "https://m.media-amazon.com/images/M/MV5BOGQwMjA2NzItNmJjYS00MDQ4LWJiZmYtNjgyZjFlNTY0MjQ0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        width: 2764
      },
      status: "released",
      title: "Father of the Bride",
      titleType: "movie",
      year: 2022
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt11685912",
      category: "producer",
      endYear: 2022,
      episodeCount: 8,
      episodeJobs: [
        {
          endYear: 2022,
          episodes: 8,
          job: "executive producer",
          startYear: 2022
        }
      ],
      startYear: 2022,
      id: "/title/tt11685912/",
      image: {
        height: 2880,
        id: "/title/tt11685912/images/rm2580945665",
        url:
          "https://m.media-amazon.com/images/M/MV5BM2ZjNzY2NjQtYTg1ZC00ODM5LWFkYjktN2Q1NzZkMDU1NmU1XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        width: 1944
      },
      status: "released",
      title: "Outer Range",
      titleType: "tvSeries",
      year: 2022,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14938512/",
          image: {
            height: 2605,
            id: "/title/tt14938512/images/rm2704270593",
            url:
              "https://m.media-amazon.com/images/M/MV5BYTI5OWJjMDUtMGNhNy00OWQ0LWI0MDItOTg1YTNjZjdmZDQ0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            width: 3900
          },
          status: "released",
          title: "The Unknown",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 7,
          releaseDate: "2022-05-06",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14938484/",
          image: {
            height: 2605,
            id: "/title/tt14938484/images/rm2804933889",
            url:
              "https://m.media-amazon.com/images/M/MV5BYmYwNTNjNzQtY2I4Ni00ZWFkLWIwN2EtMmU0OWU3MzlmNzNmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            width: 3900
          },
          status: "released",
          title: "The West",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 8,
          releaseDate: "2022-05-06",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14938494/",
          image: {
            height: 2605,
            id: "/title/tt14938494/images/rm2754602241",
            url:
              "https://m.media-amazon.com/images/M/MV5BNDIwMjI4MzEtNDI3NC00M2M0LWE4ZmYtMGY3MTlhNTVkNGVmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            width: 3900
          },
          status: "released",
          title: "The Soil",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 5,
          releaseDate: "2022-04-29",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14718268/",
          image: {
            height: 1200,
            id: "/title/tt14718268/images/rm2919308545",
            url:
              "https://m.media-amazon.com/images/M/MV5BNmUwZjA2ZjUtNGRkMi00ZjUwLTkxNmYtMWU3NDVhZDQxZTA0XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
            width: 1600
          },
          status: "released",
          title: "The Family",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 6,
          releaseDate: "2022-04-29",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt14759072/",
          image: {
            height: 1200,
            id: "/title/tt14759072/images/rm3607370753",
            url:
              "https://m.media-amazon.com/images/M/MV5BMjU3MDFmODktYWJjMy00Nzg3LWE4ZGEtM2I2OWU0YzlhNzEyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            width: 2133
          },
          status: "released",
          title: "The Loss",
          titleType: "tvEpisode",
          year: 2022,
          episodeNumber: 4,
          releaseDate: "2022-04-22",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2022
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt9860834/",
      status: "production unknown",
      title: "Untitled Chris Cornell Documentary",
      titleType: "movie",
      year: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt3781380",
      category: "producer",
      endYear: 2021,
      episodeCount: 10,
      episodeJobs: [
        {
          endYear: 2021,
          episodes: 10,
          job: "producer",
          startYear: 2021
        }
      ],
      startYear: 2021,
      id: "/title/tt3781380/",
      status: "released",
      title: "Americanah",
      titleType: "tvSeries",
      year: 2021,
      episodes: [
        {
          category: "producer",
          job: "producer",
          id: "/title/tt11458940/",
          status: "released",
          title: "Episode #1.10",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 10,
          releaseDate: "2021",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "producer",
          id: "/title/tt11458934/",
          status: "released",
          title: "Episode #1.9",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 9,
          releaseDate: "2021",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "producer",
          id: "/title/tt11458932/",
          status: "released",
          title: "Episode #1.8",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 8,
          releaseDate: "2021",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "producer",
          id: "/title/tt11458930/",
          status: "released",
          title: "Episode #1.7",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 7,
          releaseDate: "2021",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "producer",
          id: "/title/tt11458928/",
          status: "released",
          title: "Episode #1.6",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 6,
          releaseDate: "2021",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt9615014",
      category: "producer",
      endYear: 2021,
      episodeCount: 20,
      episodeJobs: [
        {
          endYear: 2021,
          episodes: 20,
          job: "executive producer",
          startYear: 2020
        }
      ],
      startYear: 2020,
      id: "/title/tt9615014/",
      image: {
        height: 1350,
        id: "/title/tt9615014/images/rm1321209345",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmExOTRkNjMtZTk5OS00ZDk3LTk0ZDktMzE2ZWQ0ZjBmNDY3XkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Lego Masters",
      titleType: "tvSeries",
      year: 2020,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt15431090/",
          image: {
            height: 360,
            id: "/title/tt15431090/images/rm1083306241",
            url:
              "https://m.media-amazon.com/images/M/MV5BMzgzN2QwYTUtNWFmMS00NjM2LTkwN2QtMWY3MTNjMjhmM2Y5XkEyXkFqcGdeQXVyMzkyOTQ0NzY@._V1_.jpg",
            width: 620
          },
          status: "released",
          title: "Master Build - Day & Night",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 12,
          releaseDate: "2021-09-14",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt15350414/",
          image: {
            height: 360,
            id: "/title/tt15350414/images/rm750317569",
            url:
              "https://m.media-amazon.com/images/M/MV5BN2RkMGJmZGEtNGYyZi00Y2ZjLTlmNWItMDQ4ZDIwYTYwOWRkXkEyXkFqcGdeQXVyMzkyOTQ0NzY@._V1_.jpg",
            width: 620
          },
          status: "released",
          title: "Cliffhanger!",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 11,
          releaseDate: "2021-09-07",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt15346650/",
          image: {
            height: 1771,
            id: "/title/tt15346650/images/rm3787387649",
            url:
              "https://m.media-amazon.com/images/M/MV5BYjM0ZGJhYTYtZjUyMi00MWZmLTg0MTQtNDRiM2U3Yzk2ZGNhXkEyXkFqcGdeQXVyMzkyOTQ0NzY@._V1_.jpg",
            width: 3150
          },
          status: "released",
          title: "Flip My Block",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 10,
          releaseDate: "2021-08-31",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt15299104/",
          image: {
            height: 861,
            id: "/title/tt15299104/images/rm361951745",
            url:
              "https://m.media-amazon.com/images/M/MV5BZjRiMDAxNmItODk2Ny00NTU1LTlmYzMtZjlhYjQ5MGI2N2ZiXkEyXkFqcGdeQXVyMzkyOTQ0NzY@._V1_.jpg",
            width: 1200
          },
          status: "released",
          title: "Land & Sea",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 9,
          releaseDate: "2021-08-24",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt15252570/",
          image: {
            height: 360,
            id: "/title/tt15252570/images/rm3725327617",
            url:
              "https://m.media-amazon.com/images/M/MV5BYWUyZjIyY2ItZDVmOS00YWM5LTk0MjEtMWE1Nzc0NjQzOWQ0XkEyXkFqcGdeQXVyMzkyOTQ0NzY@._V1_.jpg",
            width: 620
          },
          status: "released",
          title: "Puppet Masters",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 8,
          releaseDate: "2021-08-17",
          seasonNumber: 2
        }
      ],
      seriesStartYear: 2020
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt13622108/",
      image: {
        height: 2028,
        id: "/title/tt13622108/images/rm2465199361",
        url:
          "https://m.media-amazon.com/images/M/MV5BYmVlMzJhMTctMGRkMC00ZDlkLTg5MDQtODk3MzE1NzEwZDRmXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        width: 1374
      },
      status: "released",
      title: "Civil War (or, Who Do We Think We Are)",
      titleType: "movie",
      year: 2021
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt6704972",
      category: "producer",
      endYear: 2021,
      episodeCount: 10,
      episodeJobs: [
        {
          endYear: 2021,
          episodes: 10,
          job: "executive producer",
          startYear: 2021
        }
      ],
      startYear: 2021,
      id: "/title/tt6704972/",
      image: {
        height: 1179,
        id: "/title/tt6704972/images/rm3655648001",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTZlYWNlZmYtN2MxYS00ZmQxLWI1ODYtZDRiOGE4Yjg1ZmMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
        width: 800
      },
      status: "released",
      title: "The Underground Railroad",
      titleType: "tvMiniSeries",
      year: 2021,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8515570/",
          image: {
            height: 1200,
            id: "/title/tt8515570/images/rm823378177",
            url:
              "https://m.media-amazon.com/images/M/MV5BZGZlOTI5NTUtZjg3MS00YjQwLWI0YzQtZjYyMTg2MzQ2NWUzXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
            width: 1600
          },
          status: "released",
          title: "Chapter 10: Mabel",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 10,
          releaseDate: "2021-05-14",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8515568/",
          image: {
            height: 900,
            id: "/title/tt8515568/images/rm3884303873",
            url:
              "https://m.media-amazon.com/images/M/MV5BMmQyNmZhMWMtM2I4Mi00YzQ3LTkyNmMtNmI5MGQ0ZGE0ZmViXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            width: 1600
          },
          status: "released",
          title: "Chapter 9: Indiana Winter",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 9,
          releaseDate: "2021-05-14",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8515566/",
          image: {
            height: 1200,
            id: "/title/tt8515566/images/rm689160449",
            url:
              "https://m.media-amazon.com/images/M/MV5BMjg4MjZlMDYtM2RlMC00OWU0LTk0ZTUtMGMyY2ZhZjU0NTUxXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
            width: 1600
          },
          status: "released",
          title: "Chapter 8: Indiana Autumn",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 8,
          releaseDate: "2021-05-14",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8515564/",
          image: {
            height: 1200,
            id: "/title/tt8515564/images/rm3708993793",
            url:
              "https://m.media-amazon.com/images/M/MV5BOGM1ODdhMmMtMGQyYS00Nzk0LWFjMzctYTM4Mjg1MWU5OTgyXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
            width: 1600
          },
          status: "released",
          title: "Chapter 7: Fanny Briggs",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 7,
          releaseDate: "2021-05-14",
          seasonNumber: 1
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8515562/",
          image: {
            height: 1200,
            id: "/title/tt8515562/images/rm3507667201",
            url:
              "https://m.media-amazon.com/images/M/MV5BODQ3YWNiYzktOGMyOC00N2E2LTgyYjctMmE3NmVlOTU1ZWFkXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
            width: 1600
          },
          status: "released",
          title: "Chapter 6: Tennessee - Proverbs",
          titleType: "tvEpisode",
          year: 2021,
          episodeNumber: 6,
          releaseDate: "2021-05-14",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2021,
      seriesStartYear: 2021
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt13562678/",
      image: {
        height: 1684,
        id: "/title/tt13562678/images/rm1833491457",
        url:
          "https://m.media-amazon.com/images/M/MV5BYjA2NTVkZTAtMjQxMS00YmY0LTk2ZjctYTA0OTNiMmU4Njk5XkEyXkFqcGdeQXVyMTI2ODQ1OTc4._V1_.jpg",
        width: 1191
      },
      status: "released",
      title: "Tripping with Nils Frahm",
      titleType: "movie",
      year: 2020
    },
    {
      category: "producer",
      job: "executive producer: Plan B",
      id: "/title/tt13217756/",
      image: {
        height: 856,
        id: "/title/tt13217756/images/rm1942408449",
        url:
          "https://m.media-amazon.com/images/M/MV5BMDg0YjBkYTgtYjEzZS00NzA0LTg2YjQtZmUwNjg1NzI2ZGNkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
        width: 708
      },
      status: "released",
      title: "The Third Day: Autumn",
      titleType: "tvMovie",
      year: 2020
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt10482370",
      category: "producer",
      endYear: 2020,
      episodeCount: 1,
      episodeJobs: [
        {
          endYear: 2020,
          episodes: 1,
          job: "executive producer",
          startYear: 2020
        }
      ],
      startYear: 2020,
      id: "/title/tt10482370/",
      image: {
        height: 4096,
        id: "/title/tt10482370/images/rm1997316609",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjVlMGEzMTctY2U0ZS00M2RmLTlhZGItZTM4MDU1M2Q0YzM3XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
        width: 2764
      },
      status: "released",
      title: "The Third Day",
      titleType: "tvSeries",
      year: 2020,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt10482372/",
          image: {
            height: 1056,
            id: "/title/tt10482372/images/rm3718684673",
            url:
              "https://m.media-amazon.com/images/M/MV5BMmQwYTRjMTktNTVjYS00YWJhLTgyMjUtZDM5MmVkZDIxYzRmXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
            width: 1584
          },
          status: "released",
          title: "Friday - The Father",
          titleType: "tvEpisode",
          year: 2020,
          episodeNumber: 1,
          releaseDate: "2020-09-14",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2020,
      seriesStartYear: 2020
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt9076562/",
      image: {
        height: 1350,
        id: "/title/tt9076562/images/rm3713444353",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTVhMDIwOGEtMTY1Zi00YzU1LTk0NTEtMWJhODhmM2EyM2VkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Irresistible",
      titleType: "movie",
      year: 2020
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt10633456/",
      image: {
        height: 5069,
        id: "/title/tt10633456/images/rm2352795905",
        url:
          "https://m.media-amazon.com/images/M/MV5BNWEzOTNjNDgtZDhhYS00ODAxLWIzNGMtYjU3OGZhYmI3ZDU4XkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_.jpg",
        width: 3500
      },
      status: "released",
      title: "Minari",
      titleType: "movie",
      year: 2020
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt8143990/",
      image: {
        height: 900,
        id: "/title/tt8143990/images/rm1860086785",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTkxYzUxMDQtZWRiNy00ZWUwLWIxYjMtNWExODBmMzRkZGVmXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg",
        width: 609
      },
      status: "released",
      title: "Kajillionaire",
      titleType: "movie",
      year: 2020
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt7984766/",
      image: {
        height: 1080,
        id: "/title/tt7984766/images/rm3219164673",
        url:
          "https://m.media-amazon.com/images/M/MV5BMWZkNzNlMzMtMjM5ZS00MWYzLWFmMmUtMjE1ODM3NjBlODA5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        width: 729
      },
      status: "released",
      title: "The King",
      titleType: "movie",
      year: 2019
    },
    {
      category: "producer",
      freeTextAttributes: ["produced by"],
      job: "producer",
      id: "/title/tt2935510/",
      image: {
        height: 1000,
        id: "/title/tt2935510/images/rm871405057",
        url:
          "https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZTBmMi00MGQ5LWFjN2MtOGEyZTliNGY1MzFiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        width: 675
      },
      status: "released",
      title: "Ad Astra",
      titleType: "movie",
      year: 2019
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt7563270",
      category: "producer",
      endYear: 2019,
      episodeCount: 14,
      episodeJobs: [
        {
          endYear: 2019,
          episodes: 8,
          job: "co-executive producer",
          startYear: 2019
        },
        {
          endYear: 2018,
          episodes: 6,
          job: "executive producer",
          startYear: 2018
        }
      ],
      startYear: 2018,
      id: "/title/tt7563270/",
      image: {
        height: 1785,
        id: "/title/tt7563270/images/rm1145346561",
        url:
          "https://m.media-amazon.com/images/M/MV5BMGYxN2U5ZGQtNzAzNS00OWFjLWJjZjAtN2Y1MDliYzQ1ZWQwXkEyXkFqcGdeQXVyMTAyOTk1NDU5._V1_.jpg",
        width: 1200
      },
      status: "released",
      title: "Sweetbitter",
      titleType: "tvSeries",
      year: 2018,
      episodes: [
        {
          category: "producer",
          job: "co-executive producer",
          id: "/title/tt9389608/",
          image: {
            height: 375,
            id: "/title/tt9389608/images/rm2211549441",
            url:
              "https://m.media-amazon.com/images/M/MV5BOWVkZTU5Y2ItOTU2Ni00ZTllLTgwZDQtYjJmY2JiMGE2Nzg1XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Bodega Cat",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 8,
          releaseDate: "2019-08-18",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "co-executive producer",
          id: "/title/tt9389606/",
          image: {
            height: 375,
            id: "/title/tt9389606/images/rm3125317633",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzZmZGI4Y2YtZTFhNy00M2E4LWIwMjMtMWI5MzgzN2NlMjU4XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Peach Treats",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 7,
          releaseDate: "2019-08-18",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "co-executive producer",
          id: "/title/tt8708356/",
          image: {
            height: 375,
            id: "/title/tt8708356/images/rm2008780801",
            url:
              "https://m.media-amazon.com/images/M/MV5BYzUxZTAwZWUtMzFlYi00N2EzLTkxMGUtYmY4MTMzMzFjMzJiXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Truffles and Champagne",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 6,
          releaseDate: "2019-08-11",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "co-executive producer",
          id: "/title/tt8708352/",
          image: {
            height: 375,
            id: "/title/tt8708352/images/rm821140737",
            url:
              "https://m.media-amazon.com/images/M/MV5BODAzNTA0NzktMDRlMC00MjU4LTkyYzctZDU3NDU4YmYxNWU5XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Entropy",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 5,
          releaseDate: "2019-08-04",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "co-executive producer",
          id: "/title/tt8708350/",
          image: {
            height: 375,
            id: "/title/tt8708350/images/rm3474430977",
            url:
              "https://m.media-amazon.com/images/M/MV5BNzYzYjQwNWUtMzdjYy00YTQ5LTk5YzEtOTg0MjI0ZDY2YzNhXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "Sec or Demi-Sec",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 4,
          releaseDate: "2019-07-28",
          seasonNumber: 2
        }
      ],
      seriesEndYear: 2019,
      seriesStartYear: 2018
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt4635282",
      category: "producer",
      endYear: 2019,
      episodeCount: 16,
      episodeJobs: [
        {
          endYear: 2019,
          episodes: 16,
          job: "executive producer",
          startYear: 2016
        }
      ],
      startYear: 2016,
      id: "/title/tt4635282/",
      image: {
        height: 2048,
        id: "/title/tt4635282/images/rm1984130048",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTY5OTkwNDkzOF5BMl5BanBnXkFtZTgwMDEyNzI1NzM@._V1_.jpg",
        width: 1382
      },
      status: "released",
      title: "The OA",
      titleType: "tvSeries",
      year: 2016,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8746284/",
          image: {
            height: 1229,
            id: "/title/tt8746284/images/rm1396927488",
            url:
              "https://m.media-amazon.com/images/M/MV5BMjM0NjQ3MDg2NV5BMl5BanBnXkFtZTgwNTQyNzI1NzM@._V1_.jpg",
            width: 2048
          },
          status: "released",
          title: "The Medium & The Engineer",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 5,
          releaseDate: "2019-03-22",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8554466/",
          image: {
            height: 1080,
            id: "/title/tt8554466/images/rm1803641600",
            url:
              "https://m.media-amazon.com/images/M/MV5BNTdjZTgxZjQtNGQ0Yy00NzY2LTgzZTYtYjgzMGZlOWY3MzY0XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg",
            width: 1920
          },
          status: "released",
          title: "Mirror Mirror",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 6,
          releaseDate: "2019-03-22",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8289076/",
          image: {
            height: 1365,
            id: "/title/tt8289076/images/rm1430481920",
            url:
              "https://m.media-amazon.com/images/M/MV5BOTU4MTQwNTg0MF5BMl5BanBnXkFtZTgwMzQyNzI1NzM@._V1_.jpg",
            width: 2048
          },
          status: "released",
          title: "Nina Azarova",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 7,
          releaseDate: "2019-03-22",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt8228196/",
          image: {
            height: 1365,
            id: "/title/tt8228196/images/rm1464036352",
            url:
              "https://m.media-amazon.com/images/M/MV5BMjA0NDM2OTUxM15BMl5BanBnXkFtZTgwMTQyNzI1NzM@._V1_.jpg",
            width: 2048
          },
          status: "released",
          title: "Overview",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 8,
          releaseDate: "2019-03-22",
          seasonNumber: 2
        },
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt7762286/",
          image: {
            height: 1080,
            id: "/title/tt7762286/images/rm1870750464",
            url:
              "https://m.media-amazon.com/images/M/MV5BOWFiOThhYzAtNTcyMC00MjE1LTk0NWQtMmRjNGY1MDc0YmU4XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg",
            width: 1920
          },
          status: "released",
          title: "SYZYGY",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 4,
          releaseDate: "2019-03-22",
          seasonNumber: 2
        }
      ],
      seriesEndYear: 2019,
      seriesStartYear: 2016
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt4353250/",
      image: {
        height: 6000,
        id: "/title/tt4353250/images/rm207526657",
        url:
          "https://m.media-amazon.com/images/M/MV5BNTQ5OTUwYjQtYmM5Ni00YTY5LWFiOWEtYTg1MTg2Y2NmY2JhXkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_.jpg",
        width: 4045
      },
      status: "released",
      title: "The Last Black Man in San Francisco",
      titleType: "movie",
      year: 2019
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt6266538/",
      image: {
        height: 2048,
        id: "/title/tt6266538/images/rm4187126784",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTY1NjM0MzgxMV5BMl5BanBnXkFtZTgwNDc4NTY0NjM@._V1_.jpg",
        width: 1312
      },
      status: "released",
      title: "Vice",
      titleType: "movie",
      year: 2018
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt7125860/",
      image: {
        height: 3000,
        id: "/title/tt7125860/images/rm4271863296",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWVkMzY5NzgtMTdlNS00NjY5LThjOTktZWFkNDU3NmQzMDIwXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_.jpg",
        width: 2025
      },
      status: "released",
      title: "If Beale Street Could Talk",
      titleType: "movie",
      year: 2018
    },
    {
      category: "producer",
      freeTextAttributes: ["produced by", "p.g.a."],
      job: "producer",
      id: "/title/tt1226837/",
      image: {
        height: 12000,
        id: "/title/tt1226837/images/rm849823232",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjNhNjVjZDQtMzRhMS00YmI2LTkxZmEtMDdkMWU3OWQ2NjNmXkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_.jpg",
        width: 8101
      },
      status: "released",
      title: "Beautiful Boy",
      titleType: "movie",
      year: 2018
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt5884230/",
      image: {
        height: 1372,
        id: "/title/tt5884230/images/rm2251367936",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDliZTUwZTktYmJlNC00MGE1LWEwODktNWZiNTRkMGFiNTg1XkEyXkFqcGdeQXVyNjU5NzU3MjE@._V1_.jpg",
        width: 900
      },
      status: "released",
      title: "Brad's Status",
      titleType: "movie",
      year: 2017
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt4758646/",
      image: {
        height: 1000,
        id: "/title/tt4758646/images/rm3789368064",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTcyMzgwNDE1M15BMl5BanBnXkFtZTgwMDAzMDM0MjI@._V1_.jpg",
        width: 675
      },
      status: "released",
      title: "War Machine",
      titleType: "movie",
      year: 2017
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt3967856/",
      image: {
        height: 755,
        id: "/title/tt3967856/images/rm1371613696",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjQxMTcxNDgxN15BMl5BanBnXkFtZTgwOTczNTIzMjI@._V1_.jpg",
        width: 509
      },
      status: "released",
      title: "Okja",
      titleType: "movie",
      year: 2017
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt1212428/",
      image: {
        height: 2158,
        id: "/title/tt1212428/images/rm2740662272",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjAyN2QxOTItOGQ0YS00NmQxLWIxMjEtMDdkZmY0NDU5OWUzXkEyXkFqcGdeQXVyMTk1MDM0OTc@._V1_.jpg",
        width: 1457
      },
      status: "released",
      title: "The Lost City of Z",
      titleType: "movie",
      year: 2016
    },
    {
      category: "producer",
      freeTextAttributes: ["produced by"],
      job: "producer",
      id: "/title/tt6024606/",
      image: {
        height: 1778,
        id: "/title/tt6024606/images/rm2533496576",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjBiZjg0MjAtODgzNy00ZTZjLTkzMjctYmJmODhmNjY3NmFlXkEyXkFqcGdeQXVyNTkzMDA2ODI@._V1_.jpg",
        width: 1200
      },
      status: "released",
      title: "Voyage of Time",
      titleType: "movie",
      year: 2016
    },
    {
      category: "producer",
      freeTextAttributes: ["produced by"],
      job: "producer",
      id: "/title/tt1945228/",
      image: {
        height: 1200,
        id: "/title/tt1945228/images/rm2505115904",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTg2NzU5OTEwNl5BMl5BanBnXkFtZTgwMDkxNjA4OTE@._V1_.jpg",
        width: 810
      },
      status: "released",
      title: "Voyage of Time: Life's Journey",
      titleType: "movie",
      year: 2016
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt4975722/",
      image: {
        height: 4096,
        id: "/title/tt4975722/images/rm1452607488",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg",
        width: 2764
      },
      status: "released",
      title: "Moonlight",
      titleType: "movie",
      year: 2016
    },
    {
      category: "producer",
      freeTextAttributes: ["produced by"],
      job: "producer",
      id: "/title/tt1596363/",
      image: {
        height: 1171,
        id: "/title/tt1596363/images/rm3249474304",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        width: 750
      },
      status: "released",
      title: "The Big Short",
      titleType: "movie",
      year: 2015
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt3707106/",
      image: {
        height: 1500,
        id: "/title/tt3707106/images/rm3539987968",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTUyNDU2MDMxM15BMl5BanBnXkFtZTgwMzAzMTk1NjE@._V1_.jpg",
        width: 947
      },
      status: "released",
      title: "By the Sea",
      titleType: "movie",
      year: 2015
    },
    {
      category: "producer",
      freeTextAttributes: ["produced by"],
      job: "producer",
      id: "/title/tt4973112/",
      image: {
        height: 500,
        id: "/title/tt4973112/images/rm490663424",
        url:
          "https://m.media-amazon.com/images/M/MV5BODQ3Nzc3NzYxNF5BMl5BanBnXkFtZTgwMTIyOTg2NjE@._V1_.jpg",
        width: 333
      },
      status: "released",
      title: "Hitting the Apex",
      titleType: "movie",
      year: 2015
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt2273657/",
      image: {
        height: 2704,
        id: "/title/tt2273657/images/rm2350919168",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWM2ODc1MGYtYjNkMC00MTQ0LTk1ZWYtYWVjYTg3MzhiZWFlXkEyXkFqcGdeQXVyNTUzOTUwMTk@._V1_.jpg",
        width: 1710
      },
      status: "released",
      title: "True Story",
      titleType: "movie",
      year: 2015
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt1020072/",
      image: {
        height: 3600,
        id: "/title/tt1020072/images/rm2542864640",
        url:
          "https://m.media-amazon.com/images/M/MV5BZGZkNzFkYTgtYTBkZC00M2MzLWJhNzUtMGE4YzRhYmU2Zjg0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 2430
      },
      status: "released",
      title: "Selma",
      titleType: "movie",
      year: 2014
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt2713180/",
      image: {
        height: 2048,
        id: "/title/tt2713180/images/rm2847393024",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg",
        width: 1382
      },
      status: "released",
      title: "Fury",
      titleType: "movie",
      year: 2014
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0795174",
      category: "producer",
      endYear: 2014,
      episodeCount: 1,
      episodeJobs: [
        {
          endYear: 2014,
          episodes: 1,
          job: "executive producer",
          startYear: 2014
        }
      ],
      startYear: 2014,
      id: "/title/tt0795174/",
      image: {
        height: 3000,
        id: "/title/tt0795174/images/rm3591487233",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDQzNDViNDYtNjE2Ny00YmNhLWExZWEtOTIwMDA1YjY5NDBhXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "P.O.V.",
      titleType: "tvSeries",
      year: 1988,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt3979902/",
          status: "released",
          title: "Big Men",
          titleType: "tvEpisode",
          year: 2014,
          episodeNumber: 9,
          releaseDate: "2014-08-25",
          seasonNumber: 27
        }
      ],
      seriesStartYear: 1988
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt3042800/",
      image: {
        height: 918,
        id: "/title/tt3042800/images/rm1832576768",
        url:
          "https://m.media-amazon.com/images/M/MV5BMmRlNjU4NDMtNjIxOC00M2Q5LTk1OTUtZTlkZDYyYTFjNjg2XkEyXkFqcGdeQXVyNDI0MTYyNzU@._V1_.jpg",
        width: 640
      },
      status: "released",
      title: "Nightingale",
      titleType: "movie",
      year: 2014
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt1684226/",
      image: {
        height: 1920,
        id: "/title/tt1684226/images/rm837471233",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjY3NjE3YTgtMWVmMS00YmQ0LWIxMzMtMmEyM2VlZTc0M2M0XkEyXkFqcGdeQXVyNjczMzgwMDg@._V1_.jpg",
        width: 1280
      },
      status: "released",
      title: "The Normal Heart",
      titleType: "tvMovie",
      year: 2014
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt2024544/",
      image: {
        height: 755,
        id: "/title/tt2024544/images/rm3711556096",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_.jpg",
        width: 509
      },
      status: "released",
      title: "12 Years a Slave",
      titleType: "movie",
      year: 2013
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1650554/",
      image: {
        height: 2048,
        id: "/title/tt1650554/images/rm1834015488",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTQ4OTQxNzc0N15BMl5BanBnXkFtZTcwOTQxOTU5OQ@@._V1_.jpg",
        width: 1410
      },
      status: "released",
      title: "Kick-Ass 2",
      titleType: "movie",
      year: 2013
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0816711/",
      image: {
        height: 1280,
        id: "/title/tt0816711/images/rm2831942144",
        url:
          "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        width: 832
      },
      status: "released",
      title: "World War Z",
      titleType: "movie",
      year: 2013
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt2647586",
      category: "producer",
      endYear: 2013,
      episodeCount: 1,
      episodeJobs: [
        {
          endYear: 2013,
          episodes: 1,
          job: "executive producer",
          startYear: 2013
        }
      ],
      startYear: 2013,
      id: "/title/tt2647586/",
      image: {
        height: 960,
        id: "/title/tt2647586/images/rm3075785984",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjE2OTQ2Nzk4N15BMl5BanBnXkFtZTgwMTU0MTE5MjE@._V1_.jpg",
        width: 648
      },
      status: "released",
      title: "Resurrection",
      titleType: "tvSeries",
      year: 2013,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt2925866/",
          image: {
            height: 375,
            id: "/title/tt2925866/images/rm3581986304",
            url:
              "https://m.media-amazon.com/images/M/MV5BMTU2MjkxMzgyM15BMl5BanBnXkFtZTgwMDgxODU1MjE@._V1_.jpg",
            width: 500
          },
          status: "released",
          title: "The Returned",
          titleType: "tvEpisode",
          year: 2013,
          episodeNumber: 1,
          releaseDate: "2014-03-09",
          seasonNumber: 1
        }
      ],
      seriesEndYear: 2015,
      seriesStartYear: 2013
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt2789532/",
      image: {
        height: 2048,
        id: "/title/tt2789532/images/rm1427622400",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTc5ODI4MDI0M15BMl5BanBnXkFtZTgwNTYwNzkzMTE@._V1_.jpg",
        width: 1382
      },
      status: "released",
      title: "Big Men",
      titleType: "movie",
      year: 2013
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0486531",
      category: "producer",
      endYear: 2013,
      episodeCount: 1,
      episodeJobs: [
        {
          endYear: 2013,
          episodes: 1,
          job: "executive producer",
          startYear: 2013
        }
      ],
      startYear: 2013,
      id: "/title/tt0486531/",
      image: {
        height: 3000,
        id: "/title/tt0486531/images/rm2416904193",
        url:
          "https://m.media-amazon.com/images/M/MV5BMGU3NDI3YjAtNjU5Ny00NDNjLWIwMjgtYTVjNWNkMGJiNTExXkEyXkFqcGdeQXVyMTUwMDc4NDg4._V1_.jpg",
        width: 2000
      },
      status: "released",
      title: "Independent Lens",
      titleType: "tvSeries",
      year: 1999,
      episodes: [
        {
          category: "producer",
          job: "executive producer",
          id: "/title/tt2645448/",
          status: "released",
          title: "The House I Live In",
          titleType: "tvEpisode",
          year: 2013,
          episodeNumber: 10,
          releaseDate: "2013",
          seasonNumber: 14
        }
      ],
      seriesStartYear: 1999
    },
    {
      category: "producer",
      freeTextAttributes: ["produced by"],
      job: "producer",
      id: "/title/tt1764234/",
      image: {
        height: 833,
        id: "/title/tt1764234/images/rm1445898240",
        url:
          "https://m.media-amazon.com/images/M/MV5BODk3MDg2NDk5M15BMl5BanBnXkFtZTcwMjcxMjMzOA@@._V1_.jpg",
        width: 570
      },
      status: "released",
      title: "Killing Them Softly",
      titleType: "movie",
      year: 2012
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt2125653/",
      image: {
        height: 1747,
        id: "/title/tt2125653/images/rm1494788096",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTk4ODQxNzE4N15BMl5BanBnXkFtZTcwMjY3MjUzOA@@._V1_.jpg",
        width: 1182
      },
      status: "released",
      title: "The House I Live In",
      titleType: "movie",
      year: 2012
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1210166/",
      image: {
        height: 2048,
        id: "/title/tt1210166/images/rm330480640",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_.jpg",
        width: 1383
      },
      status: "released",
      title: "Moneyball",
      titleType: "movie",
      year: 2011
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0478304/",
      image: {
        height: 2048,
        id: "/title/tt0478304/images/rm4192437504",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_.jpg",
        width: 1394
      },
      status: "released",
      title: "The Tree of Life",
      titleType: "movie",
      year: 2011
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt0879870/",
      image: {
        height: 755,
        id: "/title/tt0879870/images/rm2612429312",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTY5NDkyNzkyM15BMl5BanBnXkFtZTcwNDQyNDk0Mw@@._V1_.jpg",
        width: 510
      },
      status: "released",
      title: "Eat Pray Love",
      titleType: "movie",
      year: 2010
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1250777/",
      image: {
        height: 2048,
        id: "/title/tt1250777/images/rm633638656",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_.jpg",
        width: 1382
      },
      status: "released",
      title: "Kick-Ass",
      titleType: "movie",
      year: 2010
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt0452694/",
      image: {
        height: 1500,
        id: "/title/tt0452694/images/rm3885367808",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWNlN2RmZDktNzllNC00NDVlLTllMzgtZGQ1YmRmZThmZjZmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        width: 1000
      },
      status: "released",
      title: "The Time Traveler's Wife",
      titleType: "movie",
      year: 2009
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt1134629/",
      image: {
        height: 2048,
        id: "/title/tt1134629/images/rm3714746624",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTMwMTcxMjQyOF5BMl5BanBnXkFtZTcwODUyODI4Mg@@._V1_.jpg",
        width: 1387
      },
      status: "released",
      title: "The Private Lives of Pippa Lee",
      titleType: "movie",
      year: 2009
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt0871425/",
      image: {
        height: 2182,
        id: "/title/tt0871425/images/rm656743936",
        url:
          "https://m.media-amazon.com/images/M/MV5BN2U3MTk2NzEtYWE1Mi00OTJiLWFhZTgtOWMzM2M0NWYyYTVjXkEyXkFqcGdeQXVyMjM3ODA2NDQ@._V1_.jpg",
        width: 1500
      },
      status: "released",
      title: "Pretty/Handsome",
      titleType: "tvMovie",
      year: 2008
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0443680/",
      image: {
        height: 2048,
        id: "/title/tt0443680/images/rm1942260992",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_.jpg",
        width: 1386
      },
      status: "released",
      title: "The Assassination of Jesse James by the Coward Robert Ford",
      titleType: "movie",
      year: 2007
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0829459/",
      image: {
        height: 533,
        id: "/title/tt0829459/images/rm1572770560",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTg4OTk0NDc3MV5BMl5BanBnXkFtZTcwOTU0ODc0MQ@@._V1_.jpg",
        width: 360
      },
      status: "released",
      title: "A Mighty Heart",
      titleType: "movie",
      year: 2007
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt0888528/",
      image: {
        height: 582,
        id: "/title/tt0888528/images/rm3391132160",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTIwNzYwMDM0Ml5BMl5BanBnXkFtZTcwMTMzNDY0MQ@@._V1_.jpg",
        width: 450
      },
      status: "released",
      title: "The Tehuacan Project",
      titleType: "short",
      year: 2007
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt0756729/",
      image: {
        height: 755,
        id: "/title/tt0756729/images/rm3187512064",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTgzOTcxMzg5OV5BMl5BanBnXkFtZTcwMzkzOTM0MQ@@._V1_.jpg",
        width: 528
      },
      status: "released",
      title: "Year of the Dog",
      titleType: "movie",
      year: 2007
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0439289/",
      image: {
        height: 2944,
        id: "/title/tt0439289/images/rm2157744640",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTIwOTU2NjE0N15BMl5BanBnXkFtZTcwMTg2MDUzMQ@@._V1_.jpg",
        width: 1977
      },
      status: "released",
      title: "Running with Scissors",
      titleType: "movie",
      year: 2006
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0407887/",
      image: {
        height: 665,
        id: "/title/tt0407887/images/rm981113088",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
        width: 450
      },
      status: "released",
      title: "The Departed",
      titleType: "movie",
      year: 2006
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt0301555/",
      image: {
        height: 481,
        id: "/title/tt0301555/images/rm2165281280",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjk2OTIwMzUzOF5BMl5BanBnXkFtZTcwMDU3MzU0MQ@@._V1_.jpg",
        width: 325
      },
      status: "released",
      title: "God Grew Tired of Us",
      titleType: "movie",
      year: 2006
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt3687182/",
      status: "development unknown",
      title: "3 Videotapes",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "executive producer",
      id: "/title/tt2561528/",
      status: "development unknown",
      title: "Paper",
      titleType: "tvMovie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt2388779/",
      status: "development unknown",
      title: "The Operators",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1726812/",
      status: "development unknown",
      title: "Untitled Jerry Lee Lewis Project",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1695897/",
      status: "development unknown",
      title: "The Zombie Survival Guide",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1666805/",
      status: "development unknown",
      title: "The Imperfectionists",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1563154/",
      status: "development unknown",
      title: "Vlad",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1552019/",
      status: "development unknown",
      title: "Dark Void",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1400518/",
      status: "development unknown",
      title:
        "Important Artifacts and Personal Property from the Collection of Lenore Doolan and Harold Morris, Including Books, Street Fashion, and Jewelry",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1328870/",
      status: "development unknown",
      title: "Untitled Linda Trest Project",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1273224/",
      status: "development unknown",
      title: "Miki Falls",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1114279/",
      status: "development unknown",
      title: "Zebra Murders",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt1034309/",
      status: "development unknown",
      title: "The Fortress of Solitude",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0829120/",
      status: "development unknown",
      title: "Chasing Vermeer",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0810778/",
      status: "development unknown",
      title: "The Book of Joe",
      titleType: "movie"
    },
    {
      category: "producer",
      job: "producer",
      id: "/title/tt0465242/",
      status: "development unknown",
      title: "Peace Like a River",
      titleType: "movie"
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt4329810/",
      image: {
        height: 2030,
        id: "/title/tt4329810/images/rm2559510529",
        url:
          "https://m.media-amazon.com/images/M/MV5BYTQxMDQzNGUtOTBkNi00ZTA1LWI2OWItOThmNDM2N2I3N2FhXkEyXkFqcGdeQXVyMzg3NDQzMA@@._V1_.jpg",
        width: 1386
      },
      status: "released",
      title: "QT8: The First Eight",
      titleType: "movie",
      year: 2019
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt6838460/",
      image: {
        height: 4674,
        id: "/title/tt6838460/images/rm2557773825",
        url:
          "https://m.media-amazon.com/images/M/MV5BYWUxNWMwZmQtNWIwOC00ZmU5LWJkOTEtZDZlY2VlMjJmOTZmXkEyXkFqcGdeQXVyMTQ5ODk4OTk@._V1_.jpg",
        width: 3508
      },
      status: "released",
      title: "The Game Changer",
      titleType: "movie",
      year: 2019
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt9207650",
      category: "thanks",
      endYear: 2019,
      episodeCount: 1,
      episodeJobs: [
        {
          endYear: 2019,
          episodes: 1,
          job: "special thanks",
          startYear: 2019
        }
      ],
      startYear: 2019,
      id: "/title/tt9207650/",
      image: {
        height: 951,
        id: "/title/tt9207650/images/rm3514725120",
        url:
          "https://m.media-amazon.com/images/M/MV5BY2Y3OWNjYzctNTUxNi00ZDgzLTlmNGUtMDgzZGIxODA0NDI1XkEyXkFqcGdeQXVyODAxMTA0NjA@._V1_.jpg",
        width: 1920
      },
      status: "released",
      title: "X-Men Mondays",
      titleType: "tvMiniSeries",
      year: 2018,
      episodes: [
        {
          category: "thanks",
          job: "special thanks",
          id: "/title/tt9233674/",
          image: {
            height: 951,
            id: "/title/tt9233674/images/rm3339416320",
            url:
              "https://m.media-amazon.com/images/M/MV5BMGEzYTI5NWItNjk3Mi00NmFmLTk3NDQtOGZkYzJjYWVkYzYyXkEyXkFqcGdeQXVyODAxMTA0NjA@._V1_.jpg",
            width: 1920
          },
          status: "released",
          title: "Deadpool 2",
          titleType: "tvEpisode",
          year: 2019,
          episodeNumber: 11,
          releaseDate: "2019-01-14",
          seasonNumber: 1
        }
      ],
      seriesStartYear: 2018
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt2403021/",
      image: {
        height: 4444,
        id: "/title/tt2403021/images/rm1785132801",
        url:
          "https://m.media-amazon.com/images/M/MV5BN2IyYjc0ZmQtZGRlZC00MzBkLWI0MGQtZTM5Y2U2OWVhYmQ5XkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_.jpg",
        width: 3000
      },
      status: "released",
      title: "The Green Inferno",
      titleType: "movie",
      year: 2013
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt2313189/",
      image: {
        height: 1074,
        id: "/title/tt2313189/images/rm4153516544",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzc5MDE2MTYzNV5BMl5BanBnXkFtZTcwNTIxNTEwOQ@@._V1_.jpg",
        width: 758
      },
      status: "released",
      title: "Casting Couch",
      titleType: "movie",
      year: 2013
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt4693370/",
      image: {
        height: 500,
        id: "/title/tt4693370/images/rm4217025280",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjU5MzQzMDY2MF5BMl5BanBnXkFtZTcwNzIzODIxNw@@._V1_.jpg",
        width: 390
      },
      status: "released",
      title: "Billy Beane: Re-Inventing the Game",
      titleType: "video",
      year: 2012
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt2126285/",
      image: {
        height: 764,
        id: "/title/tt2126285/images/rm2334541824",
        url:
          "https://m.media-amazon.com/images/M/MV5BY2JkZmQzNmUtZWNiZi00MGFiLWEzOTctNGM5YzEzNzBhZGNlXkEyXkFqcGdeQXVyMzE3MTUyNjk@._V1_.jpg",
        width: 508
      },
      status: "released",
      title: "Exploring 'the Tree of Life'",
      titleType: "video",
      year: 2011
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt1732568/",
      image: {
        height: 1024,
        id: "/title/tt1732568/images/rm684112384",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTQ3NTc5OTMzNl5BMl5BanBnXkFtZTcwNzAyOTM0NA@@._V1_.jpg",
        width: 691
      },
      status: "released",
      title: "Before Breakfast",
      titleType: "short",
      year: 2010
    },
    {
      category: "thanks",
      job: "thanks",
      id: "/title/tt1326283/",
      image: {
        height: 800,
        id: "/title/tt1326283/images/rm1825095424",
        url:
          "https://m.media-amazon.com/images/M/MV5BNjIxMjE3OTU4OV5BMl5BanBnXkFtZTcwMTU2OTc4NQ@@._V1_.jpg",
        width: 540
      },
      status: "released",
      title: "Jane's Journey",
      titleType: "movie",
      year: 2010
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt0386117/",
      image: {
        height: 1183,
        id: "/title/tt0386117/images/rm2173864192",
        url:
          "https://m.media-amazon.com/images/M/MV5BNzQ1NzAwODEwM15BMl5BanBnXkFtZTcwNTE4MjI4Mg@@._V1_.jpg",
        width: 800
      },
      status: "released",
      title: "Where the Wild Things Are",
      titleType: "movie",
      year: 2009
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt1230214/",
      image: {
        height: 500,
        id: "/title/tt1230214/images/rm3192508928",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTk5NTc3MDY4M15BMl5BanBnXkFtZTgwODU1MjA2MDE@._V1_.jpg",
        width: 375
      },
      status: "released",
      title: "Stuntmen",
      titleType: "movie",
      year: 2009
    },
    {
      category: "thanks",
      job: "special thanks",
      id: "/title/tt1233611/",
      image: {
        height: 1350,
        id: "/title/tt1233611/images/rm2169866752",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjE0MjAyMzAyNl5BMl5BanBnXkFtZTcwNDM2OTYyMg@@._V1_.jpg",
        width: 900
      },
      status: "released",
      title: "Visual Acoustics",
      titleType: "movie",
      year: 2008
    },
    {
      category: "thanks",
      job: "thanks",
      id: "/title/tt0298656/",
      image: {
        height: 475,
        id: "/title/tt0298656/images/rm540777472",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTgzMjEzNzY4NF5BMl5BanBnXkFtZTcwODYxMjMyMQ@@._V1_.jpg",
        width: 334
      },
      status: "released",
      title: "Haggard",
      titleType: "video",
      year: 2003
    },
    {
      episodeAppearances: "/name/nm0000093/filmography/tt0264263",
      category: "thanks",
      endYear: 2002,
      episodeCount: 2,
      episodeJobs: [
        {
          endYear: 2002,
          episodes: 2,
          job: "very special thanks",
          startYear: 2002
        }
      ],
      startYear: 2002,
      id: "/title/tt0264263/",
      image: {
        height: 1440,
        id: "/title/tt0264263/images/rm2233601793",
        url:
          "https://m.media-amazon.com/images/M/MV5BMGViZGEzZWUtY2JjZC00MjRlLWI2NDktM2VlZTA2NzcwMzE2XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg",
        width: 1080
      },
      status: "released",
      title: "Jackass",
      titleType: "tvSeries",
      year: 2000,
      episodes: [
        {
          category: "thanks",
          job: "very special thanks",
          id: "/title/tt0613908/",
          image: {
            height: 719,
            id: "/title/tt0613908/images/rm1244405761",
            url:
              "https://m.media-amazon.com/images/M/MV5BMWZiNjM2OGUtZTFlYy00Y2ViLTk3MzktMjNmMjZhYzhiN2EyXkEyXkFqcGdeQXVyODUyMTkwOTg@._V1_.jpg",
            width: 488
          },
          status: "released",
          title: "The Bed Wetter",
          titleType: "tvEpisode",
          year: 2002,
          episodeNumber: 8,
          releaseDate: "2002-02-10",
          seasonNumber: 3
        },
        {
          category: "thanks",
          job: "very special thanks",
          id: "/title/tt0613907/",
          image: {
            height: 292,
            id: "/title/tt0613907/images/rm3745783809",
            url:
              "https://m.media-amazon.com/images/M/MV5BYWNhODkwYmMtZjYxNy00YjY2LWFmOTktYzU3ZjMxZDgxZjVlXkEyXkFqcGdeQXVyODUyMTkwOTg@._V1_.jpg",
            width: 398
          },
          status: "released",
          title: "Bloody Carpet",
          titleType: "tvEpisode",
          year: 2002,
          episodeNumber: 7,
          releaseDate: "2002-02-03",
          seasonNumber: 3
        }
      ],
      seriesEndYear: 2007,
      seriesStartYear: 2000
    },
    {
      category: "thanks",
      job: "acknowledgment",
      id: "/title/tt0120601/",
      image: {
        height: 2265,
        id: "/title/tt0120601/images/rm1838953985",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTFlYjgyMjUtNmJhZS00MDY2LTg0ZmMtNTVlNDA2NTUwYTRjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
        width: 1528
      },
      status: "released",
      title: "Being John Malkovich",
      titleType: "movie",
      year: 1999
    },
    {
      category: "soundtrack",
      job: 'performer: "We Are the Champions"',
      id: "/title/tt1402488/",
      image: {
        height: 568,
        id: "/title/tt1402488/images/rm1448787712",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTg1MzU2Nzg2OV5BMl5BanBnXkFtZTcwNzE3MzAxNg@@._V1_.jpg",
        width: 384
      },
      status: "released",
      title: "Happy Feet Two",
      titleType: "movie",
      year: 2011
    },
    {
      category: "soundtrack",
      job: 'performer: "Metro Man\'s Song"',
      id: "/title/tt1001526/",
      image: {
        height: 2048,
        id: "/title/tt1001526/images/rm2836562176",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_.jpg",
        width: 1311
      },
      status: "released",
      title: "Megamind",
      titleType: "movie",
      year: 2010
    }
  ]
};

// https://online-movie-database.p.rapidapi.com/title/find?q=tt0356910
export const movieMetaResponse = {
  "@meta": {
    operation: "Search",
    requestId: "8b615fd4-04de-432f-a5fd-fba11101441f",
    serviceTimeMs: 5.525974
  },
  "@type": "imdb.api.find.response",
  query: "tt0356910",
  results: [
    {
      id: "/title/tt0356910/",
      image: {
        height: 2048,
        id: "/title/tt0356910/images/rm2549451776",
        url:
          "https://m.media-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_.jpg",
        width: 1390
      },
      runningTimeInMinutes: 120,
      title: "Mr. & Mrs. Smith",
      titleType: "movie",
      year: 2005,
      principals: [
        {
          id: "/name/nm0000093/",
          legacyNameText: "Pitt, Brad",
          name: "Brad Pitt",
          billing: 1,
          category: "actor",
          characters: ["John Smith"],
          roles: [
            {
              character: "John Smith",
              characterId: "/character/ch0005693/"
            }
          ]
        },
        {
          id: "/name/nm0001401/",
          legacyNameText: "Jolie, Angelina",
          name: "Angelina Jolie",
          billing: 2,
          category: "actress",
          characters: ["Jane Smith"],
          roles: [
            {
              character: "Jane Smith",
              characterId: "/character/ch0005694/"
            }
          ]
        },
        {
          disambiguation: "I",
          id: "/name/nm0111013/",
          legacyNameText: "Brody, Adam (I)",
          name: "Adam Brody",
          billing: 4,
          category: "actor",
          characters: ["Benjamin Danz"],
          roles: [
            {
              character: "Benjamin Danz",
              characterId: "/character/ch0005697/"
            }
          ]
        }
      ]
    }
  ],
  types: ["title", "name"]
};

// https://online-movie-database.p.rapidapi.com/title/get-charname-list?tconst=tt0356910&id=nm0000093%26id%3Dnm0001401%26id%3Dnm0111013
export const movieCharactersResponse = {
  nm0000093: {
    name: {
      "@type": "imdb.api.name.base",
      akas: ["Weatherman"],
      id: "/name/nm0000093/",
      image: {
        height: 2048,
        id: "/name/nm0000093/images/rm864335360",
        url:
          "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
        width: 1363
      },
      legacyNameText: "Pitt, Brad",
      name: "Brad Pitt"
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        akas: ["Weatherman"],
        id: "/name/nm0000093/",
        image: {
          height: 2048,
          id: "/name/nm0000093/images/rm864335360",
          url:
            "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
          width: 1363
        },
        legacyNameText: "Pitt, Brad",
        name: "Brad Pitt",
        billing: 1,
        category: "actor",
        characters: ["John Smith"],
        roles: [
          {
            character: "John Smith",
            characterId: "/character/ch0005693/"
          }
        ]
      }
    ]
  },
  nm0001401: {
    name: {
      "@type": "imdb.api.name.base",
      akas: ["Angelina", "Angelina Jolie Pitt", "Angelina Jolie Voight"],
      id: "/name/nm0001401/",
      image: {
        height: 2048,
        id: "/name/nm0001401/images/rm3738743040",
        url:
          "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg",
        width: 1665
      },
      legacyNameText: "Jolie, Angelina",
      name: "Angelina Jolie"
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        akas: ["Angelina", "Angelina Jolie Pitt", "Angelina Jolie Voight"],
        id: "/name/nm0001401/",
        image: {
          height: 2048,
          id: "/name/nm0001401/images/rm3738743040",
          url:
            "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg",
          width: 1665
        },
        legacyNameText: "Jolie, Angelina",
        name: "Angelina Jolie",
        billing: 2,
        category: "actress",
        characters: ["Jane Smith"],
        roles: [
          {
            character: "Jane Smith",
            characterId: "/character/ch0005694/"
          }
        ]
      }
    ]
  },
  nm0111013: {
    name: {
      "@type": "imdb.api.name.base",
      disambiguation: "I",
      id: "/name/nm0111013/",
      image: {
        height: 400,
        id: "/name/nm0111013/images/rm3195898112",
        url:
          "https://m.media-amazon.com/images/M/MV5BOTY3NzMzMjgyMl5BMl5BanBnXkFtZTcwNjc2OTM4Mg@@._V1_.jpg",
        width: 279
      },
      legacyNameText: "Brody, Adam (I)",
      name: "Adam Brody"
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        disambiguation: "I",
        id: "/name/nm0111013/",
        image: {
          height: 400,
          id: "/name/nm0111013/images/rm3195898112",
          url:
            "https://m.media-amazon.com/images/M/MV5BOTY3NzMzMjgyMl5BMl5BanBnXkFtZTcwNjc2OTM4Mg@@._V1_.jpg",
          width: 279
        },
        legacyNameText: "Brody, Adam (I)",
        name: "Adam Brody",
        billing: 4,
        category: "actor",
        characters: ["Benjamin Danz"],
        roles: [
          {
            character: "Benjamin Danz",
            characterId: "/character/ch0005697/"
          }
        ]
      }
    ]
  }
};
