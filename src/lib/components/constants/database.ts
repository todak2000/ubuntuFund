import { faker } from "@faker-js/faker";

interface User {
  imageUrl: string;
  proof: string[];
}

const avatar: User[] = Array.from({ length: 10 }, () => ({
  proof: [
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
  ],
  imageUrl: faker.image.avatar(),
}));

export const campaignData = [
  {
    id: "f13b372d-2a9b-4884-9515-ffb1c4dcb9c1",
    imageUrl: avatar[0].imageUrl,
    recipientQuestion: "Fundraising for Someone Else",
    description:
      "Aveho ab cariosus decet averto stultus. Asper aeternus viduo aestus. Tunc audio ars ulterius sumo aeger iste.\n" +
      "Thalassinus aegre viscus textilis curriculum adsum tredecim. Pecco summopere deorsum stips desparatus corona cornu. Surgo quis stips.\n" +
      "Absconditus amplitudo titulus deprecator soluta universe verumtamen. Conatus aut tibi derelinquo coniuratio ullam spargo viriliter comminor. Laboriosam adsuesco tripudio virga articulus.",
    category: "Environment",
    recipient: "Mona Johns",
    country: "Mozambique",
    currency: "Q",
    amountToRaise: "36922.60",
    amountRaised: "27954.53",
    campaignPeriod: "30 days",
    proof: avatar[0].proof,
    isApproved: false,
  },
  {
    id: "6dbd8d92-23e9-4000-93f3-d8fb24e0c9a2",
    imageUrl: avatar[1].imageUrl,
    recipientQuestion: "Fundraising for a Charity",
    description:
      "Ars admoneo condico thalassinus tempora dolores adeptio vester. Tergiversatio traho amicitia omnis tamen compello sperno voveo. Aggredior rem crur ara.\n" +
      "Defluo iusto venia supra attonbitus tripudio casus perspiciatis delectus. Vigilo decretum expedita coaegresco sumo amplitudo doloremque defero stips vitae. Quia ver ter subseco qui.\n" +
      "Cattus sperno conor aro ter magni abscido suppellex aeneus delectatio. Allatus curtus annus. Utrimque sol caveo anser varietas illo deduco tenax.",
    category: "Family",
    recipient: "Dana Conroy",
    country: "Denmark",
    currency: "$",
    amountToRaise: "35674.45",
    amountRaised: "9788.17",
    campaignPeriod: "30 days",
    proof: avatar[1].proof,
    isApproved: false,
  },
  {
    id: "ddfc4034-42bc-4021-8a69-69600aa64007",
    imageUrl: avatar[2].imageUrl,
    recipientQuestion: "Fundraising for Someone Else",
    description:
      "Commodo vitium atrocitas solvo civis eos spargo addo. Calamitas sui tibi aureus tamdiu suggero tempus tergiversatio. Attonbitus suus depono animi aeger.\n" +
      "Tumultus tunc sit ars pectus sol. Thorax comminor adsum colo. Thesaurus repellendus caste.\n" +
      "Corporis absconditus contigo clamo agnosco culpo coniuratio astrum commodi vos. Uberrime cribro facilis uter aliquid contego degenero illo urbanus corroboro. Cibo virtus calco verbum qui amo atque subito cornu cubo.",
    category: "Sports",
    recipient: "Cristina Bayer",
    country: "Ghana",
    currency: "CHF",
    amountToRaise: "42019.16",
    amountRaised: "32123.02",
    campaignPeriod: "30 days",
    proof: avatar[2].proof,
    isApproved: false,
  },
  {
    id: "dd3ffeae-a0d5-4c2c-aad2-1a9e291e4d4c",
    imageUrl: avatar[3].imageUrl,
    recipientQuestion: "Fundraising for Someone Else",
    description:
      "Thesaurus repellat eius acervus ciminatio possimus. Cura una cum bardus adfectus tardus pauper currus vomica. Admitto animi caritas placeat sint quia.\n" +
      "Somnus ait decimus ventus timidus vulnus cenaculum torqueo repudiandae. Quis cometes confido ullam comparo ara. Ceno comedo creptio sperno sonitus defessus.\n" +
      "Reprehenderit audeo creator tamquam a suggero torqueo. Balbus cur consequatur pel. Vulgo sto deludo deserunt deduco civis capto.",
    category: "Sports",
    recipient: "Geoffrey Bashirian-Metz",
    country: "Lithuania",
    currency: "₨",
    amountToRaise: "27447.46",
    amountRaised: "24292.52",
    campaignPeriod: "30 days",
    proof: avatar[3].proof,
    isApproved: false,
  },
  {
    id: "73b3fd36-4855-4732-a57c-f5efbc8b207b",
    imageUrl: avatar[4].imageUrl,
    recipientQuestion: "Fundraising for Someone Else",
    description:
      "Creptio subnecto denuo constans. Beneficium curatio dicta nemo modi cunae cultellus spiritus tam. Censura arca quis.\n" +
      "Corrupti vita adulatio demens textilis spero turba tempus undique atrocitas. Quasi abscido coma depono cognomen toties voluptas. Chirographum viridis aedificium combibo suscipit barba adversus cognomen ademptio.\n" +
      "Ultio aliquam demens debitis. Creta sperno tendo triduana. Thesis ut crudelis illo atrox stabilis carcer.",
    category: "Travel",
    recipient: "Jacqueline Bartoletti",
    country: "Tonga",
    currency: "$",
    amountToRaise: "3050.42",
    amountRaised: "2322.40",
    campaignPeriod: "30 days",
    proof: avatar[4].proof,
    isApproved: true,
  },
  {
    id: "b26a1e07-cc0b-4021-b332-33b7d5752e2a",
    imageUrl: avatar[5].imageUrl,
    recipientQuestion: "Personal Fundraising",
    description:
      "Vereor aequus tenax. Trucido patior defungo rerum creta. Amicitia aestivus supplanto cubicularis pecus.\n" +
      "Quod capto ullam blandior adiuvo. Aequus tener virgo aeneus. Arbor clarus abduco aedificium caries peior tabula aedificium sodalitas.\n" +
      "Villa sequi xiphias reprehenderit unus vero trans urbs ullam. Corrumpo defendo utor tenuis thema arx. Quibusdam terminatio eligendi decipio sed officiis adfectus atqui vespillo.",
    category: "Religion",
    recipient: "Domingo Bosco II",
    country: "Reunion",
    currency: "kr",
    amountToRaise: "29383.15",
    amountRaised: "27963.35",
    campaignPeriod: "30 days",
    proof: avatar[5].proof,
    isApproved: false,
  },
  {
    id: "9285bbdb-9871-4432-aeec-5f01f0875199",
    imageUrl: avatar[6].imageUrl,
    recipientQuestion: "Fundraising for a Charity",
    description:
      "Curso eveniet cupio sol caries cura pecco vere. Coadunatio pecus brevis cornu alveus utilis. Adaugeo aequitas timidus stultus aliquid crastinus arbustum urbs degenero.\n" +
      "Eveniet ullam usus ambulo toties minima volo cenaculum. Desino tonsor terebro videlicet. Catena antepono solvo ducimus suppellex votum.\n" +
      "Alioqui claudeo dolore taedium video ars demo. Theologus illum acies ustilo. Amplitudo vespillo volo itaque ipsa utilis ante ad maxime denego.",
    category: "Religion",
    recipient: "Martin Kub",
    country: "Turkmenistan",
    currency: "$",
    amountToRaise: "21240.99",
    amountRaised: "19933.90",
    campaignPeriod: "30 days",
    proof: avatar[6].proof,
    isApproved: true,
  },
  {
    id: "726c3dc1-f4a9-45ff-9e6f-35b9cd165911",
    imageUrl: avatar[7].imageUrl,
    recipientQuestion: "Personal Fundraising",
    description:
      "Celo eos curo tersus. Vilicus admiratio vitae tero cotidie vis. Desipio solutio tum usus considero varius verto arx ulciscor.\n" +
      "Teres careo cognomen deorsum tracto. Autem cicuta tenetur cornu sum odit correptius. Volaticus viduo adaugeo bonus.\n" +
      "Unde concedo cursim claustrum vindico non aequitas conicio. Confido debeo angelus aeneus demitto ago. Uxor campana non adstringo.",
    category: "Funerals/Memorials",
    recipient: "Dr. Lance Bernier",
    country: "Afghanistan",
    currency: "$",
    amountToRaise: "39572.11",
    amountRaised: "17403.32",
    campaignPeriod: "30 days",
    proof: avatar[7].proof,
    isApproved: false,
  },
  {
    id: "121ab54a-0ce5-46ec-8400-0d0cefe08b44",
    imageUrl: avatar[8].imageUrl,
    recipientQuestion: "Personal Fundraising",
    description:
      "Callide cuppedia amitto officiis cibo. Assentator vobis vomica absconditus aiunt. Sperno delicate statim synagoga accommodo accedo.\n" +
      "Atque quasi vulariter spiculum. Clibanus tutamen calculus veniam titulus denuncio ventus earum comparo cedo. Virga corona enim crur.\n" +
      "Vesper vivo testimonium voluptatum cunabula explicabo vitae clarus ciminatio. Terror animi verumtamen tergum quibusdam atqui supellex universe. Quod vivo reiciendis distinctio averto voluptate suffragium.",
    category: "Family",
    recipient: "Jessie Zboncak",
    country: "Timor-Leste",
    currency: "RM",
    amountToRaise: "7087.25",
    amountRaised: "1294.14",
    campaignPeriod: "30 days",
    proof: avatar[8].proof,
    isApproved: true,
  },
  {
    id: "3703158a-9098-4e49-ba6c-e4d647eeb1d7",
    imageUrl: avatar[9].imageUrl,
    recipientQuestion: "Personal Fundraising",
    description:
      "Facere bonus crinis tandem. Voluptatibus voluptate stillicidium tego. Arcesso casso cura caritas pecto aufero aufero terra tolero.\n" +
      "Volva somniculosus cavus templum acies tero asper socius tactus cometes. Accommodo venustas talis. Cenaculum audax tero aestas comprehendo.\n" +
      "Textilis thymum abutor clarus tandem amplus volo spectaculum. Auxilium curiositas tempore acidus. Amitto textilis adstringo amiculum atavus volutabrum absconditus.",
    category: "Religion",
    recipient: "Joey Toy",
    country: "Brunei Darussalam",
    currency: "$",
    amountToRaise: "22745.55",
    amountRaised: "13672.88",
    campaignPeriod: "30 days",
    proof: avatar[9].proof,
    isApproved: true,
  },
];
