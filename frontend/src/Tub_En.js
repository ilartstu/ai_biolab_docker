import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import NaviBarv2_En from "./Components/NaviBarv2_En";
import Footer_En from "./Components/Footer_En";
import {
  Container,
  Button,
  Tab,
  Nav,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { motion } from "framer-motion";
import StaticTubData_En from "./Components/StaticTubData_En";
import StaticTubDataSoc_En from "./Components/StaticTubDataSoc_En";
import { useSearchParams } from "react-router-dom";

const getRegionData = (id, hr, eventKey, title, title2, district, center, population, area, density) => ({ id, hr, eventKey, title, title2, district, center, population, area, density });

const regions = [

  getRegionData(1, "https://server.ai-biolab.ru/api/csvTub/belgorod", "belgorod", "Belgorod region", "Belgorod region belgorod region","Central Federal District","Belgorod", "1,514,500 people", "27,100 km²", "55.31 people/km²"),
  getRegionData(2, "https://server.ai-biolab.ru/api/csvTub/bryansk", "bryansk", "Bryansk region", "Bryansk region bryansk region","Central Federal District","Bryansk", "1 168 800 people", "34 900 km²", "32,77 people/km²"),
  getRegionData(3, "https://server.ai-biolab.ru/api/csvTub/vladimir", "vladimir", "Vladimir region", "Vladimir region vladimir region","Central Federal District","Vladimir", "1 342 099 people", "29 000 km²", "46,15 people/km²"),
  getRegionData(4, "https://server.ai-biolab.ru/api/csvTub/voronezh", "voronezh", "Voronezh region", "Voronezh region voronezh region","Central Federal District","Voronezh", "2 273 417 people", "52 216 km²", "43,54 people/km²"),
  getRegionData(5, "https://server.ai-biolab.ru/api/csvTub/ivanovsk", "ivanovsk", "Ivanovo region", "Ivanovo region ivanovo region","Central Federal District","Ivanovo", "905 900 people", "21 437 km²", "42,26 people/km²"),
  getRegionData(6, "https://server.ai-biolab.ru/api/csvTub/kaluga", "kaluga", "Kaluga region", "Kaluga region kaluga region","Central Federal District","Kaluga", "1 068 410 people", "29 777 km²", "35,88 people/km²"),
  getRegionData(7, "https://server.ai-biolab.ru/api/csvTub/kostroma", "kostroma", "Kostroma region", "Kostroma region kostroma region","Central Federal District","Kostroma", "566 266 people", "60 211 km²", "9,4 people/km²"),
  getRegionData(8, "https://server.ai-biolab.ru/api/csvTub/kursk", "kursk", "Kursk region", "Kursk region kursk region","Central Federal District","Kursk", "1 060 892 people", "29 997 km²", "35,37 people/km²"),
  getRegionData(9, "https://server.ai-biolab.ru/api/csvTub/lipeck", "lipeck", "Lipetsk region", "Lipetsk region lipetsk region","Central Federal District","Lipetsk", "1 116 265 people", "24 047 km²", "46,42 people/km²"),
  getRegionData(10, "https://server.ai-biolab.ru/api/csvTub/moscow", "moscow", "Moscow region", "Moscow region moscow region","Central Federal District","Moscow", "8 651 260 people", "44 329 km²", "195,16 people/km²"),
  getRegionData(11, "https://server.ai-biolab.ru/api/csvTub/orel", "orel", "Oryol region", "Oryol region oryol region","Central Federal District","Orel", "724 686 people", "24 700 km²", "29,4 people/km²"),
  getRegionData(12, "https://server.ai-biolab.ru/api/csvTub/ryazun", "ryazun", "Ryazan region", "Ryazan region ryazan region","Central Federal District","Ryazan", "1 082 231 people", "44 329 km²", "27,33 people/km²"),
  getRegionData(13, "https://server.ai-biolab.ru/api/csvTub/smolensk", "smolensk", "Smolensk region", "Smolensk region smolensk region","Central Federal District","Smolensk", "863 987 people", "49 779 km²", "17,36 people/km²"),
  getRegionData(14, "https://server.ai-biolab.ru/api/csvTub/tambov", "tambov", "Tambov region", "Tambov region tambov region","Central Federal District","Tambov", "956 292 people", "34 462 km²", "27,75 people/km²"),
  getRegionData(15, "https://server.ai-biolab.ru/api/csvTub/tver", "tver", "Tver region", "Tver region tver region","Central Federal District","Tver", "1 199 747 people", "84 100 km²", "14,25 people/km²"),
  getRegionData(16, "https://server.ai-biolab.ru/api/csvTub/tula", "tula", "Tula region", "Tula region tula region","Central Federal District","Tula", "1 471 140 people", "25 679 km²", "57,29 people/km²"),
  getRegionData(17, "https://server.ai-biolab.ru/api/csvTub/yaroslavl", "yaroslavl","Yaroslavl region", "Yaroslavl region yaroslavl region","Central Federal District","Yaroslavl", "1 187 558 people", "36 400 km²", "32,83 people/km²"),
  getRegionData(18, "https://server.ai-biolab.ru/api/csvTub/kareliya", "kareliya", "Republic of Karelia", "Republic of Karelia republic of karelia","North-Western Federal District","Petrozavodsk", "523 856 people", "172 400 km²", "2,9 people/km²"),
  getRegionData(19, "https://server.ai-biolab.ru/api/csvTub/komi", "komi", "Komi Republic", "Komi Republic, komi republic","North-Western Federal District","Syktyvkar", "720 610 people", "415 900 km²", "1,73 people/km²"),
  getRegionData(20, "https://server.ai-biolab.ru/api/csvTub/arhangelsk", "arhangelsk", "Arkhangelsk region", "Arkhangelsk region arkhangelsk region","North-Western Federal District","Arkhangelsk", "998 072 people", "587 400 km²", "1,69 people/km²"),
  getRegionData(21, "https://server.ai-biolab.ru/api/csvTub/vologda", "vologda", "Vologda region", "Vologda region vologda region","North-Western Federal District","Vologda", "1 121 343 people", "144 527 km²", "8,5 people/km²"),
  getRegionData(22, "https://server.ai-biolab.ru/api/csvTub/kaliningrad", "kaliningrad", "Kaliningrad region", "Kaliningrad region kaliningrad region","North-Western Federal District","Kaliningrad", "1 033 914 people", "15 125 km²", "68,36 people/km²"),
  getRegionData(23, "https://server.ai-biolab.ru/api/csvTub/leningrad", "leningrad", "Leningrad region", "Leningrad region leningrad region","North-Western Federal District","Gatchina", "2 035 762 people", "83 908 km²", "24,26 people/km²"),
  getRegionData(24, "https://server.ai-biolab.ru/api/csvTub/murmansk", "murmansk", "Murmansk region", "Murmansk region murmansk region","North-Western Federal District","Murmansk", "656 438 people", "144 902 km²", "4,53 people/km²"),
  getRegionData(25, "https://server.ai-biolab.ru/api/csvTub/novgorod", "novgorod", "Novgorod region", "Novgorod region novgorod region","North-Western Federal District","Veliky Novgorod", "571 447 people", "54 501 km²", "10,49 people/km²"),
  getRegionData(26, "https://server.ai-biolab.ru/api/csvTub/pskov", "pskov", "Pskov region", "Pskov region pskov region","North-Western Federal District","Pskov", "581 147 people", "55 399 km²", "10,49 people/km²"),
  getRegionData(27, "https://server.ai-biolab.ru/api/csvTub/adygea", "adygea", "Republic of Adygea", "Republic of Adygea republic of adygea","Southern Federal District","Maykop", "500 591 people", "7 792 km²", "64,24 people/km²"),
  getRegionData(28, "https://server.ai-biolab.ru/api/csvTub/kalmykia", "kalmykia", "Republic of Kalmykia", "Republic of Kalmykia republic of kKalmykia","Southern Federal District","Elista", "266 770 people", "74 731 km²", "5,57 people/km²"),
  getRegionData(29, "https://server.ai-biolab.ru/api/csvTub/krasnodar", "krasnodar", "Krasnodar Territory", "Krasnodar Territory kKrasnodar territory","Southern Federal District","Krasnodar", "5 833 002 people", "76 005 km²", "77,27 people/km²"),
  getRegionData(30, "https://server.ai-biolab.ru/api/csvTub/volgograd", "volgograd", "Volgograd region", "Volgograd region volgograd region","Southern Federal District","Volgograd", "2 453 898 people", "113 900 km²", "21,74 people/km²"),
  getRegionData(31, "https://server.ai-biolab.ru/api/csvTub/rostov", "rostov", "Rostov region", "Rostov region Rostov region","Southern Federal District","Rostov", "4 152 518 people", "100 967 km²", "41,13 people/km²"),
  getRegionData(32, "https://server.ai-biolab.ru/api/csvTub/dagestan", "dagestan", "Republic of Dagestan", "Republic of Dagestan republic of dagestan","Southern Federal District","Makhachkala", "3 232 224 people", "50 270 km²", "64,3 people/km²"),
  getRegionData(33, "https://server.ai-biolab.ru/api/csvTub/ingushetia", "ingushetia", "Republic of Ingushetia", "Republic of Ingushetia republic of ingushetia","Southern Federal District","Magas", "509 541 people", "3 685 km²", "147,7 people/km²"),
  getRegionData(34, "https://server.ai-biolab.ru/api/csvTub/kabarbalkar", "kabarbalkar", "Kabardino-Balkarian Republic", "Kabardino-Balkarian Republic kabardino-balkarian republic","Southern Federal District","Nalchik", "905 464 people", "76 005 km²", "72,61 people/km²"),
  getRegionData(35, "https://server.ai-biolab.ru/api/csvTub/karcherk", "karcherk","Karachay-Cherkess Republic", "Karachay-Cherkess Republic of karachay-cherkess republic","Southern Federal District","Cherkessk", "468 322 people", "14 100 km²", "32,8 people/km²"),
  getRegionData(36, "https://server.ai-biolab.ru/api/csvTub/sevosetiaalania", "sevosetiaalania", "Republic of North Ossetia-Alania", "Republic of North Ossetia-Alania republic of north ossetia-alania","North Caucasus Federal District","Vladikavkaz", "678 879 people", "8 000 km²", "85,00 people/km²"),
  getRegionData(37, "https://server.ai-biolab.ru/api/csvTub/chechnya", "chechnya","Chechen Republic", "Chechen Republic cechen republic","North Caucasus Federal District","Grozny", "1 552 866 people", "16 171 km²", "96,03 people/km²"),
  getRegionData(38, "https://server.ai-biolab.ru/api/csvTub/stavrapol", "stavrapol", "Stavropol Territory", "Stavropol Territory stavropol territory","North Caucasian Federal District","Stavropol", "2 886 108 people", "66 160 km²", "43,62 people/km²"),
  getRegionData(39, "https://server.ai-biolab.ru/api/csvTub/bashkortostan", "bashkortostan", "Republic of Bashkortostan", "Republic of Bashkortostan republic of bashkortostan","Volga Federal District","Ufa", "4 064 361 people", "142 947 km²", "28,4 people/km²"),
  getRegionData(40, "https://server.ai-biolab.ru/api/csvTub/maryal", "maryal", "Republic of Mari El", "Republic of Mari El republic of mari el","Volga Federal District","Yoshkar-Ola", "696 459 people", "23 375 km²", "29,5 people/km²"),
  getRegionData(41, "https://server.ai-biolab.ru/api/csvTub/mordovia", "mordovia","Republic of Mordovia","Republic of Mordovia republic of mordovia", "Volga Federal District", "Saransk", "765 891  people", "26 128 km²", "29,31 people/km²"),
  getRegionData(42, "https://server.ai-biolab.ru/api/csvTub/tatarstan", "tatarstan", "Republic of Tatarstan","Republic of Tatarstan republic of tatarstan", "Volga Federal District", "Kazan", "4 003 016 people", "67 847 km²", "56,57 people/km²"),
  getRegionData(43, "https://server.ai-biolab.ru/api/csvTub/udmurtia", "udmurtia", "Udmurt Republic", "Udmurt Republic udmurt republic","Volga Federal District","Izhevsk", "1 434 557  people", "42 061 km²", "34,11 people/km²"),
  getRegionData(44, "https://server.ai-biolab.ru/api/csvTub/chuvashia", "chuvashia", "Chuvash Republic", "Chuvash Republic chuvash republic","Volga Federal District","Cheboksary", "1 167 061 people", "18 343 km²", "63,62 people/km²"),
  getRegionData(45, "https://server.ai-biolab.ru/api/csvTub/perm", "perm", "Perm Krai", "Perm Krai perm krai","Volga Federal District","Perm", "2 495 266 people", "160 236 km²", "15,57 people/km²"),
  getRegionData(46, "https://server.ai-biolab.ru/api/csvTub/kirov", "kirov", "Kirov region", "Kirov region kirov region","North Caucasus Federal District","Kirov", "1 129 935 people", "120 400 km²", "9,39 people/km²"),
  getRegionData(47, "https://server.ai-biolab.ru/api/csvTub/nizhniynovgorod", "nizhniynovgorod", "Nizhny Novgorod region", "Nizhny Novgorod region nizhny novgorod region","North Caucasus Federal District","Nizhny Novgorod", "3 060 335 people", "76 624 km²", "39,94 people/km²"),
  getRegionData(48, "https://server.ai-biolab.ru/api/csvTub/orenburg", "orenburg", "Orenburg region", "Orenburg region oenburg region","North Caucasus Federal District","Orenburg", "1 828 656 people", "123 702 km²", "14,78 people/km²"),
  getRegionData(49, "https://server.ai-biolab.ru/api/csvTub/penza", "penza", "Penza region", "Penza region penza region","Volga Federal District","Penza", "1 236 113 people", "43 352 km²", "28,51 people/km²"),
  getRegionData(50, "https://server.ai-biolab.ru/api/csvTub/samara", "samara", "Samara region", "Samara region samara region","Volga Federal District","Samara", "3 127 842 people", "53 565 km²", "58,39 people/km²"),
  getRegionData(51, "https://server.ai-biolab.ru/api/csvTub/saratov", "saratov", "Saratov region", "Saratov region saratov region","Volga Federal District","Saratov", "2 385 163  people", "101 240 km²", "23,56 people/km²"),
  getRegionData(52, "https://server.ai-biolab.ru/api/csvTub/ulyanovsk", "ulyanovsk", "Ulyanovsk region", "Ulyanovsk region ulyanovsk region","Volga Federal District","Ulyanovsk", "1 172 782 people", "37 181 km²", "31,54 people/km²"),
  getRegionData(53, "https://server.ai-biolab.ru/api/csvTub/kurgan", "kurgan", "Kurgan region", "Kurgan region kurgan region","Ural Federal District","Kurgan", "753 002  people", "71 488 km²", "10,53 people/km²"),
  getRegionData(54, "https://server.ai-biolab.ru/api/csvTub/sverdlov", "sverdlov", "Sverdlovsk region", "Sverdlovsk region sverdlovsk region","Ural Federal District","Yekaterinburg", "4 222 695 people", "194 226 km²", "21,73 people/km²"),
  getRegionData(55, "https://server.ai-biolab.ru/api/csvTub/tumen", "tumen", "Tyumen region", "Tyumen region tyumen region","Ural Federal District","Tyumen", "3 890 800 people", "160 122 km²", "2,66 people/km²"),
  getRegionData(56, "https://server.ai-biolab.ru/api/csvTub/chelyabinsk", "chelyabinsk", "Chelyabinsk region", "Chelyabinsk region chelyabinsk region","Ural Federal District","Chelyabinsk", "3 395 798 people", "88 529 km²", "38,36 people/km²"),
  getRegionData(57, "https://server.ai-biolab.ru/api/csvTub/respaltay", "respaltay", "Altai Republic", "Altai Republic, altai republic","Siberian Federal District","Gorno-Altaysk", "210 765 people", "92 903 km²", "2,27 people/km²"),
  getRegionData(58, "https://server.ai-biolab.ru/api/csvTub/resptyva", "resptyva", "Republic of Tyva", "Republic of Tyva republic of tyva","Siberian Federal District","Kyzyl", "337 544 people", "168 604 km²", "2,0 people/km²"),
  getRegionData(59, "https://server.ai-biolab.ru/api/csvTub/resphakasia", "resphakasia", "Republic of Khakassia", "Republic of Khakassia republic of khakassia","Siberian Federal District","Abakan", "528 175 people", "61 569 km²", "8,58 people/km²"),
  getRegionData(60, "https://server.ai-biolab.ru/api/csvTub/altay", "altay", "Altai Territory" , "Altai Territory altai territory","Siberian Federal District","Barnaul", "2 268 179 people", "167 996 km²", "13,5 people/km²"),
  getRegionData(61, "https://server.ai-biolab.ru/api/csvTub/krasnoyarsk", "krasnoyarsk", "Krasnoyarsk Territory", "Krasnoyarsk Territory krasnoyarsk territory","Siberian Federal District","Krasnoyarsk", "2 846 120 people", "2 366 797  km²", "1,2 people/km²"),
  getRegionData(62, "https://server.ai-biolab.ru/api/csvTub/irkutsk", "irkutsk", "Irkutsk region", "Irkutsk region irkutsk region","Siberian Federal District","Irkutsk", "2 330 537 people", "774 846 km²", "3,01 people/km²"),
  getRegionData(63, "https://server.ai-biolab.ru/api/csvTub/kemerovo", "kemerovo", "Kemerovo region", "Kemerovo region kemerovo region","Siberian Federal District","Kemerovo", "2 547 684 people", "95 725 km²", "26,61 people/km²"),
  getRegionData(64, "https://server.ai-biolab.ru/api/csvTub/novosibirsk", "novosibirsk", "Novosibirsk region", "Novosibirsk region novosibirsk region","Siberian Federal District","Novosibirsk", "2 779 375 people", "177 756 km²", "15,64 people/km²"),
  getRegionData(65, "https://server.ai-biolab.ru/api/csvTub/omsk", "omsk", "Omsk region", "Omsk region omsk region","Siberian Federal District","Omsk", "1 879 548 people", "141 140 km²", "13,32 people/km²"),
  getRegionData(66, "https://server.ai-biolab.ru/api/csvTub/tomsk", "tomsk", "Tomsk region", "Tomsk region tomsk region","Siberian Federal District","Tomsk", "1 043 385 people", "314 391 km²", "3,32 people/km²"),
  getRegionData(67, "https://server.ai-biolab.ru/api/csvTub/buryatia", "buryatia", "Republic of Buryatia", "Republic of Buryatia republic of buryatia","Far Eastern Federal District","Ulan-Ude", "971 922 people", "351 334 km²", "2,73 people/km²"),
  getRegionData(68, "https://server.ai-biolab.ru/api/csvTub/saha", "saha", "Republic of Sakha", "Republic of Sakha republic of sakha","Far Eastern Federal District","Yakutsk", "1 001 664 people", "3 083 523 km²", "0,32 people/km²"),
  getRegionData(69, "https://server.ai-biolab.ru/api/csvTub/zabaikalsky", "zabaikalsky", "Zabaikalsky Krai", "Zabaikalsky Krai zabaikalsky krai","Far Eastern Federal District","Chita", "984 395 people", "168 604 km²", "2,28 people/km²"),
  getRegionData(70, "https://server.ai-biolab.ru/api/csvTub/kamchatsky", "kamchatsky", "Kamchatka Territory", "Kamchatka Territory kamchatka territory","Far Eastern Federal District","Petropavlovsk-Kamchatsky", "288 947 people", "464 300 km²", "0,62 people/km²"),
  getRegionData(71, "https://server.ai-biolab.ru/api/csvTub/primorsk", "primorsk", "Primorsky Krai" , "Primorsky Krai primorsky krai","Far Eastern Federal District","Vladivostok", "1 806 393 people", "164 673 km²", "10,97 people/km²"),
  getRegionData(72, "https://server.ai-biolab.ru/api/csvTub/habarovsk", "habarovsk", "Khabarovsk Territory", "Khabarovsk Territory khabarovsk territory","Far Eastern Federal District","Khabarovsk", "1 278 132 people", "787 633  km²", "1,62 people/km²"),
  getRegionData(73, "https://server.ai-biolab.ru/api/csvTub/amursk", "amursk", "Amur region", "Amur region amur region","Far Eastern Federal District","Blagoveshchensk", "750 083 people", "361 908 km²", "2,20 people/km²"),
  getRegionData(74, "https://server.ai-biolab.ru/api/csvTub/magadan", "magadan", "Magadan region", "Magadan region magadan region","Far Eastern Federal District","Magadan", "133 387 people", "462 464 km²", "0,29 people/km²"),
  getRegionData(75, "https://server.ai-biolab.ru/api/csvTub/sahalin", "sahalin", "Sakhalin Region", "Sakhalin region sakhalin region","Far Eastern Federal District","Yuzhno-Sakhalinsk", "457 590 people", "87 101 km²", "5,25 people/km²"),
  getRegionData(76, "https://server.ai-biolab.ru/api/csvTub/evreiskaya", "evreiskaya", "Jewish Autonomous Region", "Jewish Autonomous Region jewish autonomous Region","Far Eastern Federal District","Birobidzhan", "145 802 people", "36 300 km²", "4,02 people/km²"),
  getRegionData(77, "https://server.ai-biolab.ru/api/csvTub/chukotsk", "chukotsk", "Chukotka Autonomous Okrug", "Chukotka Autonomous Okrug cukotka autonomous okrug","Far Eastern Federal District","Anadyr", "48 029 people", "721 481 km²", "0,07 people/km²"),
  

];

const regionsSoc = [
  
    getRegionData(1, "https://server.ai-biolab.ru/api/csvSocTub/belgorod", "belgorod", "Belgorod region", "Belgorod region belgorod region","Central Federal District","Belgorod", "1,514,500 people", "27,100 km²", "55.31 people/km²"),
  getRegionData(2, "https://server.ai-biolab.ru/api/csvSocTub/bryansk", "bryansk", "Bryansk region", "Bryansk region bryansk region","Central Federal District","Bryansk", "1 168 800 people", "34 900 km²", "32,77 people/km²"),
  getRegionData(3, "https://server.ai-biolab.ru/api/csvSocTub/vladimir", "vladimir", "Vladimir region", "Vladimir region vladimir region","Central Federal District","Vladimir", "1 342 099 people", "29 000 km²", "46,15 people/km²"),
  getRegionData(4, "https://server.ai-biolab.ru/api/csvSocTub/voronezh", "voronezh", "Voronezh region", "Voronezh region voronezh region","Central Federal District","Voronezh", "2 273 417 people", "52 216 km²", "43,54 people/km²"),
  getRegionData(5, "https://server.ai-biolab.ru/api/csvSocTub/ivanovsk", "ivanovsk", "Ivanovo region", "Ivanovo region ivanovo region","Central Federal District","Ivanovo", "905 900 people", "21 437 km²", "42,26 people/km²"),
  getRegionData(6, "https://server.ai-biolab.ru/api/csvSocTub/kaluga", "kaluga", "Kaluga region", "Kaluga region kaluga region","Central Federal District","Kaluga", "1 068 410 people", "29 777 km²", "35,88 people/km²"),
  getRegionData(7, "https://server.ai-biolab.ru/api/csvSocTub/kostroma", "kostroma", "Kostroma region", "Kostroma region kostroma region","Central Federal District","Kostroma", "566 266 people", "60 211 km²", "9,4 people/km²"),
  getRegionData(8, "https://server.ai-biolab.ru/api/csvSocTub/kursk", "kursk", "Kursk region", "Kursk region kursk region","Central Federal District","Kursk", "1 060 892 people", "29 997 km²", "35,37 people/km²"),
  getRegionData(9, "https://server.ai-biolab.ru/api/csvSocTub/lipeck", "lipeck", "Lipetsk region", "Lipetsk region lipetsk region","Central Federal District","Lipetsk", "1 116 265 people", "24 047 km²", "46,42 people/km²"),
  getRegionData(10, "https://server.ai-biolab.ru/api/csvSocTub/moscow", "moscow", "Moscow region", "Moscow region moscow region","Central Federal District","Moscow", "8 651 260 people", "44 329 km²", "195,16 people/km²"),
  getRegionData(11, "https://server.ai-biolab.ru/api/csvSocTub/orel", "orel", "Oryol region", "Oryol region oryol region","Central Federal District","Orel", "724 686 people", "24 700 km²", "29,4 people/km²"),
  getRegionData(12, "https://server.ai-biolab.ru/api/csvSocTub/ryazun", "ryazun", "Ryazan region", "Ryazan region ryazan region","Central Federal District","Ryazan", "1 082 231 people", "44 329 km²", "27,33 people/km²"),
  getRegionData(13, "https://server.ai-biolab.ru/api/csvSocTub/smolensk", "smolensk", "Smolensk region", "Smolensk region smolensk region","Central Federal District","Smolensk", "863 987 people", "49 779 km²", "17,36 people/km²"),
  getRegionData(14, "https://server.ai-biolab.ru/api/csvSocTub/tambov", "tambov", "Tambov region", "Tambov region tambov region","Central Federal District","Tambov", "956 292 people", "34 462 km²", "27,75 people/km²"),
  getRegionData(15, "https://server.ai-biolab.ru/api/csvSocTub/tver", "tver", "Tver region", "Tver region tver region","Central Federal District","Tver", "1 199 747 people", "84 100 km²", "14,25 people/km²"),
  getRegionData(16, "https://server.ai-biolab.ru/api/csvSocTub/tula", "tula", "Tula region", "Tula region tula region","Central Federal District","Tula", "1 471 140 people", "25 679 km²", "57,29 people/km²"),
  getRegionData(17, "https://server.ai-biolab.ru/api/csvSocTub/yaroslavl", "yaroslavl","Yaroslavl region", "Yaroslavl region yaroslavl region","Central Federal District","Yaroslavl", "1 187 558 people", "36 400 km²", "32,83 people/km²"),
  getRegionData(18, "https://server.ai-biolab.ru/api/csvSocTub/kareliya", "kareliya", "Republic of Karelia", "Republic of Karelia republic of karelia","North-Western Federal District","Petrozavodsk", "523 856 people", "172 400 km²", "2,9 people/km²"),
  getRegionData(19, "https://server.ai-biolab.ru/api/csvSocTub/komi", "komi", "Komi Republic", "Komi Republic, komi republic","North-Western Federal District","Syktyvkar", "720 610 people", "415 900 km²", "1,73 people/km²"),
  getRegionData(20, "https://server.ai-biolab.ru/api/csvSocTub/arhangelsk", "arhangelsk", "Arkhangelsk region", "Arkhangelsk region arkhangelsk region","North-Western Federal District","Arkhangelsk", "998 072 people", "587 400 km²", "1,69 people/km²"),
  getRegionData(21, "https://server.ai-biolab.ru/api/csvSocTub/vologda", "vologda", "Vologda region", "Vologda region vologda region","North-Western Federal District","Vologda", "1 121 343 people", "144 527 km²", "8,5 people/km²"),
  getRegionData(22, "https://server.ai-biolab.ru/api/csvSocTub/kaliningrad", "kaliningrad", "Kaliningrad region", "Kaliningrad region kaliningrad region","North-Western Federal District","Kaliningrad", "1 033 914 people", "15 125 km²", "68,36 people/km²"),
  getRegionData(23, "https://server.ai-biolab.ru/api/csvSocTub/leningrad", "leningrad", "Leningrad region", "Leningrad region leningrad region","North-Western Federal District","Gatchina", "2 035 762 people", "83 908 km²", "24,26 people/km²"),
  getRegionData(24, "https://server.ai-biolab.ru/api/csvSocTub/murmansk", "murmansk", "Murmansk region", "Murmansk region murmansk region","North-Western Federal District","Murmansk", "656 438 people", "144 902 km²", "4,53 people/km²"),
  getRegionData(25, "https://server.ai-biolab.ru/api/csvSocTub/novgorod", "novgorod", "Novgorod region", "Novgorod region novgorod region","North-Western Federal District","Veliky Novgorod", "571 447 people", "54 501 km²", "10,49 people/km²"),
  getRegionData(26, "https://server.ai-biolab.ru/api/csvSocTub/pskov", "pskov", "Pskov region", "Pskov region pskov region","North-Western Federal District","Pskov", "581 147 people", "55 399 km²", "10,49 people/km²"),
  getRegionData(27, "https://server.ai-biolab.ru/api/csvSocTub/adygea", "adygea", "Republic of Adygea", "Republic of Adygea republic of adygea","Southern Federal District","Maykop", "500 591 people", "7 792 km²", "64,24 people/km²"),
  getRegionData(28, "https://server.ai-biolab.ru/api/csvSocTub/kalmykia", "kalmykia", "Republic of Kalmykia", "Republic of Kalmykia republic of kKalmykia","Southern Federal District","Elista", "266 770 people", "74 731 km²", "5,57 people/km²"),
  getRegionData(29, "https://server.ai-biolab.ru/api/csvSocTub/krasnodar", "krasnodar", "Krasnodar Territory", "Krasnodar Territory kKrasnodar territory","Southern Federal District","Krasnodar", "5 833 002 people", "76 005 km²", "77,27 people/km²"),
  getRegionData(30, "https://server.ai-biolab.ru/api/csvSocTub/volgograd", "volgograd", "Volgograd region", "Volgograd region volgograd region","Southern Federal District","Volgograd", "2 453 898 people", "113 900 km²", "21,74 people/km²"),
  getRegionData(31, "https://server.ai-biolab.ru/api/csvSocTub/rostov", "rostov", "Rostov region", "Rostov region Rostov region","Southern Federal District","Rostov", "4 152 518 people", "100 967 km²", "41,13 people/km²"),
  getRegionData(32, "https://server.ai-biolab.ru/api/csvSocTub/dagestan", "dagestan", "Republic of Dagestan", "Republic of Dagestan republic of dagestan","Southern Federal District","Makhachkala", "3 232 224 people", "50 270 km²", "64,3 people/km²"),
  getRegionData(33, "https://server.ai-biolab.ru/api/csvSocTub/ingushetia", "ingushetia", "Republic of Ingushetia", "Republic of Ingushetia republic of ingushetia","Southern Federal District","Magas", "509 541 people", "3 685 km²", "147,7 people/km²"),
  getRegionData(34, "https://server.ai-biolab.ru/api/csvSocTub/kabarbalkar", "kabarbalkar", "Kabardino-Balkarian Republic", "Kabardino-Balkarian Republic kabardino-balkarian republic","Southern Federal District","Nalchik", "905 464 people", "76 005 km²", "72,61 people/km²"),
  getRegionData(35, "https://server.ai-biolab.ru/api/csvSocTub/karcherk", "karcherk","Karachay-Cherkess Republic", "Karachay-Cherkess Republic of karachay-cherkess republic","Southern Federal District","Cherkessk", "468 322 people", "14 100 km²", "32,8 people/km²"),
  getRegionData(36, "https://server.ai-biolab.ru/api/csvSocTub/sevosetiaalania", "sevosetiaalania", "Republic of North Ossetia-Alania", "Republic of North Ossetia-Alania republic of north ossetia-alania","North Caucasus Federal District","Vladikavkaz", "678 879 people", "8 000 km²", "85,00 people/km²"),
  getRegionData(37, "https://server.ai-biolab.ru/api/csvSocTub/chechnya", "chechnya","Chechen Republic", "Chechen Republic cechen republic","North Caucasus Federal District","Grozny", "1 552 866 people", "16 171 km²", "96,03 people/km²"),
  getRegionData(38, "https://server.ai-biolab.ru/api/csvSocTub/stavrapol", "stavrapol", "Stavropol Territory", "Stavropol Territory stavropol territory","North Caucasian Federal District","Stavropol", "2 886 108 people", "66 160 km²", "43,62 people/km²"),
  getRegionData(39, "https://server.ai-biolab.ru/api/csvSocTub/bashkortostan", "bashkortostan", "Republic of Bashkortostan", "Republic of Bashkortostan republic of bashkortostan","Volga Federal District","Ufa", "4 064 361 people", "142 947 km²", "28,4 people/km²"),
  getRegionData(40, "https://server.ai-biolab.ru/api/csvSocTub/maryal", "maryal", "Republic of Mari El", "Republic of Mari El republic of mari el","Volga Federal District","Yoshkar-Ola", "696 459 people", "23 375 km²", "29,5 people/km²"),
  getRegionData(41, "https://server.ai-biolab.ru/api/csvSocTub/mordovia", "mordovia","Republic of Mordovia","Republic of Mordovia republic of mordovia", "Volga Federal District", "Saransk", "765 891  people", "26 128 km²", "29,31 people/km²"),
  getRegionData(42, "https://server.ai-biolab.ru/api/csvSocTub/tatarstan", "tatarstan", "Republic of Tatarstan","Republic of Tatarstan republic of tatarstan", "Volga Federal District", "Kazan", "4 003 016 people", "67 847 km²", "56,57 people/km²"),
  getRegionData(43, "https://server.ai-biolab.ru/api/csvSocTub/udmurtia", "udmurtia", "Udmurt Republic", "Udmurt Republic udmurt republic","Volga Federal District","Izhevsk", "1 434 557  people", "42 061 km²", "34,11 people/km²"),
  getRegionData(44, "https://server.ai-biolab.ru/api/csvSocTub/chuvashia", "chuvashia", "Chuvash Republic", "Chuvash Republic chuvash republic","Volga Federal District","Cheboksary", "1 167 061 people", "18 343 km²", "63,62 people/km²"),
  getRegionData(45, "https://server.ai-biolab.ru/api/csvSocTub/perm", "perm", "Perm Krai", "Perm Krai perm krai","Volga Federal District","Perm", "2 495 266 people", "160 236 km²", "15,57 people/km²"),
  getRegionData(46, "https://server.ai-biolab.ru/api/csvSocTub/kirov", "kirov", "Kirov region", "Kirov region kirov region","North Caucasus Federal District","Kirov", "1 129 935 people", "120 400 km²", "9,39 people/km²"),
  getRegionData(47, "https://server.ai-biolab.ru/api/csvSocTub/nizhniynovgorod", "nizhniynovgorod", "Nizhny Novgorod region", "Nizhny Novgorod region nizhny novgorod region","North Caucasus Federal District","Nizhny Novgorod", "3 060 335 people", "76 624 km²", "39,94 people/km²"),
  getRegionData(48, "https://server.ai-biolab.ru/api/csvSocTub/orenburg", "orenburg", "Orenburg region", "Orenburg region oenburg region","North Caucasus Federal District","Orenburg", "1 828 656 people", "123 702 km²", "14,78 people/km²"),
  getRegionData(49, "https://server.ai-biolab.ru/api/csvSocTub/penza", "penza", "Penza region", "Penza region penza region","Volga Federal District","Penza", "1 236 113 people", "43 352 km²", "28,51 people/km²"),
  getRegionData(50, "https://server.ai-biolab.ru/api/csvSocTub/samara", "samara", "Samara region", "Samara region samara region","Volga Federal District","Samara", "3 127 842 people", "53 565 km²", "58,39 people/km²"),
  getRegionData(51, "https://server.ai-biolab.ru/api/csvSocTub/saratov", "saratov", "Saratov region", "Saratov region saratov region","Volga Federal District","Saratov", "2 385 163  people", "101 240 km²", "23,56 people/km²"),
  getRegionData(52, "https://server.ai-biolab.ru/api/csvSocTub/ulyanovsk", "ulyanovsk", "Ulyanovsk region", "Ulyanovsk region ulyanovsk region","Volga Federal District","Ulyanovsk", "1 172 782 people", "37 181 km²", "31,54 people/km²"),
  getRegionData(53, "https://server.ai-biolab.ru/api/csvSocTub/kurgan", "kurgan", "Kurgan region", "Kurgan region kurgan region","Ural Federal District","Kurgan", "753 002  people", "71 488 km²", "10,53 people/km²"),
  getRegionData(54, "https://server.ai-biolab.ru/api/csvSocTub/sverdlov", "sverdlov", "Sverdlovsk region", "Sverdlovsk region sverdlovsk region","Ural Federal District","Yekaterinburg", "4 222 695 people", "194 226 km²", "21,73 people/km²"),
  getRegionData(55, "https://server.ai-biolab.ru/api/csvSocTub/tumen", "tumen", "Tyumen region", "Tyumen region tyumen region","Ural Federal District","Tyumen", "3 890 800 people", "160 122 km²", "2,66 people/km²"),
  getRegionData(56, "https://server.ai-biolab.ru/api/csvSocTub/chelyabinsk", "chelyabinsk", "Chelyabinsk region", "Chelyabinsk region chelyabinsk region","Ural Federal District","Chelyabinsk", "3 395 798 people", "88 529 km²", "38,36 people/km²"),
  getRegionData(57, "https://server.ai-biolab.ru/api/csvSocTub/respaltay", "respaltay", "Altai Republic", "Altai Republic, altai republic","Siberian Federal District","Gorno-Altaysk", "210 765 people", "92 903 km²", "2,27 people/km²"),
  getRegionData(58, "https://server.ai-biolab.ru/api/csvSocTub/resptyva", "resptyva", "Republic of Tyva", "Republic of Tyva republic of tyva","Siberian Federal District","Kyzyl", "337 544 people", "168 604 km²", "2,0 people/km²"),
  getRegionData(59, "https://server.ai-biolab.ru/api/csvSocTub/resphakasia", "resphakasia", "Republic of Khakassia", "Republic of Khakassia republic of khakassia","Siberian Federal District","Abakan", "528 175 people", "61 569 km²", "8,58 people/km²"),
  getRegionData(60, "https://server.ai-biolab.ru/api/csvSocTub/altay", "altay", "Altai Territory" , "Altai Territory altai territory","Siberian Federal District","Barnaul", "2 268 179 people", "167 996 km²", "13,5 people/km²"),
  getRegionData(61, "https://server.ai-biolab.ru/api/csvSocTub/krasnoyarsk", "krasnoyarsk", "Krasnoyarsk Territory", "Krasnoyarsk Territory krasnoyarsk territory","Siberian Federal District","Krasnoyarsk", "2 846 120 people", "2 366 797  km²", "1,2 people/km²"),
  getRegionData(62, "https://server.ai-biolab.ru/api/csvSocTub/irkutsk", "irkutsk", "Irkutsk region", "Irkutsk region irkutsk region","Siberian Federal District","Irkutsk", "2 330 537 people", "774 846 km²", "3,01 people/km²"),
  getRegionData(63, "https://server.ai-biolab.ru/api/csvSocTub/kemerovo", "kemerovo", "Kemerovo region", "Kemerovo region kemerovo region","Siberian Federal District","Kemerovo", "2 547 684 people", "95 725 km²", "26,61 people/km²"),
  getRegionData(64, "https://server.ai-biolab.ru/api/csvSocTub/novosibirsk", "novosibirsk", "Novosibirsk region", "Novosibirsk region novosibirsk region","Siberian Federal District","Novosibirsk", "2 779 375 people", "177 756 km²", "15,64 people/km²"),
  getRegionData(65, "https://server.ai-biolab.ru/api/csvSocTub/omsk", "omsk", "Omsk region", "Omsk region omsk region","Siberian Federal District","Omsk", "1 879 548 people", "141 140 km²", "13,32 people/km²"),
  getRegionData(66, "https://server.ai-biolab.ru/api/csvSocTub/tomsk", "tomsk", "Tomsk region", "Tomsk region tomsk region","Siberian Federal District","Tomsk", "1 043 385 people", "314 391 km²", "3,32 people/km²"),
  getRegionData(67, "https://server.ai-biolab.ru/api/csvSocTub/buryatia", "buryatia", "Republic of Buryatia", "Republic of Buryatia republic of buryatia","Far Eastern Federal District","Ulan-Ude", "971 922 people", "351 334 km²", "2,73 people/km²"),
  getRegionData(68, "https://server.ai-biolab.ru/api/csvSocTub/saha", "saha", "Republic of Sakha", "Republic of Sakha republic of sakha","Far Eastern Federal District","Yakutsk", "1 001 664 people", "3 083 523 km²", "0,32 people/km²"),
  getRegionData(69, "https://server.ai-biolab.ru/api/csvSocTub/zabaikalsky", "zabaikalsky", "Zabaikalsky Krai", "Zabaikalsky Krai zabaikalsky krai","Far Eastern Federal District","Chita", "984 395 people", "168 604 km²", "2,28 people/km²"),
  getRegionData(70, "https://server.ai-biolab.ru/api/csvSocTub/kamchatsky", "kamchatsky", "Kamchatka Territory", "Kamchatka Territory kamchatka territory","Far Eastern Federal District","Petropavlovsk-Kamchatsky", "288 947 people", "464 300 km²", "0,62 people/km²"),
  getRegionData(71, "https://server.ai-biolab.ru/api/csvSocTub/primorsk", "primorsk", "Primorsky Krai" , "Primorsky Krai primorsky krai","Far Eastern Federal District","Vladivostok", "1 806 393 people", "164 673 km²", "10,97 people/km²"),
  getRegionData(72, "https://server.ai-biolab.ru/api/csvSocTub/habarovsk", "habarovsk", "Khabarovsk Territory", "Khabarovsk Territory khabarovsk territory","Far Eastern Federal District","Khabarovsk", "1 278 132 people", "787 633  km²", "1,62 people/km²"),
  getRegionData(73, "https://server.ai-biolab.ru/api/csvSocTub/amursk", "amursk", "Amur region", "Amur region amur region","Far Eastern Federal District","Blagoveshchensk", "750 083 people", "361 908 km²", "2,20 people/km²"),
  getRegionData(74, "https://server.ai-biolab.ru/api/csvSocTub/magadan", "magadan", "Magadan region", "Magadan region magadan region","Far Eastern Federal District","Magadan", "133 387 people", "462 464 km²", "0,29 people/km²"),
  getRegionData(75, "https://server.ai-biolab.ru/api/csvSocTub/sahalin", "sahalin", "Sakhalin Region", "Sakhalin region sakhalin region","Far Eastern Federal District","Yuzhno-Sakhalinsk", "457 590 people", "87 101 km²", "5,25 people/km²"),
  getRegionData(76, "https://server.ai-biolab.ru/api/csvSocTub/evreiskaya", "evreiskaya", "Jewish Autonomous Region", "Jewish Autonomous Region jewish autonomous Region","Far Eastern Federal District","Birobidzhan", "145 802 people", "36 300 km²", "4,02 people/km²"),
  getRegionData(77, "https://server.ai-biolab.ru/api/csvSocTub/chukotsk", "chukotsk", "Chukotka Autonomous Okrug", "Chukotka Autonomous Okrug cukotka autonomous okrug","Far Eastern Federal District","Anadyr", "48 029 people", "721 481 km²", "0,07 people/km²"),

//getRegionData(11, "http://localhost:4000/api/csvSocTub/lipeck", "lipeck", "Липецкая область", "Липецкая область липецкая область","Центральный федеральный округ","Липецк", "1 116 265 ч.", "24 047 км²", "46,42 чел./км²"),
];

const variants = {
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
    },
  }),
  hidden: {
    opacity: 0,
    y: 30,
  },
};



export function Tub_En() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';
  const [noResults, setNoResults] = useState(false);
  const [showAllRegions, setShowAllRegions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    setSearchParams({ post: query });
  };

  const filteredRegions = regions.filter(region => region.title2.includes(postQuery));
  const filteredRegionsSoc = regionsSoc.filter(region => region.title2.includes(postQuery));

  React.useEffect(() => {
    setNoResults(filteredRegions.length === 0 && filteredRegionsSoc.length === 0);
  }, [filteredRegions, filteredRegionsSoc]);

  return (
    <>
      <NaviBarv2_En />
      <Container className="my-3" style={{ height: "120%", width: "100%" }}>
        <Container>
          <motion.h3
            initial="hidden"
            custom={1}
            variants={variants}
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            className="my-3 text-secondary"
          >
            <div>
              <h4 className="mx-5 text-secondary">Tuberculosis</h4>
            </div>
            <hr />
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
              <input type="search" name="search" />
              <input type="submit" value="Search" />
            </form>
          </motion.h3>
        </Container>
        <Button className="my-2 all-region" onClick={() => setShowAllRegions(!showAllRegions)}>
        {showAllRegions ? "Hide Regions" : "Show all regions"}
      </Button>
        {noResults && (
          <div className="text-center text-danger my-3">
            The region was not found according to your request
          </div>
        )}
              
        <Tab.Container id="left-tabs-example" defaultActiveKey={filteredRegions.length > 0 ? filteredRegions[0].eventKey : ""}>
          <div className="horizontal-scroll">
            <Nav variant="pills" defaultActiveKey="/home" className="d-flex">
              {showAllRegions ?
                filteredRegions.map((region, index) => (
                  <Nav.Item key={region.id} className="region-button">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Popover>
                          <Popover.Body>
                            <div>{region.district}</div>
                            <div>The administrative center is a city {region.center}</div>
                            <div>Population: {region.population}</div>
                            <div>Square: {region.area}</div>
                            <div>Density: {region.density}</div>
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <motion.div
                        initial="hidden"
                        custom={index + 1}
                        variants={variants}
                        whileInView="visible"
                        viewport={{ amount: 0.1, once: true }}
                      >
                        <Button
                          className="shadow3"
                          size="sm"
                          variant="outline-info"
                          style={{ color: "#FFFFFF" }}
                        >
                          <Nav.Link eventKey={region.eventKey}>
                            {region.title}
                          </Nav.Link>
                        </Button>
                      </motion.div>
                    </OverlayTrigger>
                  </Nav.Item>
                )) :
                <Nav.Item key={filteredRegions[0].id} className="region-button">
                  {/* Отображаем только первый регион */}
                </Nav.Item>
              }
            </Nav>
          </div>
          <Tab.Content>
            {filteredRegions.map(region => (
              <StaticTubData_En key={region.id} region={region} />
            ))}
            {filteredRegionsSoc.map(region => (
              <StaticTubDataSoc_En key={region.id} region={region} />
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
      <Footer_En />
    </>
  );
}