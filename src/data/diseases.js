export const diseases = [
  {
    ids: 0,
    slug: 'bacterial_spot',
    name: 'Bacterial Spot',
    symptoms:
      'Dark brown water-soaked spots appear on the leaves. Then these spots become blackish, and eventually the affected tissue falls off leaving holes in the leaves. Black spots appear which then become scab-like spots appearing simultaneously on the fruit.',
    cause: 'Xanthomonas Perforans Bacteria',
    prevention: [
      'Only use certified disease-free seeds and plants',
      'Avoid areas where peppers or tomatoes have been planted during the previous year',
      'Avoid watering over plants using irrigation water',
      'Pruning plants to improve air circulation',
      'Practice good sanitation like plowing hay',
      'Do weed control',
    ],
    treatment: [
      'Spraying with copper fungicide will provide fairly good control of bacterial disease',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 1,
    slug: 'early_blight',
    name: 'Early Blight',
    symptoms:
      'Large irregular patches of black, tissue death surrounded by larger yellow areas. The leaf spots have a characteristic concentric band appearance (oyster shell or bulls eye).',
    cause: 'Fungus Alternaria Linariae (A. solani)',
    prevention: [
      'Use resistant or tolerant tomato cultivars',
      'Use pathogen-free seeds',
      'Do not plant diseased plants in the field',
      'Use crop rotation, eradicate weeds from tomato plants',
      'Fertilize plants properly',
      'Do not wet tomato foliage with irrigation water',
      'Test garden soil annually and maintain adequate potassium levels',
    ],
    treatment: [
      'Spraying with the fungicide chlorothalonil, mancozeb, or copper fungicide can control this disease',
      'Prune and discard infected lower branches and leaves.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 2,
    slug: 'late_blight',
    name: 'Late Blight',
    symptoms:
      'Most of the leaf area appears water-soaked, which eventually turns brown and papery. On the fruit there are also large irregular greenish brown spots with a rough, oily appearance. On the stem it looks irregular in color from green to black',
    cause: 'Pathogen Phytophthora Infestans',
    prevention: [
      'Keep the foliage dry. place the plant in a place where it will receive morning sunlight',
      'Allow extra space between plants, and avoid watering over plants, especially in the afternoon',
      'Buy certified disease-free seeds and plants',
      'Do weed management',
      'Dont make rotten compost',
    ],
    treatment: [
      'Spraying with the fungicide chlorothalonil, mancozeb, or copper fungicide can control this disease',
      'Prune and discard infected lower branches and leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 3,
    slug: 'leaf_mold',
    name: 'Leaf Mold',
    symptoms:
      'Appears as light green spots on the upper surface of older leaves. Underneath the leaves in these areas, purplish or olive green patches of fungal growth can be seen. Infected leaves turn yellow and drop off the plant.',
    cause: 'Passalora Fulva mushroom',
    prevention: [
      'Remaining/old plants must be removed from the field',
      'Checking and pruning plants to improve air circulation helps control disease',
      'Place tomato plants further apart for better air circulation between plants',
      'Avoid wetting the leaves when watering',
      'Turn with vegetables other than tomatoes',
    ],
    treatment: [
      'Spraying with the fungicide chlorothalonil, mancozeb, or copper fungicide can control this disease',
      'Prune and discard infected lower branches and leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 4,
    slug: 'septoria_leaf_spot',
    name: 'Septoria Leaf Spot',
    symptoms:
      'Circular, water-soaked lesions occur first on older leaves. These spots then turn brown with gray centers and die, and if the infection is severe enough, the entire leaf will die',
    cause: 'Septoria Lycopersici fungus',
    prevention: [
      'Do not plant tomato cultivars as most of the tomato cultivars planted today are susceptible to Septoria leaf spot',
      '3 year crop rotation and sanitation (disposal of plant debris)',
      'Do not use overhead irrigation',
    ],
    treatment: [
      'Spraying with the fungicide chlorothalonil, mancozeb, or copper fungicide can control this disease',
      'Prune and discard infected lower branches and leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 5,
    slug: 'spider_mites/two_spotted_spider_mite',
    name: 'Spider Mites / Two-Spotted Spider Mites',
    symptoms:
      'Leaves become yellowish white and mottled. It was found that tomato red spider mites can be found on both sides of the leaves but prefer the underside near the leaf veins. There are small webs like webbing especially on the underside of the leaves.',
    cause: 'Tetranychus evansi',
    prevention: [
      'Keep the land clean',
      'Regular cleaning of weeds',
      'Monitor your plants regularly',
      'Keep records related to the arrival of the disease to serve as material for future preparations',
    ],
    treatment: [
      'Treat, remove or quarantine infected plants to prevent spread',
      'There is still no miticide to combat this pest',
    ],
    ref: [
      {
        name_ref: 'NSW DPI',
        link: 'Https://www.dpi.nsw.gov.au/biosecurity/plant/insect-pests-and-plant-diseases/Tomato-red-spider-mite',
      },
    ],
  },
  {
    id: 6,
    slug: 'target_spot',
    name: 'Target Spot',
    symptoms:
      'The initial symptoms on the leaves are small water-soaked spots on the upper leaf surface. The spots develop into small necrotic lesions that have a light brown center and dark edges',
    cause: 'Pathogen Corynespora Cassiicola',
    prevention: [
      'Improves air flow through the canopy with wider plant spacing',
      'Avoid over-fertilization with nitrogen, which can lead to the formation of an overly dense canopy. Pruning saplings and old leaves in the lower canopy can also improve air flow and reduce leaf wetness',
      'Avoid planting tomatoes near old plants',
      'Check seedlings for target spot symptoms before transplanting',
      'Manage weeds, which can serve as alternative hosts',
      'Avoid the use of overhead irrigation',
      'Destroy plant residues immediately after the last harvest',
      'Remove from tomatoes and other known hosts for at least three years',
    ],
    treatment: [
      'Spraying with the fungicide chlorothalonil, mancozeb, or copper fungicide can control this disease',
      'Prune and discard infected lower branches and leaves.',
    ],
    ref: [
      {
        name_ref: 'Vegetables Bayer',
        link: 'Https://www.vegetables.bayer.com/ca/en-ca/resources/agronomic-spotlights/target-spot-of-tomato.html',
      },
    ],
  },
  {
    id: 7,
    slug: 'yellow_leaf_curl_virus',
    name: 'Tomato Yellow Leaf Curl Virus',
    symptoms:
      'The leaves curl upwards, the edges of the leaves turn yellow (chlorosis), the leaves are smaller than normal, the plant is stunted, and the flowers fall off. If tomato plants are infected early in their growth, no fruit may form. Infected plants may appear randomly throughout the garden',
    cause: 'White flies',
    prevention: [
      'Removal of plants with early symptoms can slow the spread of the disease',
      'Infected plants that are uprooted (uprooted) should be bagged immediately to prevent spread',
      'Control weeds in and around the garden site, as these may be alternative hosts for whiteflies',
    ],
    treatment: [
      'Making a low concentration spray of horticultural oil or canola oil will act as a pest repellent',
      'At the end of the season, remove all susceptible plants and burn or throw them away',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 8,
    slug: 'mosaic_virus',
    name: 'Tomato Mosaic Virus',
    symptoms:
      'Plants infected with the virus become stunted, often with leaves that do not develop properly. The plants look dense. Leaves may be mottled, and often have a "shoelace" appearance. The fruit is small and the wrong shape.',
    cause: 'Tobacco Mosaic Virus',
    prevention: [
      'Remove and destroy infected plants immediately',
      'Wash your hands thoroughly after smoking (Tobacco mosaic virus may be present in certain types of tobacco) and before working in the garden',
      'Remove weeds and remove infected plants from the field as soon as they are seen',
      'Control insects (thrips and whiteflies) that carry viruses (see HGIC 2218, Insect Pests of Tomato)',
    ],
    treatment: [
      'Use reflective mulch',
      'Use virus-resistant tomato cultivars',
      'Many cultivars have Tobacco mosaic virus (TMV) resistance (the letter T follows the cultivar name), such as Bush Celebrity, Bush Early Girl, Jetsetter, Big Beef, Celebrity, Sweet Cluster, Sweet Million (cherry), and Super Marzano (paste)' ,
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 9,
    slug: 'healthy',
    name: 'Healthy',
    symptoms: 'The plant looks healthy and there are no diseases',
    cause: 'Farmers who diligently clean and care for plants',
    prevention: ['It is better to continue doing this habit'],
    treatment: ['No treatment required'],
    ref: [
      {
        name_ref: '',
        links: '',
      },
    ],
  },
];