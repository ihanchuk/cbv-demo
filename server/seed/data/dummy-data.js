/** Seed data for DB */

const authors = [
    {
        books: [
            {
                 name: 'A Merciful Truth',
                 genre: 'Detective',
                 isbn: '45645f',
                 img: 'https://images-na.ssl-images-amazon.com/images/I/41MpARSpmzL._SX332_BO1,204,203,200_.jpg',
                 intro_text: 'Raised by a family of survivalists, FBI agent Mercy Kilpatrick can take on any challenge—even the hostile reception to her homecoming. But she’s not the only one causing chaos in the rural community of Eagle’s Nest, Oregon. At first believed to be teenage pranks, a series of fires takes a deadly turn with the murder of two sheriff’s deputies. Now, along with Police Chief Truman Daly, Mercy is on the hunt for an arsonist turned killer. '
            },
            {
                name: 'A Merciful Death',
                genre: 'Detective',
                isbn: '23sd3',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51gozOl1oiL._SX332_BO1,204,203,200_.jpg',
                intro_text: 'FBI special agent Mercy Kilpatrick has been waiting her whole life for disaster to strike. A prepper since childhood, Mercy grew up living off the land—and off the grid—in rural Eagle’s Nest, Oregon. Until a shocking tragedy tore her family apart and forced her to leave home. Now a predator known as the cave man is targeting the survivalists in her hometown, murdering them in their homes, stealing huge numbers of weapons, and creating federal suspicion of a possible domestic terrorism event. But the crime scene details are eerily familiar to an unsolved mystery from Mercy’s past.'
            }
        ],
        meta: {first_name: 'Kendra', last_name: 'Elliot'} 
    },
    {
        books: [
            {
                name: 'Harry Potter and the Chamber of Secrets',
                genre: 'Fantasy',
                isbn: 'd435657 ',
                img: 'https://images-na.ssl-images-amazon.com/images/I/61XGdLECZ5L._SX422_BO1,204,203,200_.jpg',
                intro_text: 'The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he is packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.'
            },
            {
                name: 'Harry Potter and the Sorcerers Stone ',
                genre: 'Fantasy',
                isbn: 'dfg435',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51MIi4p2YyL._SX418_BO1,204,203,200_.jpg',
                intro_text: 'For the first time, J.K. Rowlings beloved Harry Potter books will be presented in lavishly illustrated full-color editions. Kate Greenaway-award-winning artist Jim Kay has created over 100 stunning illustrations, making this deluxe format a perfect gift as much for a child being introduced to the series, as for the dedicated fan.'
            }
        ],
        meta:{first_name: 'J.K', last_name: 'Rowling'}
    },
    {
        books: [
            {
                name: 'Camino Island: A Novel',
                genre: 'Detective',
                isbn: 'rtvbn455 ',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51ccax6b1wL._SX327_BO1,204,203,200_.jpg',
                intro_text: 'A gang of thieves stage a daring heist from a secure vault deep below Princeton University’s Firestone Library. Their loot is priceless, but Princeton has insured it for twenty-five million dollars.'
            },
            {
                name: 'The Whistler',
                genre: 'Detective',
                isbn: '657ew',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51RI5EqlcLL._SX327_BO1,204,203,200_.jpg',
                intro_text: 'We expect our judges to be honest and wise. Their integrity and impartiality are the bedrock of the entire judicial system. We trust them to ensure fair trials, to protect the rights of all litigants, to punish those who do wrong, and to oversee the orderly and efficient flow of justice.'
            }
        ],
        meta:{first_name: 'John', last_name: 'Grisham'}
    },
    {
        books: [
            {
                name: '16th Seduction ',
                genre: 'Erotice Novell',
                isbn: '4358d',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51np2x9ef0L._SX325_BO1,204,203,200_.jpg',
                intro_text: 'Lindsay Boxer is learning to love again. After the picture-perfect world she shared with her husband, Joe, and their beautiful young daughter shattered under the weight of Joes double life, Lindsay is determined to put the pieces back together. But before she can welcome Joe back with open arms, their beloved hometown of San Francisco faces a threat unlike any the city--or the country--has ever seen. '
            },
            {
                name: 'The Black Book',
                genre: 'Mystery',
                isbn: 'Billy Harney was born to be a cop. The son of Chicagos chief of detectives, whose twin sister is also on the force, Billy plays it by the book. Alongside Detective Kate Fenton, Billys tempestuous, adrenaline-junkie partner, there is nothing he wouldn not sacrifice for his job',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51v9zH5D8tL._SX317_BO1,204,203,200_.jpg',
                intro_text: ' '
            }
        ],
        meta:{first_name: 'James', last_name: 'Peterson'}
    },
    {
        books: [
            {
                name: 'Alias Grace: A Novel ',
                genre: 'Novel',
                isbn: '00056cg',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51N61FhfxPL._SX322_BO1,204,203,200_.jpg',
                intro_text: 'Soon to be a Netflix Original series, Alias Grace takes readers into the life of one of the most notorious women of the nineteenth century.'
            },
            {
                name: 'Oryx and Crake',
                genre: '',
                isbn: '2266780fv ',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51nWVn-wM6L._SX323_BO1,204,203,200_.jpg',
                intro_text: 'Oryx and Crake is at once an unforgettable love story and a compelling vision of the future. Snowman, known as Jimmy before mankind was overwhelmed by a plague, is struggling to survive in a world where he may be the last human, and mourning the loss of his best friend, Crake, and the beautiful and elusive Oryx whom they both loved. In search of answers, Snowman embarks on a journey–with the help of the green-eyed Children of Crake–through the lush wilderness that was so recently a great city, until powerful corporations took mankind on an uncontrolled genetic engineering ride. Margaret Atwood projects us into a near future that is both all too familiar and beyond our imagini'
            }
        ],
        meta:{first_name: 'Margaret', last_name: 'Atwood'}
    },
    {
        books: [
            {
                name: 'The Secret of Spellshadow Manor ',
                genre: 'Fantasy',
                isbn: '90435',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51DcI2ns2eL._SX329_BO1,204,203,200_.jpg',
                intro_text: 'Like most sane people, student Alex Webber thought he was hallucinating - perhaps he consumed something bad at the party he been attending that night, or he was severely overtired. '
            },
            {
                name: 'The Gender Game 2: The Gender Secret',
                genre: 'Fantasy',
                isbn: '0458f',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51Vvbg-kWBL._SX331_BO1,204,203,200_.jpg',
                intro_text: 'Gliding over the treacherous Green in a shaky aircraft that she has no idea how to land, Violet Bates is still in shock. The harrowing events of the previous night play over in her mind as she asks herself question after question.'
            }
        ],
        meta:{first_name: 'Bella', last_name: 'Forrest'}
    },
    {
        books: [
            {
                name: 'Gwendy Button Box',
                genre: 'Horror',
                isbn: '048df6 ',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51ElGpd8ROL._SX320_BO1,204,203,200_.jpg',
                intro_text: 'The little town of Castle Rock, Maine has witnessed some strange events and unusual visitors over the years, but there is one story that has never been told... until now.'
            },
            {
                name: 'The Dark Tower I: The Gunslinger',
                genre: 'fantasic Novell',
                isbn: '0486555',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51wc33jjtxL._SX325_BO1,204,203,200_.jpg',
                intro_text: 'An impressive work of mythic magnitude that may turn out to be Stephen King’s greatest literary achievement'
            }
        ],
        meta:{first_name: 'Stephen', last_name: 'King'}
    },
    {
        books: [
            {
                name: 'Ink and Bone ',
                genre: 'Fantasy',
                isbn: '220058d',
                img: 'https://images-na.ssl-images-amazon.com/images/I/61NX845YT7L._SX327_BO1,204,203,200_.jpg',
                intro_text: 'In an exhilarating new series, New York Times bestselling author Rachel Caine rewrites history, creating a dangerous world where the Great Library of Alexandria has survived the test of time.… '
            },
            {
                name: 'Ash and Quill ',
                genre: 'Horror',
                isbn: '004844',
                img: 'https://images-na.ssl-images-amazon.com/images/I/61HbOU5BAVL._SX331_BO1,204,203,200_.jpg',
                intro_text: 'The unforgettable characters from Ink and Bone and Paper and Fire unite to save the Great Library of Alexandria from itself in this electrifying adventure in the New York Times bestselling series.'
            }
        ],
        meta:{first_name: 'Raichel', last_name: 'Caine'}
    },
    {
        books: [
            {
                name: 'Year One (Chronicles of the One)',
                genre: 'Fantasy',
                isbn: '084343hf',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51MMPaaJZCL._SX327_BO1,204,203,200_.jpg',
                intro_text: 'A stunning new novel from the #1 New York Times bestselling author―an epic of hope and horror, chaos and magic, and a journey that will unite a desperate group of people to fight the battle of their lives… '
            },
            {
                name: 'Island of Glass (Guardians Trilogy) ',
                genre: 'Fantasy',
                isbn: '0477655',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51SDdSWiSKL._SX337_BO1,204,203,200_.jpg',
                intro_text: 'The final Guardians Trilogy novel from the #1 New York Times bestselling author of Bay of Sighs and Stars of Fortune.'
            }
        ],
        meta:{first_name: 'Nora', last_name: 'Roberts'}
    },
    {
        books: [
            {
                name: 'Her Last Goodbye',
                genre: 'Love Story',
                isbn: '8575305 ',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51MCZCTie1L._SX331_BO1,204,203,200_.jpg',
                intro_text: 'Wall Street Journal bestselling author Melinda Leigh’s Morgan Dane series continues as the fearless attorney and her partner, investigator Lance Kruger, take on a disturbing disappearance…'
            },
            {
                name: 'She Can Run ',
                genre: 'Love Story',
                isbn: '094756f ',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51g4KAWGyXL._SX332_BO1,204,203,200_.jpg',
                intro_text: 'Forced into retirement by an unexpected injury, Philadelphia homicide detective Jack O’Malley is mourning the loss of his career when his uncle abruptly dies, leaving Jack to dispose of his crumbling '
            }
        ],
        meta:{first_name: 'Melinda', last_name: 'Leigh'}
    },
];

module.exports = authors;