import Sidebar from "./sidebar";
import { student } from "../constants/sideConstants";
import { Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button, SimpleGrid, Avatar } from "@chakra-ui/react";
function ViewEnquiry({link}) {
  console.log(link)
    return ( 
        <>
        <div className="flex flex-row">
        <div className="fixed z-50">
        <Sidebar links={student} />
        </div>
        <SimpleGrid spacing={10} marginLeft='72'columns={[1,2]}>
        {link.map((link)=>(
           <div className="ml-62 mt-10">
           <Card
           
     direction={{ base: 'column' }}
     overflow='hidden'
     variant='outline'
     boxShadow='md'
     borderRadius='md'
     
    //  marginLeft='64'
   >
     {/* <Image
       objectFit='cover'
       maxW={{ base: '100%', sm: '200px' }}
       src={link. name}
       alt='Caffe Latte'
     /> */}
     <Avatar className="ml-12 mt-10" name={link.name} />
    
     <Stack>
       <CardBody>
       <Text py='2'>
            <bold>
           {link.name}
           </bold>
         </Text>
         <Heading size='md'>{link.message}</Heading>
   
         
         <Text>
          <bold>
          {/* <h1>Time Duration : {link.duration} Hours</h1> */}
          </bold>
         </Text>
         <Text>
          <bold>
          {/* <h1 className={`text-${link.colour}`}>{link.level}</h1> */}
           </bold>
         </Text>
       </CardBody>
   
       <CardFooter>
       
         {/* <Button variant='solid' colorScheme='blue'>
           Enroll now
         </Button> */}
       </CardFooter>
     </Stack>
   </Card>
           </div>
       ) )}
       </SimpleGrid>
       
        </div>
        </>
     );
}

export default ViewEnquiry;