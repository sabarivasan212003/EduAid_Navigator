import React from 'react'
import { AdminLinks, student } from "../constants/sideConstants";
import { useState,useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

// import { AdminLinks, student } from "../constants/sideConstants";
import {
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text,
    CardFooter,
    Button,
    SimpleGrid,
    Avatar,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Tfoot,
    Th,
  } from "@chakra-ui/react";
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import '../App.css'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Sidebar from './sidebar';
import { selectUser } from '../redux/useSlice';
// import { student } from '../constants/sideConstants';    

function AdminDashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const initialRef = useRef();
    const finalRef = useRef();
    const user=useSelector(selectUser)
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    const data = [
        {
          name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Thursday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        // {
        //   name: 'Page G',
        //   uv: 3490,
        //   pv: 4300,
        //   amt: 2100,
        // },
      ];
     

  return (
    <>
    <Sidebar links={AdminLinks} />
    <main className='main-container ml-64  bg-gray-900 h-screen'>
        <div className='main-title'>
            <h3>Welcome {user.email}</h3>
        </div>

        <div className='flex justify-around mt-20'>
            <div className='card' style={{width:'45%'}}>
                <div className='card-inner'>
                    <h3>Totalcourse</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>30</h1>
            </div>
            <div className='card   '  style={{width:'45%'}}>
                <div className='card-inner '>
                    <h3>Total Enrolled courses</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            {/* <div className='card ml-20 w-38'>
                {/* <div className='card-inner'>
                    <h3>Totalhours</h3>
                    <BsPeopleFill className='card_icon'/>
                </div> */}
                {/* <h1>33</h1> */}
            </div> 
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}
        {/* </div> */}

        <div className='charts'>
            {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer> */}

            {/* <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> */}

            <div>
                
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody pb={6}>
      <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Erolled Date</Th>
        {/* <Th isNumeric>multiply by</Th> */}
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>vasan</Td>
        <Td>11/2/2022</Td>
        {/* <Td isNumeric>25.4</Td> */}
      </Tr>
      <Tr>
        <Td>raghuu</Td>
        <Td>22/1/2023</Td>
        {/* <Td isNumeric>30.48</Td> */}
      </Tr>
      <Tr>
        <Td>guhan</Td>
        <Td>1/12/2023</Td>
        {/* <Td isNumeric>0.91444</Td> */}
      </Tr>
      <Tr>
        <Td>sundar</Td>
        <Td>26/4/2002</Td>
        {/* <Th isNumeric>multiply by</Th> */}
      </Tr>
    </Tbody>
    {/* <Tfoot> */}
    {/* </Tfoot> */}
  </Table>
</TableContainer>
        <ModalCloseButton />
          {/* <FormControl>
            <FormLabel>Reply message</FormLabel>
            <Input ref={initialRef} placeholder='First name' />
          </FormControl> */}

          {/* <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder='Last name' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Last name' />
          </FormControl> */}
        </ModalBody>

        <ModalFooter>
          {/* <Button onClick={onClose} colorScheme='blue' mr={3}>
            send
          </Button> */}
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full ml-44">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Course name
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Color
                </th> */}
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Price
                </th> */}
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Java
                </th>
                {/* <td class="px-6 py-4">
                    Silver
                </td> */}
                <td class="px-6 py-4">
                    5
                </td>
                {/* <td class="px-6 py-4">
                    $2999
                </td> */}
                <td class="px-6 py-4">
                    <button>
                    <a href="#" onClick={onOpen} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">check</a>
                    </button>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  javascript
                </th>
                {/* <td class="px-6 py-4">
                    White
                </td> */}
                <td class="px-6 py-4">
                    15
                </td>
                {/* <td class="px-6 py-4">
                    $1999
                </td> */}
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">check</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    springboot
                </th>
                {/* <td class="px-6 py-4">
                    Black
                </td> */}
                <td class="px-6 py-4">
                    12
                </td>
                {/* <td class="px-6 py-4">
                    $99
                </td> */}
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">check</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    react
                </th>
                {/* <td class="px-6 py-4">
                    Gray
                </td> */}
                <td class="px-6 py-4">
                    6
                </td>
                {/* <td class="px-6 py-4">
                    $799
                </td> */}
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">check</a>
                </td>
            </tr>
            {/* <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                {/* <td class="px-6 py-4">
                    Red
                </td> */}
                {/* <td class="px-6 py-4">
                    Wearables
                </td>
                {/* <td class="px-6 py-4">
                    $999
                </td> */}
                {/* <td class="px-6 py-4"> */}
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                {/* </td>  */}
            {/* </tr> */} 
        </tbody>
    </table>
</div>


            </div>

        </div>
    </main>
    </>
  )
}

export default AdminDashboard;