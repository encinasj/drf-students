
{/*
Los props en React se utilizan para pasar datos de un componente padre a un componente hijo,
lo que permite la reutilización y la comunicación entre ellos. Son como atributos de HTML pero pueden contener cualquier valor de JavaScript,
como cadenas, números, objetos o funciones, y son inmutables dentro del componente que los recibe.
en este caso este archivo es el componente hijo.

*/}
{/*
  Form 1
  const LearnProps = (props) => {
  
    return (
      <>
        <h2>Props</h2>
  
        <h3>Stock name: {props.stock}</h3>
        <h3>Stock price: {props.price}</h3>
      </>
    )
  }
  */}
  {/*Form 2 */}
const LearnProps = ({stock, price}) => {

  return (
    <>
      <h2>Props</h2>

      <h3>Stock name: {stock}</h3>
      <h3>Stock price: {price}</h3>
    </>
  )
}

export default LearnProps