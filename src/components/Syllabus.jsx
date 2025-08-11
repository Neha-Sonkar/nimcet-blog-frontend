import React from 'react'
import './Components.css'
import Logo from '/225325382.png'
import { Link } from 'react-router-dom' 

const Syllabus = () => {
  return (
    <div>
      <img src={Logo} alt="" style={{width:"100%",height:"65vh"}}/>
      <div className='syllabus'>
        <h3 className='text-center'>SYLLABUS FOR NIMCET-2025 TEST </h3>
        <div>
          <h6>MATHEMATICS: (50 QUESTIONS) </h6>
          <p>• Set Theory: Concept of sets – Union, Intersection, Cardinality, Elementary counting;
            permutations and combinations.</p>
          <p>• Probability and Statistics: Basic concepts of probability theory, Averages, Dependent and
            independent events, frequency distributions, measures of central tendencies and
            dispersions.</p>
          <p>• Algebra: Fundamental operations in algebra, expansions, factorization, simultaneous linear
            /quadratic equations, indices, logarithms, arithmetic, geometric and harmonic
            progressions, determinants and matrices.</p>
          <p>• Coordinate Geometry: Rectangular Cartesian coordinates, distance formulae, equation
            of a line, and intersection of lines, pair of straight lines, equations of a circle, parabola,
            ellipse and hyperbola.</p>
          <p>• Calculus: Limit of functions, continuous function, differentiation of function, tangents and
            normals, simple examples of maxima and minima. Integration of functions by parts, by
            substitution and by partial fraction, definite integrals, applications of definite integrals to
            areas.</p>
          <p>• Vectors: Position vector, addition and subtraction of vectors, scalar and vector products
            and their applications to simple geometrical problems and mechanics.</p>
          <p>• Trigonometry: Simple identities, trigonometric equations, properties of triangles, solution of
            triangles, heights and distances, general solutions of trigonometric equations.</p>
        </div>
        <div>
          <h6>ANALYTICAL ABILITY & LOGICAL REASONING: (40 QUESTIONS) </h6>
          <p>• The questions in this section will cover logical situation and questions based on the facts
            given in the passage. </p>
        </div>
        <div>
          <h6>COMPUTER AWARENESS: (20 QUESTIONS) </h6>
          <p>• Computer Basics: Organization of a computer, Central Processing Unit (CPU), structure of
            instructions in CPU, input/output devices, computer memory, and back-up devices.</p>
          <p>• Data Representation: Representation of characters, integers and fractions, binary and
            hexadecimal representations, binary arithmetic: addition, subtraction, multiplication,
            division, simple arithmetic and two’s complement arithmetic, floating point representation
            of numbers, Boolean algebra, truth tables, Venn diagrams </p>
        </div>
        <div className='mb-5'>
          <h6>GENERAL ENGLISH: (10 QUESTIONS) </h6>
          <p>Questions in this section will be designed to test the candidate’s general understanding
            of the English language.
            There will be questions on the following topics:
            Comprehension, vocabulary, Basic English Grammar (like usage of correct forms of verbs,
            prepositions and articles), word power, synonyms and antonyms, meaning of words and
            phrases, technical writing </p>
        </div>
        <Link style={{color: "#ffbb00",marginBottom:"40px"}}>Click here to download the complete NIMCET syllabus in PDF format <i class="fa-solid fa-download"></i></Link>
      </div>
    </div>
  )
}

export default Syllabus
