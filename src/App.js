import React ,{Component} from 'react';

import './App.css';

class App extends  Component{
  render()
  {
    const styles = {
      fontSize : 50,
      marginTop: 10,

    };
     
    
    return (
    <div>
    <div className="container-fluid">
            <div className="chessboard ">
         <div className="table-responsive-sm">          
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="white"><i className='fas fa-chess-rook' style={{styles}} ></i></th>
              <th className="black"><i className='fas fa-chess-knight' style={{styles}}></i> </th>
              <th className="white"><i className='fas fa-chess-bishop' style={{styles}}></i></th>
              <th className="black"><i className='fas fa-chess-queen' style={{styles}}></i></th>
              <th className="white"><i className='fas fa-chess-king' style={{styles}}></i></th>
              <th className="black"><i className='fas fa-chess-bishop' style={{styles}}></i></th>

              <th className="white"><i className='fas fa-chess-knight' style={{styles}}></i></th>
              <th className="black"><i className='fas fa-chess-rook' style={{styles}}></i></th>
            
            </tr>
          </thead>
          <tbody>
            <tr>
               <td className="black"><i className='fas fa-chess-pawn' style={{styles}}></i> </td>
              <td className="white"><i className='fas fa-chess-pawn' style={{styles}}></i></td>
              <td className="black"><i className='fas fa-chess-pawn' style={{styles}}></i></td>
              <td className="white"><i className='fas fa-chess-pawn' style={{styles}}></i></td>
              <td className="black"><i className='fas fa-chess-pawn' style={{styles}}></i></td>

              <td className="white"><i className='fas fa-chess-pawn' style={{styles}}></i></td>
              <td className="black"><i className='fas fa-chess-pawn' style={{styles}}></i></td>
              <td className="white"><i className='fas fa-chess-pawn' style={{styles}}></i></td>
            </tr>
            <tr>
              <td className="white"></td>
              <td className="black"></td>
              <td className="white"></td>
              <td className="black"></td>
              <td className="white"></td>
              <td className="black"></td>
              <td className="white"></td>
              <td className="black"></td>
              
            </tr>
            <tr>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
            </tr>
            <tr>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                
              </tr>
              <tr>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
            </tr>
            <tr>
                <td className="white"><i className='fas fa-chess-pawn' style={{styles,  color:'grey'}}></i> </td>
               <td className="black"><i className='fas fa-chess-pawn' style={{styles, color:'grey'}}></i></td>
               <td className="white"><i className='fas fa-chess-pawn' style={{styles, color:'grey'}}></i></td>
               <td className="black"><i className='fas fa-chess-pawn' style={{styles, color:'grey'}}></i></td>
               <td className="white"><i className='fas fa-chess-pawn' style={{styles, color:'grey'}}></i></td>
 
               <td className="black"><i className='fas fa-chess-pawn' style={{styles, color:'grey'}}></i></td>
               <td className="white"><i className='fas fa-chess-pawn' style={{styles, color:'grey'}}></i></td>
               <td className="black"><i className='fas fa-chess-pawn' style={{styles, color:'grey'}}></i></td>
             </tr>
             <tr>
                <th className="black"><i className='fas fa-chess-rook' style={{styles, color:'grey'}}></i></th>
                <th className="white"><i className='fas fa-chess-knight' style={{styles, color:'grey'}}></i> </th>
                <th className="black"><i className='fas fa-chess-bishop' style={{styles, color:'grey'}}></i></th>
                <th className="white"><i className='fas fa-chess-queen' style={{styles, color:'grey'}}></i></th>
                <th className="black"><i className='fas fa-chess-king' style={{styles, color:'grey'}}></i></th>
                <th className="white"><i className='fas fa-chess-bishop' style={{styles, color:'grey'}}></i></th>
  
                <th className="black"><i className='fas fa-chess-knight' style={{styles, color:'grey'}}></i></th>
                <th className="white"><i className='fas fa-chess-rook' style={{styles, color:'grey'}}></i></th>
              
              </tr>
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>
  );}
}

export default App;
