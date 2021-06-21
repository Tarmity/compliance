import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from "react-icons/cg";

const Container = styled.div`
  height: 100px;
  width: 250px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px black;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

`

const Box = styled.div`
  height: 60px;
  width: 60px;
  background-color: red;
  border-radius: 5px;
  margin-left: 15px;
  position: relative;
  top: -.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px grey;
`
const Heading = styled.div`
  margin-right: 20px;
  font-size: 1.3rem;
`

const OverDueIcon = styled.div`
  color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Number = styled.div`
    
`

const OverDueCard = () => {

  return (
    <>
      <Container>
        <Box>
          <OverDueIcon>
            <AiIcons.AiOutlineInfoCircle />
          </OverDueIcon>
        </Box>
        <Heading>Over Due</Heading>
      <Number>0</Number>
      </Container>
    </>
  )
}

export default OverDueCard;

// const useStyles = makeStyles({
//   root: {
//    width: '250px',
//    height: '100px',
//    margin: '0 40px',
//    display: 'flex',
//    justifyContent: 'space-between',
//    alignItems: 'flex-start'
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 8,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   box1: {
//       backgroundColor: 'red',
//       height: 60,
//       width: 60,
//       marginLeft: '1rem',

//       }
// });

// export default function OverDueCard(props) {

//   const classes = useStyles();
// //   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//         <Card className={classes.box1}></Card>
//       <CardContent>
//           <Typography>Over Due</Typography>
//       </CardContent>
//     </Card>
//   );
// };


