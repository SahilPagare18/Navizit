import ShowTourist from "./ShortTourist"
import NavTourist from "./NavTourist"
import AllFooter from "../HomePage/Footer/AllFooter"
import { useEffect } from "react";
import MainTourist from "./MainTourist"
export default function AllTourist() {
    

    return (
        <>
            
            <div>
                <NavTourist/>

                <ShowTourist 
                 heading="GATEWAY OF INDIA"
                 

                 location="Location: Apollo Bandar, Colaba, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/gateway-of-india.jpg"

                 para=" Explore Mumbai's iconic GATEWAY OF INDIA, an architectural marvel that symbolizes the city's rich history. With its intricate design and stunning seafront location, it's the perfect blend of past and present, offering captivating photo opportunities and a vibrant atmosphere."

                 link="https://www.google.com/maps/place/Gateway+Of+India+Mumbai/@18.9219892,72.8320794,17z/data=!4m6!3m5!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!8m2!3d18.9219841!4d72.8346543!16zL20vMDJoN3Iy?entry=ttu"
                 
                 website=""

                 category="Historical and Heritage sites"

                 webname="Gateway Of India"

                

                 />
                 <ShowTourist 
                 heading="ELEPHANTA CAVES"

                 location="Location: Gharapuri, Maharashtra"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/elephanta.png"

                 para="A short ferry ride from Mumbai, the Elephanta Caves on Elephanta Island showcase 5th-century rock-cut sculptures dedicated to Lord Shiva. Discover intricately carved caves and mythological depictions that highlight India’s ancient art and spirituality."

                 link="https://www.google.com/maps/place/Elephanta+Caves/@18.9643922,72.9171719,14.84z/data=!4m6!3m5!1s0x3be7c5307da3602f:0xf4ab181b1aaef53f!8m2!3d18.9633474!4d72.9314864!16zL20vMDIwcmI1?entry=ttu"
                 
                 website="https://elephanta.co.in/"

                 webname="Elephanta Caves"

                 category="Historical and heritage sites"


                 />

                 <ShowTourist 
                 heading="SIDDHIVINAYAK TEMPLE"
                 
                 location="Location: SK Bole Rd, Prabhadevi, Mumbai"

                 category="Category:Religious site"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/SIDDHIVINAYAK%20TEMPLE.jpg"

                 para="Find solace and seek blessings at Siddhivinayak Temple, where spirituality meets serenity. This sacred site houses a unique black stone idol of Lord Ganesha, believed to grant wishes and bring peace to its devotees."

                 link="https://www.google.com/maps/place/Shree+Siddhivinayak+Temple/@19.01699,72.8303997,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cec0d851ebc3:0xcc61876914526329!8m2!3d19.01699!4d72.8303997!16zL20vMDlxeGc1?entry=ttu"
                 
                 website="https://www.siddhivinayak.org/"

                 webname="Siddhivinayak Temple"

                 />

                 <ShowTourist 
                 heading="BANDRA WORLI SEA LINK"

                 location="Location: Bandra Worli Sea Link, Mount Mary, Bandra West, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/Bandra-Worli-Sea-Link.webp"

                 para="Embark on a mesmerizing journey across the Bandra-Worli Sea Link, an engineering marvel that seamlessly connects Mumbai's suburbs. As you traverse this cable-stayed bridge, prepare to be captivated by the awe-inspiring views of the Arabian Sea and the city's glittering skyline."

                 link="https://www.google.com/maps/place/Bandra+-+Worli+Sea+Link,+Mount+Mary,+Bandra+West,+Mumbai,+Maharashtra/@19.0425459,72.8205325,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ceb3b002576f:0xf51617363a2f6536!8m2!3d19.0425408!4d72.8231074!16s%2Fg%2F11cfmj34c?entry=ttu"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="MARINE DRIVE"

                 location="Location: The Netaji Subhash Chandra Bose Road"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/marine-drive.avif"

                 para="Mumbai's Marine Drive is an iconic seafront promenade, known for its distinctive crescent shape and glittering cityscape views. Often called the Queen's Necklace when lit up at night, it's a beloved spot for leisurely walks and enjoying breathtaking sunsets."

                 link="https://www.google.com/maps/place/Marine+Dr,+Mumbai/@18.9432161,72.8181274,17z/data=!3m1!4b1!4m10!1m2!2m1!1s+the+Netaji+Subhash+Chandra+Bose+Road+in+Mumbai,+India!3m6!1s0x3be7d1e25ee8439d:0x5acd924f2726ad2b!8m2!3d18.9432111!4d72.8229983!15sCjV0aGUgTmV0YWppIFN1Ymhhc2ggQ2hhbmRyYSBCb3NlIFJvYWQgaW4gTXVtYmFpLCBJbmRpYZIBBXRyYWls4AEA!16zL20vMDM1Nnls?entry=ttu"
                 
                 website=""

                 webname=""

                 
                 />

                <ShowTourist 
                 heading="BANDRA BANDSTAND"

                 location="Location: Bandstand Promenade Bandra West, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/bandra-bandstand-mumbai-indian-tourism-one-day-city-tour.jpg"

                 para=" Experience the romance of Mumbai at Bandra Bandstand, a picturesque seaside promenade that overlooks the Arabian Sea. As you take in the breathtaking views, you'll also feel the enchanting charm of Bollywood, making it a perfect spot for leisurely strolls and beautiful sunsets."

                 link="https://www.google.com/maps/place/Bandstand+Promenade,+Bandra+West,+Mumbai,+400050/@19.0516755,72.8195135,18.2z/data=!4m6!3m5!1s0x3be7c94404368f7b:0xc4c0b741715907db!8m2!3d19.050516!4d72.8213832!16zL20vMDd4dGpj?entry=ttu"
                 
                 website=""

                 webname=""

                 />
                  <ShowTourist 
                 heading="CHHATRAPATI SHIVAJI MAHARAJ VASTU SANGHRALAYA"

                 location="Location: 159-161, Mahatma Gandhi Road, Kala Ghoda, Fort, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/CHHATRAPATI%20SHIVAJI%20MAHARAJ%20VASTU%20SANGHRALAYA.jpg"

                 para="Formerly known as the Prince of Wales Museum, this Mumbai institution is a treasure trove of art and history. Its impressive collection includes sculptures, decorative arts, and artifacts from India and beyond. "

                 link="https://www.google.com/maps/place/Chhatrapati+Shivaji+Maharaj+Vastu+Sangrahalaya/@18.9266744,72.8319741,19z/data=!4m15!1m8!3m7!1s0x3be7d1c3e95e82e7:0x4def27e4efa8253e!2s159-161,+Mahatma+Gandhi+Road,+Kala+Ghoda,+Fort,+Mumbai,+Maharashtra+400023!3b1!8m2!3d18.9266522!4d72.832459!16s%2Fg%2F11c45z791p!3m5!1s0x3be7d1c3eaf8b127:0x44e72610553e9253!8m2!3d18.9269015!4d72.8326916!16zL20vMDIweHFq?entry=ttu"

                 category="Historical and heritage sites"
                 
                 website="https://csmvs.in/"

                 webname="Chhatrapati Shivaji Maharaj Vastu Sanghralaya"

                 />

                  <ShowTourist 
                 heading="NEHRU PLANETARIUM"

                 location="Location: Nehru Centre, Dr Annie Besant Rd, Lotus Colony, Worli"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/NEHRU%20PLANETARIUM.jpg"

                 para="Explore the wonders of the cosmos at the Nehru Planetarium in Mumbai. This interactive space science center offers captivating astronomy shows, celestial observations, and educational programs. "

                 link="https://www.google.com/maps/place/Nehru+planetarium/@18.9888888,72.8123317,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd3665787c4ee6d:0xcba9fe91bf3fc50c!8m2!3d18.9888837!4d72.8149066!16s%2Fg%2F1vhq256k?entry=ttu"
                 
                 website="https://www.nehrucentremumbai.in/"

                 webname="Nehru Planeterium"

                  
                 />
                  <ShowTourist 
                 heading="NEHRU CENTRE"

                 location="Location: Nehru Centre, Dr Annie Besant Rd, Lotus Colony, Worli"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/NEHRU%20CENTRE.jpg"

                 para="The Nehru Center in Mumbai is a cultural hub dedicated to promoting art, science, and culture. Named after India's first Prime Minister, Jawaharlal Nehru, it hosts art exhibitions, cultural performances, educational events, and lectures.  "

                 link="https://www.google.com/maps/place/Nehru+Centre+Auditorium+Worli/@18.9888327,72.8124801,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf229516299f:0x6367e9a70eb0032a!8m2!3d18.9888276!4d72.815055!16s%2Fg%2F11t5y7mlq1?entry=ttu"
                 
                 website="https://www.nehrucentremumbai.in/"

                 webname="Nehru Centre"

                 />
                  <ShowTourist 
                 heading="TARAPOREVALA AQUARIUM"

                 location="Location: Netaji Subhash Chandra Bose Road, Marine Drive, near Charni Road "

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/TARAPOREVALA%20AQUARIUMjpg.jpg"

                 para=" Dive into the wonders of marine life at Mumbai's Taraporewala Aquarium. Home to a diverse collection of aquatic species, including colorful fish, sharks, and turtles, this aquarium offers an educational and visually captivating experience."

                 link="https://www.google.com/maps/place/Taraporevala+Aquarium/@18.9492639,72.8174553,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce1bbc806f01:0x2ec42768fb318cb7!8m2!3d18.9492588!4d72.8200302!16s%2Fm%2F02qr9m4?entry=ttu"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="DR.BHAU DAJI LAD MUSEUM"

                 location="Location: Dr Baba Saheb Ambedkar Rd, Byculla East, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/DR.BHAU%20DAJI%20LAD%20MUSEUM.jpg"

                 para=" Discover Mumbai's heritage at this museum, housed in a beautifully restored 19th-century building. Explore a fascinating collection of art, artifacts, and exhibits that highlight the city's history and culture. "

                 link="https://www.google.com/maps/place/Dr.+Bhau+Daji+Lad+Museum/@18.978994,72.8322404,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce5b428e70af:0x79efde6c140c2e05!8m2!3d18.9789889!4d72.8348153!16s%2Fm%2F06w4mwg?entry=ttu"
                 
                 website="https://www.bdlmuseum.org/"

                 webname="DR. Bhau Daji Lad Museum"

                 />
                 
                 <ShowTourist 
                 heading="MANI BHAVAN"

                 location="Location: Mani Bhavan, 19, Laburnum Rd, Babulnath, Gamdevi, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/mani-bhavan.jpg"

                 para="Immerse yourself in history at Mani Bhavan, once Mahatma Gandhi's residence and now a captivating museum. Walk in the footsteps of the Mahatma and explore the exhibits and photographs that offer profound insights into his life and the Indian freedom struggle."

                 link="https://www.google.com/maps/place/Mani+Bhavan+Gandhi+Sangrahalaya/@18.9597717,72.8089949,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce0c69115555:0xc0b175f791f839fd!8m2!3d18.9597666!4d72.8115698!16zL20vMGI4M3Qx?entry=ttuu"
                 
                 category="Historical and heritage sites"
                 
                 website="https://www.gandhi-manibhavan.org/"

                 webname="Mani Bhavan"

                 />
                 
                 <ShowTourist 
                 heading="RANI BAUG"

                 location="Location: Railway Station, 91A, Lalbaug Flyover, near Byculla, Byculla East, Byculla, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/RANI%20BAUG.jpg"

                 para=" Step into tranquility at Rani Baug, often called Victoria Gardens, nestled in the heart of bustling Mumbai. Dating back to the 1860s, this historic botanical garden is a haven of greenery and peace. "

                 link="https://www.google.com/maps/place/Veermata+Jijabai+Bhosale+Udyan+And+Zoo/@18.9787151,72.8325462,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce36ee34d0a1:0x623099a68d41b780!8m2!3d18.97871!4d72.8351211!16zL20vMDIwcjk0?entry=ttu"
                 
                 website="https://www.piramalaranya.com/rani-baug-byculla/"

                 webname="Rani Baug"

                 />

                 <ShowTourist 
                 heading="BOOT HOUSE"

                 location="Location: Ridge Rd, Simla Nagar, Malabar Hill, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/BOOT%20HOUSE.webp"

                 para=" The Boot House, located in Mumbai, is a unique architectural marvel shaped like a giant boot. Originally built as a tribute to a British officer's love for his wife, it now houses a shoe store."

                 link="https://www.google.com/maps/place/Hanging+Gardens/@18.956537,72.8049527,17z/data=!4m15!1m8!3m7!1s0x3be7ce09e53e749f:0x94a70633cf948b9a!2sHanging+Gardens!8m2!3d18.9565598!4d72.8049866!10e5!16zL20vMDIwcDlw!3m5!1s0x3be7ce09e53e749f:0x94a70633cf948b9a!8m2!3d18.9565598!4d72.8049866!16zL20vMDIwcDlw?entry=ttu"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="FILM CITY"

                 location="Location: Film City Rd, Film City Complex, Aarey Colony, Goregaon, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/FILM%20CITY.avif"

                 para="Explore the heart of India's film industry at Mumbai's Film City. This sprawling studio complex is where Bollywood magic comes to life. Guided tours offer a glimpse behind the scenes, where you might spot film sets, stars, and crew at work. "

                 link="https://www.google.com/maps/place/Dadasaheb+Phalke+Chitranagari/@19.1607967,72.8850306,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b78e073c60f3:0x5902e0f75253a72b!8m2!3d19.1607917!4d72.8876055!16s%2Fm%2F04n489p?entry=ttu"
                 
                 website="https://www.filmcitymumbai.org/"

                 webname="Film City"

                 />

                 <ShowTourist 
                 heading="CHOWPATTY VIEW DECK"

                 location="Location: Chowpatty, Girgaon, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/CHOWPATTY%20VIEW%20DECK.jpeg"

                 para=" Experience breathtaking views of Mumbai's Girgaum Chowpatty beach from the Chowpatty View Deck. This elevated vantage point offers a captivating perspective of the Arabian Sea and the lively shoreline. "

                 link="https://www.google.com/maps/place/Girgaon+Chowpatty+Viewing+Deck/@18.9548232,72.8055365,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf22fb44ca23:0xd9de59061eebb2a6!8m2!3d18.9548181!4d72.8081114!16s%2Fg%2F11sxwth1l6?entry=ttu"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="MAHALAXMI RACE TRACK"

                 location="Location: Keshavrao Khadye Marg, Royal Western India Turf Club, Mahalakshmi, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/MAHALAXMI%20RACE%20TRACK.jpg"

                 para=" Experience the excitement of horse racing in Mumbai at the prestigious Mahalaxmi Race Course. Set against lush green surroundings, it offers thrilling equestrian action and a vibrant social atmosphere."

                 link="https://www.google.com/maps/place/Mahalakshmi+Race+Course/@18.984214,72.8175004,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce63d14b3d83:0xb6ce08c6304dcc32!8m2!3d18.9842089!4d72.8200753!16zL20vMDVmNzNt?entry=ttu"
                 
                 website="https://www.piramalmahalaxmi.com/mahalaxmi-racecourse/"

                 webname="Mahalaxmi Race Course"

                 />

                 {/* entering my data from here */}

                 {/* Religious and cultural sites */}

                 <ShowTourist 
                 heading="Mumba Devi Temple"

                 location="Location:Mumba Devi Mandir, Zaveri Bazaar, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/mumba%20devi%20mandir.jpg"

                 para="The Mumba Devi Temple, located in Zaveri Bazaar, Mumbai, is dedicated to Goddess Mumba, the city's patron deity. It is one of the oldest temples in Mumbai, known for its intricate architecture and religious significance to the city's residents."

                 link="https://www.google.com/maps/place/Shri+Mumbadevi+Temple,+Mumbai/@18.9519401,72.8281687,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cfecc763321b:0x9853129a582225b2!8m2!3d18.9519401!4d72.8307436!16zL20vMDN3aGpk?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname="Mumba Devi Temple"

                 />

                 <ShowTourist 
                 heading="Mahalakshmi Temple"

                 location="Location:Bhulabhai Desai Marg, Mahalaxmi West,Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/mahalaxmitemple.jpg"

                 para="The Mahalakshmi Temple, located in Mahalakshmi, Mumbai, is dedicated to Goddess Mahalakshmi, the goddess of wealth, fortune, and prosperity. It is one of the most prominent temples in Mumbai, known for its stunning architecture and religious significance to the city's residents."

                 link="https://www.google.com/maps/place/Shri+Mahalakshmi+Devi+Temple,+Mumbai/@18.9773405,72.8065601,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce6ce5383ed1:0xe20c7a512463dd62!8m2!3d18.9773405!4d72.8065601!16zL20vMDQyeTRi?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="ISKCON TEMPLE"

                 location="Location:Hare Krishna Land, Sri Mukteshwar Devalaya Rd,Juhu, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/ISKCON%20TEMPLE(JUHU).jpg"

                 para="The ISKCON Temple, located in Juhu, Mumbai, is dedicated to Lord Krishna and is a major spiritual center. It is one of the most famous temples in Mumbai, known for its vibrant atmosphere, beautiful architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/ISKCON+Temple,+Juhu,+Mumbai/@19.113016,72.8240011,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9e83c34362f:0x6d7c69d4f830e48!8m2!3d19.113016!4d72.826576!16s%2Fg%2F1td08dd5?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Babulnath temple"

                 location="Location: Babulnath Rd,Babulnath,Khareghat Colony Gamdevi, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/Babulnath-Temple-20.jpg"

                 para="The Babulnath Temple, located in Girgaon, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the oldest temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/ISKCON+Temple,+Juhu,+Mumbai/@19.113016,72.8240011,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9e83c34362f:0x6d7c69d4f830e48!8m2!3d19.113016!4d72.826576!16s%2Fg%2F1td08dd5?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />




                 <ShowTourist 
                 heading="Shri Swaminarayan Mandir"

                 location="Location: Dadar East, Dadar, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/BAPS-Shri-Swaminarayan-Mandir--scaled.jpg"

                 para="The Shri Swaminarayan Mandir, located in Dadar, Mumbai, is dedicated to Lord Swaminarayan and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/BAPS+Shri+Swaminarayan+Mandir,+Mumbai/@19.0018527,72.8056703,14z/data=!4m10!1m2!2m1!1sShri+Swaminarayan+Mandir+dadar!3m6!1s0x3be7cedc138e7e5f:0x916b68999fb77b7c!8m2!3d19.0177255!4d72.8443667!15sCh5TaHJpIFN3YW1pbmFyYXlhbiBNYW5kaXIgZGFkYXJaICIec2hyaSBzd2FtaW5hcmF5YW4gbWFuZGlyIGRhZGFykgEMaGluZHVfdGVtcGxl4AEA!16s%2Fg%2F1tf063xb?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Hanuman Mandir"

                 location="Location: Dadar East, Dadar, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/hanuman%20mandir.jpg"

                 para="The Hanuman Mandir, located near Marine Lines, Mumbai, is dedicated to Lord Hanuman and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shree+rokadiya+Hanuman+Mandir/@19.0017968,72.7438677,12z/data=!3m1!5s0x3be7ce20551c7ec9:0x42589a7966ff9ba7!4m10!1m2!2m1!1sHanuman+Mandirnear+marine+lines+mumbai+!3m6!1s0x3be7ce21ab27d9f9:0x6b33c7db42cce22a!8m2!3d18.9454343!4d72.8306611!15sCidIYW51bWFuIE1hbmRpciBOZWFyIG1hcmluZSBsaW5lcyBtdW1iYWmSAQxoaW5kdV90ZW1wbGXgAQA!16s%2Fg%2F12q4vc5g2?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />




                 <ShowTourist 
                 heading="Shiv Temple"

                 location="Location:Ambernath Prakash Nagar Shiv Mandir road, 421, 501 East, Ambernath"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/Ambernath%20shiv%20mandir.jpg"

                 para="The Shiv Mandir, located in Ambarnath, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shree+rokadiya+Hanuman+Mandir/@19.0017968,72.7438677,12z/data=!3m1!5s0x3be7ce20551c7ec9:0x42589a7966ff9ba7!4m10!1m2!2m1!1sHanuman+Mandirnear+marine+lines+mumbai+!3m6!1s0x3be7ce21ab27d9f9:0x6b33c7db42cce22a!8m2!3d18.9454343!4d72.8306611!15sCidIYW51bWFuIE1hbmRpciBOZWFyIG1hcmluZSBsaW5lcyBtdW1iYWmSAQxoaW5kdV90ZW1wbGXgAQA!16s%2Fg%2F12q4vc5g2?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="Mount Mary Church"

                 location="Location:Mount Mary Rd,near Shanti Avedna Sadan,Mount Mary,Bandra West, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/mountmerry%20church.jpg"

                 para="The Mount Mary Church, located in Bandra, Mumbai, is dedicated to Mother Mary and is an important religious site. It is one of the most revered churches in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Basilica+of+Our+Lady+of+the+Mount+(Mount+St+Mary+Church)/@19.0462495,72.8186506,16z/data=!4m10!1m2!2m1!1sMount+Mary+Church!3m6!1s0x3be7c9409a609d75:0xd0a71c45e7557bfa!8m2!3d19.0465581!4d72.8224747!15sChFNb3VudCBNYXJ5IENodXJjaFoTIhFtb3VudCBtYXJ5IGNodXJjaJIBCGJhc2lsaWNh4AEA!16zL20vMDJ5NGJz?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 
                <ShowTourist 
                 heading="Haji Ali Dargah"

                 location="Location:Dargah Rd, Haji Ali, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/hajialidargah.jpg"

                 para="The Haji Ali Dargah, located in Worli, Mumbai, is dedicated to Pir Haji Ali Shah Bukhari and is an important religious site. It is one of the most revered dargahs in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Haji+Ali+Dargah,+Dargah+Rd,+Haji+Ali,+Mumbai,+Maharashtra/@18.9827097,72.806298,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce7e9373f579:0x85949a815a35b155!8m2!3d18.9828192!4d72.8088962!16s%2Fg%2F11hc7rgzfb?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="Walkeshwar Temple"

                 location="Location:Banganga Cross Ln, Teen Batti, Malabar Hill, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/walkeshwar-temple-mumbai.jpg"

                 para="The Walkeshwar Temple, located in Malabar Hill, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shri+Walkeshwar+Temple,+Mumbai/@18.9456144,72.7906177,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cdf9899a8b5b:0xcbbe7589ec985cdc!8m2!3d18.9456144!4d72.7931926!16zL20vMDViZDRs?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 {/* Historical and heritage sites */}
                 <ShowTourist 
                 heading="Canheri Caves"

                 location="Location:Mumbai, Maharashtra 400101"

                 img="https://www.holidify.com/images/cmsuploads/compressed/1034_20190405125926.jpg"

                 para="The Kanheri Caves, located in Sanjay Gandhi National Park, Mumbai, are an important historical and religious site. These ancient rock-cut caves, dating back to the 1st century BCE, are known for their serene atmosphere, intricate Buddhist carvings, and stunning architecture. They hold great significance as a center of Buddhist learning and meditation, attracting devotees and history enthusiasts from across the city.."

                 link="https://www.google.com/maps/place/Kanheri+Caves/@19.2058464,72.8678814,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7b9e6e2b92f91:0xbf74be4bdbb53955!8m2!3d19.2058509!4d72.9068504!16s%2Fg%2F11v9m1r0tt?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D."

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Bombay High Court"

                 location="Location:The Registrar General, Bombay High Court, Fort, Mumbai"

                 img="https://cdnbbsr.s3waas.gov.in/s388ef51f0bf911e452e8dbb1d807a81ab/uploads/2020/12/2020123069.jpg"

                 para="The Bombay High Court, located in Mumbai, is an important historical and judicial landmark. This iconic colonial-era building, dating back to the 19th century, is known for its grand Gothic architecture, intricate detailing, and significant role in India's legal system. It holds great importance as one of the oldest high courts in the country, serving as a center of justice and governance, attracting legal professionals, historians, and architecture enthusiasts from across the city."

                 link="https://www.google.com/maps/place/Kanheri+Caves/@19.2058464,72.8678814,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7b9e6e2b92f91:0xbf74be4bdbb53955!8m2!3d19.2058509!4d72.9068504!16s%2Fg%2F11v9m1r0tt?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D."

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Asiatic Society Library"

                 location="Location:WRJP+P8M, Town Hall, Shahid Bhagat Singh Rd, Fort, Mumbai"

                 img="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2017/01/180117_asiaticlibrary01.jpg"

                 para="The Bombay High Court, located in Mumbai, is an important historical and judicial landmark. This iconic colonial-era building, dating back to the 19th century, is known for its grand Gothic architecture and significant role in India's legal system. It holds great importance as one of the oldest high courts in the country, serving as a center of justice and governance."

                 link="https://www.google.com/maps/place/The+Asiatic+Society,+Mumbai/@18.9318486,72.8332247,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1db2d1680df:0x2ce4015ac112d3f9!8m2!3d18.9318486!4d72.8357996!16zL20vMDU0eXQx?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 /> 
               
 
                 <ShowTourist 
                 heading="Kotachi Wadi"

                 location="Location:Kotachi Wadi,Girgaon Mumbai"

                 img="  https://assets.architecturaldigest.in/photos/60e2a2240e8686d95b697a68/master/w_1600%2Cc_limit/In%252520the%252520heart%252520of%252520South%252520Mumbai%2C%252520this%252520quaint%252520urban%252520village%252520Khotachiwadi%252520features%252520the%252520best%252520there%252520is%2525208.jpg"

                 para="Khotachiwadi is a heritage village in Girgaon, Mumbai, India. Houses generally conform to the old-Portuguese style architecture. It was founded in the late 18th century by Khot, a Pathare prabhu, who sold plots of land to local East Indian families"

                 link="https://www.google.com/maps/place/Kotachi+Wadi,+Girgaon,+Mumbai,+Maharashtra+400004/@18.9555129,72.8193896,18z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce10dd1a49d3:0x418f66cf8cb0abd8!8m2!3d18.9556405!4d72.820307!16zL20vMDZ3OHNs?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 /> 

                <ShowTourist 
                 heading="Global Vipassana Pagoda"

                 location="Location:Essel world Amusement Park, Bhayandar West, Mira Bhayandar, Mumbai"

                 img="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/global-vipassana-pagoda.jpg"

                 para="The Global Vipassana Pagoda is a prominent spiritual site in Gorai, Mumbai, India, known for its grand, modern architecture. Built in the early 21st century under S.N. Goenka’s guidance, it serves as a center for Vipassana meditation and promotes peace. The pagoda’s immense dome is one of the largest stone structures of its kind, symbolizing the global spread of Vipassana."

                 link="https://www.google.com/maps/place/Kotachi+Wadi,+Girgaon,+Mumbai,+Maharashtra+400004/@18.9555129,72.8193896,18z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce10dd1a49d3:0x418f66cf8cb0abd8!8m2!3d18.9556405!4d72.820307!16zL20vMDZ3OHNs?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 /> 

        {/*  Adventure & Thrill Parks */}
      <ShowTourist
        heading="Essel World"
        location="Gorai, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/esselworld.jpg"
        para="One of India's largest amusement parks, offering a variety of thrilling rides and attractions suitable for all ages."
        link="https://www.google.com/maps/search/Essel+World%2C+Gorai%2C+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Water Kingdom"
        location="Gorai, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/water-kingdom.jpg"
        para="Asia's largest theme water park, featuring numerous water rides and attractions for a fun-filled day."
        link="https://www.google.com/maps/search/Water+Kingdom%2C+Gorai%2C+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Yazoo Park"
        location="Virar, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/yazookpark.jpg"
        para="A recreation center offering fun rides, rock shows, games, dining, and spa facilities."
        link="https://www.google.com/maps/search/Yazoo+Park%2C+Virar%2C+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Hakone"
        location="Powai, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/Hakonepark.jpg"
        para="An entertainment center offering a mix of sports, entertainment, and recreation, including go-karting and paintball."
        link="https://www.google.com/maps/search/Hakone%2C+Powai%2C+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Snow World"
        location="Kurla, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/SnowWorld.jpg"
        para="An indoor snow park offering activities like snowboarding, sledging, and ice skating."
        link="https://www.google.com/maps/search/Snow+World%2C+Kurla%2C+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Vardhaman Fantasy"
        location="Mira Road, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/vardhaman.webp"
        para="A theme park featuring replicas of the Seven Wonders of the World and various amusement rides."
        link="https://www.google.com/maps/search/Vardhaman+Fantasy%2C+Mira+Road%2C+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Tikuji-Ni-Wadi"
        location="Thane, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/Tikujiniwadi.jpg"
        para="An amusement park, water park, and resort offering various rides, a Shiva temple, and a realistic dinosaur park."
        link="https://www.google.com/maps/search/Tikuji-Ni-Wadi%2C+Thane%2C+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Della Adventure"
        location="Lonavala, near Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/Della-Adventure-Park.jpg"
        para="An adventure park offering over 50 activities, including the longest flying fox, rock climbing, and ATV rides."
        link="https://www.google.com/maps/search/Della+Adventure%2C+Lonavala%2C+near+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Wonders Park"
        location="Nerul, Navi Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/WonderPark.jpg"
        para="An amusement park featuring high-tech rides, a toy train, and a replica of the Seven Wonders of the World."
        link="https://www.google.com/maps/search/Wonders+Park%2C+Nerul%2C+Navi+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Visava Amusement Park & Resort"
        location="Panvel, Navi Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/VisawaPArk.avif"
        para="A park offering exciting water slides and adventure activities like free fall, Burma bridge, and zipline crossing."
        link="https://www.google.com/maps/search/Visava+Amusement+Park+%26+Resort%2C+Panvel%2C+Navi+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Shangrila Water Park and Amusement Park"
        location="Thane, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/Shangrila.jpg"
        para="A water park and amusement park offering a variety of water slides, pools, and amusement rides for a fun-filled day."
        link="https://www.google.com/maps/search/Shangrila+Water+Park+and+Amusement+Park,+Thane,+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Suraj Water Park"
        location="Thane, Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/suraj-water-park.jpg"
        para="A water park featuring numerous slides, wave pools, and a relaxing environment suitable for families and friends."
        link="https://www.google.com/maps/search/Suraj+Water+Park,+Thane,+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Shivganga Water Park"
        location="Panvel, Navi Mumbai"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/shivganga.jpg"
        para="A water park offering various slides, pools, and fun activities, making it a great spot for family outings."
        link="https://www.google.com/maps/search/Shivganga+Water+Park,+Panvel,+Navi+Mumbai"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Anand Sagar Resort and Water Park"
        location="Ambernath, Thane"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/AnandSagarResort.jpg"
        para="A resort and water park providing a range of water slides, pools, and recreational activities for visitors of all ages."
        link="https://www.google.com/maps/search/Anand+Sagar+Resort+and+Water+Park,+Ambernath,+Thane"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />

      <ShowTourist
        heading="Great Escape Water Park"
        location="Virar, Thane"
        img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/greatescape.jpg"
        para="A water park offering a variety of slides, wave pools, and entertainment options, perfect for a day out with family and friends."
        link="https://www.google.com/maps/search/Great+Escape+Water+Park,+Virar,+Thane"
        website=""
        webname=""
        category="Adventure & Thrill Parks"
      />










      {/* Beaches & Coastal Areas */}
      <ShowTourist
        heading="Juhu Beach"
        location="Mumbai"
        img=""
        para="Juhu Beach is one of Mumbai's most popular beaches, known for its lively atmosphere and street food stalls offering local delicacies."
        link="https://www.google.com/maps/search/Juhu+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Versova Beach"
        location="Mumbai"
        img=""
        para="Versova Beach is a continuation of Juhu Beach, offering a relatively quieter environment and known for its fishing community."
        link="https://www.google.com/maps/search/Versova+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Gorai Beach"
        location="Mumbai"
        img=""
        para="Located in the Gorai Village, Gorai Beach is a serene spot popular among locals for its peaceful environment and beautiful sunsets."
        link="https://www.google.com/maps/search/Gorai+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Aksa Beach"
        location="Mumbai"
        img=""
        para="Aksa Beach is known for its clean and less crowded shoreline, making it a perfect spot for a peaceful retreat."
        link="https://www.google.com/maps/search/Aksa+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Madh Island Beach"
        location="Mumbai"
        img=""
        para="Surrounded by mangroves, Madh Island Beach offers a tranquil escape from the city's hustle and is known for its fishing villages."
        link="https://www.google.com/maps/search/Madh+Island+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Marvé Beach"
        location="Mumbai"
        img=""
        para="Marvé Beach is a narrow beach known for its cashew nut groves and a medieval Portuguese church, offering a romantic charm."
        link="https://www.google.com/maps/search/Marvé+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Manori Beach"
        location="Mumbai"
        img=""
        para="Manori Beach is a pristine beach offering a peaceful environment, making it an ideal weekend getaway."
        link="https://www.google.com/maps/search/Manori+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Dahanu Beach"
        location="Thane"
        img=""
        para="Dahanu Beach is a quaint, idyllic beach known for its dark sand and surrounding fruit orchards, famous for chikoo plantations."
        link="https://www.google.com/maps/search/Dahanu+Beach+Thane"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Kalamb Beach"
        location="Thane"
        img=""
        para="Kalamb Beach is a pristine beach with soft black sands, dotted with palm trees, great for long walks amidst crisp sea breeze."
        link="https://www.google.com/maps/search/Kalamb+Beach+Thane"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Pirwadi Beach"
        location="Navi Mumbai"
        img=""
        para="Pirwadi Beach is a hidden gem near the bustling city, known for its clear white sand and crystal blue water, making it a fantastic destination for a relaxing holiday."
        link="https://www.google.com/maps/search/Pirwadi+Beach+Navi+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Uran Beach"
        location="Navi Mumbai"
        img=""
        para="Uran Beach offers picturesque shores and a tranquil environment, making it a perfect escape from the noise of city life."
        link="https://www.google.com/maps/search/Uran+Beach+Navi+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Kegav Beach"
        location="Navi Mumbai"
        img=""
        para="Kegav Beach is known for its beautiful temples and proximity to other attractions like Uran Beach and Pirwadi Beach, offering a serene environment for visitors."
        link="https://www.google.com/maps/search/Kegav+Beach+Navi+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />


      <ShowTourist
        heading="Kelva Beach"
        location="Thane"
        img=""
        para="Kelva Beach is known for its extensive shoreline and scenic beauty, making it a popular spot for picnics and weekend getaways."
        link="https://www.google.com/maps/search/Kelva+Beach+Thane"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Arnala Beach"
        location="Thane"
        img=""
        para="Arnala Beach is a popular destination known for its serene environment and proximity to the historic Arnala Fort."
        link="https://www.google.com/maps/search/Arnala+Beach+Thane"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Rajodi Beach"
        location="Nala Sopara"
        img=""
        para="Rajodi Beach is known for its clean sands and tranquil atmosphere, making it a great spot for relaxation and enjoying sunsets."
        link="https://www.google.com/maps/search/Rajodi+Beach+NalaSopara"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Dadar Chowpatty Beach"
        location="Mumbai"
        img=""
        para="Dadar Chowpatty Beach is a popular spot among locals, offering a lively atmosphere and beautiful views of the sunset."
        link="https://www.google.com/maps/search/Dadar+Chowpatty+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Erangal Beach"
        location="Mumbai"
        img=""
        para="Erangal Beach is a serene spot located near Madh Island, known for its peaceful environment and scenic beauty."
        link="https://www.google.com/maps/search/Erangal+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Marine Drive"
        location="South Mumbai"
        img=""
        para="Marine Drive, also known as the Queen's Necklace, is a scenic 3.6 km-long boulevard along the Arabian Sea, popular for its breathtaking views and evening walks."
        link="https://www.google.com/maps/search/Marine+Drive+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Bandra Bandstand"
        location="Bandra, Mumbai"
        img=""
        para="Bandra Bandstand is a famous promenade along the Arabian Sea, known for its sea-facing walkway, scenic views, and being home to Bollywood celebrities."
        link="https://www.google.com/maps/search/Bandra+Bandstand+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Worli Sea Face"
        location="Worli, Mumbai"
        img=""
        para="Worli Sea Face is a beautiful coastal stretch offering stunning views of the Arabian Sea and the Bandra-Worli Sea Link, popular for morning and evening walks."
        link="https://www.google.com/maps/search/Worli+Sea+Face+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Bandra-Worli Sea Link"
        location="Mumbai"
        img=""
        para="The Bandra-Worli Sea Link is an iconic cable-stayed bridge connecting Bandra and Worli, offering breathtaking views of the Mumbai skyline."
        link="https://www.google.com/maps/search/Bandra-Worli+Sea+Link+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Carter Road Promenade"
        location="Bandra, Mumbai"
        img=""
        para="Carter Road Promenade is a scenic waterfront walkway in Bandra, known for its lively atmosphere, sea-facing cafés, and stunning sunset views."
        link="https://www.google.com/maps/search/Carter+Road+Promenade+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Nariman Point"
        location="South Mumbai"
        img=""
        para="Nariman Point is Mumbai's business hub with a stunning seafront, offering spectacular views of Marine Drive and the Arabian Sea."
        link="https://www.google.com/maps/search/Nariman+Point+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Girgaon Chowpatty"
        location="Girgaon, Mumbai"
        img=""
        para="Girgaon Chowpatty is a famous seafront in Mumbai, known for its Ganesh Visarjan celebrations and street food stalls."
        link="https://www.google.com/maps/search/Girgaon+Chowpatty+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />

      <ShowTourist
        heading="Sewri Jetty"
        location="Sewri, Mumbai"
        img=""
        para="Sewri Jetty is a coastal area known for its mangroves and as a seasonal haven for flamingos, attracting bird watchers and nature enthusiasts."
        link="https://www.google.com/maps/search/Sewri+Jetty+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />
      <ShowTourist
        heading="Sassoon Docks"
        location="Colaba, Mumbai"
        img=""
        para="Sassoon Docks is one of the oldest docks in Mumbai, offering a glimpse into the city's fishing industry and vibrant seafood markets."
        link="https://www.google.com/maps/search/Sassoon+Docks+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />
      <ShowTourist
        heading="Chimbai Beach"
        location="Bandra, Mumbai"
        img=""
        para="Chimbai Beach is a quaint beach located in Bandra, offering a glimpse into the local fishing community and a peaceful coastal experience."
        link="https://www.google.com/maps/search/Chimbai+Beach+Mumbai"
        website=""
        webname=""
        category="Beaches & Coastal Areas"
      />










      {/* Museums & Art Galleries */}
      <ShowTourist
        heading="Chhatrapati Shivaji Maharaj Vastu Sangrahalaya"
        location="Fort, Mumbai"
        img=""
        para="One of Mumbai's premier museums, showcasing art, archaeology, and natural history exhibits."
        link="https://www.google.com/maps/search/Chhatrapati+Shivaji+Maharaj+Vastu+Sangrahalaya+Fort,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Dr. Bhau Daji Lad Museum"
        location="Byculla, Mumbai"
        img=""
        para="Mumbai’s oldest museum featuring decorative arts, industrial arts, and historical artifacts."
        link="https://www.google.com/maps/search/Dr.+Bhau+Daji+Lad+Museum+Byculla,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Jehangir Art Gallery"
        location="Kala Ghoda, Mumbai"
        img=""
        para="A renowned art gallery exhibiting contemporary Indian art and hosting various cultural events."
        link="https://www.google.com/maps/search/Jehangir+Art+Gallery+Kala+Ghoda,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="National Gallery of Modern Art"
        location="Colaba, Mumbai"
        img=""
        para="A major art gallery showcasing modern and contemporary Indian artworks."
        link="https://www.google.com/maps/search/National+Gallery+of+Modern+Art+Colaba,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Prince of Wales Museum"
        location="Fort, Mumbai"
        img=""
        para="A museum with a vast collection of art, sculptures, and artifacts from across India."
        link="https://www.google.com/maps/search/Prince+of+Wales+Museum+Fort,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Red Carpet Wax Museum"
        location="Ghatkopar, Mumbai"
        img=""
        para="A wax museum featuring life-like figures of celebrities, historical icons, and famous personalities."
        link="https://www.google.com/maps/search/Red+Carpet+Wax+Museum+Ghatkopar,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Bhaucha Dhakka Maritime Museum"
        location="Mazgaon, Mumbai"
        img=""
        para="A museum dedicated to Mumbai's maritime history and naval artifacts."
        link="https://www.google.com/maps/search/Bhaucha+Dhakka+Maritime+Museum+Mazgaon,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Thane Museum"
        location="Thane, Mumbai"
        img=""
        para="A museum highlighting the history and culture of Thane city through various exhibits."
        link="https://www.google.com/maps/search/Thane+Museum+Thane,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Belapur Fort Museum"
        location="Belapur, Navi Mumbai"
        img=""
        para="A historical museum dedicated to the Belapur Fort and surrounding heritage sites."
        link="https://www.google.com/maps/search/Belapur+Fort+Museum+Belapur,+Navi+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Modern Art Gallery Navi Mumbai"
        location="Vashi, Navi Mumbai"
        img=""
        para="An art gallery promoting modern and contemporary artists in Navi Mumbai."
        link="https://www.google.com/maps/search/Modern+Art+Gallery+Navi+Mumbai+Vashi,+Navi+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />
      <ShowTourist
        heading="Nehru Science Centre"
        location="Worli, Mumbai"
        img=""
        para="India's largest interactive science center, offering hands-on exhibits and educational programs."
        link="https://www.google.com/maps/search/Nehru+Science+Centre+Worli,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Thane Kala Bhavan"
        location="Thane, Maharashtra"
        img=""
        para="An art gallery managed by the Thane Municipal Corporation, showcasing various art exhibitions."
        link="https://www.google.com/maps/search/Thane+Kala+Bhavan+Thane,+Maharashtra"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />
      <ShowTourist
        heading="Rhythm Art Gallery"
        location="Bandra West, Mumbai"
        img=""
        para="A contemporary art gallery showcasing a diverse range of artworks from emerging and established artists."
        link="https://www.google.com/maps/search/Rhythm+Art+Gallery+Bandra+West,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Painted Rhythm Art Gallery"
        location="Juhu, Mumbai"
        img=""
        para="An art gallery known for its curated exhibitions featuring modern and contemporary art pieces."
        link="https://www.google.com/maps/search/Painted+Rhythm+Art+Gallery+Juhu,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Volte Art Gallery"
        location="Colaba, Mumbai"
        img=""
        para="A gallery presenting avant-garde and contemporary art, including sculptures and installations."
        link="https://www.google.com/maps/search/Volte+Art+Gallery+Colaba,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Sakshi Gallery"
        location="Colaba, Mumbai"
        img=""
        para="A prominent gallery featuring contemporary Indian art across various mediums."
        link="https://www.google.com/maps/search/Sakshi+Gallery+Colaba,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Chemould Prescott Road"
        location="Fort, Mumbai"
        img=""
        para="One of India's oldest commercial art galleries, showcasing modern and contemporary art."
        link="https://www.google.com/maps/search/Chemould+Prescott+Road+Fort,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="TARQ"
        location="Colaba, Mumbai"
        img=""
        para="A contemporary art gallery focusing on promoting emerging artists and experimental art forms."
        link="https://www.google.com/maps/search/TARQ+Colaba,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Jhaveri Contemporary"
        location="Colaba, Mumbai"
        img=""
        para="A gallery specializing in contemporary art from South Asia and its diaspora."
        link="https://www.google.com/maps/search/Jhaveri+Contemporary+Colaba,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Art Musings"
        location="Colaba, Mumbai"
        img=""
        para="A gallery showcasing a mix of established and emerging artists in the contemporary art scene."
        link="https://www.google.com/maps/search/Art+Musings+Colaba,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Cymroza Art Gallery"
        location="Bhulabhai Desai Road, Mumbai"
        img=""
        para="A well-established gallery promoting Indian contemporary art through exhibitions and events."
        link="https://www.google.com/maps/search/Cymroza+Art+Gallery+Bhulabhai+Desai+Road,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

      <ShowTourist
        heading="Method Art Space"
        location="Kala Ghoda, Mumbai"
        img=""
        para="A contemporary art space known for its experimental exhibitions and installations."
        link="https://www.google.com/maps/search/Method+Art+Space+Kala+Ghoda,+Mumbai"
        website=""
        webname=""
        category="Museums & Art Galleries"
      />

                 <AllFooter/>
            </div>
        </>
    )
}