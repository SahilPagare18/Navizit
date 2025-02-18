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

                 category="Category:Religious site"
                 
                 website=""

                 webname="Mumba Devi Temple"

                 />

                 <ShowTourist 
                 heading="Mahalakshmi Temple"

                 location="Location:Bhulabhai Desai Marg, Mahalaxmi West, Cumballa Hill, Mumbai"

                 img="https://image3.mouthshut.com/images/Restaurant/Photo/-48117_68312.jpg"

                 para="The Mahalakshmi Temple, located in Mahalakshmi, Mumbai, is dedicated to Goddess Mahalakshmi, the goddess of wealth, fortune, and prosperity. It is one of the most prominent temples in Mumbai, known for its stunning architecture and religious significance to the city's residents."

                 link="https://www.google.com/maps/place/Shri+Mahalakshmi+Devi+Temple,+Mumbai/@18.9773405,72.8065601,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce6ce5383ed1:0xe20c7a512463dd62!8m2!3d18.9773405!4d72.8065601!16zL20vMDQyeTRi?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="ISKCON TEMPLE"

                 location="Location:Hare Krishna Land, Sri Mukteshwar Devalaya Rd,Juhu, Mumbai"

                 img="https://media.safarway.com/content/cc828ce8-c528-4d97-8cbd-e267d432e55c_sm.jpg"

                 para="The ISKCON Temple, located in Juhu, Mumbai, is dedicated to Lord Krishna and is a major spiritual center. It is one of the most famous temples in Mumbai, known for its vibrant atmosphere, beautiful architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/ISKCON+Temple,+Juhu,+Mumbai/@19.113016,72.8240011,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9e83c34362f:0x6d7c69d4f830e48!8m2!3d19.113016!4d72.826576!16s%2Fg%2F1td08dd5?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Babulnath temple"

                 location="Location: Babulnath Rd,Babulnath,Khareghat Colony Gamdevi, Mumbai"

                 img="https://thetempleguru.com/wp-content/uploads/2023/12/Babulnath-Temple-20.jpg"

                 para="The Babulnath Temple, located in Girgaon, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the oldest temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/ISKCON+Temple,+Juhu,+Mumbai/@19.113016,72.8240011,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9e83c34362f:0x6d7c69d4f830e48!8m2!3d19.113016!4d72.826576!16s%2Fg%2F1td08dd5?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />




                 <ShowTourist 
                 heading="Shri Swaminarayan Mandir"

                 location="Location: Dadar East, Dadar, Mumbai"

                 img="https://www.americamybeautiful.com/wp-content/uploads/2019/11/BAPS-Shri-Swaminarayan-Mandir--scaled.jpg"

                 para="The Shri Swaminarayan Mandir, located in Dadar, Mumbai, is dedicated to Lord Swaminarayan and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/BAPS+Shri+Swaminarayan+Mandir,+Mumbai/@19.0018527,72.8056703,14z/data=!4m10!1m2!2m1!1sShri+Swaminarayan+Mandir+dadar!3m6!1s0x3be7cedc138e7e5f:0x916b68999fb77b7c!8m2!3d19.0177255!4d72.8443667!15sCh5TaHJpIFN3YW1pbmFyYXlhbiBNYW5kaXIgZGFkYXJaICIec2hyaSBzd2FtaW5hcmF5YW4gbWFuZGlyIGRhZGFykgEMaGluZHVfdGVtcGxl4AEA!16s%2Fg%2F1tf063xb?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Hanuman Mandir"

                 location="Location: Dadar East, Dadar, Mumbai"

                 img="https://c8.alamy.com/comp/ET210R/place-of-worship-shree-rokadiya-hanuman-or-monkey-god-temple-princess-ET210R.jpg"

                 para="The Hanuman Mandir, located near Marine Lines, Mumbai, is dedicated to Lord Hanuman and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shree+rokadiya+Hanuman+Mandir/@19.0017968,72.7438677,12z/data=!3m1!5s0x3be7ce20551c7ec9:0x42589a7966ff9ba7!4m10!1m2!2m1!1sHanuman+Mandirnear+marine+lines+mumbai+!3m6!1s0x3be7ce21ab27d9f9:0x6b33c7db42cce22a!8m2!3d18.9454343!4d72.8306611!15sCidIYW51bWFuIE1hbmRpciBOZWFyIG1hcmluZSBsaW5lcyBtdW1iYWmSAQxoaW5kdV90ZW1wbGXgAQA!16s%2Fg%2F12q4vc5g2?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />




                 <ShowTourist 
                 heading="Shiv Temple"

                 location="Location:Ambernath Prakash Nagar Shiv Mandir road, 421, 501 East, Ambernath"

                 img="https://www.sanskritimagazine.com/wp-content/uploads/2015/07/p1010177.jpg"

                 para="The Shiv Mandir, located in Ambarnath, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shree+rokadiya+Hanuman+Mandir/@19.0017968,72.7438677,12z/data=!3m1!5s0x3be7ce20551c7ec9:0x42589a7966ff9ba7!4m10!1m2!2m1!1sHanuman+Mandirnear+marine+lines+mumbai+!3m6!1s0x3be7ce21ab27d9f9:0x6b33c7db42cce22a!8m2!3d18.9454343!4d72.8306611!15sCidIYW51bWFuIE1hbmRpciBOZWFyIG1hcmluZSBsaW5lcyBtdW1iYWmSAQxoaW5kdV90ZW1wbGXgAQA!16s%2Fg%2F12q4vc5g2?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading=""

                 location="Location:Mount Mary Rd,near Shanti Avedna Sadan,Mount Mary,Bandra West, Mumbai"

                 img="https://i.pinimg.com/originals/c3/03/cc/c303cc788aed4e35fae08e737fc1a41b.jpg"

                 para="The Mount Mary Church, located in Bandra, Mumbai, is dedicated to Mother Mary and is an important religious site. It is one of the most revered churches in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Basilica+of+Our+Lady+of+the+Mount+(Mount+St+Mary+Church)/@19.0462495,72.8186506,16z/data=!4m10!1m2!2m1!1sMount+Mary+Church!3m6!1s0x3be7c9409a609d75:0xd0a71c45e7557bfa!8m2!3d19.0465581!4d72.8224747!15sChFNb3VudCBNYXJ5IENodXJjaFoTIhFtb3VudCBtYXJ5IGNodXJjaJIBCGJhc2lsaWNh4AEA!16zL20vMDJ5NGJz?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />

                 
                <ShowTourist 
                 heading="Haji Ali Dargah"

                 location="Location:Dargah Rd, Haji Ali, Mumbai"

                 img="https://live.staticflickr.com/8475/8376760392_b642b442af_b.jpg"

                 para="The Haji Ali Dargah, located in Worli, Mumbai, is dedicated to Pir Haji Ali Shah Bukhari and is an important religious site. It is one of the most revered dargahs in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Haji+Ali+Dargah,+Dargah+Rd,+Haji+Ali,+Mumbai,+Maharashtra/@18.9827097,72.806298,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce7e9373f579:0x85949a815a35b155!8m2!3d18.9828192!4d72.8088962!16s%2Fg%2F11hc7rgzfb?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="Walkeshwar Temple"

                 location="Location:Banganga Cross Ln, Teen Batti, Malabar Hill, Mumbai"

                 img="https://www.placestovisitindia.in/wp-content/uploads/2017/06/walkeshwar-temple-mumbai.jpg"

                 para="The Walkeshwar Temple, located in Malabar Hill, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shri+Walkeshwar+Temple,+Mumbai/@18.9456144,72.7906177,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cdf9899a8b5b:0xcbbe7589ec985cdc!8m2!3d18.9456144!4d72.7931926!16zL20vMDViZDRs?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Category:Religious site"
                 
                 website=""

                 webname=""

                 />



                 <AllFooter/>
            </div>
        </>
    )
}