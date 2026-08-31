export interface HeritageSite {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageSrc: string;
  location: string;
  established: string;
  features: string[];
}

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: '1',
    title: 'Hundred Islands National Park',
    description: 'A protected area located in Alaminos, Pangasinan. The islands, totaling 124 at low tide and 123 at high tide, are scattered in Lingayen Gulf.',
    fullDescription: 'The Hundred Islands National Park is the first national park and a protected area located in Alaminos, Pangasinan in the northern Philippines. The islands, totaling 124 at low tide and 123 at high tide, are scattered in Lingayen Gulf covering an area of 16.76 square kilometers. They are believed to be about two million years old and are actually ancient corals that extend inland. Only three of them have been developed for tourism: Governor Island, Quezon Island, and Children\'s Island.',
    imageSrc: '/Alaminos.jpg',
    location: 'Alaminos City, Pangasinan',
    established: '1940',
    features: ['Island Hopping', 'Snorkeling', 'Kayaking', 'Ziplining']
  },
  {
    id: '2',
    title: 'Cape Bolinao Lighthouse',
    description: 'One of the five major lighthouses in the Philippines and is the second highest next to Cape Bojeador Lighthouse in Ilocos Norte.',
    fullDescription: 'Cape Bolinao Lighthouse is a historic lighthouse located in Bolinao, Pangasinan. Built in 1905 by American, British, and Filipino engineers, it stands atop Punta Piedra Point, offering a panoramic view of the West Philippine Sea. It is one of the five major lighthouses constructed in the Philippines during the American colonial period and remains a vital navigational aid for vessels cruising the western coast of Luzon.',
    imageSrc: '/Bolinao.jpg',
    location: 'Bolinao, Pangasinan',
    established: '1905',
    features: ['Panoramic Views', 'Historical Architecture', 'Sunset Viewing']
  },
  {
    id: '3',
    title: 'Balungao Hot Spring',
    description: 'A hot spring located in Mt. Balungao, offering various outdoor and therapeutic activities.',
    fullDescription: 'Balungao Hot Spring is a popular tourist destination located at the base of Mount Balungao in Pangasinan. Known for its therapeutic geothermal hot springs, the resort also offers a wide array of outdoor adventure activities including one of the longest ziplines in the country, ATV rides, bungee trampolines, and hiking trails leading up the mountain.',
    imageSrc: '/Balungao.jpg',
    location: 'Balungao, Pangasinan',
    established: 'Natural Landmark',
    features: ['Hot Springs', 'Zipline', 'ATV Rides', 'Hiking']
  }
];
