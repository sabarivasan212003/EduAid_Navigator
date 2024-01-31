import Sidebar from "./sidebar";
import { useState,useRef } from "react";
import { student } from "../constants/sideConstants";
import { Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button, SimpleGrid ,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  useToast,
  ModalFooter,} from "@chakra-ui/react";
function Viewcourses({link}) {
  const [isOpen, setIsOpen] = useState(false);
const initialRef = useRef();
const finalRef = useRef();
const toast = useToast()
const onOpen = () => setIsOpen(true);
const onClose = () => setIsOpen(false);

  console.log(link)
    return ( 
        <>
        <div className="flex flex-row">
        <div className="fixed z-50">
        <Sidebar links={student} />
        </div>
        
        <div>
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
    


     <Image
       objectFit='cover'
       maxW={{ base: '100%', sm: '200px' }}
       src={link. imageUrl}
       alt='Caffe Latte'
     />
   
     <Stack>
       <CardBody>
         <Heading size='md'>{link.title}</Heading>
   
         <Text py='2'>
           {link.description}
         </Text>
         <Text>
          <bold>
          <h1>Time Duration : {link.duration} Hours</h1>
          </bold>
         </Text>
         <Text>
          <bold>
          <h1 className={`text-${link.colour}`}>{link.level}</h1>
           </bold>
         </Text>
       </CardBody>
   
       <CardFooter>
       
       <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={() =>
        toast({
          title: 'Enrolled successfully.',
          description: "you've enrolled successfully.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Enroll
    </button>
    

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register now</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} colorScheme='blue' mr={3}>
              Register
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
       </CardFooter>
     </Stack>
   </Card>
           </div>
       ) )}
       </SimpleGrid>
       
        </div>
        </div>
        </>
     );
}

export default Viewcourses;