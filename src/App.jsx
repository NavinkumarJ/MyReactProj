import './App.css'

function App(){
  let num=10;
  let str="Test";
  let bool =true;
  let arr= [1,2,3,4,5];
  let obj = {
    id : "123",
    name : "Navin",
    age : 20
  }
  let menu = ['Home' , 'About' , 'Contact'];

  
  return (
    <>
      <p>Number : {num}</p>
      <p>String : {str}</p>
      <p>Bool : {bool.toString()}</p>
      <p>Array : {arr}</p>
      <p>Object : {obj.id}</p>
      <p>Object : {obj.name}</p>
      <p>Object : {obj.age}</p>

      <ul>
      {arr.map((v) => <li>{v}</li>)}
      </ul>
      <ul>
      {menu.map((v) => <li>{v}</li>)}
      </ul>
    </>
  )
}

export default App
