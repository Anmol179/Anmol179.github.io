import React from "react";
import {Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button,Box, Center,Link,Grid} from "@chakra-ui/react"
import retax from "../images/haanready.png"
import HealthCare from "../images/greenparadise.png"
import FootLocker from "../images/Project/FootLocker.png"
import GitHubCalendar from 'react-github-calendar';
import Hilling from "../images/netmeds.png"
// import 'react-github-calendar/dist/github-calendar.css' from 'react-github-calendar';

const Projects = () => {
  return (
    <div id="projects" >
 <Box marginBottom="3%">
        <Text fontSize="45px" marginLeft="30px" marginRight="30px" textAlign="center" color="#cd5ff8">
          Projects
        </Text>
      </Box>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px',  sm: '200px' }}
    src={Hilling}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      {/* <Heading as='ins' class="project-title" size='md'>netmeds</Heading> */}
      <Heading className="project-title" size='md'><Text>Netmeds.com</Text></Heading>

      <Text className="project-description" py='2'>
          • Developed an e-commerce platform for buying medicines and cosmetic products
      </Text>
      <Text className="project-description" py='2'>
          • Enriched user journeys through an immersive and personalized travel interface.
      </Text>
      <Text className="project-description" py='2'>
          • Implemented product catalog management and search/filter functionality
      </Text>
      <Text className="project-description" py='2'>
          <b>HTML CSS JAVASCRIPT JSON-SERVER API </b>
      </Text>
      <Text className="project-tech-stack" py='2'>
          You can Visit Below Link for more...
      </Text>
    </CardBody>

    <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='blue'>
       <a href="https://github.com/Mahima29Jaiswal/Netmeds-projectMasai" target="_blank">Github</a>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
       <a href="https://netmeds-project-masai-la00zngfj-mahima29jaiswal.vercel.app/" target="_blank">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>

{/* Green Paradise */}
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px', sm: '200px' }}
    src={HealthCare}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      <Heading className="project-title" size='md'>Green Paradise</Heading>
        <Text className="project-description" py='2'>
        Green Paradise – your ultimate destination for plant lovers! Browse through our curated selection of exquisite indoor and outdoor plants, carefully chosen to bring nature's serenity to your space. With a user-friendly interface and hassle-free shopping, Green Paradise is your go-to source for elevating your surroundings with lush greenery. Transform your home into a haven of tranquility with our premium plant offerings, delivered straight to your door. Experience the joy of cultivating your own green oasis with Green Paradise!"
        </Text>
        <Text className="project-description" py='2'>
          <b>HTML CSS JAVASCRIPT JSON-SERVER API </b>
      </Text>
        <Text className="project-tech-stack" py='2'>
        You can Visit Below Link for more...
        </Text>
    </CardBody>

    <CardFooter>
    <Button className="project-github-link" variant='solid' colorScheme='blue' mr={2}>
      <a href="https://github.com/saurabhWakde/-Plant_Order_Application" target="_blank">Github</a>
      </Button>
      <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
        <a href="https://saurabhwakde.github.io/-Plant_Order_Application/" target="_blank">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>

{/* Retax */}
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px', sm: '200px' }}
    src={retax}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      <Heading className="project-title" size='md'><Text>HaanReady.com</Text></Heading>

      <Text className="project-description" py='2' textAlign={"left"}>
      Discover the complete hygiene experience at HaanReady.com, your premier destination for sanitizers, soaps, and cosmetics. Our curated collection ensures a comprehensive approach to personal care. Easily navigate through our user-friendly platform to explore a variety of high-quality sanitizers, nourishing soaps, and premium cosmetics. HaanReady.com simplifies your shopping experience with secure transactions. Elevate your self-care routine with our functional and effective products, designed to promote health, cleanliness, and beauty effortlessly.
      </Text>
      <Text className="project-description" py='2'>
          <b>REACT REDUX CHAKRA-UI JAVASCRIPT JSON-SERVER API </b>
      </Text>
      <Text className="project-tech-stack" py='2'>
        You can Visit Below Link for more...
      </Text>
    </CardBody>

    <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='blue' mr={2}>
        <a href="https://github.com/Anmol179/HaanReady.com" target="_blank">Github</a>
      </Button>
      <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
        <a href="https://64a9a5527ed34f26cd2eb097--gregarious-bavarois-72a7cc.netlify.app/" target="_blank">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px',  sm: '200px' }}
    src={Hilling}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      {/* <Heading as='ins' class="project-title" size='md'>netmeds</Heading> */}
      <Heading className="project-title" size='md'><Text>Netmeds.com</Text></Heading>

      <Text className="project-description" py='2'>
          • Developed an e-commerce platform for buying medicines and cosmetic products
      </Text>
      <Text className="project-description" py='2'>
          • Enriched user journeys through an immersive and personalized travel interface.
      </Text>
      <Text className="project-description" py='2'>
          • Implemented product catalog management and search/filter functionality
      </Text>
      <Text className="project-description" py='2'>
          <b>HTML CSS JAVASCRIPT JSON-SERVER API </b>
      </Text>
      <Text className="project-tech-stack" py='2'>
          You can Visit Below Link for more...
      </Text>
    </CardBody>

    <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='blue'>
       <a href="https://github.com/Mahima29Jaiswal/Netmeds-projectMasai" target="_blank">Github</a>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
       <a href="https://netmeds-project-masai-la00zngfj-mahima29jaiswal.vercel.app/" target="_blank">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>


{/* footlocker */}
{/* <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px', sm: '200px' }}
    src={FootLocker}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
  <CardBody>
            <Heading className="project-title" size='md'>The perfect latte</Heading>

            <Text className="project-description" py='2'>
            Footlocker Clone is a feature-rich online platform designed to replicate the renowned footwear retailer, Footlocker.
            The clone offers a vast collection of sneakers, athletic shoes, and sportswear from popular brands,
            providing customers with an immersive shopping experience. With intuitive search and filtering options,
            users can easily find their desired products, view detailed product information, and make purchases
            hassle-free. The clone also incorporates secure payment gateways, order tracking, and customer support,
            ensuring a seamless and satisfying shopping journey for sneaker enthusiasts.
            </Text>
            <Text className="project-tech-stack" py='2'>
            You can Visit Below Link for more...
            </Text>
          </CardBody>

          <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='blue'>
       <a href="https://github.com/Mahima29Jaiswal/Netmeds-projectMasai">Github</a>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
       <a href="https://netmeds-project-masai-la00zngfj-mahima29jaiswal.vercel.app/">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card> */}





{/* &nbsp;&nbsp;&nbsp; */}

{/* <p align="center" style={{margin:"1%"}}>
//           <a  href="https://github.com/anmol179/github-readme-streak-stats" >
//               <img  id="github-streak-stats" title="🔥 Get streak stats for your profile at git.io/streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=anmol179&theme=radical&hide_border=true&stroke=0000&background=#122722"/>
//           </a>
//       </p>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
//         <div>
//           <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=anmol179&theme=2077" />
//         </div>
//         <div  style={{ display: 'flex', justifyContent: 'space-around', width: '60%', margin: '20px' }}>
//           <img id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs?username=anmol179&theme=2077' />
//           <img  src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=anmol179&theme=2077" />
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%', margin: '20px' }}>
//           <img id="github-stats-card"  src='https://github-readme-stats.vercel.app/api?username=anmol179&theme=2077' />
//           <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=anmol179&theme=2077&utcOffset=8" />
//         </div>
//       </div>
//       <div className="react-activity-calendar" >
//         {/* Your other portfolio content */}
            {/* <GitHubCalendar  style={{  margin:"auto" }} username= "anmol179" /> */}
<Box m={"auto"}>
        <Box gap={6}>
          <Center mb={"3%"} mt={"3%"}>
            <Link href="https://github.com/anmol179">
              <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=anmol179&stroke=0000&background=#122722"/>
            </Link>
          </Center>
          <Center mb={"3%"}>
            <Image src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=anmol179"/>
          </Center>
        </Box>
        <Grid gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} justifyContent={"space-around"} mb={"3%"}>
          <Center>
            <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=anmol179" />
          </Center>
          <Center>
            <Image src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=anmol179"/>
          </Center>
        </Grid>
        <Grid gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} justifyContent={"space-around"} mb={"3%"}>
          <Center>
            <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=anmol179" />
          </Center>
          <Center>
            <Image src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=anmol179&cutOffset=8"/>
          </Center>
        </Grid>
        <Box>
          <Center ml={[0,-12]}>
            <GitHubCalendar username= "anmol179" />
          </Center>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;



//       <Card
//         direction={{ base: 'column', sm: 'row' }}
//         overflow='hidden'
//         variant='outline'
//         className="project-card"
//         marginBottom="20px" // Add gap between each card
//       >
//         <Image
//           objectFit='cover'
//           maxW={{ base: '100%', sm: '200px' }}
//           src={FootLocker}
//           alt='FootLocker'
//         />

//         <Stack>
          // <CardBody>
          //   <Heading className="project-title" size='md'>The perfect latte</Heading>

          //   <Text className="project-description" py='2'>
          //   Footlocker Clone is a feature-rich online platform designed to replicate the renowned footwear retailer, Footlocker.
          //   The clone offers a vast collection of sneakers, athletic shoes, and sportswear from popular brands,
          //   providing customers with an immersive shopping experience. With intuitive search and filtering options,
          //   users can easily find their desired products, view detailed product information, and make purchases
          //   hassle-free. The clone also incorporates secure payment gateways, order tracking, and customer support,
          //   ensuring a seamless and satisfying shopping journey for sneaker enthusiasts.
          //   </Text>
          //   <Text className="project-tech-stack" py='2'>
          //   You can Visit Below Link for more...
          //   </Text>
          // </CardBody>

          // <CardFooter>
          //   <Button className="project-github-link" variant='solid' colorScheme='blue' mr={2}>
          //     <a href="https://github.com/Roshankr7249/footlocker">Github</a>
          //   </Button>
          //   <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
          //     <a href="https://heartfelt-clafoutis-70d37c.netlify.app/index.html">Deployed link</a>
          //   </Button>
          // </CardFooter>
//         </Stack>
//       </Card>
//       <Card
//         direction={{ base: 'column', sm: 'row' }}
//         overflow='hidden'
//         variant='outline'
//         className="project-card"
//         marginBottom="20px" // Add gap between each card
//       >
//         <Image
//           objectFit='cover'
//           maxW={{ base: '100%', sm: '200px' }}
//           src={FootLocker}
//           alt='FootLocker'
//         />

//         <Stack>
//           <CardBody>
//             <Heading class="project-title" size='md'>The perfect latte</Heading>

//             <Text className="project-description" py='2'>
//             Footlocker Clone is a feature-rich online platform designed to replicate the renowned footwear retailer, Footlocker.
//             The clone offers a vast collection of sneakers, athletic shoes, and sportswear from popular brands,
//             providing customers with an immersive shopping experience. With intuitive search and filtering options,
//             users can easily find their desired products, view detailed product information, and make purchases
//             hassle-free. The clone also incorporates secure payment gateways, order tracking, and customer support,
//             ensuring a seamless and satisfying shopping journey for sneaker enthusiasts.
//             </Text>
//             <Text className="project-tech-stack" py='2'>
//             You can Visit Below Link for more...
//             </Text>
//           </CardBody>

//           <CardFooter>
//             <Button className="project-github-link" variant='solid' colorScheme='blue' mr={2}>
//               <a href="https://github.com/Roshankr7249/footlocker">Github</a>
//             </Button>
//             <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
//               <a href="https://heartfelt-clafoutis-70d37c.netlify.app/index.html">Deployed link</a>
//             </Button>
//           </CardFooter>
//         </Stack>
//       </Card>
//       <p align="center" style={{margin:"1%"}}>
//           <a  href="https://github.com/anmol179/github-readme-streak-stats" >
//               <img  id="github-streak-stats" title="🔥 Get streak stats for your profile at git.io/streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=anmol179&theme=radical&hide_border=true&stroke=0000&background=#122722"/>
//           </a>
//       </p>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
//         <div>
//           <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=anmol179&theme=2077" />
//         </div>
//         <div  style={{ display: 'flex', justifyContent: 'space-around', width: '60%', margin: '20px' }}>
//           <img id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs?username=anmol179&theme=2077' />
//           <img  src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=anmol179&theme=2077" />
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%', margin: '20px' }}>
//           <img id="github-stats-card"  src='https://github-readme-stats.vercel.app/api?username=anmol179&theme=2077' />
//           <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=anmol179&theme=2077&utcOffset=8" />
//         </div>
//       </div>
//       <div className="react-activity-calendar" >
//         {/* Your other portfolio content */}
//         <GitHubCalendar  style={{  margin:"auto" }} username= "anmol179" />
//       </div>
//     </div>
    
//   );
// };

// export default Projects;