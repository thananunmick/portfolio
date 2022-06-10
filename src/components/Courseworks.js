// import * as React from 'react';
import React, {useState} from 'react';
import '../css/Courseworks.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import ReactHoverFlip from 'react-hover-flip'
import CourseBlock from './CourseBlock';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));

export default function Courseworks() {
    const [info, setInfo] = useState([
        [
          {
            header: 'CS400 (Programming III)',
            img: 'https://www.tamemo.com/wp-content/uploads/2018/01/java-135.png',
            text: "This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis and about classes of problems that require each data type. Students are required to design and implement using high quality professional code, a medium sized program, that demonstrates knowledge and use of latest language features, tools, and conventions. Additional topics introduced will include as needed for projects: inheritance and polymorphism; anonymous inner classes, lambda functions, performance analysis to discover and optimize critical code blocks.",
          },
          {
            header: 'CS354 (Machine Organization & Programming)',
            img: 'https://e-learning.srru.ac.th/pluginfile.php/62567/course/overviewfiles/2638042_ea2c_5.jpg',
            text: "An introduction to fundamental structures of computer systems and the C programming language with a focus on the low-level interrelationships and impacts on performance. Topics include the virtual address space and virtual memory, the heap and dynamic memory management, the memory hierarchy and caching, assembly language and the stack, communication and interrupts/signals, compiling and assemblers/linkers.",
          },
          {
            header: "CS240 (Discrete Math)",
            img: 'https://lastmomenttuitions.com/wp-content/uploads/2019/08/dsc-mths.png',
            text: "Basic concepts of logic, sets, partial order and other relations, and functions. Basic concepts of mathematics (definitions, proofs, sets, functions, and relations) with a focus on discrete structures: integers, bits, strings, trees, and graphs. Propositional logic, Boolean algebra, and predicate logic. Mathematical induction and recursion. Invariants and algorithmic correctness. Recurrences and asymptotic growth analysis. Fundamentals of counting.",
          },
          {
            header: "Best Character",
            img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/ICS_Bangkok_Logo.png',
            text: "This award is a yearly award given to 2 students per class. It celebrates the student's good overall personality nominated by the teachers."
          }
        ],
        [
          {
            header: 'CS320 (Data Programming II)',
            img: 'https://content.techgig.com/photo/84017907.cms',
            text: "Learn to implement data structures (e.g., graphs) to efficiently represent datasets. Software-engineering tools such as version control and Python virtual environments will be introduced, with an emphasis on reproducibility of analysis. Tracing and A/B testing will be introduced as techniques for generating meaningful datasets. Introduces basic classification, clustering, optimization, and simulation techniques.",
          },
          {
            header: 'CS252 (Introduction to Computer Engineering)',
            img: 'https://computersciencewiki.org/images/1/1a/Cpu_diagram.png',
            text: "Logic components built with transistors, rudimentary Boolean algebra, basic combinational logic design, basic synchronous sequential logic design, basic computer organization and design, introductory machine- and assembly-language programming.",
          },
          {
            header: "MATH222 (Calculus II)",
            img: 'https://qph.cf2.quoracdn.net/main-qimg-16a98cddb17faaaf0378e714cb479ef9-lq',
            text: "Techniques of integration, improper integrals, first order ordinary differential equations, sequences and series, Taylor series, vector geometry in two and three dimensions.",
          }
        ],
        [
          {
            header: 'STAT340 (Statistics for Data Science)',
            img: 'https://d1zx6djv3kb1v7.cloudfront.net/wp-content/media/2020/05/R-PROGRAMMING-LANGUAGE-i2tutorials.jpg',
            text: "Topics include one- and two-sample inference; an introduction to Bayesian inference and associated probability theory; linear and logistic regression models; the bootstrap; and cross-validation. An integrated statistical computing environment is used to explore and analyze data, develop models, make inferences, and communicate results in a reproducible manner through a project-oriented approach to learning.",
          },
          {
            header: 'MATH340 (Linear Algebra)',
            img: 'https://i.ytimg.com/vi/0WDhKCPtbng/maxresdefault.jpg',
            text: "Topics include matrix algebra, linear systems of equations, vector spaces, sub-spaces, linear dependence, span, basis, rank of matrices, determinants, linear transformations, coordinate representations, kernel, range, eigenvalues and eigenvectors, diagonalization, inner products and orthogonal vectors, symmetric matrices.",
          },
          {
            header: "Dean's List",
            img: 'https://brand.wisc.edu/content/uploads/2016/11/readability-03.jpg',
            text: "This honor is bestowed on students who carried at least twelve graded degree credits with the requisite grade point average - 3.600 for freshman and sophomores, and 3.850 for juniors and seniors.",
          }
        ],
      ]);

    const block1 = (
        info[0].map((value, index) => {
        return (
            <div style={{height: "400px", marginBottom: "20px"}}>
                <ReactHoverFlip 
                    front={<CourseBlock header={value.header} img={value.img}/>} 
                    // back={<CourseBlock header={value.header} information={value.information}/>} 
                    back={<div style={{height: "400px", backgroundColor: "white", marginBottom: "20px", margin: "10px", textAlign: "left"}}><p className="Courseworks-text">{value.text}</p></div>}
                    direction="horizontal"
                />
            </div>
        );
        // return (
        //     <ReactHoverFlip 
        //         front={<CourseBlock header={value.header} information={value.information}/>} 
        //         back={<CourseBlock header={value.header} information={value.information}/>} 
        //         direction="horizontal"
        //         height="50%"
        //     />
        // );
        // return <CourseBlock header={value.header} information={value.information}/>
        })
    );

    const block2 = (
        info[1].map((value, index) => {
        return (
            <div style={{height: "400px", marginBottom: "20px"}}>
                <ReactHoverFlip 
                    front={<CourseBlock header={value.header} img={value.img}/>} 
                    back={<div style={{height: "400px", backgroundColor: "white", marginBottom: "20px", margin: "10px", textAlign: "left"}}><p className="Courseworks-text">{value.text}</p></div>}
                    direction="horizontal"
                />
            </div>
        );
        // return <CourseBlock header={value.header} information={value.information}/>
        })
    );

    const block3 = (
        info[2].map((value, index) => {
        return (
            <div style={{height: "400px", marginBottom: "20px"}}>
                <ReactHoverFlip 
                    front={<CourseBlock header={value.header} img={value.img}/>} 
                    back={<div style={{height: "400px", backgroundColor: "white", marginBottom: "20px", margin: "10px", textAlign: "left"}}><p className="Courseworks-text">{value.text}</p></div>}
                    direction="horizontal"
                />
            </div>
        );
        // return <CourseBlock header={value.header} information={value.information}/>
        })
    );

    return (
        <div className="Courseworks">
            <Fade right>
                <h1 className="Font-name-courseworks">Courseworks &amp; Awards</h1>
                <Box className="Courseworks-box">
                    <div className="Col">
                        {block1}
                    </div>

                    <div className="Col">
                        {block2}
                    </div>

                    <div className="Col">
                        {block3}
                    </div>
                </Box>
                {/* <Box sx={{ width: "80vw"}}>
                    <Masonry columns={3} spacing={2}>
                        {itemData.map((item, index) => (
                            // <h1>LMAO</h1>
                            // <ReactHoverFlip 
                            //     front={<h1>LMAOOOOO</h1>}
                            //     back={<h1>HEHEHEHEHHEEH</h1>}
                            //     direction="horizontal"
                            //     height="50%"
                            // />
                            <ReactHoverFlip 
                                // key={index}
                                front={<div key={index}>
                                            <Label>{item.title}</Label>
                                            <img
                                                src={`${item.img}?w=162&auto=format`}
                                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                                style={{
                                                    borderBottomLeftRadius: 4,
                                                    borderBottomRightRadius: 4,
                                                    display: 'block',
                                                    width: '100%',
                                                }}
                                            />
                                        </div>}
                                back={<h1>LMAO</h1>}
                                direction="horizontal"
                                // width={100}
                                height="50%"
                            />
                        
                        ))}
                    </Masonry>
                </Box> */}
            </Fade>
        </div>
    );
}